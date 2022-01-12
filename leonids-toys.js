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
        price: 25
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


// Maps Challenge Below ------------------------

//The Problem: Prices change over time. We need to delete the prices
//from the toys objects. 
//We need to create a Map to store the prices for each toy. 
    //The key = toy object, The value = price.
    //Print name and price of each toy.
        //Modify push function to accept second parameter- price. 
        //After adding the toy to inventory, add key/value pair to map.



//Step 1 : delete the price property on objects in my toys array. Done!
for (const toy of toys){
    delete toy.price
}
  
console.log(toys)

//Step 2: Create a new map to store prices for each toy. Key= toy object. Value = price.
const toys2 = new Map( [ [toys[0], 45], [toys[1], 25], [toys[2], 14] ] );
    for (let [k,v] of toys2) {
        console.log(k,v);
    }


//const addPhoneToInventory = (phoneObject, price) => {
    
//}

// Add the first toy in the array to the Map and set its price
//addPhoneToInventory(toys[0], 49.99)













//------------------------------- exercises from the chapter below----------
//const toyToFind = 5

//for (const toy of toys){
    //if (toy.id === toyToFind) {
  //      console.log(`The ${toy.name} is made by ${toy.manufacturer} and costs $${toy.price}`) 
   // }
//}

//for (const toy of toys){
    //below: adding 5% price increase to each toy
    //toy.price = toy.price + 0.05 * toy.price
   // console.log(`The ${toy.name} is made by ${toy.manufacturer} and costs $${toy.price}`)
//}
//console.log(toys) commented out to see just the for... of loop in the console

//for (const toy of toys) {
    //console.log(toy.name)
//}

// the for... of loop creates a new variable that goes inside the main variable
// inside it grabs the property I want with dot notation.
// example: for (const newVariable of oldVariable) {
//              console.log(newVariable.property)
//               }
