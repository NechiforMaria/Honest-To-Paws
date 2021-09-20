import Menu from "../page-objects/components/Menu";
import CutePage from "../page-objects/pages/CutePage";
import SubscribePage from "../page-objects/pages/SubscribePage";
const { default: HomePage } = require("../page-objects/pages/Homepage");

describe("Articles pages", () => {
  beforeEach(async () => {
    HomePage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
  });
  it("Subscribe", async () => {
    await (await Menu.cuteButton).click();
    await (await CutePage.subscribeEmailInput).click();
    await (
      await CutePage.subscribeEmailInput
    ).addValue(SubscribePage.createValidEmail());
    await (await CutePage.emailButton).click();
    await expect(await SubscribePage.confirmSubscribe).toBeDisplayed();
  });

  it("Trending On Honest To Paws", async () => {
    await (await Menu.cuteButton).click();
    await browser.pause(2000);
    await (await CutePage.trendingArticle1).click();
    await expect(await browser).toHaveUrlContaining("test-post-draft");
    await HomePage.backPage();
    await browser.pause(4000);

    await (await CutePage.trendingArticle2).click();
    await expect(await browser).toHaveUrlContaining("get-jinxed");
  });

  it("More from Honest To Paws", async () => {
    await (await Menu.cuteButton).click();
    await browser.pause(2000);

    await (await CutePage.moreArticle1).click();
    await expect(await browser).toHaveUrlContaining(
      "iconic-films-backstage-photos-copy-copy-copy-copy"
    );
    await HomePage.backPage();

    await browser.pause(2000);
    await (await HomePage.footerContainer).scrollIntoView();
    await browser.pause(2000);

    await (await CutePage.moreArticle2).click();
    await expect(await browser).toHaveUrlContaining(
      "iconic-films-backstage-photos-copy-copy-copy"
    );
    await HomePage.backPage();

    await browser.pause(2000);
    await $(".qa-page-footer__container").scrollIntoView();
    await browser.pause(2000);
    await (await CutePage.moreArticle3).click();
    await expect(await browser).toHaveUrlContaining(
      "iconic-films-backstage-photos-copy-copy"
    );
  });

  it("Social media", async () => {
    await (await Menu.cuteButton).click();
    await browser.pause(2000);

    await (await CutePage.facebookButton).click();
    await browser.pause(2000);
    const windows = await browser.getWindowHandles();
    await browser.switchToWindow(windows[1]);
    await expect(await browser).toHaveUrlContaining(
      "https://www.facebook.com/login.php"
    );
    await browser.closeWindow();
    await browser.switchToWindow(windows[0]);

    await (await CutePage.twiterButton).click();
    await browser.pause(2000);
    const windows1 = await browser.getWindowHandles();
    await browser.switchToWindow(windows1[1]);
    await expect(await browser).toHaveUrlContaining("https://twitter.com");
    await browser.closeWindow();
    await browser.switchToWindow(windows1[0]);
  });
});
