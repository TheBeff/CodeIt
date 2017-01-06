'use strict'

const epilogue = require('../epilogue')
const db = require('APP/db')
const Tags = db.model('tags')

const customTagsRoutes = require('express').Router()

// Custom routes go here.

module.exports = customTagsRoutes

customTagsRoutes.get('/:id/ideas/', (req,res,next) => {
  Tags.findByIdea(req.params.id)
  .then(ideas => res.json(ideas))
  res.json
})

// Epilogue will automatically create standard RESTful routes
const tags = epilogue.resource({
  model: db.model('tags'),
  endpoints: ['/tags', '/tags/:id']
})

// const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
// tags.delete.auth(mustBeLoggedIn)
// tags.delete.auth(selfOnly('delete'))
// tags.list.auth(forbidden('cannot list tags'))
// tags.read.auth(mustBeLoggedIn)
