"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const experiencia_1 = require("../controllers/experiencia");
const router = (0, express_1.Router)();
router.get('/', experiencia_1.getExperiencias);
router.get('/:id', experiencia_1.getExperiencia);
router.post('/', experiencia_1.postExperiencia);
router.get('/byUser/:id', experiencia_1.getExperienciasOfUser);
exports.default = router;
//# sourceMappingURL=experiencia.js.map