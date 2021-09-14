import Menu from "../page-objects/components/Menu";
import HomePage from "../page-objects/pages/Homepage";

describe(`Latest category and editor' picks`, () => {
  beforeEach(async () => {
    HomePage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
  });

  it("Articles for latest category", async () => {
    //await Menu.approveButton.click();
    await (await HomePage.latestArticle1).waitForDisplayed();
    const title = HomePage.allTitleLatestWidget();

    const firstTitle = await title[0];
    const text = await firstTitle.getText();
    await (await HomePage.latestArticle1).click();
    await (await HomePage.titleArticle).waitForDisplayed();
    const title1 = HomePage.titleArticle;
    await (await expect(title1)).toHaveTextContaining(text);
    await HomePage.backPage();

    const secondTitle = await title[1];
    const text2 = await secondTitle.getText();
    await (await HomePage.latestArticle2).waitForDisplayed();
    await (await HomePage.latestArticle2).click();
    const title2 = HomePage.titleArticle;
    await (await expect(title2)).toHaveTextContaining(text2);

    await HomePage.backPage();

    const thirdTitle = await title[2];
    const text3 = await thirdTitle.getText();
    await (await HomePage.latestArticle3).waitForDisplayed();
    await (await HomePage.latestArticle3).click();
    const title3 = HomePage.titleArticle;
    await (await expect(title3)).toHaveTextContaining(text3);

    await HomePage.backPage();

    const fourthTitle = await title[3];
    const text4 = await fourthTitle.getText();
    await (await HomePage.latestArticle4).waitForDisplayed();
    await (await HomePage.latestArticle4).click();
    const title4 = HomePage.titleArticle;
    await (await expect(title4)).toHaveTextContaining(text4);
  });

  it("Editor`s Picks", async () => {
    //await Menu.approveButton.click();
    const alltitle = HomePage.allTitleEditorsWidget();
    const firstTitle = await alltitle[0];
    const text = await firstTitle.getText();
    await browser.pause(1000);
    await HomePage.widgetEditorsFirstPost.click();
    const title = await HomePage.titleArticle;
    await (await expect(title)).toHaveTextContaining(text);
    await HomePage.backPage();

    const secondTitle = await alltitle[1];
    const text2 = await secondTitle.getText();
    await (await HomePage.widgetEditorsSecondPost).waitForDisplayed();
    await (await HomePage.widgetEditorsSecondPost).click();
    const title2 = await HomePage.titleArticle;
    await (await expect(title2)).toHaveTextContaining(text2);
    await HomePage.backPage();

    const thirdTitle = await alltitle[2];
    const text3 = await thirdTitle.getText();
    await (await HomePage.widgetEditorsThirdPost).waitForDisplayed();
    await (await HomePage.widgetEditorsThirdPost).click();
    const title3 = await HomePage.titleArticle;
    await (await expect(title3)).toHaveTextContaining(text3);
  });
});
