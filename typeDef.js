const { gql } = require ('apollo-server-express')


const typeDefs=gql`
    type Usuario{
        nombre_completo: String
        identificacion: Int
        email: String
        tipo_usuario: String
        estado: String
    }
    type Proyecto{
        id_proyecto: String
        nombre: String
        Objetivos_generales: String
        Objetivos_especificos: String
        presupuesto: Int
        fecha_inicio: String
        fecha_terminacion: String
        documento: Int
        lider: String
        estado_creacion: String
        estado_proyecto: String
        fase: String
        
    }
    type Query{
        usuarios: [Usuario] 
        usuario(identificacion:Int): Usuario
        proyectos:[Proyecto]
        getProyecto(nombre:String):Proyecto
    } 
    input UserInput{
        nombre_completo:String
        identificacion:Int
        email:String
        clave:String
        tipo_usuario:String
        
    }
    type Mutation{
        createUser(user:UserInput):String
        activeUser(identificacion:Int):String
        aprobarusuario(nombre_completo:String):String
    }
     
     
    `
module.exports = typeDefs
