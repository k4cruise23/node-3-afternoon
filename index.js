require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./products_controller')

const app = express()

app.use(express.json())

app.get('/api/product', ctrl.getAll)
app.get('/api/product/:id', ctrl.getOne)
app.put('/api/product/:id', ctrl.update)
app.post('/api/product', ctrl.create)
app.delete('/api/product/:id', ctrl.delete)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} happy peeps`))
}).catch(err => console.log(err))

