// burger-menu
document.addEventListener('click', documentActions)

function documentActions(e) {
    const targetElement = e.target
	
    if (targetElement.closest('.header__menu-icon')) {
        document.documentElement.toggleAttribute('data-menu-open')
    }
}