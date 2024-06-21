"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Implemented interface TakePhoto by class Instagram
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
//* Implemented interface TakePhoto, Story by class Youtube
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    //? Must be implement the createStory
    createStory() {
        console.log("Story was created");
    }
}
const consoleBusters = new Youtube("mode1", "blur", 100, "real");
console.log(consoleBusters);
