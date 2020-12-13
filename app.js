const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const app = express();


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kensaku:kensaku0501@cluster0.7vj52.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('db connected')
  client.close();
});

app.get('/rentals', function(req, res) {
    res.json({'success': true});
  });
  

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log('I am runnnig');
});