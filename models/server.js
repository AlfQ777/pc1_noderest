const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port= process.env.PORT;
        this.usdir = "/api/usuarios";

        //middleware
        this.middlewares();        
        //Rutas de la aplicacion
        this.routes();


    }
    middlewares(){
    //CORS
    this.app.use(cors());
    //Lectura y parceo del body
    this.app.use(express.json());
    //directorio publico
    this.app.use(express.static('public')); //acceso default a: '/'
    }
    routes(){
        this.app.use(this.usdir, require('../routes/users'));
    }
    listen(){
        this.app.listen(this.port 
           // ()=>{
       // console.log("puerto corriendo en ", this.port);
   //}
        );
    }
}

module.exports = Server;