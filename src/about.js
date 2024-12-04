import "./about.css";
import john from "./john.jpg"

export function createAboutContent() {
    // Create the container div for the about section
    const aboutDiv = document.createElement("div");
    aboutDiv.className = "about";

    // Create the title
    const title = document.createElement("h1");
    title.textContent = "About The Bagel Hole";
    aboutDiv.appendChild(title);

    // Create the first paragraph
    const paragraph1 = document.createElement("p");
    paragraph1.textContent =
        "Welcome to The Bagel Hole, where passion meets dough. Founded by the one and only, John 'Hole-in-One' Dougherty, our shop is more than just a place to grab a bagel—it's an experience that will fill you up inside and out (in the best way possible).";
    aboutDiv.appendChild(paragraph1);

    // Create the second paragraph with a cheeky detail about the proprietor
    const paragraph2 = document.createElement("p");
    paragraph2.textContent =
        "John Dougherty, a man of mystery and bagel mastery, spent years perfecting his craft in the back of a cramped kitchen before finally deciding it was time to share his creations with the world. His love for bagels goes deep, and we mean *deep*—so deep, in fact, that he claims his first word as a child was 'sesame.'";
    aboutDiv.appendChild(paragraph2);

    // Create the third paragraph
    const paragraph3 = document.createElement("p");
    paragraph3.textContent =
        "When John isn't kneading dough, you’ll find him testing new flavors, sharing questionable puns, and making sure every customer leaves with a smile (and a bagel, of course). His secret ingredient? A pinch of love, a dash of humor, and a whole lot of *dough*. That's why The Bagel Hole isn't just a place—it’s a way of life.";
    aboutDiv.appendChild(paragraph3);

    // Create the image
    const image = document.createElement("img");
    image.src = john;
    image.alt = "The Proprietor, John Dougherty, at The Bagel Hole";
    aboutDiv.appendChild(image);

    // Create the final paragraph
    const paragraph4 = document.createElement("p");
    paragraph4.textContent =
        "Come on in, meet John, and experience the bagels everyone’s talking about. Who knows? You might even hear one of his infamous bagel jokes. They’re a bit *cheesy*, but that’s the whole point.";
    aboutDiv.appendChild(paragraph4);

    return aboutDiv;
}
