'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api.use('/users', require('./routes/users'))
api.use('/tags', require('./routes/tags'))
api.use('/comments', require('./routes/comments'))
api.use('/reactions', require('./routes/reactions'))
api.use('/ideas', require('./routes/ideas'))

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
