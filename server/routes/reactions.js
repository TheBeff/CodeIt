'use strict'

const epilogue = require('../epilogue')
const db = require('APP/db')
const Reactions = db.model('reactions');

const customReactionRoutes = require('express').Router() 

customReactionRoutes.get('/ideas/:ideaId', (req, res, next) => {
	Reactions.findByIdea(req.params.ideaId)
	  .then(response => res.send(response))
	  .catch(next);
});

module.exports = customReactionRoutes

// Epilogue will automatically create standard RESTful routes
const reactions = epilogue.resource({
  model: Reactions,
  endpoints: ['/reactions', '/reactions/:id']
})

