const texts = [
    "Software Engineer",
    "Web Developer",
    "Programmer",
    "Tech Enthusiast"
];

let index = 0;
let charIndex = 0;
let typing = true;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (typing) {

        typingElement.textContent = texts[index].substring(0, charIndex++);

        if (charIndex > texts[index].length) {
            typing = false;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingElement.textContent = texts[index].substring(0, charIndex--);

        if (charIndex < 0) {
            typing = true;

            index = (index + 1) % texts.length;
        }

    }

    setTimeout(typeEffect, typing ? 100 : 60);

}

typeEffect();

const themeButton = document.getElementById("theme-toggle");

themeButton.onclick = () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeButton.textContent="☀️";
    }else{
        themeButton.textContent="🌙";
    }

};

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.onclick = () => {
    nav.classList.toggle("active");
};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

};