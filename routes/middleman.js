// router.post('/', async (req, res) => {
//   try {
//     const { message, history } = req.body;
//     const { topic } = req.body; // <-- Expect a topic from frontend

//     if (!process.env.OPENAI_API_KEY) {
//       console.error('OpenAI API key is missing');
//       return res.status(500).json({ error: 'Server configuration error' });
//     }

//     if (!topic) {
//       return res.status(400).json({ error: 'Topic is required' });
//     }
//     console.log("Received body:", req.body);

//     const systemPrompt = `
//       You are a quiz generator. Your task is to generate a multiple-choice quiz question based on the topic provided.
//       The quiz question must have four distinct options, and one of them must be the correct answer.

//       Please respond ONLY in this exact JSON format, without any additional explanation:

//       {
//         "question": "Question here?",
//         "options": ["Option1", "Option2", "Option3", "Option4"],
//         "answerIndex": 0
//       }

//       The options should be distinct and should not repeat. Do not include explanations, additional content, or anything outside the requested JSON format.
//       The topic for the quiz question is: ${topic}
//     `;

//     // Process the message and generate a response
//     const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//       model: 'gpt-3.5-turbo',
//       messages: [
//         { role: 'system', content: `Give me a quiz question about ${topic}`},
//         ...(history || []).map(msg => ({
//           role: msg.sender === 'user' ? 'user' : 'assistant',
//           content: msg.text
//         })),
//         { role: 'user', content: systemPrompt }
//       ],
//       temperature: 0.3,
//       max_tokens: 300
//     }, {
//       headers: {
//         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     });

//     res.json({
//       response: response.data.choices[0].message.content,
//       status: 'success'
//     });
//   } catch (error) {
//     console.error('Chat endpoint error:', error);
//     res.status(500).json({
//       error: 'Failed to process chat message',
//       details: error.message,
//       status: 'error'
//     });
//   }
// });