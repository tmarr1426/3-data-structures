// let states = {
//     green: ["yellow"],
//     yellow: ["red"],
//     red: ["green"],
// };

// let currentState = "green";

// function enterState (newState) {
//     let validTransitions = states[currentState];
//     if (validTransitions.includes(newState)){
//         currentState = newState;
//         console.log("The state has changed to:", currentState);
//     } else {
//         throw("Invalid state transition attempted from" + currentState + "to" + newState);
//     }
// }

// //enterState("red"); //! Hits the error code block, cannot move from green to red.

// enterState("yellow"); //! Works
// enterState("green"); //! Hits the error again, as yellow can not go to green.

let stateMachine = {
    state: "liquid",
    emoji: "💧",
    transitions: {
        liquid: {
            vaporize(){
                this.state = "gas";
                this.emoji = "☁️";
            },
            freeze(){
                this.state = "solid";
                this.emoji = "🪨";
            }
        },
        solid: {
            melt(){
                this.state = "liquid";
                this.emoji = "💧";
            }
        },
        gas: {
            condense(){
                this.state = "liquid";
                this.emoji = "💧";
            }
        },
    },
    dispatcher(actionName){
        const action = this.transitions[this.state][actionName];

        if (action) {
            let previous = this.state;
            console.log(`${actionName} on ${this.state}`);
            action.call(this);
            console.log(`Changed ${previous} to ${this.state} ${this.emoji}`)
        } else {
            console.log("❌ Invalid Action");
            console.log(`You cannot ${actionName} a ${this.state}`);
        }
    },
};


const myUniqueObject = Object.create(stateMachine);
//console.log(Object.getPrototypeOf(myUniqueObject));
myUniqueObject.dispatcher("freeze");
myUniqueObject.dispatcher("freeze");
myUniqueObject.dispatcher("melt");
myUniqueObject.dispatcher("vaporize");
myUniqueObject.dispatcher("freeze");
myUniqueObject.dispatcher("condense");








