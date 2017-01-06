const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedIdeas = () => db.Promise.map([
  {
    title: "Git-Together",
    description: "Collaborative Git Stuff",
    imageUrl: 'https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png',
    gitHubLink: 'https://github.com/Git-Together/GitTogether',
    user_id: 1
  },
  {
    title: "Moby-Click",
    description: "The whale watching app you never knew you needed",
    imageUrl: 'https://mobyclick.herokuapp.com/images/logo.png',
    gitHubLink: 'https://github.com/Git-Together/GitTogether',
    user_id: 2
  }
], idea => db.model('ideas').create(idea))

const seedTags = () => db.Promise.map([
  { name: '3js' }, { name: 'node' }, { name: 'REACT' }, { name: 'git' }, { name: 'fun' }
], tag => db.model('tags').create(tag))

const seedTagsIdeas = () => db.Promise.map([
  { tag_id: 1, idea_id: 1 },
  { tag_id: 2, idea_id: 1 },
  { tag_id: 4, idea_id: 2 },
  { tag_id: 5, idea_id: 2 },
  { tag_id: 3, idea_id: 1 },
  { tag_id: 2, idea_id: 2 },
], tagIdea => db.model('TagsIdeas').create(tagIdea))

const seedComment = () => db.Promise.map([
  {
    text: 'OMG I LOVE WHALES',
    user_id: 1,
    idea_id: 2
  },
  {
    text: 'OMG I HATE WHALES',
    user_id: 2,
    idea_id: 2
  },
  {
    text: 'THIS IS GREAT',
    user_id: 1,
    idea_id: 1
  },
  {
    text: 'BOOO',
    user_id: 2,
    idea_id: 1
  },
  {
    text: 'SHUTUP',
    user_id: 2,
    reply_to_id: 2,
  },
  {
    text: 'THIS IS GREAT THANKS',
    user_id: 2,
    reply_to_id: 3,
  },
  {
    text: 'NO PROBLEM',
    user_id: 2,
    reply_to_id: 6,
  },
], comment => db.model('comments').create(comment))

const seedReactions = () => db.Promise.map([
  { name: 'meh', user_id: 1, idea_id: 1 },
  { name: 'meh', user_id: 2, idea_id: 2 },
  { name: 'great', user_id: 1, idea_id: 1 },
  { name: 'great', user_id: 2, idea_id: 2 },
  { name: 'star', user_id: 1, idea_id: 1 },
  { name: 'star', user_id: 2, idea_id: 2 },

], reaction => db.model('reactions').create(reaction))


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedIdeas)
  .then(ideas => console.log(`Seeded ${ideas.length} ideas OK`))
  .then(seedTags)
  .then(tags => console.log(`Seeded ${tags.length} tags OK`))
  .then(seedTagsIdeas)
  .then(tagsIdeas => console.log(`Seeded ${tagsIdeas.length} tagsIdeas OK`))
  .then(seedReactions)
  .then(reactions => console.log(`Seeded ${reactions.length} reactions OK`))
  .then(seedComment)
  .then(comment => console.log(`Seeded ${comment.length} comment OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
