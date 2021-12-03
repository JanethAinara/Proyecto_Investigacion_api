const mongoose = require('mongoose')


const urlDB = 'mongodb+srv://Janeth:Madrid09@mintic.ohwvj.mongodb.net/Proyectos_Investigacion_api?retryWrites=true&w=majority'
mongoose.connect(urlDB);
const mongoDB = mongoose.connection;
mongoDB.on('open',_=>{
   console.log("conectada a la base de datos")
})