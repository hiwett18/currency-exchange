const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ 
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
 }));

// Proxy route
app.get('/https://v6.exchangerate-api.com/v6/', async (req, res) => {
    const API_KEY = process.env.REACTAPIKEY;
    console.log("here is the api key: ", REACTAPIKEY)
    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching exchange rate');
    }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
