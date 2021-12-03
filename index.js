
require ('./infraestructura/conectionDB')
const express = require ('express')
const { ApolloServer } = require ('apollo-server-express')
const typeDefs = require('./typeDef')
const resolvers = require('./resolver')

const iniciarServidor = async ()=> {
    const api = express();
    const apollo = new ApolloServer(
        {
             typeDefs,
             resolvers 
        });
    
    await apollo.start()
    apollo.applyMiddleware({ app:api })
    api.use((request, response) => {
        response.send ('Hola')
    })
    api.listen('9094', () => console.log('inicie servidor'))
}
iniciarServidor()





