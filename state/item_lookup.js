const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const ask = (questionText) => 
    new Promise((resolve, reject) => 
        rl.question(questionText + "\n", (input) => input.length > 0 ?resolve(input.toLowerCase()) : reject ("Provide Input")
      )
    );

let validInvCommands = ["i", "inventory", "items", "inv"];

let inventory = {
    sword: {
        name: "Excalibur",
        description: "A sword pulled from stone",
        look(){
            console.log(`${this.name} ⚔️:`);
            return this.description;
        },
    },
    axe: {
        name: "Mighty Battle Axe of Doom",
        description: "Great Battle Axe of Doom",
        look(){
            // Show other item info if it exists (Origin, Obtained at, etc)
            console.log(`${this.name} 🪓:`);
            return this.description;
        },
        swing(){
            // Some other FUNCTIONality -> Player attacks a target (Would prob pass in a target as a param/argument)
            return `You swing the ${this.name}`;
        },
    },
    hp_potion: {
        name: "HP Potion",
        description: "Healing potion restores health.",
        drink(){
            // Some other FUNCTIONality -> Player restores HP // this.player.changeHP()
            return `You drink the ${this.name}`;
        },
    },
};

const interact =(action,target) => {
    const validItem = inventory[target];
    const validAction = inventory[target][action];
    if (validAction && typeof validAction === "function") {
        console.log("Action can be done 👍.");
        if (validItem) {
            console.log("Item was found 👍.");
            console.log(inventory[target][action]())
        } else {
            console.log("Item not found 😒.")
        };
    } else {
        console.log(`Are you crazy?! You cannot ${action} a ${target}!`)
    }
};

//interact("swing", "axe");

const start = async() => {
    try {
        let response;
        while (response !== "exit"){
            response = await ask("What do you want to do?");
        }
        process.exit();
    } catch(err){
        console.log(err);
        await start();
    }
}

start();