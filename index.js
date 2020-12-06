const express = require('express');
const app = express();
const PORT = 4000;

const handleListening = () => {
  console.log('server started');
  console.log(`Listening on port: ${PORT}`);
}

const handleHome = (req, res) => {
  res.send('Hello Express app! : home');
}

const handleProfile = (req, res) => {
  res.send('Hello Express app! : profile');
}

app.get('/', handleHome);
app.get('/profile', handleProfile);

app.listen(PORT, handleListening);