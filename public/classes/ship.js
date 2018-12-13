// type = {
//   name: "string",
//   guns: "number",
//   crew: "number",
//   speed: "number",
//   hp: "number",
//   ammo: "number"
// }

function Ship() {
  this.destroyed = false;
}

Ship.prototype.takeDamage = function (x) {
  if (this.hp - x > 0) {
    this.hp -= x;
  } else {
    this.hp = 0;
    this.destroyed = true;
  }
}

Ship.prototype.getShipType = function () {
  const { type, hp, dps } = this;
  return {
    type,
    hp,
    dps
  }
}

Ship.prototype.constructor = Ship;

export default Ship;

// class Ship {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type.name;
//     this.hp = type.hp;
//     this.dps = type.dps;
//     this.guns = type.guns;
//     // this.crew = type.crew;
//     // this.speed = type.speed;
//     // this.ammo = {
//     //   cannonball: 0,
//     //   chainshot: 0,
//     //   barshot: 0,
//     //   hotshot: 0
//     // }
//     // this.effects = {
//     //   masted: false,
//     //   sinking: false,
//     //   burning: false
//     // }
//   }
// }