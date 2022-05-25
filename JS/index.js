import { RestaurantOfTheMonth } from "./data.js";

const featuredRestaurant = document.querySelector(".items");

window.addEventListener("DOMContentLoaded", function() {
    let displayRestaurant = RestaurantOfTheMonth.map(function(item) {
        return `<div class="item">
       <img src=${item.img} alt=${item.name}>
    <h4>${item.name}</h4>
     </div>`;
    });

    displayRestaurant = displayRestaurant.join("");
    //   console.log(displayRestaurant);

    featuredRestaurant.innerHTML = displayRestaurant;
});

const hiddenNav = document.querySelector(".nav-links")
const navToggleButton = document.querySelector(".nav-toggle")
const linksText = document.querySelectorAll(".link");
const main = document.querySelector(".main");

navToggleButton.addEventListener("click", function() {
    hiddenNav.classList.toggle("show-links");
    main.classList.toggle("opacity");
});

linksText.forEach(function(link) {
    // console.log(link);
    link.addEventListener("click", (e) => {
        // console.log(e.currentTarget);
        hiddenNav.classList.toggle("show-links");
        main.classList.toggle("opacity");
    });
});