"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postHabilidadBlanda = exports.getHabilidadesOfUser = exports.getHabilidadBlanca = exports.getHabilidadesBlandas = void 0;
const habilidades_blandas_1 = __importDefault(require("../models/habilidades_blandas"));
const usuario_1 = __importDefault(require("../models/usuario"));
const getHabilidadesBlandas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const habilidades = yield habilidades_blandas_1.default.findAll();
    res.json({ habilidades });
});
exports.getHabilidadesBlandas = getHabilidadesBlandas;
const getHabilidadBlanca = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const habilidad = yield habilidades_blandas_1.default.findByPk(id);
    if (habilidad) {
        res.json(habilidad);
    }
    else {
        res.status(404).json({
            msg: 'No existe una habilidad con el id ' + id
        });
    }
});
exports.getHabilidadBlanca = getHabilidadBlanca;
const getHabilidadesOfUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const existeUsuario = yield usuario_1.default.findOne({ where: {
                id: id
            } });
        if (existeUsuario) {
            const habilidades = yield habilidades_blandas_1.default.findAndCountAll({
                where: {
                    usuario_id: id
                }
            });
            if (habilidades.count > 0) {
                res.json({ existeUsuario, habilidades });
            }
            else {
                res.status(404).json({
                    msg: 'No existen habiliades con el id ' + id
                });
            }
        }
        else {
            res.status(404).json({
                msg: 'No existen un usuario con el id ' + id
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getHabilidadesOfUser = getHabilidadesOfUser;
const postHabilidadBlanda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeUsuario = yield usuario_1.default.findOne({ where: {
                id: body.usuario_id
            } });
        if (!existeUsuario) {
            return res.status(400).json({
                msg: 'No se encuentra un usuario con el id ' + body.UsuarioId
            });
        }
        else {
            const habilidad = habilidades_blandas_1.default.build(body);
            yield habilidad.save();
            res.json(habilidad);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postHabilidadBlanda = postHabilidadBlanda;
//# sourceMappingURL=habilidad_blanda.js.map