const express = require('express')
const path = require('path')
const port = 80
const app = express()

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,"views"))


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.render('index.pug', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port,()=>{
    console.log('server started successfully')
})
