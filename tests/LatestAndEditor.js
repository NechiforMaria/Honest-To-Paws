import Menu from "../page-objects/components/Menu";
import HomePage from "../page-objects/pages/Homepage";

describe(`Latest category and editor' picks`, () => {
  beforeEach(async () => {
    HomePage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
  });

  it("Articles for latest category", async () => {
    await (await HomePage.latestArticle1).waitForDisplayed();
    const title = await HomePage.allTitleLatestWidget();

    const firstTitle = await title[0];
    const text = await firstTitle.getText();
    await (await HomePage.latestArticle1).click();
    await (await HomePage.titleArticle).waitForDisplayed();
    const title1 = HomePage.titleArticle;
    await expect(await title1).toHaveTextContaining(text);
    await HomePage.backPage();

    const secondTitle = await title[1];
    const text2 = await secondTitle.getText();
    await (await HomePage.latestArticle2).waitForDisplayed();
    await (await HomePage.latestArticle2).click();
    await (await HomePage.titleArticle).waitForDisplayed();
    const title2 = HomePage.titleArticle;
    await expect(await title2).toHaveTextContaining(text2);

    await HomePage.backPage();

    const thirdTitle = await title[2];
    const text3 = await thirdTitle.getText();
    await (await HomePage.latestArticle3).waitForDisplayed();
    await (await HomePage.latestArticle3).click();
    await (await HomePage.titleArticle).waitForDisplayed();
    const title3 = await HomePage.titleArticle;
    await expect(await title).toHaveTextContaining(text3);

    await HomePage.backPage();

    const fourthTitle = await title[3];
    const text4 = await fourthTitle.getText();
    await (await HomePage.latestArticle4).waitForDisplayed();
    await (await HomePage.latestArticle4).click();
    await (await HomePage.titleArticle).waitForDisplayed();
    const title4 = await HomePage.titleArticle;
    await expect(await title4).toHaveTextContaining(text4);
  });

  it("Editor`s Picks", async () => {
    const alltitle = await HomePage.allTitleEditorsWidget();
    const firstTitle = await alltitle[0];
    const text = await firstTitle.getText();
    await browser.pause(1000);
    await (await HomePage.widgetEditorsFirstPost).waitForDisplayed();
    await (await HomePage.widgetEditorsFirstPost).click();
    const title = await HomePage.titleArticle;
    await expect(await title).toHaveTextContaining(text);
    await HomePage.backPage();

    const secondTitle = await alltitle[1];
    const text2 = await secondTitle.getText();
    await (await HomePage.widgetEditorsSecondPost).waitForDisplayed();
    await (await HomePage.widgetEditorsSecondPost).click();
    const title2 = await HomePage.titleArticle;
    await expect(await title2).toHaveTextContaining(text2);
    await HomePage.backPage();

    const thirdTitle = await alltitle[2];
    const text3 = await thirdTitle.getText();
    await (await HomePage.widgetEditorsThirdPost).waitForDisplayed();
    await (await HomePage.widgetEditorsThirdPost).click();
    const title3 = await HomePage.titleArticle;
    await expect(await title3).toHaveTextContaining(text3);
  });
});
