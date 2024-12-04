import "./menu.css";
import sesame from "./sesame.jpg"
import everything from "./everything.jpg"
import cinnamon from "./cinnamon.jpg"

export function createMenuContent() {
    // Create the container div for the menu
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";

    // Create the title
    const title = document.createElement("h1");
    title.textContent = "Our Delicious Bagels";
    menuDiv.appendChild(title);

    // Create a section for each bagel
    const bagels = [
        {
            name: "Classic Sesame Bagel",
            description: "A timeless favorite with toasted sesame seeds on top. Perfect with butter or cream cheese.",
            imageUrl: sesame
        },
        {
            name: "Everything Bagel",
            description: "Covered in a delicious mix of garlic, onion, poppy seeds, and salt. Bold and savory!",
            imageUrl: everything
        },
        {
            name: "Cinnamon Raisin Bagel",
            description: "A sweet treat filled with plump raisins and a hint of cinnamon. Great with cream cheese or as a snack.",
            imageUrl: cinnamon
        }
    ];

    // Create menu items dynamically
    bagels.forEach(bagel => {
        const bagelSection = document.createElement("div");
        bagelSection.className = "bagel-item";

        // Bagel name
        const bagelName = document.createElement("h2");
        bagelName.textContent = bagel.name;
        bagelSection.appendChild(bagelName);

        // Bagel description
        const bagelDescription = document.createElement("p");
        bagelDescription.textContent = bagel.description;
        bagelSection.appendChild(bagelDescription);

        // Bagel image
        const bagelImage = document.createElement("img");
        bagelImage.src = bagel.imageUrl;
        bagelImage.alt = `${bagel.name} image`;
        bagelSection.appendChild(bagelImage);

        menuDiv.appendChild(bagelSection);
    });

    return menuDiv;
}
