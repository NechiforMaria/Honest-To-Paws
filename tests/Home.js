const {
  default: HamburgerMenu,
} = require("../page-objects/components/HamburgerMenu");
const { default: Menu } = require("../page-objects/components/Menu");
const {
  default: HomePage,
  default: Homepage,
} = require("../page-objects/pages/Homepage");

describe("Home page", () => {
  beforeEach(async () => {
    HomePage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
  });
  it("Menu", async () => {
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
    await (await Menu.moreButton).waitForExist();
    await (await Menu.navbar).isDisplayed();
  });

  it("Submenu", async () => {
    await (await Menu.moreButton).click();
    await (await Menu.navbar).isDisplayed();
    await (await Menu.aboutButton).click();
    await (await Menu.title).waitForExist();
    await expect(await Menu.title).toHaveText("About Us");
    await (await Menu.moreButton).click();

    await (await Menu.privacyPolicyButton).waitForClickable();
    await (await Menu.privacyPolicyButton).click();
    await expect(await Menu.title).toHaveText("Privacy Policy");
    await (await Menu.moreButton).click();

    await (await Menu.dmcaButton).waitForClickable();
    await (await Menu.dmcaButton).click();
    await expect(await Menu.title).toHaveText("DMCA Policy");
    await Menu.moreButton.click();

    await (await Menu.advertisingButton).waitForClickable();
    await (await Menu.advertisingButton).click();
    await expect(await Menu.title).toHaveText("Advertising Interest");
  });

  it("Hamburger Menu first part", async () => {
    await browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.cuteButton).waitForExist();

    await (await HamburgerMenu.cuteButton).click();
    await expect(await Menu.header).toHaveText("CUTE");
    await (await HamburgerMenu.hamburgerMenuButton).waitForExist();

    await browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.funnyButton).click();
    await expect(await Menu.header).toHaveText("FUNNY");

    browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.goodButton).click();
    await expect(await Menu.header).toHaveText("GOOD");

    browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.omgButton).click();
    await expect(await Menu.header).toHaveText("OMG");
  });

  it("Hamburger menu last part", async () => {
    await browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.aboutButton).click();
    await expect(await Menu.title).toHaveText("About Us");

    await browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.privacyPolicyButton).click();
    await expect(await Menu.title).toHaveText("Privacy Policy");

    await browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.dmcaButton).click();
    await expect(await Menu.title).toHaveText("DMCA Policy");

    await browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.advertisingButton).click();
    await expect(await Menu.title).toHaveText("Advertising Interest");

    await browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.closeMenu).click();
  });

  it("Footer", async () => {
    await (await HomePage.aboutFooterButton).click();
    await expect(await Menu.title).toHaveText("About Us");
    await HomePage.backPage();

    await HomePage.privacyPolicyFooterButton.click();
    await expect(await Menu.title).toHaveText("Privacy Policy");
    await HomePage.backPage();

    await (await HomePage.dmcaFooterButton).click();
    await expect(await Menu.title).toHaveText("DMCA Policy");
    await HomePage.backPage();

    await (await HomePage.advertisingFooterButton).click();
    await expect(await Menu.title).toHaveText("Advertising Interest");
  });
});
