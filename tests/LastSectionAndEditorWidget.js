import Menu from "../page-objects/components/Menu";
import HomePage from "../page-objects/pages/Homepage";

describe(`Click on the articles for latest section and editor' picks`, () => {
  beforeEach(async () => {
    HomePage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
  });

  it("Click on the articles for latest section first part", async () => {
    await HomePage.scrollDownToPixel100();
    await await HomePage.latestArticle1.waitForDisplayed();
    const title = await HomePage.allTitleLatestWidget();

    const firstTitle = await title[0];
    const validTextToSearch = await firstTitle.getText();
    await (await HomePage.latestArticle1).click();
    await (await HomePage.titleArticle).waitForDisplayed();
    const title1 = HomePage.titleArticle;
    await expect(await title1).toHaveTextContaining(validTextToSearch);
    await HomePage.backPage();

    await HomePage.scrollDownToPixel100();
    const secondTitle = await title[1];
    const validTextToSearch2 = await secondTitle.getText();
    await (await HomePage.latestArticle2).waitForDisplayed();
    await (await HomePage.latestArticle2).click();
    await (await HomePage.titleArticle).waitForDisplayed();
    const title2 = await HomePage.titleArticle;
    await expect(await title2).toHaveTextContaining(validTextToSearch2);
    await HomePage.backPage();
  });

  it("Click on the articles for latest section last part", async () => {
    await HomePage.scrollDownToPixel100();
    const title = await HomePage.allTitleLatestWidget();
    const thirdTitle = await title[2];
    const validTextToSearch3 = await thirdTitle.getText();
    await (await HomePage.latestArticle3).waitForDisplayed();
    await (await HomePage.latestArticle3).click();
    await (await HomePage.titleArticle).waitForDisplayed();
    const title3 = await HomePage.titleArticle;
    await expect(await title3).toHaveTextContaining(validTextToSearch3);
    await HomePage.backPage();

    await HomePage.scrollDownToPixel100();
    const fourthTitle = await title[3];
    const validTextToSearch4 = await fourthTitle.getText();
    await (await HomePage.latestArticle4).waitForDisplayed();
    await (await HomePage.latestArticle4).click();
    await (await HomePage.titleArticle).waitForDisplayed();
    const title4 = await HomePage.titleArticle;
    await expect(await title4).toHaveTextContaining(validTextToSearch4);
  });

  it("Check the Editor`s Picks widget functionality", async () => {
    const allTitle = await HomePage.allTitleEditorsWidget();
    const firstTitle = await alltitle[0];
    const validTextToSearch = await firstTitle.getText();
    await (await HomePage.widgetEditorsFirstPost).waitForDisplayed();
    await (await HomePage.widgetEditorsFirstPost).click();
    const title = await HomePage.titleArticle;
    await expect(await title).toHaveTextContaining(validTextToSearch);
    await HomePage.backPage();

    const secondTitle = await alltitle[1];
    const validTextToSearch2 = await secondTitle.getText();
    await (await HomePage.widgetEditorsSecondPost).waitForDisplayed();
    await (await HomePage.widgetEditorsSecondPost).click();
    const title2 = await HomePage.titleArticle;
    await (await title2).waitForDisplayed();
    await expect(await title2).toHaveTextContaining(validTextToSearch2);
    await HomePage.backPage();

    const thirdTitle = await alltitle[2];
    const validTextToSearch3 = await thirdTitle.getText();
    await (await HomePage.widgetEditorsThirdPost).waitForDisplayed();
    await (await HomePage.widgetEditorsThirdPost).click();
    const title3 = await HomePage.titleArticle;
    await (await title3).waitForDisplayed();
    await expect(await title3).toHaveTextContaining(validTextToSearch3);
  });
});
