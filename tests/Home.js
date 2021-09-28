const {
  default: HamburgerMenu,
} = require("../page-objects/components/HamburgerMenu");
const { default: Menu } = require("../page-objects/components/Menu");
const { default: HomePage } = require("../page-objects/pages/Homepage");

describe("Check the functionality for: menu,submenu,hamurgermenu and footer", () => {
  beforeEach(() => {
    HomePage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
  });

  it("Check the menu functionality", async () => {
    await await Menu.cuteButton.waitForDisplayed();
    await (await Menu.cuteButton).click();
    await expect(await Menu.header).toHaveText("CUTE");
    await (await Menu.logo).click();
    await (await Menu.categoryMix).isDisplayed();
    await (await Menu.funnyButton).click();
    await expect(await Menu.header).toHaveText("FUNNY");
    await (await Menu.goodButton).click();
    await expect(await Menu.header).toHaveText("GOOD");
    await (await Menu.omgButton).click();
    await expect(await Menu.header).toHaveText("OMG");
  });

  it("Check the submenu functionality", async () => {
    await await Menu.moreButton.waitForClickable();
    await (await Menu.moreButton).click();
    await (await Menu.aboutButton).waitForClickable();
    await (await Menu.aboutButton).click();
    await (await Menu.title).waitForDisplayed();
    await expect(await Menu.title).toHaveText("About Us");
    await (await Menu.moreButton).waitForDisplayed();
    await (await Menu.moreButton).click();

    await (await Menu.privacyPolicyButton).waitForClickable();
    await (await Menu.privacyPolicyButton).click();
    await (await Menu.title).waitForDisplayed({ timeout: 500 });
    await expect(await Menu.title).toHaveText("Privacy Policy");
    await (await Menu.moreButton).waitForDisplayed();
    await (await Menu.moreButton).click();

    await (await Menu.dmcaButton).waitForClickable();
    await (await Menu.dmcaButton).click();
    await (await Menu.title).waitForDisplayed({ timeout: 500 });
    await expect(await Menu.title).toHaveText("DMCA Policy");
    await (await Menu.moreButton).waitForDisplayed();
    await (await Menu.moreButton).click();

    await (await Menu.advertisingButton).waitForClickable();
    await (await Menu.advertisingButton).click();
    await (await Menu.title).waitForDisplayed({ timeout: 500 });
    await expect(await Menu.title).toHaveText("Advertising Interest");
  });

  it("Check the first four buttons of the hamburger menu functionality", async () => {
    await HomePage.scrollDown();
    await (await HamburgerMenu.hamburgerMenuButton).waitForDisplayed();
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.cuteButton).waitForExist();

    await (await HamburgerMenu.cuteButton).click();
    await (await Menu.header).waitForDisplayed();
    await expect(await Menu.header).toHaveText("CUTE");

    await HomePage.scrollDown();
    await (await HamburgerMenu.hamburgerMenuButton).waitForDisplayed();
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.funnyButton).click();
    await expect(await Menu.header).toHaveText("FUNNY");

    await HomePage.scrollDown();
    await (await HamburgerMenu.hamburgerMenuButton).waitForDisplayed();
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.goodButton).click();
    await expect(await Menu.header).toHaveText("GOOD");

    await HomePage.scrollDown();
    await (await HamburgerMenu.hamburgerMenuButton).waitForDisplayed();
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.omgButton).click();
    await expect(await Menu.header).toHaveText("OMG");
  });

  it("Check the last four buttons of the hamburger menu functionality", async () => {
    await HomePage.scrollDown();
    await (await HamburgerMenu.hamburgerMenuButton).waitForDisplayed();
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.aboutButton).waitForDisplayed();
    await (await HamburgerMenu.aboutButton).click();
    await expect(await Menu.title).toHaveText("About Us");

    await HomePage.scrollDown();
    await (await HamburgerMenu.hamburgerMenuButton).waitForDisplayed();
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.privacyPolicyButton).waitForDisplayed();
    await (await HamburgerMenu.privacyPolicyButton).click();
    await expect(await Menu.title).toHaveText("Privacy Policy");

    await HomePage.scrollDown();
    await (await HamburgerMenu.hamburgerMenuButton).waitForDisplayed();
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.dmcaButton).waitForDisplayed();
    await (await HamburgerMenu.dmcaButton).click();
    await expect(await Menu.title).toHaveText("DMCA Policy");

    await HomePage.scrollDown();
    await (await HamburgerMenu.hamburgerMenuButton).waitForDisplayed();
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.advertisingButton).waitForDisplayed();
    await (await HamburgerMenu.advertisingButton).click();
    await expect(await Menu.title).toHaveText("Advertising Interest");

    await HomePage.scrollDown();
    await (await HamburgerMenu.hamburgerMenuButton).waitForDisplayed();
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.closeMenu).waitForDisplayed();
    await (await HamburgerMenu.closeMenu).click();
  });

  it("Check the first two buttons of the footer functionality", async () => {
    await HomePage.scrollDown();
    await (await HomePage.aboutFooterButton).waitForClickable();
    await (await HomePage.aboutFooterButton).click();
    await (await Menu.title).waitForDisplayed();
    await expect(await Menu.title).toHaveText("About Us");
    await HomePage.backPage();

    await HomePage.scrollDown();
    await (await HomePage.privacyPolicyFooterButton).waitForClickable();
    await (await HomePage.privacyPolicyFooterButton).click();
    await (await Menu.title).waitForDisplayed();
    await expect(await Menu.title).toHaveText("Privacy Policy");
    await HomePage.backPage();
  });

  it("Check the last two buttons of the footer functionality", async () => {
    await HomePage.scrollDown();
    await (await HomePage.dmcaFooterButton).waitForClickable();
    await (await HomePage.dmcaFooterButton).click();
    await (await Menu.title).waitForDisplayed();
    await expect(await Menu.title).toHaveText("DMCA Policy");
    await HomePage.backPage();

    await HomePage.scrollDown();
    await (await HomePage.advertisingFooterButton).waitForClickable();
    await (await HomePage.advertisingFooterButton).click();
    await (await Menu.title).waitForDisplayed();
    await expect(await Menu.title).toHaveText("Advertising Interest");
  });
});
