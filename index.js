require('./infraestructura/conectionDB')
const ProjectModel = require('./model/proyectoModel')
const express = require ('express');
const { response } = require('express');

const api = express();
const projectaguas = new ProjectModel({
    nombre: 'Proyecto Agua Potable Nariño',
    lider: 'Juan',
    facultad: 'Electronica'
})

projectaguas.save((err,document)=>{
   if(err){
       console.log(err);
       return;
   }
})

/*projectaguas.save((err, document) => {
    if (err) {
        console.log(err);
        return;
    }
})
*/

const consultaProyectos = async () => {
   return await ProjectModel.find({})

}

api.get('/proyectos', (request,response) => {
    consultaProyectos().then(function (resultado){
        response.json({ projects: resultado })
    })

})

api.listen('9093')

