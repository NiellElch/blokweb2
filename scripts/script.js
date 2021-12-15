// JavaScript Document

// uitklappen van hamburger menu
var hamburger_menu = document.querySelector("header nav ul:first-of-type li:nth-of-type(1) img")
var hamburger_menu_uitgeklapt = document.querySelector("header nav ul:nth-of-type(2)");

function show_hamburger_menu() {
    hamburger_menu_uitgeklapt.classList.add("hamburgermenu");
}

hamburger_menu.addEventListener("click", show_hamburger_menu);

// inklappen van hamburger menu
var hamburger_menu_kruisje = document.querySelector("header nav ul:nth-of-type(2) li:last-of-type");

function hide_hamburger_menu(){
    hamburger_menu_uitgeklapt.classList.remove("hamburgermenu");
}

hamburger_menu_kruisje.addEventListener("click", hide_hamburger_menu);


// winkelmandje audio en animatie
var in_mandje_knop = document.querySelector(".detailpagina>section:first-of-type button:first-of-type");
var winkelmandje = document.querySelector("header nav ul:first-of-type li:nth-of-type(6)");
var klik_geluid = new Audio("images/geluidje.mp3");

function in_mandje(){
    winkelmandje.classList.add("inwinkelwagen");
    klik_geluid.play();
}

in_mandje_knop.addEventListener("click", in_mandje);