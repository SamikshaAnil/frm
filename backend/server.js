
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const configureDB = require('./config/db')

configureDB()

const formCltr = require('./App/controllers/Form')

app.use(express.json())
app.use(cors())

app.post('/api/forms/register', formCltr.register)
app.get('/api/forms/getForms', formCltr.getForm)
app.put('/api/forms/updateForm/:id', formCltr.updateForm)
app.delete('/api/forms/deleteForm/:id', formCltr.deleteForm)

app.listen(port, () => {
    console.log(`Form builder is running on port number ${port}`)
})
