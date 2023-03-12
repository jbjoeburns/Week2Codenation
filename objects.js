// Tasks
const person = {
    name: "Joe",
    age: "24",
    songs: ["song1", "song2", "song3", "song4"],
    sayHi(){
        return `Hi my name is ${this.name}`
    }
}
console.log(person.name)
console.log(person["name"])
console.log(person.songs[1])
console.log(person.sayHi())

const alarmobj = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
}
var day = "Tuesday"
var alarm = ""

if(day === "Saturday" || day === "Sunday"){
    var alarm = alarmobj.weekendAlarm
}
else{
    var alarm = alarmobj.weekdayAlarm
}
console.log(alarm)

const pet = {
    name: "Charlie",
    typeOfPet: "dog",
    age: "3",
    colour: "black", 
    eat() {
        return `${this.name}, is currently eating`
    },
    drink() {
        return `${this.name}, is currently drinking`
    }
}
console.log(pet.eat())
console.log(pet.drink())


const coffeeShop = {
    branch: "",
    drinks: {
        Cappuccino: 5,
        Latte: 6,
        Black: 4
    },
    food: {
        Biscuits: 2,
        Muffin: 4,
        Cake: 3
    },
    drinksOrdered() {
        orderd = ["Cappuccino", "Latte"]
        drinkscost = 0
        for (const element of orderd){
            drinkscost = drinkscost + this.drinks[element]
        }
        return `${orderd} is ${drinkscost}`
    },
    foodOrdered() {
        orderf = ["Biscuits", "Cake"]
        foodcost = 0
        for (const element of orderf){
            foodcost = foodcost + this.food[element]
        }
        return `${orderf} is ${foodcost}`
    }
}
console.log(coffeeShop.drinksOrdered())
console.log(coffeeShop.foodOrdered())