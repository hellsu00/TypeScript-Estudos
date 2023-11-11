{
    type Todo = {
        titulo: string
        descricao: string
    }

    const todo: Todo = {
        titulo: 'Assistir séries',
        descricao: 'Tomar notas'
    }
}

{
    type Todo = {
        titulo: string
        descricao: string
    }

    const todo: Todo = {
        titulo: 'Assistir séries',
        descricao: 'Tomar notas',
        labels: {
            importante: true
        }
    }

    type toDoDict = {
        titulo: string
        descricao: string
        labels: {
            [nome: string]: boolean
        }
    }

    const todo2: toDoDict = {
        titulo: 'Assistir séries',
        descricao: 'Tomar notas',
        labels: {
            importante: true,
            pessoal: true,
            atrasado: true,
        }
    }
}