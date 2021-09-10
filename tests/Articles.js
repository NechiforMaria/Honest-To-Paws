import Menu from "../page-objects/components/Menu";
import AllArticles from "../page-objects/pages/AllArticles";
import HomePage from "../page-objects/pages/Homepage";

describe("All the articles", () => {
  beforeEach(async () => {
    await HomePage.openHomePage();
  });

  it("Click on the all articles", async () => {
    await (await Menu.approveButton).click();
    await (await Menu.cuteButton).click();
    await (await AllArticles.first).waitForExist({ timeout: 5000 });
    await (await AllArticles.first).click();
    HomePage.backPage();

    await (await AllArticles.second).waitForExist({ timeout: 5000 });
    await (await AllArticles.second).click();
    HomePage.backPage();

    await (await AllArticles.third).waitForExist({ timeout: 5000 });
    await (await AllArticles.third).click();
    HomePage.backPage();

    await (await AllArticles.fourth).waitForExist({ timeout: 5000 });
    await (await AllArticles.fourth).click();
    HomePage.backPage();

    await (await AllArticles.fifth).waitForExist({ timeout: 5000 });
    await (await AllArticles.fifth).click();
    await HomePage.backPage();

    await (await AllArticles.sixth).waitForExist({ timeout: 5000 });
    await (await AllArticles.sixth).click();
    HomePage.backPage();

    await (await AllArticles.seventh).waitForExist({ timeout: 5000 });
    await (await AllArticles.seventh).click();
    HomePage.backPage();

    await (await AllArticles.eighth).waitForExist({ timeout: 5000 });
    await (await AllArticles.eighth).click();
    HomePage.backPage();

    await (await AllArticles.ninth).waitForExist({ timeout: 5000 });
    await (await AllArticles.ninth).click();
    HomePage.backPage();

    await (await AllArticles.tenth).waitForExist();
    await (await AllArticles.tenth).click();
  });
});
