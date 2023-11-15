{
    interface Animal {
        nome: string
        idade: number
    }

    interface Cachorro extends Animal {
        raca: string
    }

    const cachorro: Cachorro = {
        nome: 'Bob',
        idade: 7,
        raca: 'Labrador',
    }

    const animal: Animal = cachorro
    animal.idade
        ; (animal as Cachorro).raca
}

{
    interface Animal {
        nome: string
        idade: number
    }

    interface Voador {
        voar (): void
    }

    interface Nadador {
        nadar (): void
    }

    interface Terrestre {
        andar (): void
    }

    interface Pato extends Animal, Voador, Nadador, Terrestre {
        cor: string
    }

    const Donald: Pato = {
        nome: 'Donald',
        idade: 85,
        cor: 'Branco',
        voar () { },
        andar: () => { },
        nadar: function () { }
    }

    const terrestre: Terrestre = Donald
    terrestre.andar()
}

{
    class Animal {
        public nome: string = ''
        public idade: number = 0
    }

    interface Cachorro extends Animal {
        raca: string
    }

    const animal: Cachorro = {
        idade: 8,
        nome: 'Bob',
        raca: 'Labrador'
    }

    const outroAnimal: Animal = new Animal()
}