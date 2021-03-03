const { v4: v4 } = require('uuid')
const express = require('express')
const app = express()

let users = []

app.use(express.json()) // add middleware für json data / oben

app.get('/api/users', (req, res) => {
  res.json(users)
})

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params
  res.json(users.find(user => user.id === id))
})

app.post('/api/users', (req, res) => {
  const newUser = { ...req.body, id: v4() }
  users.push(newUser)
  res.json(newUser)
})

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params
  const index = users.findIndex(user => user.id === id)
  users = [...users.slice(0, index), ...users.slice(index + 1)]
  res.json(users)
})

// Alternative: filter

app.get('/api/cards', (req, res) => {
  res.json([{ title: 'First card' }])
})

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})

/*

Version 1
app.use((req, res) => {
    console.log(req.method, req.url)
    res.end('Hello world')
    }) */
