class HamburgerMenu{
    get hamburgerMenuButton()
    {
        return $('.qa-tablet-header__burger-menu')
    }

    get MenuLinks(){
        return $$('.qa-tablet-navbar__menu .qa-tablet-navbar__item a')
    }

    get cuteButton()
    {
        return $$('.qa-tablet-navbar__menu .qa-tablet-navbar__item a')[0]
    }

    get funnyButton()
    {
        return $$('.qa-tablet-navbar__menu .qa-tablet-navbar__item a')[1]
    }

    get goodButton()
    {
        return $$('.qa-tablet-navbar__menu .qa-tablet-navbar__item a')[2]
    }

    get omgButton()
    {
        return $$('.qa-tablet-navbar__menu .qa-tablet-navbar__item a')[3]
    }

    get aboutButton()
    {
        return $$('.h-list--no-style .c-tablet-navbar__item a')[4]
    }

    get privacyPolicyButton()
    {
        return $$('.h-list--no-style .c-tablet-navbar__item a')[5]
    }

    get dmcaButton()
    {
        return $$('.h-list--no-style .c-tablet-navbar__item a')[6]
    }

    get advertisingButton()
    {
        return $$('.h-list--no-style .c-tablet-navbar__item a')[7]
    }

    get closeMenu()
    {
        return $('.qa-tablet-header__close-menu')
    }
}

export default new HamburgerMenu()