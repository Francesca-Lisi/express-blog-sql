const index = (req, res) => {
  res.send('Elenco post')
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