import "./styles.css";
import pepperoniPizza from "./img/pepperoni-pizza.png";
import managersChoicePizza from "./img/managers-choice-pizza.png";
import fourCheesePizza from "./img/four-cheese-pizza.png";
import meatLoversPizza from "./img/meat-lovers-pizza.png";

export default function renderMenu() {
    const content = document.getElementById("content");
    content.innerHTML = `
    <section class="menu">
        <h1>Our Menu</h1>
        <hr class="divider">
        <div class="menu-grid">
            <div class="menu-card">
                <img src="${pepperoniPizza}" alt="pepperoni-pizza">
                <h5>Pepperoni Pizza</h5>
                <h6>$16</h6>
            </div>
            <div class="menu-card">
                <img src="${managersChoicePizza}" alt="managers-choice-pizza">
                <h5>Manager's Choice Pizza</h5>
                <h6>$20</h6>
            </div>
            <div class="menu-card">
                <img src="${fourCheesePizza}" alt="four-cheese-pizza">
                <h5>Four Cheese Pizza</h5>
                <h6>$15</h6>
            </div>
            <div class="menu-card">
                <img src="${meatLoversPizza}" alt="meat-lovers-pizza">
                <h5>Meat Lover's Pizza</h5>
                <h6>$25</h6>
            </div>
        </div>
    </section>
    `;
}