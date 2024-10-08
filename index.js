const express = require('express')
const app = express()


require('dotenv').config()

const port = process.env.PORT


const contactsRouter = require('./src/routes/contactsRouter')

//Rutas de contactos
app.use('/contactos', contactsRouter)
//rutas de adress

app.listen(port, ()=> {
  console.log(`example app listening on port ${port}`)
})