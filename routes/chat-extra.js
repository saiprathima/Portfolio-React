

// const express = require('express');
// const router = express.Router();
// const axios = require('axios');

// router.post('/', async (req, res) => {
//   try {
//     const { message, history } = req.body;
    
//     // Log request details
//     console.log('Received chat request:', {
//       message,
//       historyLength: history?.length || 0
//     });

//     // Validate API key
//     if (!process.env.OPENAI_API_KEY) {
//       console.error('OpenAI API key is missing');
//       return res.status(500).json({ 
//         error: 'Server configuration error',
//         details: 'API key is not configured'
//       });
//     }

//     // Log API key presence (safely)
//     console.log('API Key status:', {
//       present: !!process.env.OPENAI_API_KEY,
//       length: process.env.OPENAI_API_KEY.length,
//       prefix: process.env.OPENAI_API_KEY.substring(0, 3)
//     });

//     if (!message) {
//       return res.status(400).json({ error: 'Message is required' });
//     }

//     console.log('Sending request to OpenAI...');
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-3.5-turbo",
//         messages: [
//           { role: "system", content: "You are a helpful portfolio assistant." },
//           ...(history || []).map(msg => ({
//             role: msg.sender === "user" ? "user" : "assistant",
//             content: msg.text
//           })),
//           { role: "user", content: message }
//         ],
//         temperature: 0.7,
//         max_tokens: 1000
//       },
//       {
//         headers: {
//           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//       }
//     );

//     console.log('OpenAI response received:', {
//       status: response.status,
//       hasChoices: !!response.data.choices,
//       choicesLength: response.data.choices?.length
//     });

//     if (!response.data.choices || !response.data.choices[0]) {
//       throw new Error('Invalid response from OpenAI');
//     }

//     // Always send a properly formatted JSON response
//     res.json({ 
//       response: response.data.choices[0].message.content,
//       status: 'success'
//     });
//   } catch (error) {
//     // Enhanced error logging
//     console.error('Chat endpoint error:', {
//       name: error.name,
//       message: error.message,
//       response: {
//         data: error.response?.data,
//         status: error.response?.status,
//         statusText: error.response?.statusText,
//         headers: error.response?.headers
//       },
//       config: {
//         url: error.config?.url,
//         method: error.config?.method,
//         headers: error.config?.headers
//       },
//       stack: error.stack
//     });
    
//     // Always send a properly formatted JSON response
//     res.status(500).json({ 
//       error: 'Failed to process chat message',
//       details: error.response?.data?.error?.message || error.message,
//       status: 'error'
//     });
//   }
// });

// module.exports = router; 