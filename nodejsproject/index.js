const express= require('express');
const app = express();  
const path = require('path');
const PORT = process.env.PORT || 3000;  

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});