"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// se tentarmos importar Usuario direto do barrel vamos ter um problema, pois ele não exporta o default
// import Usuario, { Database } from './db/index' // veja que estamos usando o arquivo index.ts e ele vai ter tudo que foi exportado no barrel
// Precisamos importar direto do arquivo, default exports não são boa prática
const Usuario_1 = __importDefault(require("./db/Usuario"));
const Db_1 = require("./db/Db");
function main() {
    // inicialização do DB
    const db = new Db_1.Database();
    // criação de usuários
    const usuarios = db.listar();
    console.log(usuarios); // []
    if (!usuarios.length) {
        const Jose = Usuario_1.default.create('José', 'jose@email.com', 'A formação TS é show');
        db.upsert(Jose);
    }
    console.log(db.listar());
    // busca de usuário
    const usuario = db.buscar(usuarios[0].id);
    if (!usuario)
        throw new Error('Usuário não encontrado');
    console.log(usuario.toString());
    const novoUsuario = usuario.mudarSenha(Date.now().toString());
    db.upsert(novoUsuario);
    console.log(db.listar());
}
main();
