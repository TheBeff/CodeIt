'use strict'

const epilogue = require('../epilogue')
const db = require('APP/db')
const Reactions = db.model('reactions');

const customReactionRoutes = require('express').Router() 

customReactionRoutes.get('/ideas/:ideaId', (req, res, next) => {
	Reactions.findByIdea(req.params.ideaId)
	  .then(response => {
	  	const reactionCount = response.reduce((prev, cur) => {
	  	  if (cur.name === "meh") {
	  	    prev.meh++
	  	    return prev
	  	  }
	  	  else if (cur.name === "great") {
	  	    prev.great++
	  	    return prev
	  	  }
	  	  else if (cur.name === "star") {
	  	    prev.star++
	  	    return prev
	  	  }
	  	}
	  	,{meh: 0, great: 0, star:0});
	  	res.send(reactionCount)})
	  .catch(next);
});

module.exports = customReactionRoutes

// Epilogue will automatically create standard RESTful routes
const reactions = epilogue.resource({
  model: Reactions,
  endpoints: ['/reactions', '/reactions/:id']
})

