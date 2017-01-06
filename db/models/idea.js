const Sequelize = require('sequelize')
const db = require('APP/db')

const Idea = db.define('ideas', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://www.fillmurray.com/300/300',
  },
  gitHubLink: {
    type: Sequelize.STRING,
  }
})

module.exports = Idea
