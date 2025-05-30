import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';

dotenv.config();
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message, askedQuestions = [] } = req.body;
    console.log('Received quiz request:', { 
      topic: message,
      askedQuestionsCount: askedQuestions.length,
      body: req.body,
      questionNumber: askedQuestions.length + 1 // Log the current question number
    });

    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is missing');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    if (!message) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    // Check if we've reached the maximum number of questions
    if (askedQuestions.length >= 5) {
      console.log('Maximum number of questions reached');
      return res.status(400).json({ error: 'Maximum number of questions reached' });
    }

    const systemPrompt = `
      You are a quiz generator. Generate a multiple-choice question about ${message}.
      The question must have exactly 4 options, with one correct answer.
      Format your response as a JSON object with this exact structure:
      {
        "question": "Your question here?",
        "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
        "answerIndex": 0,
        "explanation": "A brief explanation of why the correct answer is right and why others are wrong"
      }
      The answerIndex should be 0-3, indicating which option is correct.
      Make the question challenging but fair, and ensure all options are plausible.
      Provide a clear explanation that helps the user understand the concept better.
      
      IMPORTANT: Do not generate any of these questions that have already been asked:
      ${askedQuestions.join('\n')}
      
      Generate a completely new and unique question that hasn't been asked before.
    `;

    console.log('Sending request to OpenAI with prompt:', systemPrompt);
    
    const openAIRequest = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Generate a unique quiz question about ${message} that hasn't been asked before.` }
      ],
      temperature: 0.7,
      max_tokens: 500
    };

    console.log('OpenAI request configuration:', {
      model: openAIRequest.model,
      temperature: openAIRequest.temperature,
      max_tokens: openAIRequest.max_tokens,
      messagesCount: openAIRequest.messages.length
    });

    let questionData;
    let retries = 0;
    const maxRetries = 3;
    const stringSimilarity = (a, b) => {
      if (!a || !b) return 0;
      a = a.toLowerCase();
      b = b.toLowerCase();
      if (a === b) return 1;
      const minLen = Math.min(a.length, b.length);
      let same = 0;
      for (let i = 0; i < minLen; i++) {
        if (a[i] === b[i]) same++;
      }
      return same / Math.max(a.length, b.length);
    };
    let isRepeat = false;
    do {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        openAIRequest,
        {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        }
      );

      console.log('OpenAI response received:', {
        status: response.status,
        hasChoices: !!response.data.choices,
        choicesLength: response.data.choices?.length,
        content: response.data.choices?.[0]?.message?.content
      });

      if (!response.data.choices || !response.data.choices[0]) {
        throw new Error('Invalid response from OpenAI');
      }

      const content = response.data.choices[0].message.content;
      try {
        questionData = JSON.parse(content);
        console.log('Parsed question data:', {
          question: questionData.question,
          options: questionData.options,
          answerIndex: questionData.answerIndex,
          hasExplanation: !!questionData.explanation,
          explanation: questionData.explanation
        });
      } catch (error) {
        console.error('Failed to parse OpenAI response:', {
          content,
          error: error.message
        });
        throw new Error('Invalid response format from OpenAI');
      }

      // Check for repeats using similarity
      isRepeat = askedQuestions.some(q => stringSimilarity(q, questionData.question) > 0.8);
      retries++;
    } while (isRepeat && retries < maxRetries);
    if (isRepeat) {
      throw new Error('Generated question was too similar to previous questions after several attempts');
    }

    if (!questionData.question || !Array.isArray(questionData.options) || questionData.options.length !== 4 || !questionData.explanation) {
      console.error('Invalid question format:', questionData);
      throw new Error('Invalid question format');
    }

    if (askedQuestions.includes(questionData.question)) {
      console.error('Question already asked:', questionData.question);
      throw new Error('Generated question was already asked');
    }

    res.json(questionData);
  } catch (error) {
    console.error('Quiz endpoint error:', {
      name: error.name,
      message: error.message,
      response: {
        data: error.response?.data,
        status: error.response?.status,
        statusText: error.response?.statusText,
        headers: error.response?.headers
      },
      config: {
        url: error.config?.url,
        method: error.config?.method,
        headers: error.config?.headers
      },
      stack: error.stack
    });
    
    res.status(500).json({ 
      error: 'Failed to generate quiz question',
      details: error.response?.data?.error?.message || error.message,
      status: 'error'
    });
  }
});

export default router;