import "./home.css";
import bagelhole from "./bagelhole.jpg"

export function createHomeContent() {
    // Create the container div
    const contentDiv = document.createElement("div");
    contentDiv.className = "content";

    // Add the title
    const title = document.createElement("h1");
    title.textContent = "Welcome to The Bagel Hole";
    contentDiv.appendChild(title);

    // Add the first paragraph
    const paragraph1 = document.createElement("p");
    paragraph1.textContent =
        "Step into The Bagel Hole, where we’re not just about bagels—we’re about filling your hole with joy. Our bagels are handcrafted daily, stuffed with love, and toasted to perfection. You’ll leave satisfied, every time.";
    contentDiv.appendChild(paragraph1);

    // Add the second paragraph
    const paragraph2 = document.createElement("p");
    paragraph2.textContent =
        "From the first bite to the last, you’ll feel the passion that goes into every bagel. It’s not just a hole—it’s an experience.";
    contentDiv.appendChild(paragraph2);

    // Add the image
    const image = document.createElement("img");
    image.src = bagelhole;
    image.alt = "Fresh bagels";
    contentDiv.appendChild(image);

    // Add the third paragraph
    const paragraph3 = document.createElement("p");
    paragraph3.textContent =
        "Whether you're a hole-in-one bagel purist or someone who likes it fully loaded, we’ve got what it takes to hit the spot. Because at The Bagel Hole, we don't just make bagels—we make memories.";
    contentDiv.appendChild(paragraph3);

    // Add the fourth paragraph
    const paragraph4 = document.createElement("p");
    paragraph4.textContent = "Visit us today. Your hole deserves it.";
    contentDiv.appendChild(paragraph4);

    return contentDiv;
}
