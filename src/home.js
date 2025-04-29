import "./styles.css";

export default function renderHome() {
    const content = document.getElementById("content");
    content.innerHTML = `
    <section class="hero">
        <div class="hero-text">
            <h1>Welcome to Pizzeria!</h1>
            <p>Taste the tradition. Experience every slice made with love, locally-sourced ingredients, and the perfect crust.</p>
        </div>
    </section>
    `;
}