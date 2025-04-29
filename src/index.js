import "./styles.css";
import renderHome from "./home.js";
import renderAbout from "./about.js";
import renderMenu from "./menu.js";

const btnHome = document.getElementById("btn-home");
const btnMenu = document.getElementById("btn-menu");
const btnAbout = document.getElementById("btn-about");

btnHome.addEventListener("click", () => renderHome());
btnMenu.addEventListener("click", () => renderMenu());
btnAbout.addEventListener("click", () => renderAbout());

renderHome();

const currentYear = new Date().getFullYear();
document.getElementById("current-year").innerText = currentYear;