import { Router } from "express";
import { getHabilidadBlanca, getHabilidadesBlandas, getHabilidadesOfUser, postHabilidadBlanda } from "../controllers/habilidad_blanda";

const router = Router();

router.get('/' , getHabilidadesBlandas);
router.get('/:id' , getHabilidadBlanca);
router.post('/' , postHabilidadBlanda);
router.get('/byUser/:id', getHabilidadesOfUser);


export default router;