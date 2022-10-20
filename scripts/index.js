const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__container__menu");
const navLogo = document.querySelector("#navbar-logo");
const pageSections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar__container__menu__item__links");


// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
};
menu.addEventListener("click", mobileMenu);


//show active menu when scrolling

const highLightMenu = () => {
    let currentSelected = '';
    pageSections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSelected = section.getAttribute("id");
           // console.log(currentSelected);
        }
    })
    navLinks.forEach( li => {
        li.classList.remove("highlight");
        if(li.classList.contains(currentSelected) && !menuLinks.classList.contains("active")) {
            li.classList.add('highlight');
        }
    })
}
window.addEventListener("scroll", highLightMenu);
window.addEventListener("click", highLightMenu);

//close mobile menu when clicked 
const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <= 1024 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);