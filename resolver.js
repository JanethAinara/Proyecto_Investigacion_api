const Proyecto = require('./model/proyectoModel')
const User = require('./model/usuarioModel')
var aes256 = require('aes256');

const listUsuarios=[
    {
        nombre_completo: 'Janeth Escobar Gonzalez',
        identificacion: '66782337',
        email:'janethave@gmail.com',
        tipo_usuario: 'Lider',
        estado: 'Autorizado'
    },    
    {
        nombre_completo: 'Ignacio Velasquez',
        identificacion: '66782336',
        email:'Ignacio@gmail.com',
        tipo_usuario: 'Estudiante',
        estado: 'No autorizado'
    },  
    {
        nombre: 'Andrea Jimenez',
        identificacion: '16621458',
        email:'Andrea@gmail.com',
        tipo_usuario: 'Estudiante',
        estado: 'Pendiente'
    }, 
]
const key = 'CLAVE DIFICIL';

const resolvers ={
    Query: {
        usuarios:() => listUsuarios,
        usuario: (parent, args, context, info) =>listUsuarios.find(user=>user.identificacion ==args.identification),
        proyectos: async()=> await Proyecto.find({}),
        getProyecto: async(parent, args, context, info) => await Proyecto.findOne({nombre:args.nombre})
    },

    Mutation: {
        createUser: (parent, args, contex, info)=>{
            const { clave } = args.user;
            const nuevoUsuario = new User(args.user);
            //const buffer = Buffer.from(plaintext);
            const encryptedPlainText = aes256.encrypt(key, clave);
            nuevoUsuario.clave = encryptedPlainText
            return nuevoUsuario.save()
            .then(u => "Usuario ha sido creado.")
            .catch(err => "Error en la creacion del usuario");
           
        },
        activeUser: (parent, args, contex, info) =>{
           return User.updateOne({identificacion:args.identificacion},{estado:"Autorizado"})
           .then(u => "Se realizo la activación del usuario")
           .catch(err => "Error en la activacion del usuario");
           
        }
    }
}

//Encriptar la clave//
module.exports = resolvers