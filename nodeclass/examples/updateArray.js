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
   }
]


//tweet from request body
const newTweet = {
  "id": "652",
  "tweet": "Hello",
  "user": "Maria"
}
//this could be also an id from url
const id = newTweet.id
