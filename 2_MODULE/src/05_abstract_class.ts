// Create the abstarct class TakePhoto
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  //? Abstarct method getSepia
  abstract getSepia(): void;

  //? Regular function getReelTime
  getReelTime(): number {
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    //? Super constructor to initialize the parent class Takephoto's member variable
    super(cameraMode, filter);
  }

  //? Implementation of getSepia method
  getSepia(): void {
    console.log("Sepia");
  }
}

const objectHC = new Instagram("mode1", "blue", 3);
const val: number = objectHC.getReelTime();
console.log(val); // 8
objectHC.getSepia(); // Sepia
