import { Router } from "express";
import { deleteUsuario, getUsuario, getUsuarios, postLogin, postUsuario, putUsuario } from "../controllers/usuarios";

const router = Router();

router.get('/' , getUsuarios);
router.get('/:id' , getUsuario);
router.post('/' , postUsuario);
router.put('/:id' , putUsuario);
router.delete('/:id' , deleteUsuario);
router.post('/login' , postLogin);


export default router;