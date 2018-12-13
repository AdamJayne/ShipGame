import Player from "./classes/player.js";
import Enemy from "./classes/enemy.js";
import Err from "./dom/errors.js";
import { Brig, Galleon, ShipOfTheLine } from "./classes/shiptype.js";
var me = undefined;
var enemy = undefined;

document.getElementById("newGame").addEventListener("click", () => {
  document.getElementById("newGame").style.display = "none";
  document.getElementById("playerCreation").style.display = "initial"
});
document.getElementById("startGame").addEventListener("click", () => {
  var err = new Err("playerCreateError");
  var name = document.getElementById("playerName").value;
  var faction = document.getElementById("faction-select").value;
  err.hide();
  if(name.length > 0) {
    if(faction !== "NONE") {
      me = new Player(name, faction);
      document.getElementById("playerCreation").style.display = "none";
      document.getElementById("gameView").style.display = "initial";
      document.getElementById("pName").innerText = `Captain: ${me.name}`;
      document.getElementById("pFaction").innerText = `Faction: ${me.faction}`;
      showShipSelect();
    } else {
      err.show("Please select a faction");
    }
  } else {
    err.show("Please enter a name!");
  }
});
document.getElementById("cancelNew").addEventListener("click", () => {
  document.getElementById("newGame").style.display = "initial";
  document.getElementById("playerCreateError").style.display = "none";
  document.getElementById("playerCreation").style.display = "none";
});

function showShipSelect() {
  document.getElementById("shipSelect").style.display = "initial";
  document.getElementById("submitShipCreate").addEventListener("click", () => {
    var err = new Err("shipNameError");
    err.hide();
    var type = document.getElementById("shipInput").value;
    var name = document.getElementById("shipNameInput").value;
    if(name.length === 0) {
      err.show("Please name your ship!");
    } else {
      var ship;
      switch (type) {
        case "Brig":
          ship = new Brig(name);
          break;
        case "Galleon":
          ship = new Galleon(name);
          break;
        case "ShipOfTheLine":
          ship = new ShipOfTheLine(name);
          break;
      }
      me.addShip(ship);
      document.getElementById("shipSelect").style.display = "none";
      document.getElementById("myShipView").innerHTML = `<b>${me.ship.name}</b> the ${me.ship.type}`;
      document.getElementById("playerHealth").value = me.ship.hp;
      createEnemy();
    }
  });
}

function createEnemy() {
  var intro = document.getElementById("battleIntro");
  var faction = "";
  switch (me.faction) {
    case "England":
      faction = "Spain";
      break;
    case "Spain":
      faction = "England";
      break;
    case "France":
      faction = "England";
      break;
  }
  var enemyShip = new Brig("The Sebastian");
  enemy = new Enemy("Capt. Montanegro", faction, enemyShip);
  intro.innerHTML = `<p>While out on patrol, you spot an enemy frigate. It is not long before you find out the ship is from ${faction}. You lower your sails to catch up.</p><button id="beginCombat">Begin Combat</button>`;
  document.getElementById("beginCombat").addEventListener("click", () => {
    showCombatView();
  })
  document.getElementById("battleIntro").style.display = "initial";
}

function showCombatView() {
  document.getElementById("battleIntro").style.display = "none";
  document.getElementById("combat").style.display = "initial";
  var myHealth = document.getElementById("playerHealth");
  var enemyHealth = document.getElementById("enemyHealth");
  myHealth.value = me.ship.hp;
  myHealth.max = me.ship.hp;
  enemyHealth.value = enemy.ship.hp;
  enemyHealth.max = enemy.ship.hp;
  document.getElementById("fireVolly").addEventListener("click", function() {
    console.log(myHealth.value);
    console.log(enemyHealth.value);

    const myDamage = me.ship.dps;
    const enemyDamage = enemy.ship.dps - 4;
    console.log("Damage!", myDamage);
    if (enemy.ship.hp - myDamage <= 0) {
      youWin();
    } else {
      enemy.ship.takeDamage(myDamage);
      enemyHealth.value -= myDamage;
    }
    if (me.ship.hp - enemyDamage <= 0) {
      youDied();
    } else {
      me.ship.takeDamage(enemyDamage);
      myHealth.value -= enemyDamage;
    }
  })
}

function youDied() {
  document.getElementById("gameView").style.display = "none";
  document.getElementById("youDied").style.display = "initial";
}

function youWin() {
  document.getElementById("gameView").style.display = "none";
  document.getElementById("youWin").style.display = "initial";
}