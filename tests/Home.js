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
    await HomePage.openHomePage();
  });
  it("Menu", async () => {
    await (await Menu.approveButton).click();
    await (await Menu.cuteButton).click();
    await (await expect(Menu.header)).toHaveText("CUTE");
    await (await Menu.logo).click();
    await (await Menu.categoryMix).isDisplayed();
    await (await Menu.funnyButton).click();
    await (await expect(Menu.header)).toHaveText("FUNNY");
    await (await Menu.goodButton).click();
    await (await expect(Menu.header)).toHaveText("GOOD");
    await (await Menu.omgButton).click();
    await (await expect(Menu.header)).toHaveText("OMG");
    await (await Menu.moreButton).waitForExist();
    await (await Menu.navbar).isDisplayed();
  });

  it("Submenu", async () => {
    //await Menu.approveButton.click()
    await (await Menu.moreButton).click();
    await (await Menu.navbar).isDisplayed();
    await browser.pause(2000);
    await (await Menu.aboutButton).click();
    await (await Menu.title).waitForExist();
    await (await expect(Menu.title)).toHaveText("About Us");
    await (await Menu.moreButton).click();

    await (await Menu.privacyPolicyButton).waitForClickable();
    await (await Menu.privacyPolicyButton).click();
    await browser.pause(3000);
    await (await expect(Menu.title)).toHaveText("Privacy Policy");
    await (await Menu.moreButton).click();

    await (await Menu.dmcaButton).waitForClickable();
    await (await Menu.dmcaButton).click();
    await browser.pause(3000);
    await (await expect(Menu.title)).toHaveText("DMCA Policy");
    await Menu.moreButton.click();

    await (await Menu.advertisingButton).waitForClickable();
    await (await Menu.advertisingButton).click();
    await browser.pause(3000);
    await (await expect(Menu.title)).toHaveText("Advertising Interest");
  });

  it("Hamburger Menu first part", async () => {
    //await Menu.approveButton.click()
    await browser.execute(() => window.scrollTo(0, 500));
    await HamburgerMenu.hamburgerMenuButton.click();
    await (await HamburgerMenu.cuteButton).waitForExist();

    await (await HamburgerMenu.cuteButton).click();
    await (await expect(Menu.header)).toHaveText("CUTE");
    await (await HamburgerMenu.hamburgerMenuButton).waitForExist();

    await browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await HamburgerMenu.funnyButton.click();
    await (await expect(Menu.header)).toHaveText("FUNNY");

    browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.goodButton).click();
    await (await expect(Menu.header)).toHaveText("GOOD");

    browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.omgButton).click();
    await (await expect(Menu.header)).toHaveText("OMG");
  });

  it("Hamburger menu last part", async () => {
    //await Menu.approveButton.click()
    browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.aboutButton).click();
    await (await expect(Menu.title)).toHaveText("About Us");

    browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.privacyPolicyButton).click();
    await (await expect(Menu.title)).toHaveText("Privacy Policy");

    browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.dmcaButton).click();
    await (await expect(Menu.title)).toHaveText("DMCA Policy");

    browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.advertisingButton).click();
    await (await expect(Menu.title)).toHaveText("Advertising Interest");

    browser.execute(() => window.scrollTo(0, 500));
    await (await HamburgerMenu.hamburgerMenuButton).click();
    await (await HamburgerMenu.closeMenu).click();
  });

  it("Footer", async () => {
    //await Menu.approveButton.click()
    await browser.pause(2000);
    await (await HomePage.aboutFooterButton).click();
    await HomePage.backPage();
    await browser.pause(2000);

    await HomePage.privacyPolicyFooterButton.click();
    await HomePage.backPage();
    await browser.pause(2000);

    await (await HomePage.dmcaFooterButton).click();
    await HomePage.backPage();
    await browser.pause(2000);

    await (await HomePage.advertisingFooterButton).click();
  });
});
