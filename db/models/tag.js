const Sequelize = require('sequelize')
const db = require('APP/db')

const Tag = db.define('tags', {
  tags: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      // page.tags = 'programming,coding,javascript'
      set: function (value) {

          var arrayOfTags;

          if (typeof value === 'string') {
              arrayOfTags = value.split(',').map(function (s) {
                  return s.trim();
              });
              this.setDataValue('tags', arrayOfTags);
          } else {
              this.setDataValue('tags', value);
          }

      }
  }
})

module.exports = Tag
