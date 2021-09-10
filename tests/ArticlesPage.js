import Menu from "../page-objects/components/Menu";
import CutePage from "../page-objects/pages/CutePage";
import SubscribePage from "../page-objects/pages/SubscribePage";
const { default: HomePage } = require("../page-objects/pages/Homepage");

describe("Articles pages", () => {
  beforeEach(async () => {
    await HomePage.openHomePage();
  });
  it("Subscribe", async () => {
    await (await Menu.approveButton).click();
    await (await Menu.cuteButton).click();
    await browser.pause(4000);
    await (await CutePage.subscribeLabel).click();
    await (await CutePage.subscribeLabel).addValue(SubscribePage.email());
    await (await CutePage.emailButton).click();
    await (await expect(SubscribePage.confirmSubscribe)).toBeDisplayed();
  });

  it("Trending On Honest To Paws", async () => {
    //await Menu.approveButton.click()
    await (await Menu.cuteButton).click();
    await browser.pause(2000);
    await (await CutePage.trendingArticle1).click();
    await (
      await expect(browser)
    ).toHaveUrl(
      "https://astage.honesttopaws.com/g/test-post-draft?as=799&bdk=0"
    );
    await HomePage.backPage();
    await browser.pause(4000);

    await (await CutePage.trendingArticle2).click();
    await (
      await expect(browser)
    ).toHaveUrl("https://astage.honesttopaws.com/g/get-jinxed?as=799&bdk=0");
  });

  it("More from Honest To Paws", async () => {
    //await Menu.approveButton.click()
    await (await Menu.cuteButton).click();
    await browser.pause(2000);

    await (await CutePage.moreArticle1).click();
    await (
      await expect(browser)
    ).toHaveUrl(
      "https://astage.honesttopaws.com/g/iconic-films-backstage-photos-copy-copy-copy-copy?as=799&bdk=0"
    );
    await HomePage.backPage();

    await browser.pause(2000);
    await (await HomePage.footerContainer).scrollIntoView();
    await browser.pause(2000);

    await (await CutePage.moreArticle2).click();
    await (
      await expect(browser)
    ).toHaveUrl(
      "https://astage.honesttopaws.com/g/iconic-films-backstage-photos-copy-copy-copy?as=799&bdk=0"
    );
    await HomePage.backPage();

    await browser.pause(2000);
    await $(".qa-page-footer__container").scrollIntoView();
    await browser.pause(2000);
    await (await CutePage.moreArticle3).click();
    await (
      await expect(browser)
    ).toHaveUrl(
      "https://astage.honesttopaws.com/g/iconic-films-backstage-photos-copy-copy?as=799&bdk=0"
    );
  });

  it.only("Social media", async () => {
    await (await Menu.approveButton).click();
    await (await Menu.cuteButton).click();
    await browser.pause(2000);

    await (await CutePage.facebookButton).click();
    await browser.pause(2000);
    const windows = await browser.getWindowHandles();
    await browser.switchToWindow(windows[1]);
    await (
      await expect(browser)
    ).toHaveUrlContaining("https://www.facebook.com/login.php");
    await browser.closeWindow();
    await browser.switchToWindow(windows[0]);

    await (await CutePage.twiterButton).click();
    await browser.pause(2000);
    const windows1 = await browser.getWindowHandles();
    await browser.switchToWindow(windows1[1]);
    await (await expect(browser)).toHaveUrlContaining("https://twitter.com");
    await browser.closeWindow();
    await browser.switchToWindow(windows1[0]);
  });
});
