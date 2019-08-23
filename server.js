const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());

const mockUserData=[
    {name: 'Mark'},
    {name: 'Jill'}
]

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword){
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

// Health Check endpoint
app.get('/', (req, res) => {
    res.json({
        status: 'UP'
    })
})

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'sucessfully got users. Nice!',
        users: mockUserData
    })
})

app.get('/users/:id', (req,res) => {
    console.log(req.params.id)
})

app.listen(8000, () => {
    console.log("server is running")
})