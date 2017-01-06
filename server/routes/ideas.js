'use strict'

const epilogue = require('../epilogue')
const db = require('APP/db')
const Ideas = db.model('ideas')
const Users = db.model('users')
const Comments = db.model('comments')

const customIdeasRoutes = require('express').Router()

// Custom routes go here.

module.exports = customIdeasRoutes


// Epilogue will automatically create standard RESTful routes
const ideas = epilogue.resource({
  model: Ideas,
  endpoints: ['/ideas', '/ideas/:id'],
  include: [{
    model: Users},{

    model: Comments
    }
  ]
})

// const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
// ideas.delete.auth(mustBeLoggedIn)
// ideas.delete.auth(selfOnly('delete'))
// ideas.list.auth(forbidden('cannot list ideas'))
// ideas.read.auth(mustBeLoggedIn)
