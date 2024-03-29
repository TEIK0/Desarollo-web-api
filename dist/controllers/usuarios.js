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
exports.postLogin = exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({ usuarios });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }
    res.json(usuario);
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeCorreo = yield usuario_1.default.findOne({ where: {
                correo: body.correo
            } });
        if (existeCorreo) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.correo
            });
        }
        else {
            const usuario = usuario_1.default.build(body);
            yield usuario.save();
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
exports.postUsuario = postUsuario;
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
const postLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, pasword } = req.body;
    try {
        const usuario = yield usuario_1.default.findOne({ where: {
                correo: correo
            } });
        if (usuario) {
            const paswordCorrecta = yield usuario_1.default.findOne({ where: {
                    correo: correo,
                    pasword: pasword
                } });
            if (paswordCorrecta) {
                res.json({
                    msg: 'Logeado de forma exitosa'
                });
            }
            else {
                return res.status(400).json({
                    msg: 'Contraseña incorrecta'
                });
            }
        }
        else {
            return res.status(400).json({
                msg: 'Correo no encontrado'
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
exports.postLogin = postLogin;
//# sourceMappingURL=usuarios.js.map