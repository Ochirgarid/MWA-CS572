const EventEmitter = require('events');

class Gym extends EventEmitter{
    constructor(){
        super();
        this.timer_id;
        this.on("boom", function() {
            this.timer_id = setInterval( _ => console.log("Boom event"), 1000);
        });
        this.emit("boom");
    }
    rest() {
        clearInterval(this.timer_id);
    }
}

const gymObj = new Gym();

gymObj.on.bind(gymObj, gymObj.on("boom", () => console.log("Athlete is working out")));
console.log(gymObj);