//* Interface TakePhoto
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

//* Interface Story
interface Story {
  createStory(): void;
}

//* Implemented interface TakePhoto by class Instagram
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

//* Implemented interface TakePhoto, Story by class Youtube
class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  //? Must be implement the createStory
  createStory(): void {
    console.log("Story was created");
  }
}

const consoleBusters = new Youtube("mode1", "blur", 100, "real");
console.log(consoleBusters);
/*
Expected output:
Youtube {
  cameraMode: 'mode1',
  filter: 'blur',
  burst: 100,
  short: 'real'
}
*/

export {};
