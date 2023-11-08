{
    type MeuTipo = string
    function foo (x: MeuTipo) {
        return x
    }

    type NullableString = string | null
    function sayHello (name: NullableString) {
        if (name) console.log(name)
        return name
    }

    type Nullable<T> = T | null
    function sayHello2 (name: Nullable<string>) {
        if (name) console.log(name)
        return name
    }
    const objeto: { name: string } = { name: 'Felipe' }
    const user: { name: string } = { name: 'ana' }
}

{
    type User = {
        name: string
        age?: number
    }

    const objeto: User = { name: 'Felipe' }
    const user: User = { name: 'ana' }
}

{
    type A = string

    type B = number

    type C = undefined

    type D = A | B | C

}