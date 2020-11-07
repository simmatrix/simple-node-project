const express = require('express')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, '/assets'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('bible');
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))