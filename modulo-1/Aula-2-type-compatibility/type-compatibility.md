## Compabilidade de tipos
Compatibilidade de tipos no Typescript é baseado em subtipagem estrutural. Tipagem estrutural é um forma de relacionar tipos baseado exclusivamente em seus membros. Isso vai de encontro com a tipagem nominal. 

``` ts
interface Person {
  name: string;
}

let person: Person
let Felipe = {name: 'Felipe', age: 29 }
person = Felipe

function sayHello (person: Person) {
    console.log(`Olá ${person.name}`)
}
sayHello(Felipe)
sayHello({name: 'Felipe'})
sayHello({name: 'Felipe', age: 29})
```

O sistema de tipagem estrutural TypeScript foi projetado baseado em como o código Javascript é tipicamente escrito. Por que o Javascript faz uso amplo de objetos anônimos como funções de expressões e literais de objetos, é muito mais natural representar os tipos de relacionamentos encontrados em bibliotecas JavaScript com um sistema de tipo estrutural do que um tipo nominal.

## Soundness
O sistema de tipos TypeScript permite certas operações, que não poderiam ser conhecidas em tempo de compilação, a serem seguras. Quando um sistema de tipos tem essa propriedade, fica dito não ser “sólido” (sound). Os locais onde Typescript permite comportamento não sólido foram considerados cuidadosamente, e ao decorrer desse documento iremos explicar onde eles ocorrem e os cenários motivadores por trás deles.