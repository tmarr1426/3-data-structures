/*
?   Classes
    * Introduced in 2015
    * A function that allows us to create objects
    * Define a category of objects

    * Think of them as a cookie cutter
        * Or video game language (A class could be 'character' that can hold HP, level, items, etc.)


*/

/*
?   Base Structure
    class NameOfClass {
        constructor (parameter/s){
            this.key = parameter
        }
    }

    method(){
        ... code block
    } 
    Methods are a function that is within a class or object
*/

// class NameOfClass {
//     constructor(parameter){
//         this.key = parameter;
//     }

//     methodName() {
//         console.log("Hey I'm inside of the mnethod within the class.");
//     }
// }

class NewObject {
    static name = "name default";
    desc = "desc default";
}

let newObj = new NewObject();

//console.log(newObj);
//console.log(typeof newObj);


// 1   2

class Item {
    // 3             //4
    constructor(name, desc, price) {
        //5   6      7
        this.name = name;
        this.desc = desc;
        this.price = price;
    //  this.defaultKey = "Default Value";
    }
}
/*
    1. Keyword to establish type of function this is
    2. The name of our class. Should be PascalCased
    3. Keyword - is automatically run whe nthe class is instantiated
    4. THe parameters for our constructed object. Est. Values of the new object
    5. Keyword - Refers to "this" specific object being created
    6. The name of the key to our new object
    7. The value for those keys being created (set by our parameters)
*/

let itemZero = new Item();
// console.log(itemZero);
let itemOne = new Item("Beans", "Canned", 0,89);
// console.log(itemOne);

let iType = "tomato soup";
let iDesc = "canned";
let iCost = 1.29;

function processItem(i,d,c){
    return new Item(i,d,c);
}

let useFunction = processItem(iType, iDesc, iCost);
// console.log(useFunction);
class DeptInventory {
    constructor(dept){
        this.department = dept;
        this.items = [];
    }

    addToInventory(newItem) {
        this.items.push(newItem);
    }
}

let dryFoods = new DeptInventory("Dry Goods");

let itemThree = new Item("Corn", "Canned", 0.79);
let itemFour = new Item("Spaghetti-os", "Canned", 1.79);

dryFoods.addToInventory(itemThree);
dryFoods.addToInventory(itemFour);

// console.log(dryFoods);

class Expense {
    static addUpchargeForProfit (wholesale, upchargePercent) {
        let upcharge = wholesale + wholesale * upchargePercent;
        return new Expense(wholesale, upcharge)
    }
    constructor(w,s){
        this.purchased_price = w;
        this.sell_at = s;
        this.sales_tax; // currently shows as undefined
    }
    addTax(per) {
        let percentage = per;
        let sellingAtCost = this.sell_at;
        this.sales_tax = (sellingAtCost + sellingAtCost * percentage).toFixed(2);
    }
}

// let itemToSell = new Expense (5, 7);
let itemToSell = Expense.addUpchargeForProfit(1, 0.2);
let itemToSell2 = Expense.addUpchargeForProfit(1, 0.2);
let itemToSell3 = Expense.addUpchargeForProfit(5, 0.5);

// console.log(itemToSell);
itemToSell2.addTax(.07);
// console.log(itemToSell2);
itemToSell3.addTax(0.99);
// console.log(itemToSell3);
// console.log(
//     `Price Paid: $${itemToSell3.purchased_price.toFixed(2)}\n
//     Selling Price: $${itemToSell3.sell_at.toFixed(2)}\n
//     Profit: $${(itemToSell3.sell_at-itemToSell3.purchased_price).toFixed(2)}
//     `
// );

//  ? Inheritance
//  * Essentially copies the information from the extended class when setting a new class.

class Car {
    constructor(brand){
        this.brandName = brand;
    }
    present(){
        return `I have a ${this.brandName}`;
    }
}

// let myCar = new Car("Tesla")
// console.log(myCar.present());

class Model extends Car{
    constructor(brandName, mod){
        super(brandName);
        this.model = mod;
    }

    show(){
        return `${this.present()} and it is a ${this.model}`
    }
}

let myCar1 = new Model("Ford", "Fiesta")
let myCar2 = new Model("Tesla", "Cybertruck")
console.log(myCar1.show());
console.log(myCar2.show());
