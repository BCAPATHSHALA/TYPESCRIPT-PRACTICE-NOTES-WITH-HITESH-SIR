"use strict";
// Create the abstarct class TakePhoto
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    //? Regular function getReelTime
    getReelTime() {
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        //? Super constructor to initialize the parent class Takephoto's member variable
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    //? Implementation of getSepia method
    getSepia() {
        console.log("Sepia");
    }
}
const objectHC = new Instagram("mode1", "blue", 3);
const val = objectHC.getReelTime();
console.log(val); // 8
objectHC.getSepia(); // Sepia
