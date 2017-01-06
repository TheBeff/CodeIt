const Sequelize = require('sequelize')
const db = require('APP/db')
const Idea = db.model('ideas')

const Reaction = db.define('reactions', {
  name: {
    type: Sequelize.ENUM('great', 'meh', 'star')
  }
},
{
  classMethods: {
    findByIdea: function(ideaId) {
      return Reaction.findAll({
        where: {
         idea_id: ideaId
        }
      })
    },
  }
})

module.exports = Reaction
