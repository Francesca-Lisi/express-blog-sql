const express = require('express')
const app = express();
const port = 3000;

//import middleware
const errorsHandler = require('./middlewares/errorsHandler')
const notFound = require('./middlewares/notFound')

//importo il router
const postsRouter = require('./routes/posts')

//middleware asset statici
app.use(express.static('public'))

//middleware parsing del body
app.use(express.json())

//prima rotta
app.get('/', (req, res) => {
  res.send('Server Blog')
})

//rotta dei post
app.use('/posts', postsRouter)


//middleware gestione errori
app.use(errorsHandler)

//middleware gestione 404
app.use(notFound)

//mettere la porta in ascolto
app.listen(port, () => {
  console.log(`Sono in ascolto sulla porta ${port}`)
})