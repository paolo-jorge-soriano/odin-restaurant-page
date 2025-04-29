import "./styles.css";
import renderHome from "./home.js";

const btnHome = document.getElementById("btn-home");
const btnMenu = document.getElementById("btn-menu");
const btnAbout = document.getElementById("btn-about");

btnHome.addEventListener("click", () => renderHome());
btnMenu.addEventListener("click", () => console.log("Menu"));
btnAbout.addEventListener("click", () => console.log("About"));

renderHome();