// type anotations

const myString: string = "Rincko"
const myNumber: number = 22
const myNumber1: number = NaN
const myBoolean: boolean = true
const myVar: any = "Qualquer valor"
const myVar1: null = null
const myVar2: undefined = undefined

function sum(a: number, b: number): number {
    return a + b;
}

function greet(name: string, age: number, isProgrammer?: boolean) {

}

greet(myString)

const animal = {
    name: "Gato"
    age: 5
}

animal.name