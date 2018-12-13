class Err {
  constructor(id) {
    this.el = document.getElementById(id);
  }

  show(x) {
    this.el.innerText = x;
    this.el.style.color ="red";
    this.el.style.display = "initial";
  }

  hide() {
    this.el.innerText = "";
    this.el.style.display = "none";
  }
}

export default Err;