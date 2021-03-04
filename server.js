const express = require('express')
const setupMongo = require('./setupMongo')

setupMongo()
const app = express()

app.use(express.json()) // add middleware for json data
app.use('/api/users', require('./routes/users'))
app.use('/api/cards', require('./routes/cards'))
app.use(require('./routes/error'))

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})

/* vor Mongo DB 
app.get('/api/users/:id', (req, res) => {
    const { id } = req.params
    res.json(users.find(user => user.id === id))
  }) */

/* vor Mongo DB
app.get('/api/users/:id', (req, res) => {
    const { id } = req.params
    res.json(users.find(user => user.id === id))
  }) */

/* vor Mongo DB 
app.post('/api/users', (req, res) => {
  const newUser = { ...req.body, id: v4() }
  users.push(newUser)
  res.json(newUser)
}) */

/* app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params
  const index = users.findIndex(user => user.id === id)
  users = [...users.slice(0, index), ...users.slice(index + 1)]
  res.json(users)
}) */

// Alternative: filter
