alert("GOD WHEN");


const fruits = ["Apple", "Orange", "Banana", "Coconut"];
console.log(fruits);

fruits.push("cherry");  //push is used to add items at the end of the array
console.log(fruits);

fruits.unshift("Mango")  //unshifts is used to add an item at the beginning of the array
console.log(fruits);

fruits.pop();  //pop removes the last item in the array
console.log(fruits);

fruits.shift();  //shifts removes the first item in the array
console.log(fruits);

fruits.splice(1, 1); // splice removes an identified item. it uses parameters, the first one to identify the index of the array and the second one is how many items to be removed.
console.log(fruits);

fruits[1] = "Blueberry"; // to replace an item in array on the variable and add[inside the index or the item number to be replace], and the new item using string.
console.log(fruits);

fruits.splice(1, 0, "strawberry");
console.log(fruits)

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//mapping method
fruits.map(fruit => console.log(fruit))

let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits) 

//filter
let longFruits = fruits.filter(fruit => fruit.length > 7);
console.log(longFruits);

let longFruits1 = fruits.filter(function returnFruits(fruit){
    return fruit.length > 7;
})
console.log(longFruits1);
 

let foundFruit = fruits.find(fruit => fruit === "Apple");
console.log(foundFruit);


let hasWatermelon = fruits.includes("Watermelon");
console.log(hasWatermelon);


