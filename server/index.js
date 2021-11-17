const express = require('express')
const path = require("path")

const app = express()

// gonna need this as boilerplate code for heroku
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Jamming to port ${port}`)
})