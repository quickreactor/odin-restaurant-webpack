// alert("fuck webpack");
import "./styles.css";
import { createHomeContent } from './home.js';
import { createMenuContent } from './menu.js';
import { createAboutContent } from './about.js';

const qs = document.querySelector.bind(document);
const qsa = document.querySelectorAll.bind(document);

const contentDiv = qs('#content');
const navEl = qs('nav');
const buttons = qsa('button');
navEl.addEventListener('click', navClickHandler);


function navClickHandler(e) {
    buttons.forEach(b => {
        b.classList.remove('selected');
    });
    e.target.classList.add('selected');
    switch (e.target.innerText) {
        case 'Home':
            // alert('home');
            contentDiv.innerHTML = '';
            contentDiv.appendChild(createHomeContent())
            break;
        case 'Menu':
            // alert('menu');
            contentDiv.innerHTML = '';
            contentDiv.appendChild(createMenuContent())
            break;
        case 'About':
            // alert('about');
            contentDiv.innerHTML = '';
            contentDiv.appendChild(createAboutContent())
            break;
    }

}
