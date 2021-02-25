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
       }, (error, result)=> {
            if(error){
                return console.log('Unable to insert user')
            }
            console.log(result.ops)
       })
       db.collection('users').insertMany([{
            name: 'Jen',
            age: 28
       },
       {
            name: 'Gunther',
            age: 27
       }], (error, result)=>{
            if(error){
                return console.log('Unable to insert users')
            }
            console.log(result.ops)
       })
    }
})



/*
Goal: Insert 3 tasks into a new tasks collection

1. User insertMany to insert the documents
    - description (string), completed (boolean)
2. Setup the callback to handle error or print ops
3. Run the script
4. Refresh the database in Robo 3t and view data in tasks collection
*/

MongoClient.connect(connectionURL, {useNewParser: true}, (error, client)=>{
    if(error){
        console.log('unable to connect')
    }
    else{
        const db = client.db(databaseName)
        db.collection('tasks').insertMany([
            { description: 'Do the dishes', completed: false},
            { description: 'Study Analysis of Algorithm', completed: false},
            { description: 'Go to the gym', completed: true }], 
            (error, result)=>{
                if(error){
                    console.log('Unable to insert tasks')
                }
                else{
                    console.log(result.ops)
                }
            })
    }
})