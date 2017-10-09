'use strict'

//tweets from file
let tweets = [
  {
    "id": "456",
    "tweet": "I like dragons",
    "user": "johnsnow"
   },
   {
     "id": "652",
     "tweet": "I am the dragon mother",
     "user": "whitehairlady"
   },
   {
     "id": "653",
     "tweet": "I like dragons",
     "user": "johnsnow"
    },
]

//tweet from request body
const newTweet = {
  "id": "652",
  "tweet": "Hello",
  "user": "Maria"
}
//this could be also an id from url
const id = newTweet.id

const findTweetById = (id, tweets) => {
  return tweets.find(tweet => tweet.id === id)
}
console.log(findTweetById('653', tweets))


const deleteTweetById = (id, tweets) => {
  return tweets.filter(tweet => tweet.id !== id)
}

const updateTweets = (tweet, tweets) => {
  const oldTweet = findTweetById(id, tweets)
  Object.assign(oldTweet, newTweet);
  return tweets
}

//this will change the old tweet in tweets
tweets = updateTweets(newTweet, tweets)
console.log({tweets});
// output
//[ { id: '456', tweet: 'I like dragons', user: 'johnsnow' },
//  { id: '652', tweet: 'Hello', user: 'Maria' } ]

tweets = deleteTweetById(id, tweets)
console.log({tweets})
