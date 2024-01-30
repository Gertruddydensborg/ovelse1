window.addEventListener("load", sidenVises);

const med_alko = document.querySelector("#alkohol1");
const uden_alko = document.querySelector("#soda1");
const med_alko2 = document.querySelector("#alkohol2");
const uden_alko2 = document.querySelector("#soda2");

function sidenVises() {
  console.log("sidenVises");
  med_alko.addEventListener("click", clickAlko);
  uden_alko.addEventListener("click", clickUden);
  med_alko2.addEventListener("click", clickAlko);
  uden_alko2.addEventListener("click", clickUden);
}

function clickAlko() {
  console.log("indeholder alkohol");
}

function clickUden() {
  console.log("alkoholfri");
}
