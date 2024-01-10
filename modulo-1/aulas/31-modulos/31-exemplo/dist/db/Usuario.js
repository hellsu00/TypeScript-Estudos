"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class Usuario {
    id;
    nome;
    email;
    senha;
    constructor(id, nome, email, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    static create(nome, email, senha) {
        const senhaHash = (0, crypto_1.createHash)('sha512').update(senha).digest('hex');
        return new Usuario((0, crypto_1.randomUUID)(), nome, email, senhaHash);
    }
    static fromObject(obj) {
        return new Usuario(obj.id, obj.nome, obj.email, obj.senha);
    }
    toString() {
        return `Usuário ${this.nome} <${this.email}>`;
    }
    equals(usuario) {
        return this.id === usuario.id;
    }
    sayHello() {
        console.log(`Olá, eu sou ${this.nome} e meu email é ${this.email}`);
    }
    mudarSenha(novaSenha) {
        const senhaHash = (0, crypto_1.createHash)('sha512').update(novaSenha).digest('hex');
        return new Usuario(this.id, this.nome, this.email, senhaHash);
    }
}
exports.default = Usuario;
