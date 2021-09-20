import Menu from "../page-objects/components/Menu";
import AllArticles from "../page-objects/pages/AllArticles";
import CutePage from "../page-objects/pages/CutePage";
import Homepage from "../page-objects/pages/Homepage";
import SubscribePage from "../page-objects/pages/SubscribePage";

describe("Subscribe", () => {
  beforeEach(async () => {
    Homepage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
  });
  it("Subscribe on the articles page", async () => {
    await (await Menu.cuteButton).click();
    await (await CutePage.subscribeEmailInput).waitForDisplayed();
    await (
      await CutePage.subscribeEmailInput
    ).addValue(SubscribePage.createValidEmail());
    await (await CutePage.emailButton).click();
    await expect(await SubscribePage.confirmSubscribe).toBeDisplayed();
  });

  it("Subscribe with invalid email on the articles page ", async () => {
    await (await Menu.cuteButton).click();
    await (await CutePage.subscribeEmailInput).waitForDisplayed();
    await (await CutePage.subscribeEmailInput).addValue("text@gmail.com");
    await (await CutePage.emailButton).click();
    await expect(await SubscribePage.error).toHaveTextContaining(
      "There are errors below"
    );
  });

  it("Subscribe after press email button", async () => {
    await (await Menu.cuteButton).click();
    await (await CutePage.emailButton).waitForDisplayed();
    await (await CutePage.emailButton).click();
    await (await SubscribePage.emailAddress).waitForDisplayed();
    await (
      await SubscribePage.emailAddress
    ).addValue(SubscribePage.createValidEmail());
    await (await SubscribePage.firstName).waitForDisplayed();
    await (await SubscribePage.firstName).addValue("Ana");
    await (await SubscribePage.lastName).waitForDisplayed();
    await (await SubscribePage.lastName).addValue("X");
    await (await SubscribePage.submitButton).waitForDisplayed();
    await (await SubscribePage.submitButton).click();
    await expect(await browser).toHaveUrl(
      "https://honesttopaws.us3.list-manage.com/subscribe/post"
    );
  });
});
