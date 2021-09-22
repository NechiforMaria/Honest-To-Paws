import Menu from "../page-objects/components/Menu";
import CutePage from "../page-objects/pages/CutePage";
import SubscribePage from "../page-objects/pages/SubscribePage";
const { default: HomePage } = require("../page-objects/pages/Homepage");

describe("Check the widgets on the articles page", () => {
  beforeEach(async () => {
    HomePage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
  });

  it("Subscribe", async () => {
    await await Menu.cuteButton.waitForDisplayed();
    await (await Menu.cuteButton).click();
    await (await CutePage.subscribeEmailInput).click();
    await (
      await CutePage.subscribeEmailInput
    ).addValue(SubscribePage.createValidEmail());
    await (await CutePage.emailButton).click();
    await (await SubscribePage.confirmSubscribe).waitForDisplayed();
    await expect(await SubscribePage.confirmSubscribe).toBeDisplayed();
  });

  it("Click on the articles in the `Trending On Honest To Paws` section", async () => {
    await await Menu.cuteButton.waitForDisplayed();
    await (await Menu.cuteButton).click();

    await (await CutePage.trendingArticle1).waitForDisplayed();
    await (await CutePage.trendingArticle1).click();
    await expect(await HomePage.headerHeadline).toExist();
    await (await Menu.cuteButton).waitForDisplayed();
    await (await Menu.cuteButton).click();

    await await CutePage.trendingArticle2.waitForDisplayed();
    await (await CutePage.trendingArticle2).click();
    await expect(await browser).toHaveUrlContaining("get-jinxed");
  });

  it("Click on the articles in the `More from Honest To Paws` section", async () => {
    await await Menu.cuteButton.waitForDisplayed();
    await (await Menu.cuteButton).click();

    await (await CutePage.moreArticle1).waitForDisplayed();
    await (await CutePage.moreArticle1).click();
    await expect(await browser).toHaveUrlContaining(
      "iconic-films-backstage-photos-copy-copy-copy-copy"
    );
    await (await Menu.cuteButton).waitForDisplayed();
    await (await Menu.cuteButton).click();

    await (await HomePage.footerContainer).waitForDisplayed();
    await (await HomePage.footerContainer).scrollIntoView();

    await await CutePage.moreArticle2.waitForDisplayed();
    await (await CutePage.moreArticle2).click();
    await expect(await browser).toHaveUrlContaining(
      "iconic-films-backstage-photos-copy-copy-copy"
    );
    await (await Menu.cuteButton).waitForDisplayed();
    await (await Menu.cuteButton).click();

    await (await HomePage.footerContainer).waitForDisplayed();
    await (await HomePage.footerContainer).scrollIntoView();

    await (await CutePage.moreArticle3).waitForDisplayed();
    await (await CutePage.moreArticle3).click();
    await expect(await browser).toHaveUrlContaining(
      "iconic-films-backstage-photos-copy-copy"
    );
  });

  it("Share on social media", async () => {
    await await Menu.cuteButton.waitForDisplayed();
    await (await Menu.cuteButton).click();

    await (await CutePage.facebookButton).waitForDisplayed();
    await (await CutePage.facebookButton).click();
    await browser.pause(1000);
    const windows = await browser.getWindowHandles();
    await browser.switchToWindow(windows[1]);
    await expect(await browser).toHaveUrlContaining(
      "https://www.facebook.com/login.php"
    );
    await browser.closeWindow();
    await browser.switchToWindow(windows[0]);

    await (await CutePage.twiterButton).click();
    await browser.pause(1000);
    const windows1 = await browser.getWindowHandles();
    await browser.switchToWindow(windows1[1]);
    await expect(await browser).toHaveUrlContaining("https://twitter.com");
    await browser.closeWindow();
    await browser.switchToWindow(windows1[0]);
  });
});
