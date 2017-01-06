const Sequelize = require('sequelize')
const db = require('APP/db')

const Reaction = db.define('reactions', {
  name: {
    type: Sequelize.ENUM('great', 'meh', 'star')
  }
})

module.exports = Reaction
