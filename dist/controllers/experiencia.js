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
exports.deleteUsuario = exports.putUsuario = exports.postExperiencia = exports.getExperienciasOfUser = exports.getExperiencia = exports.getExperiencias = void 0;
const experiencia_1 = __importDefault(require("../models/experiencia"));
const usuario_1 = __importDefault(require("../models/usuario"));
const getExperiencias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const experiencias = yield experiencia_1.default.findAll();
    res.json({ experiencias });
});
exports.getExperiencias = getExperiencias;
const getExperiencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const experiencia = yield experiencia_1.default.findByPk(id);
    if (experiencia) {
        res.json(experiencia);
    }
    else {
        res.status(404).json({
            msg: 'No existe una experiencia con el id ' + id
        });
    }
});
exports.getExperiencia = getExperiencia;
const getExperienciasOfUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const existeUsuario = yield usuario_1.default.findOne({ where: {
                id: id
            } });
        if (existeUsuario) {
            const experiencias = yield experiencia_1.default.findAndCountAll({
                where: {
                    usuario_id: id
                }
            });
            if (experiencias.count > 0) {
                res.json({ existeUsuario, experiencias });
            }
            else {
                res.status(404).json({
                    msg: 'No existen experiencias con el id ' + id
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
exports.getExperienciasOfUser = getExperienciasOfUser;
const postExperiencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
            const experiencia = experiencia_1.default.build(body);
            yield experiencia.save();
            res.json(experiencia);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postExperiencia = postExperiencia;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(400).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        else {
            yield usuario.update(body);
            res.json(usuario);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuarios',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=experiencia.js.map