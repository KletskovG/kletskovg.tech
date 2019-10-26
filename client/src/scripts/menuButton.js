window.onload = () => {
    const menuButton = document.querySelector('.header__mobile-button');
    const mobileMenu = document.querySelector('.header__mobile .header__mobile-content');

    if (!menuButton || !mobileMenu) {
        console.error(' Menubutton or mobileMenu was not found ');
        return;
    }


    menuButton.addEventListener('click', () => {
        toggleMenu(menuButton, mobileMenu);
    });
}

function toggleMenu(button, menu) {
    button.classList.toggle('button_is-active');
    menu.classList.toggle('menu_is-active');
}
