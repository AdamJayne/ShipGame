import Player from "./classes/player.js";
var me = undefined;

document.getElementById("newGame").addEventListener("click", () => {
  document.getElementById("newGame").style.display = "none";
  document.getElementById("playerCreation").style.display = "initial"
});
document.getElementById("startGame").addEventListener("click", () => {
  var err = document.getElementById("playerCreateError");
  var name = document.getElementById("playerName").value;
  var faction = document.getElementById("faction-select").value;
  err.value = "";
  err.style.display = "none";
  console.log(name);
  if(name.length > 0) {
    if(faction !== "NONE") {
      me = new Player(name);
      document.getElementById("playerCreation").style.display = "none";
      document.getElementById("gameView").style.display = "initial";
      document.getElementById("pName").innerText = me.name;
    } else {
      err.innerHTML = "Please select a faction!";

    }
  } else {
    console.log("Error: Enter a name!");
    name = "";
    err.innerText = "Please enter a name!";
    err.style.color = "red";
    err.style.display = "initial";
  }
});
document.getElementById("cancelNew").addEventListener("click", () => {
  document.getElementById("newGame").style.display = "initial";
  document.getElementById("playerCreateError").style.display = "none";
  document.getElementById("playerCreation").style.display = "none";
});