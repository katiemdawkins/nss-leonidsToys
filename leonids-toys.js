const toys = [
    {
        id: 1,
        name: "Lego Castle Set",
        manufacturer: "Lego",
        numberInStock: 22,
        price: 45
    },
    {
        id: 2,
        name: "Malibu Barbie",
        manufacturer: "Matel",
        numberInStock: 22,
        price: 45
    },
    {
        id: 3,
        name: "Fox Puzzle",
        manufacturer: "Matel",
        numberInStock: 3,
        price: 14
    }
]

const slime = {
    id: 4,
    name: "Slime- Green",
    manufacturer: "Matel",
    numberInStock: 16,
    price: 11
}

const elmo = {
    id: 5,
    name: "Elmo Toy",
    manufacturer: "Matel",
    numberInStock: 13,
    price: 25
}

toys.push(slime)
toys.push(elmo)

for (const toy of toys){
    console.log(`The ${toy.name} is made by ${toy.manufacturer} and costs $${toy.price}`)
}
//console.log(toys) commented out to see just the for... of loop in the console

//for (const toy of toys) {
    //console.log(toy.name)
//}

// the for... of loop creates a new variable that goes inside the main variable
// inside it grabs the property I want with dot notation.
// example: for (const newVariable of oldVariable) {
//              console.log(newVariable.property)
//               }
