import { Router } from "express";
import { getExperiencia, getExperiencias, getExperienciasOfUser, postExperiencia } from "../controllers/experiencia";

const router = Router();

router.get('/' , getExperiencias);
router.get('/:id' , getExperiencia);
router.post('/' , postExperiencia);
router.get('/byUser/:id', getExperienciasOfUser);


export default router;