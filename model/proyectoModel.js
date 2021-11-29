const {Schema, model} = require('mongoose')

const projects = new Schema ({

    nombre: {
        type: String,
        required: true

    },

    lider: String,
    facultad: String,
    fechaInicio: {
        type: Date,
        default: new Date ()

    },
    activo: {
        type: Boolean,
        default: true
    }    
})

module.exports = model ('proyectos', projects)
