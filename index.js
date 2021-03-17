const express = require('express')
const app = express()
const port = 300

const mongoose = require('mongoose')
mongoose.connect(
    'mongodb+srv://jjeong:newzeon@boilerplate.iui39.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    }
)
.then(() => console.log('MongoDB Connected...'))
.catch(error => console.log(error))



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listeing on port ${port}!`))