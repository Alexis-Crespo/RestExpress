const express = require('express')
const cors = require('cors')

class Server {

    constructor () {
         this.app = express();
         this.port = process.env.PORT;
         this.usuariosEndPoint = '/api/users'

        //Middlewares
        this.middlewares()

        //Rutas
         this.routes();

    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.static('public'))

        // Lectura y parseo del body

        this.app.use( express.json())
    }

    routes(){
        this.app.use(this.usuariosEndPoint, require('../routes/users'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('ejecutando desde clase: ', this.port)
        })
    }

}

module.exports = Server;