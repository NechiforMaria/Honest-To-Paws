const { default: Menu } = require("../page-objects/components/Menu");
const { default: AllArticles } = require("../page-objects/pages/AllArticles");
const {
  default: HomePage,
  default: Homepage,
} = require("../page-objects/pages/Homepage");

describe("Category and articles for category", () => {
  beforeEach(async () => {
    HomePage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
  });

  it("Category", async () => {
    await (await HomePage.cuteCategory).click();
    await expect(await AllArticles.galleryCategory).toHaveText("Cute");
    await HomePage.backPage();
    await Menu.waitForExistHeader();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.funnyCategory).waitForExist();
    await (await HomePage.funnyCategory).click();
    await expect(await AllArticles.galleryCategory).toHaveText("Funny");
    await HomePage.backPage();
    await Menu.waitForExistHeader();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.goodCategory).waitForExist();
    await (await HomePage.goodCategory).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Good");
    await HomePage.backPage();
    await Menu.waitForExistHeader();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.omgCategory).waitForExist({ timeout: 5000 });
    await (await HomePage.omgCategory).click();
    await expect(await AllArticles.galleryCategory).toHaveText("Omg");
  });

  it("Articles for cute category", async () => {
    await (await HomePage.cuteArticle1).waitForExist({ timeout: 5000 });
    await (await HomePage.cuteArticle1).click();
    await expect(await AllArticles.galleryCategory).toHaveText("Cute");
    await HomePage.backPage();
    Menu.waitForExistHeader();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.cuteArticle2).waitForExist({ timeout: 5000 });
    await (await HomePage.cuteArticle2).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Cute");
    await HomePage.backPage();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.cuteArticle3).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Cute");
    await HomePage.backPage();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.cuteArticle4).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Cute");
    await HomePage.backPage();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.seeMoreCuteButton).click();
    await Menu.waitForExistHeader();
    await expect(await Menu.header).toHaveText("CUTE");
  });

  it("Articles for fuuny category", async () => {
    await (await HomePage.fuunyArticle1).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Funny");
    await HomePage.backPage();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.fuunyArticle2).waitForExist();
    await (await HomePage.fuunyArticle2).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Funny");
    await HomePage.backPage();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.fuunyArticle3).waitForExist();
    await (await HomePage.fuunyArticle3).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Funny");
    await HomePage.backPage();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.fuunyArticle4).waitForExist();
    await (await HomePage.fuunyArticle4).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Funny");
    await HomePage.backPage();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.seeMoreFuunyButton).waitForExist();
    await (await HomePage.seeMoreFuunyButton).click();
    await Menu.waitForExistHeader();
    await expect(await Menu.header).toHaveText("FUNNY");
  });

  it("Articles for good category", async () => {
    await (await HomePage.goodArticle1).waitForExist();
    await (await HomePage.goodArticle1).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Good");
    await HomePage.backPage();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.goodArticle2).waitForExist();
    await (await HomePage.goodArticle2).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Good");
    await HomePage.backPage();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.goodArticle3).waitForExist();
    await (await HomePage.goodArticle3).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Good");
    await HomePage.backPage();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.goodArticle4).waitForExist();
    await (await HomePage.goodArticle4).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Good");
    await HomePage.backPage();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.seeMoreGoodeButton).waitForExist();
    await (await HomePage.seeMoreGoodeButton).click();
    await Menu.waitForExistHeader();
    await expect(await Menu.header).toHaveText("GOOD");
  });

  it("Articles for omg category", async () => {
    await (await HomePage.omgArticle1).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Omg");
    await HomePage.backPage();
    await Menu.waitForExistHeader();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.omgArticle2).waitForExist();
    await (await HomePage.omgArticle2).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Omg");
    await HomePage.backPage();
    await Menu.waitForExistHeader();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.omgArticle3).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Omg");
    await HomePage.backPage();
    await Menu.waitForExistHeader();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.omgArticle4).waitForExist();
    await (await HomePage.omgArticle4).click();
    await Menu.waitForExistHeader();
    await expect(await AllArticles.galleryCategory).toHaveText("Omg");
    await HomePage.backPage();
    await Menu.waitForExistHeader();
    await expect(await browser).toHaveUrl("https://astage.honesttopaws.com/");

    await (await HomePage.seeMoreOmgButton).click();
    await Menu.waitForExistHeader();
    await expect(await Menu.header).toHaveText("OMG");
  });
});
