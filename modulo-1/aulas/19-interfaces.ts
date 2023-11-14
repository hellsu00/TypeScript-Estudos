{
    interface Pessoaa {
        nome: string
        readonly idade: number
        nacionalidade?: string
    }

    interface Label {
        [name: string]: boolean
    }

    const labels: Label = {
        importante: true,
        pessoal: true
    }

    interface Erro {
        readonly [name: string]: boolean
        numero: number
    }

    interface Multipla {
        titulo: string
        descricao: string
        date: Date
        done: boolean
        [outro: string]: string | Date | boolean
    }

    interface Vazio { }
    const vazio: Vazio = { nome: 'Felipe' }
    vazio.nome

    const objeto: {} = { nome: 'Felipe' }
    objeto.toString()
    vazio.toString()
}

{
    interface Pessoa {
        nome: string
        idade: number
    }

    const pessoa: Pessoa = {
        nome: 'Felipe',
        idade: 29
    }

    function ola (pessoa: Pessoa) {
        console.log(pessoa.nome)
    }
}