'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Reactions = require('./reaction')
const Tags = require('./tag')
const Ideas = require('./idea')
const Comments = require('./comment')

User.hasMany(Ideas)
User.hasMany(Comments)
User.hasMany(Reactions)

Reactions.belongsTo(Ideas)
Reactions.belongsTo(User)

Tags.belongsTo(Ideas)

Ideas.hasMany(Tags)
Ideas.belongsTo(User)
Ideas.hasMany(Comments)
Ideas.hasMany(Reactions)

Comments.belongsTo(User)
Comments.belongsTo(Ideas)
Comments.belongsTo(Comments, { as: 'ReplyTo' })


module.exports = {User}
