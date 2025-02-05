const express = require('express')
const app = express();
const port = 3000;

app.use(express.static('public')) //middleware asset statici

app.use(express.json())//middleware parsing del body

//prima rotta
app.get('/', (req, res) => {
  res.send('Server Blog')
})

//mettere la porta in ascolto
app.listen(port, () => {
  console.log(`Sono in ascolto sulla porta ${port}`)
})