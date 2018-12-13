import Player from "./classes/player.js";
import Err from "./dom/errors.js";
import { Brig, Galleon, ShipOfTheLine } from "./classes/shiptype.js";
var me = undefined;

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
      document.getElementById("pName").innerText = me.name;
      document.getElementById("pFaction").innerText = me.faction;
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
    }
  });
}

