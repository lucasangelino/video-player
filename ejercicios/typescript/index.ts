
function add(a:number, b:number): number {
    return a + b;
}

const sum = add(4, 6)


function createAdder(a:number): (number) => number {
    return function (b:number) {
        return b + a
    }
}

const addFour = createAdder(4)
const fourPlusSix = addFour(6)

function fullName(firstName: string, lastName: string = 'Angelino'): string {
    return `${firstName} ${lastName}`
}

const lucas = fullName('Lucas')


// Interface

interface Rectangulo {
    ancho: number,
    alto: number
}

let rect: Rectangulo = {
    ancho : 4,
    alto: 6
}

function area(r:Rectangulo): number {
    return r.alto * r.ancho;
}




// Boolean
let muted: boolean = true;
muted = false;

// Numbers
let numerador: number = 35
let denominador: number = 5
let resultado: number = numerador / denominador
 
// String
let nombre: string = 'Lucas'

// Arrays
let people: string[] = [];
people = ['Lucas']

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Richard')
peopleAndNumbers.push(22)

// Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
}

let colorFavorito: Color = Color.Rojo

// Any
let comidin: any = 'Joker'
comidin = { type : 'Wildcard'}

// Object
let someObject: object = { type : 'Wildcard'}

