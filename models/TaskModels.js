const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
        maxlength: [20, 'name can not be moren than 20 characters']
    }, 
    compeleted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('TaskModels', TaskSchema)