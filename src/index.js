import {aboutUs} from "./about-us.js";

function home(){
    const container = document.querySelector(".content");
    let headline1 = document.createElement("h1");
    let headline2 = document.createElement("h1");

    headline1.textContent = "Welcome to";
    headline2.textContent = "Overpriced Grill";

    container.innerHTML = "";
    container.append(headline1, headline2);
}

function fillContent(){
    const container = document.querySelector(".content");
    const menuBtn = document.querySelector(".open");
    const menu = document.querySelector(".mobile-menu");
    const exitMenu = document.querySelector(".exit");
    const links = [...document.querySelectorAll("h4")];
    const homeClicks = document.querySelectorAll(".home");

    //Mobile Handler
    menuBtn.addEventListener("click", () => {
        menu.classList.add("mobile-clicked");
    });

    exitMenu.addEventListener("click", () => {
        menu.classList.remove("mobile-clicked");
    });

    //Switching contents
    for(let i=0; i<links.length; i++){
        links[i].addEventListener("click", () => {
            menu.classList.remove("mobile-clicked");
            if(links[i].textContent == "About us"){
                container.innerHTML = "";
                aboutUs();
            }
        });
    }
    for(let j=0; j<homeClicks.length; j++){
        homeClicks[j].addEventListener("click", () => {
        home();
    });
    }
    
    
}

fillContent();