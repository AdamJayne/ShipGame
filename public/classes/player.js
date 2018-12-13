class Player {
  constructor(name, faction) {
    this.name = name;
    this.faction = faction;
    this.battles = 0;
    this.xp = 0;
  }
}

Player.prototype.addShip = function (ship) {
  this.ship = ship;
}

export default Player;