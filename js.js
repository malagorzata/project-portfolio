const toggle = document.querySelector('.menu_toggle');
const menu = document.querySelector('.menu');

/*
 * toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
});

document.addEventListener("click", x => 0);
