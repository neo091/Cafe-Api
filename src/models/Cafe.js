const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    icon: String,
    name: {
        type: String,
        require: true,
        minLength: 5,
        trim: true,
        unique: true
    },
    type: {
        type: String,
        default: 'cafe',
        require: true,
        trim: true
    },
    description: {
        type: String,
        default: 'cafe',
        require: true,
        minLength: 5,
        trim: true
    }
})

schema.set('toJSON', {
    transform: (_, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Cafe = mongoose.model("Cafe", schema)

module.exports = Cafe