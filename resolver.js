const ProjectModel = require('./model/proyectoModel')
const listUsuarios=[
    {
        nombre: 'Andres Martinez',
        identificacion: '123456789',
        estado: 'inactivo',
        email:'andres@gmail.com',
        clave: 'facil',
        perfil: 'estudiante'
    },    
    {
        nombre: 'Ignacio Velasquez',
        identificacion: '987654321',
        estado: 'activo',
        email:'Ignacio@gmail.com',
        clave: 'dificil',
        perfil: 'estudiante'
    },  
    {
        nombre: 'Andrea Jimenez',
        identificacion: '147258369',
        estado: 'activo',
        email:'Andrea@gmail.com',
        perfil: 'lider'
    }, 
]

const resolvers ={
    Query: {
        usuarios:() => listUsuarios,
        usuario:(parent, args, context, info) => listUsuarios.find(user=>identificacion ==args.identificacion),
        proyectos: async()=> await Project.find({})
    }
}

module.exports = resolvers