const mongodb = require('mongodb')

//CRUD create read update delete

const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        console.log('Unable to connect to database')
    }
    else{
       const db = client.db(databaseName)
       db.collection('users').insertOne({
           name: 'Suemy',
           age: 22
       })
    }
})