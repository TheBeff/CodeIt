'use strict'

const epilogue = require('../epilogue')
const db = require('APP/db')
const Users = db.model('users')

const customUserRoutes = require('express').Router()

// Custom routes go here.

module.exports = customUserRoutes

customUserRoutes.get('/:id/ideas/', (req,res,next) => {
  Users.findByIdeas(req.params.id)
  .then(ideas => res.json(ideas))
  res.json
})

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: Users,
  endpoints: ['/users', '/users/:id']
})

const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
users.delete.auth(mustBeLoggedIn)
users.delete.auth(selfOnly('delete'))
users.list.auth(forbidden('cannot list users'))
users.read.auth(mustBeLoggedIn)
