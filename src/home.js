import "./styles.css";
import heroBackground from "./img/hero-background.jpg";

export default function renderHome() {
    const content = document.getElementById("content");
    content.innerHTML = `
    <section class="hero">
        <div class="hero-text">
            <h1>Welcome to Pizzeria!</h1>
            <p>Lorem Ipsum</p>
        </div>
    </section>
    `;
}