// console.log('hello')

// const myConstVar = 5

// let foo = 93

// foo = "my string"

// console.log(foo)

// let foodArray = ["pizza", "pasta", "salad"]
// console.log (foodArray)

// let foodItem = foodArray[1]
// console.log("Food Item:",foodItem)
// console.log("Food Item:",foodArray[1])

// let objectVariable = {
//     key: "value",
//     foods: foodArray
// }
// console.log(objectVariable)
// console.log("Foods:", objectVariable["foods"][0])

// function AddTwoNumbers(num1,num2){
//     let sum = num1 +num2
//     return (sum)
// }

// let mySum = AddTwoNumbers(6,7)
// console.log("my Sum:", mySum)

let breakfastElement = document.getElementById("breakfast")
console.log(breakfastElement)

function BreakfastClicked(){
    console.log("breakfast element was clicked")
    let breakfastfoodsDiv = document.getElementById("breakfastFoods")
    breakfastfoodsDiv.style.display = "flex"
    let lunchFoodsDiv = document.getElementById("lunchFoods")
    lunchFoodsDiv.style.display = "none"
    console.log("breakfastfoodsDiv", breakfastfoodsDiv)
}

function LunchClicked(){
    console.log("lunch element was clicked")
    let breakfastfoodsDiv = document.getElementById("breakfastFoods")
    breakfastfoodsDiv.style.display = "none"
    let lunchFoodsDiv = document.getElementById("lunchFoods")
    lunchFoodsDiv.style.display = "flex"
    console.log("breakfastfoodsDiv", breakfastfoodsDiv)
}


breakfastElement.addEventListener("click", () => BreakfastClicked())

let lunchElement = document.getElementById("lunch")
lunchElement.addEventListener("click", () => LunchClicked())

// making a small change comment

