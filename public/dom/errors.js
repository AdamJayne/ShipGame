class Err {
  constructor(id, value) {
    this.el = document.getElementById(id);
    this.message = value;
  }

  show() {
    this.el.innerText = this.message;
    this.el.style.color("red");
    this.el.style.display("initial");
  }

  hide() {
    this.el.innerText = "";
    this.el.style.display = "none";
  }
}