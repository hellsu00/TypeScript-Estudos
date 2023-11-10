{
    type Pessoa = {
        nome: string
        idade: number
        corFavorita: string
    }

    const pessoa: Pessoa = {
        nome: 'Felipe',
        corFavorita: 'Azul',
        idade: 29
    }

    type Pessoa2 = {
        nome: string
        idade: number
        corFavorita: string
    }

    // OBJECT LITERAL
    const Ana: Pessoa2 = {
        corFavorita: 'Preto',
        idade: 20,
        nome: 'Ana'
    }

    function foo (pessoa: Pessoa) { }

    function bar (pessoa: { nome: string, idade: number, corFavorita: string }) { }

    type Carro = {
        marca: string
        ano: number
        dono: Pessoa
    }
    type CarroLiteral = {
        marca: string
        ano: number
        dono: {
            nome: string
            idade: number
            corFavorita: string
        }
    }

    const carro: CarroLiteral = {
        ano: 2022,
        marca: 'Honda',
        dono: {
            corFavorita: 'Azul',
            idade: 20,
            nome: 'Paulo'
        }
    }
}

{
    type obj = {
        a: string
        b: number
    }

    const foo: obj = {
        a: 'a',
        b: 1
    }

    const bar: obj = {
        a: 'a'
    }

    const baz: obj = {
        a: 'a',
        c: true
    }

    type obj2 = {
        a: string
        b?: number
    }

    const foo2: obj2 = {
        a: 'a',
        c: true
    }

    const bar2: { a: number, b?: number } = {
        a: 1
    }
}

{
    type obj = {
        readonly a: string
        readonly b: number
    }

    const foo: obj = {
        a: '1',
        b: 1
    }
    foo.a = 'b'
    foo.b.toFixed(0)
}

{
    type Pessoa = {
        nome: string
        idade: number
        corFavorita: string
    }

    type Carro = {
        marca: string
        ano: number
        dono: Pessoa
    }

    const Joao: Pessoa = {
        nome: 'Joao',
        idade: 35,
        corFavorita: 'Verde'
    }

    const Ana: {
        nome: string
        idade: number
        corFavorita: string
    } = {
        corFavorita: 'Preto',
        idade: 20,
        nome: 'Ana'
    }

    const carroAna: Carro = {
        ano: 2018,
        dono: Ana,
        marca: 'Fiat'
    }

    const carroJoao: Carro = {
        ano: 2015,
        dono: Joao,
        marca: 'Ford'
    }
}

{
    let foo = 'foo'
    let bar = 1

    const baz = 'foo'
    const xpto = 2

    let Ana = {
        corFavorita: 'Preto',
        idade: 20,
        nome: 'Ana'
    }

    Ana.nome = 'Ana Maria'
}