const mongoose = require('mongoose')
const { Schema, model } = mongoose

const FieldSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

const FormSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    fields: {
        type: [FieldSchema],
        required: true
    }
})

const Form = model('Form', FormSchema)
module.exports = Form
