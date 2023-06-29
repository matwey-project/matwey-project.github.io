function mobileMenu() {
    let $burgerButton = document.querySelector('.burger-menu');
    let burgerButtonActive = 'burger-menu--active';
    let $wrapperMenu = document.querySelector('.mobile-menu');
    let wrapperMenuActive = 'mobile-menu--active';
    let wrapperMenuOverflow = 'mobile-menu--overflow';

    let $MobileMenuWrapper = document.querySelector('.mobile-menu__wrapper');
    let MobileMenuWrapperClassActive = 'mobile-menu__wrapper--active';
    let $subMenuItems = document.querySelectorAll('.mobile-menu__sub-link');
    let subMenuActive = 'mobile-menu__sub-menu--active';
    let $subMenuBack = document.querySelectorAll('.mobile-menu__sub-back');

    // Burger menu
    $burgerButton.addEventListener('click', () => {
        $burgerButton.classList.toggle(burgerButtonActive);
        $wrapperMenu.classList.toggle(wrapperMenuActive)
    });

    // Mobile list menu
    for(let subLinksBack of $subMenuBack) {
        subLinksBack.addEventListener('click', (event) => {
            let target = event.target;
            let subMenu = target.parentElement;
            $wrapperMenu.classList.remove(wrapperMenuOverflow);
            $MobileMenuWrapper.classList.remove(MobileMenuWrapperClassActive);
            subMenu.classList.remove(subMenuActive);
        });
    }

    for(let subLinks of $subMenuItems) {
        subLinks.addEventListener('click', (event) => {
            let target = event.target;
            let subMenu = target.nextElementSibling;
            $wrapperMenu.classList.add(wrapperMenuOverflow);
            $MobileMenuWrapper.classList.add(MobileMenuWrapperClassActive);
            subMenu.classList.add(subMenuActive);
        });
    }

}
mobileMenu();