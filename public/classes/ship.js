// type = {
//   name: "string",
//   guns: "number",
//   crew: "number",
//   speed: "number",
//   hp: "number",
//   ammo: "number"
// }

class Ship {
  constructor(name, type) {
    this.name = name;
    this.type = type.name;
    this.hp = type.hp;
    this.guns = type.guns;
    this.crew = type.crew;
    this.speed = type.speed;
    this.ammo = {
      cannonball: 0,
      chainshot: 0,
      barshot: 0,
      hotshot: 0
    }
    this.effects = {
      masted: false,
      sinking: false,
      burning: false
    }
  }

  shootVolly() {

  }
}