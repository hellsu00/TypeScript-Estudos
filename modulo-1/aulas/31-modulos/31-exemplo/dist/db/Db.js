"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const node_fs_1 = require("node:fs"); // importa somente as funções nas chaves
// só é permitido se allowSyntheticDefaultImports estiver habilitado
// import path from 'node:path'
// se não estiver habilitado, deve ser assim:
const path = __importStar(require("node:path")); // importa todas as coisas do módulo path
// Import padrão da classe Usuario
// mas estamos importando o IUsuario somente como tipo, então não precisamos dele no código final
const Usuario_1 = __importDefault(require("./Usuario"));
class Database {
    caminho;
    #db = new Map();
    constructor(caminho = './db.json') {
        this.caminho = path.resolve(__dirname, caminho);
        this.#inicializar();
    }
    #inicializar() {
        if ((0, node_fs_1.existsSync)(this.caminho)) {
            const conteudo = (0, node_fs_1.readFileSync)(this.caminho, { encoding: 'utf-8' });
            const objeto = JSON.parse(conteudo).map(([id, usuario]) => [
                id,
                Usuario_1.default.fromObject(usuario)
            ]);
            this.#db = new Map(Array.from(objeto));
            return;
        }
        this.#atualizarArquivo();
    }
    #atualizarArquivo() {
        (0, node_fs_1.writeFileSync)(this.caminho, JSON.stringify([...this.#db]));
    }
    upsert(entidade) {
        this.#db.set(entidade.id, entidade);
        this.#atualizarArquivo();
    }
    // Uma forma é pegar o ID pela interface
    buscar(id) {
        return this.#db.get(id);
    }
    listar() {
        return Array.from(this.#db.values());
    }
    // Podemos usar o Usuario['id'] para pegar o tipo do id da classe Usuario também
    remover(id) {
        this.#db.delete(id);
        this.#atualizarArquivo();
    }
}
exports.Database = Database;
