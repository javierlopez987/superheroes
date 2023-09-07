export class Hero {
  name: string;
  imagePath: string;
  powerstats: {
    intelligence: string,
    strength: string,
    speed: string,
    durability: string,
    power: string,
    combat: string
  }

  constructor(name: string, imagePath: string, powerstats : any) {
    this.name = name;
    this.imagePath = imagePath;
    this.powerstats = powerstats;
  }
}