import { Request, Response } from "express";
import Habilidad_Blanda from "../models/habilidades_blandas";
import Usuario from "../models/usuario";

export const getHabilidadesBlandas = async ( req: Request , res: Response ) => {

    const habilidades = await Habilidad_Blanda.findAll();

    res.json({ habilidades });
}

export const getHabilidadBlanca = async ( req: Request , res: Response ) => {
    
    const { id } = req.params;

    const habilidad = await Habilidad_Blanda.findByPk( id );

    if( habilidad ) {
        res.json(habilidad);
    } else {
        res.status(404).json({
            msg: 'No existe una habilidad con el id ' + id
        })
    }

}

export const getHabilidadesOfUser = async ( req: Request , res: Response ) => {
    
    const { id } = req.params;

    try {
        const existeUsuario = await Usuario.findOne({where: {
            id: id
        }})
    
        if (existeUsuario) {
            const habilidades = await Habilidad_Blanda.findAndCountAll({
                where: {
                    usuario_id: id
                }
            });
        
            if( habilidades.count > 0 ) {
                res.json({existeUsuario,habilidades});
            } else {
                res.status(404).json({
                    msg: 'No existen habiliades con el id ' + id
                })
            }
        }else {
            res.status(404).json({
                msg: 'No existen un usuario con el id ' + id
            })
        }
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const postHabilidadBlanda = async ( req: Request , res: Response ) => {

    const { body } = req;

    try {

        const existeUsuario = await Usuario.findOne({where: {
            id: body.usuario_id
        }})

        if(!existeUsuario) {
            return res.status(400).json({
                msg: 'No se encuentra un usuario con el id ' + body.UsuarioId
            })
        }else { 
            const habilidad = Habilidad_Blanda.build(body)
            await habilidad.save();

            res.json(habilidad);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}