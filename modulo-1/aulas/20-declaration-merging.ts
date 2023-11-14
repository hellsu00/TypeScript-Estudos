{
    interface Pessoa {
        nome: string
    }

    interface Pessoa {
        idade: number
    }

    const pessoa: Pessoa = {
        idade: 28,
        nome: 'Felipe'
    }

    type Carro = {
        ano: number
    }

    type Carro = {
        marca: string
    }
}