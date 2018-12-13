import Ship from './ship.js';

function Brig (name) {
  Ship.call(this);
  this.name = name;
  this.type = "Brig";
  this.hp = 1200;
  this.dps = 15;
}
Brig.prototype = Object.create(Ship.prototype);
Brig.prototype.constructor = Brig;


function Galleon (name) {
  Ship.call(this);
  this.name = name;
  this.type = "Galleon";
  this.hp = 2000;
  this.dps = 30;
}
Galleon.prototype = Object.create(Ship.prototype);
Galleon.prototype.constructor = Galleon;

function ShipOfTheLine(name) {
  Ship.call(this);
  this.name = name;
  this.type = "ShipOfTheLine";
  this.hp = 4000;
  this.dps = 100;
}
ShipOfTheLine.prototype = Object.create(Ship.prototype);
ShipOfTheLine.prototype.constructor = ShipOfTheLine;

export {
  Brig,
  Galleon,
  ShipOfTheLine
}