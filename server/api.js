'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api.use('/users', require('./routes/users'))
api.use('/tags', require('./routes/users'))
api.use('/comments', require('./routes/users'))
api.use('/reactions', require('./routes/users'))
api.use('/ideas', require('./routes/users'))

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
