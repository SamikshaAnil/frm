
const Form = require('../models/Form')

const formCltr = {}

formCltr.register = async (req, res) => {
    try {
        const form = new Form(req.body)
        await form.save()
        res.status(200).json({ message: 'Form saved successfully!' })
    } catch (error) {
        console.error('Error saving form:', error)
        res.status(500).json({ message: 'Failed to save form. Please try again.', error })
    }
}

formCltr.getForm = async (req, res) => {
    try {
        const forms = await Form.find()
        res.json(forms)
    } catch (error) {
        console.log(error)
        res.status(500).json({ errors: "Internal Server Error" })
    }
}

formCltr.updateForm = async (req, res) => {
    try {
        const { id } = req.params
        const updatedForm = await Form.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updatedForm)
    } catch (error) {
        console.error('Error updating form:', error)
        res.status(500).json({ message: 'Failed to update form. Please try again.', error })
    }
}

formCltr.deleteForm = async (req, res) => {
    try {
        const { id } = req.params
        await Form.findByIdAndDelete(id)
        res.status(200).json({ message: 'Form deleted successfully!' })
    } catch (error) {
        console.error('Error deleting form:', error)
        res.status(500).json({ message: 'Failed to delete form. Please try again.', error })
    }
}

module.exports = formCltr
