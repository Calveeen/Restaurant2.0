function aboutUs(){
    const container = document.querySelector(".content");
    let headline = document.createElement("h1");
    let image = document.createElement("img");
    let description = document.createElement("p");
    let reset = () => {
        headline = document.createElement("h1");
        image = document.createElement("img");
        description = document.createElement("p");
    };

    headline.textContent = "What we serve";
    image.setAttribute("src", "../img/sausage.jpeg");
    description.textContent = `What we do here is simple and delicious. All we do
    is grill your food to perfection and serve it hot as heck! That's why it's super
    duper expensive here. Come on down because it's worth it for sure.`
    description.style.paddingBottom = "32px";
    container.append(headline, image, description);

    reset();   

    headline.textContent = "Is it worth it?";
    image.setAttribute("src", "../img/money.jpg");
    description.textContent = `I mean yeah sure, one sausage for $20 sounds really
    expensive, but hear me out. It's fucking goooooood, so just come on down. 
    (Also there is tip gratuity of 50%!)`;
    description.style.paddingBottom = "32px";
    container.append(headline, image, description);
    
}

export {aboutUs};