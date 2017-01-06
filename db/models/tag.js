const Sequelize = require('sequelize')
const db = require('APP/db')
const Idea = db.model('ideas')

const Tag = db.define('tags', {
    name: {
      type: Sequelize.STRING,
      unique: true,
      set: function(value) {
        this.setDataValue('name', value.toLowerCase())
      }
    },
  },
  {
    classMethods: {
      findByIdea: function(ideaId) {
        return Idea.findAll({
          where: {
           id: ideaId
          }
        })
      },
    }
  })

module.exports = Tag
