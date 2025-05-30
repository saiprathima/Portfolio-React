const config = {
  apiUrl: process.env.NODE_ENV === 'production' 
    ? 'https://prathimaportfolio.vercel.app/api'
    : 'http://localhost:8000/api'
};

export default config; 