import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";


/* 
    Cada vez que el sitio web se actualice, una nueva carta aleatoria debe mostrarse.

La carta debe tener uno de los posibles palos: Corazones, Picas, Tréboles y Diamantes.

El valor de la carta debe ser uno de los siguientes: 2 a 10, Rey, Reina, Jota o As (sin comodín).
*/


window.onload = function () {
  //write your code here
  function generarCarta() {
  const valores = [2, 4, 5, 6, 7, 8, 9, 10, "Rey", "Reina", "J", "A"];
  /* const palos = ["♥", "♣", "♦", "♠"]; */

  const palos = [
    '<i class="fa-solid fa-heart"></i>',
    '<i class="fa-solid fa-spa"></i>',
    '<i class="fa-solid fa-clover"></i>',
    '<i class="fa-solid fa-diamond"></i>'];


  let indexIcon = Math.floor(Math.random() * palos.length);
  let indexValor = Math.floor(Math.random() * valores.length);

  const iconLeft = document.querySelector(".icon-left");
  const content = document.querySelector(".content");
  const iconRigth = document.querySelector(".icon-rigth");

  iconLeft.innerHTML = palos[indexIcon];
  content.textContent = valores[indexValor];
  iconRigth.innerHTML = palos[indexIcon];

  }

  generarCarta();

  setInterval(generarCarta, 3000);

  document.getElementById("btn").addEventListener("click", generarCarta);
};
