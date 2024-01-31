window.addEventListener("load", sidenVises);

const med_alko = document.querySelector("#alkohol1");
const uden_alko = document.querySelector("#soda1");
const med_alko2 = document.querySelector("#alkohol2");
const uden_alko2 = document.querySelector("#soda2");

function sidenVises() {
  console.log("sidenVises");
  med_alko.addEventListener("click", clickUden);
  uden_alko.addEventListener("click", clickUden);
  med_alko2.addEventListener("click", clickUden);
  uden_alko2.addEventListener("click", clickUden);
}

function clickUden() {
  if (this.id == "soda1" || this.id == "soda2") {
    console.log("alkoholfri");
  } else {
    console.log("indeholder alkohol");
  }
}
