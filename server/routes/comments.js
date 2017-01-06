'use strict'

const epilogue = require('../epilogue')
const db = require('APP/db')
const Comments = db.model('comments');

const customCommentRoutes = require('express').Router() 

customCommentRoutes.get('/ideas/:ideaId', (req, res, next) => {
	Comments.findByIdea(req.params.ideaId)
	  .then(response => res.send(response))
	  .catch(next);
});

module.exports = customCommentRoutes

// Epilogue will automatically create standard RESTful routes
const comments = epilogue.resource({
  model: Comments,
  endpoints: ['/comments', '/comments/:id']
})

const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
comments.delete.auth(mustBeLoggedIn)
comments.delete.auth(selfOnly('delete'))
