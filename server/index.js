const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb')

const app = express()
app.use(cors())
app.use(express.json())

const client = new MongoClient('mongodb+srv://Admin:Admin@mohan.mtjj61n.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('Student')
const col = db.collection('register')
col.insertOne({'student':"345"})

app.post('/register', (req, res) =>{
    col.insertOne(req.body)
    console.log(req.body)
    res.send("data inserted successfully")
})

app.get('/retrieve', async(req , res) =>{
   const result =col.find().toArray()
   console.log(result)
   res.send(result)
})

app.get('/', (req, res)=>{
    res.send('<h1><center>Hello Mohan </center></h1>')
})

app.get('/about', (req,res)=>{
    res.send('<h2><center>Hi! This is About page</center></h2>')
})

app.get('/contact', (req,res)=>{
    res.send('<h3><center>This is Contact Page</center></h3>')
})

app.post('/home', (req,res)=>{
    res.send('<h3><center>This is Home Page</center></h3>')
})

app.listen(8080, ()=>{console.log('Express server is running ')})