
// const express = require('express');
// const router = express.Router();
// const axios = require('axios');

// router.get('/', async (req, res) => {
//   try {
//     console.log('Using API Key:', process.env.OPENAI_API_KEY.substring(0, 10) + '...');
    
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-3.5-turbo",
//         messages: [
//           { 
//             role: "system",
//             content: `You are a JavaScript Quiz Bot for interview practice.
//           - You only ask JavaScript multiple-choice or short-answer questions. Format it as: 'Question: [question]' followed by 'Options: [4 options]' and 'Answer: [correct answer]'.
//           - If the user answers, you should evaluate if it's correct, give a brief explanation, and ask the next question.
//           - If the user asks you non-JavaScript questions, you must say: "Sorry, I only do JavaScript quiz training. Let's continue practicing!"`
//           }
//         ],
//       },
//       {
//         headers: {
//           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//       }
//     );
//     res.json({ question: response.data.choices[0].message.content });
//   } catch (error) {
//     console.error('Quiz API Error:', {
//       message: error.message,
//       response: error.response?.data,
//       status: error.response?.status
//     });
//     res.status(500).json({ 
//       error: 'Failed to generate quiz question', 
//       details: error.response?.data || error.message
//     });
//   }
// });

// module.exports = router; 