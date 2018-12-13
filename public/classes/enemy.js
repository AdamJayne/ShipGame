function Enemy (name, faction, ship) {
  this.name = name;
  this.faction = faction;
  this.ship = ship;
}

Enemy.prototype.constructor = Enemy;

export default Enemy;