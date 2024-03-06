import { Request, Response } from "express";
import Experiencia from "../models/experiencia";
import Usuario from "../models/usuario";

export const getExperiencias = async ( req: Request , res: Response ) => {

    const experiencias = await Experiencia.findAll();

    res.json({ experiencias });
}

export const getExperiencia = async ( req: Request , res: Response ) => {
    
    const { id } = req.params;

    const experiencia = await Experiencia.findByPk( id );

    if( experiencia ) {
        res.json(experiencia);
    } else {
        res.status(404).json({
            msg: 'No existe una experiencia con el id ' + id
        })
    }

}

export const getExperienciasOfUser = async ( req: Request , res: Response ) => {
    
    const { id } = req.params;

    try {
        const existeUsuario = await Usuario.findOne({where: {
            id: id
        }})
    
        if (existeUsuario) {
            const experiencias = await Experiencia.findAndCountAll({
                where: {
                    usuario_id: id
                }
            });
        
            if( experiencias.count > 0 ) {
                res.json({existeUsuario,experiencias});
            } else {
                res.status(404).json({
                    msg: 'No existen experiencias con el id ' + id
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

export const postExperiencia = async ( req: Request , res: Response ) => {

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
            const experiencia = Experiencia.build(body)
            await experiencia.save();

            res.json(experiencia);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const putUsuario = async ( req: Request , res: Response ) => {
    
    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk(id);
        if( !usuario ) {
            return res.status(400).json({
                msg: 'No existe un usuario con el id ' + id
            })
        } else {
            await usuario.update(body);
            res.json( usuario );
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteUsuario = ( req: Request , res: Response ) => {
    
    const { id } = req.params;

    res.json({
        msg: 'deleteUsuarios',
        id
    })
}
