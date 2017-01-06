const Sequelize = require('sequelize')
const db = require('APP/db')

const Tag = db.define('tags', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    set: function(value) {
      this.setDataValue('name', value.toLowerCase())
    }
  }
})

module.exports = Tag
