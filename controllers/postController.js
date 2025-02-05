//import connessione al database
const connection = require('../data/db')

const index = (req, res) => {
  const sql = 'SELECT * FROM posts';
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Query al database fallita' })
    res.json(results)
  })
}

const show = (req, res) => {
  const id = req.params.id;
  res.send(`Dettaglio post ${id}`);
}

const store = (req, res) => {
  res.send('Creazione post')
}

const update = (req, res) => {
  const id = req.params.id;
  res.send(`Modifica post con id ${id}`);
}

const modify = (req, res) => {
  const id = req.params.id;
  res.send(`Modifica post con id ${id}`);
}

const destroy = (req, res) => {
  const id = req.params.id;
  res.send(`Elimina post con id ${id}`)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}