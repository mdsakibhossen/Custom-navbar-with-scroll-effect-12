
window.onscroll = function () {
    let main_menu = document.querySelector(".main_menu");
    if (window.scrollY > 0) {
        main_menu.classList.add("scrolled_main_menu");
    } else {
        main_menu.classList.remove("scrolled_main_menu");
    }
}

let nav_btn = document.querySelector(".nav_btn");

nav_btn.addEventListener("click", () => {
    let nav_ul = document.querySelector("nav ul");
    nav_ul.classList.toggle("toggle_menu");

});