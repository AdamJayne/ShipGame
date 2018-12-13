import Ship from './ship.js';

function Brig (name) {
  Ship.call(this);
  this.name = name;
  this.type = "Brig";
  this.hp = 120;
  this.dps = 15;
}
Brig.prototype = Object.create(Ship.prototype);
Brig.prototype.constructor = Brig;


function Galleon (name) {
  Ship.call(this);
  this.name = name;
  this.type = "Galleon";
  this.hp = 200;
  this.dps = 30;
}
Galleon.prototype = Object.create(Ship.prototype);
Galleon.prototype.constructor = Galleon;

function ShipOfTheLine(name) {
  Ship.call(this);
  this.name = name;
  this.type = "ShipOfTheLine";
  this.hp = 400;
  this.dps = 80;
}
ShipOfTheLine.prototype = Object.create(Ship.prototype);
ShipOfTheLine.prototype.constructor = ShipOfTheLine;

export {
  Brig,
  Galleon,
  ShipOfTheLine
}