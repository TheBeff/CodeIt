const Sequelize = require('sequelize')
const db = require('APP/db')

const Comment = db.define('comments', {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Comment
