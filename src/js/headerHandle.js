document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    hamburgerMenu.addEventListener('click', () => {
        if (mobileNav.classList.contains('navVisible')) {
            mobileNav.classList.remove('navVisible');
        } else {
            mobileNav.classList.add('navVisible');
        }
    });
});