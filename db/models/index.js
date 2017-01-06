'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const Ideas = require('./idea')
const User = require('./user')
const Comments = require('./comment')
const Reactions = require('./reaction')
const Tags = require('./tag')


User.hasMany(Ideas)
User.hasMany(Comments)
User.hasMany(Reactions)

Reactions.belongsTo(Ideas)
Reactions.belongsTo(User)

Tags.belongsToMany(Ideas, { through: "TagsIdeas"} )

Ideas.hasMany(Tags)
Ideas.belongsTo(User)
Ideas.hasMany(Comments)
Ideas.hasMany(Reactions)

Comments.belongsTo(User)
Comments.belongsTo(Ideas)
Comments.belongsTo(Comments, { as: 'ReplyTo' })


module.exports = {User}
