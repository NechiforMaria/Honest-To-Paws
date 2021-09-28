class Menu {
  get approveButton() {
    return $('[aria-label="Approve"]');
  }

  get approveButtonFirefox() {
    return $(".fc-button-label");
  }

  get logo() {
    return $(".c-header__logo--HTP");
  }

  get cuteButton() {
    return $$(".qa-navbar__item")[0];
  }

  get funnyButton() {
    return $$(".qa-navbar__item")[1];
  }

  get goodButton() {
    return $$(".qa-navbar__item")[2];
  }

  get omgButton() {
    return $$(".qa-navbar__item")[3];
  }

  get moreButton() {
    return $$(".qa-navbar__item")[4];
  }

  get aboutButton() {
    return $$(".qa-navbar__item")[5];
  }

  get privacyPolicyButton() {
    return $$(".qa-navbar__item")[6];
  }

  get dmcaButton() {
    return $$(".qa-navbar__item")[7];
  }

  get advertisingButton() {
    return $$(".qa-navbar__item")[8];
  }

  get searchButton() {
    return $(".qa-search__input");
  }

  get searchIcon() {
    return $(".qa-search-icon");
  }

  get header() {
    return $(".c-widget-header");
  }

  get navbar() {
    return $(".qa-navbar__submenu");
  }

  get categoryMix() {
    return $(".c-category-mix");
  }

  get title() {
    return $(".c-post__title");
  }

  get mobileMenu() {
    return $(".qa-tablet-header__menu");
  }

  get searchResultBoxMessage() {
    return $(".c-search-result-box__message");
  }

  async waitForExistHeader() {
    await this.header.waitForDisplayed();
  }

  clickOnApproveButton() {
    if (this.approveButton.isExisting) {
      this.approveButton.click();
    }
  }

  clickOnApproveButtonFirefox() {
    if (this.approveButtonFirefox.isExisting) {
      this.approveButtonFirefox.click();
    }
  }
}

export default new Menu();
