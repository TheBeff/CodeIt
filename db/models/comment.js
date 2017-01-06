const Sequelize = require('sequelize')
const db = require('APP/db')
const Idea = db.model('ideas')

const Comment = db.define('comments', {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  }
},
{
  getterMethods: {
    commentThread: function() {
      return Comments.findAll({
        where: {
          reply_to_id: this.id
        }
      })
    }
  },
  classMethods: {
    findByIdea: function(ideaId) {
      return Idea.findAll({
        where: {
         id: ideaId
        }
      })
    },
    getReplies: function(commentId) {
      return Comments.findAll({
        where: {
          reply_to_id: commentId
        }
      })
    }
  }
})

module.exports = Comment
