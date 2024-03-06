"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const habilidad_blanda_1 = require("../controllers/habilidad_blanda");
const router = (0, express_1.Router)();
router.get('/', habilidad_blanda_1.getHabilidadesBlandas);
router.get('/:id', habilidad_blanda_1.getHabilidadBlanca);
router.post('/', habilidad_blanda_1.postHabilidadBlanda);
router.get('/byUser/:id', habilidad_blanda_1.getHabilidadesOfUser);
exports.default = router;
//# sourceMappingURL=habilidad_blanda.js.map