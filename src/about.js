import "./styles.css";

export default function renderAbout() {
    const content = document.getElementById("content");
    content.innerHTML = `
    <section class="about">
        <h1>About Pizzeria</h1>
        <hr class="divider">
        <p>
            At Pizzeria, we're passionate about crafting the perfect slice. 
            Since opening our doors, we've been serving up fresh, handcrafted pizzas made with quality ingredients, 
            homemade dough, and bold flavors. Whether you're craving a classic Margherita or something adventurous, 
            our menu has something for everyone. Family-owned and community-focused, we're proud to be your 
            neighborhood spot for great food and good times.
        </p>
    </section>
    `;
}