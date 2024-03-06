import express, { Application } from "express";
import userRoutes from '../routes/usuario';
import experienciaRoutes from '../routes/experiencia';
import habilidadRoutes from '../routes/habilidad_blanda';
import cors from "cors";
import db from "../db/connections";

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
        habilidades: '/api/habilidades',
        experiencias: '/api/experiencias'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();

        this.routes();
    }

    async dbConnection() {

        try { 

            await db.authenticate();
            console.log('Database online')

        } catch (error) {
            throw error;
        }
    }

    middlewares() {
        this.app.use( cors() );

        this.app.use( express.json() );
    }

    routes() {
        this.app.use( this.apiPaths.usuarios, userRoutes)
        this.app.use( this.apiPaths.experiencias, experienciaRoutes)
        this.app.use( this.apiPaths.habilidades, habilidadRoutes)
    }

    listen() {
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo');
        })
    }
}

export default Server;