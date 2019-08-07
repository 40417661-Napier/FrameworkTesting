'use strict';
const snoowrap = require('snoowrap');
const fs = require('fs');

// Create a new snoowrap requester with OAuth credentials.
// For more information on getting credentials, see here: https://github.com/not-an-aardvark/reddit-oauth-helper
const r = new snoowrap({
  userAgent: 'randomAgent',
  clientId: 'hF4ZoyuEObzKQA',
  clientSecret: 'DOQYnj2yll_22l89HfI6tGeY7Dc',
  refreshToken: '338588813454-IsHjMnLO8Wna3CgETgoS9L6_P30'
});

// Alternatively, just pass in a username and password for script-type apps.
// const otherRequester = new snoowrap({
//   userAgent: 'put your user-agent string here',
//   clientId: 'put your client id here',
//   clientSecret: 'put your client secret here',
//   username: 'put your username here',
//   password: 'put your password here'
// });

// Printing a list of the titles on the front page
// r.getHot().map(post => post.title).then(console.log);

// Extracting every comment on a thread
// r.getSubmission('cn51lu').expandReplies({limit: 5, depth: 5}).then(console.log)

r.getSubmission('cn51lu').expandReplies({limit: 1}).then(console.log)



// r.getSubreddit('gifs').submitLink({
//     title: 'Mt. Cameramanjaro',
//     url: 'https://i.imgur.com/n5iOc72.gifv'
//   });

  