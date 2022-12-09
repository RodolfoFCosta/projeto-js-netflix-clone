const express = require('express')
const app = express()
const path = require('path')

let initialPath = path.join(__dirname, "public")

app.use(express.static(initialPath))

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"))
})


app.listen(3000, () => {
    console.log('Servidor On port 3000')
})