const { default: Menu } = require("../page-objects/components/Menu");
const { default: AllArticles } = require("../page-objects/pages/AllArticles");
const {
  default: HomePage,
  default: Homepage,
} = require("../page-objects/pages/Homepage");

describe("Category and articles for category", () => {
  beforeEach(async () => {
    await HomePage.openHomePage();
  });

  it("Category", async () => {
    await (await Menu.approveButton).click();
    await browser.pause(3000);

    await browser.pause(3000);
    await (await HomePage.cuteCategory).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Cute");
    await HomePage.backPage();

    await browser.pause(3000);
    await (await HomePage.funnyCategory).click();
    await browser.pause(3000);
    await (await expect(AllArticles.galleryCategory)).toHaveText("Funny");
    await HomePage.backPage();

    await browser.pause(3000);
    await (await HomePage.goodCategory).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Good");
    await HomePage.backPage();

    await browser.pause(3000);
    await (await HomePage.omgCategory).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Omg");
  });

  it("Articles for cute category", async () => {
    //await Menu.approveButton.click();
    await browser.pause(3000);
    await (await HomePage.cutearticle1).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Cute");
    await HomePage.backPage();

    await browser.pause(1000);
    //await (await HomePage.cutearticle2).waitForExist();

    await (await HomePage.cutearticle2).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Cute");
    HomePage.backPage();

    await browser.pause(1000);
    await (await HomePage.cutearticle3).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Cute");
    HomePage.backPage();

    await browser.pause(1000);
    await (await HomePage.cutearticle4).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Cute");
    HomePage.backPage();

    await browser.pause(1000);
    await (await HomePage.seeMoreCuteButton).click();
    await (await expect(Menu.header)).toHaveText("CUTE");
  });

  it("Articles for fuuny category", async () => {
    //await Menu.approveButton.click()
    await browser.pause(3000);
    await (await HomePage.fuunyarticle1).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Funny");
    await browser.pause(2000);
    await HomePage.backPage();

    await browser.pause(1000);
    await (await HomePage.fuunyarticle2).waitForExist();
    await (await HomePage.fuunyarticle2).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Funny");
    await HomePage.backPage();

    await (await HomePage.fuunyarticle3).waitForExist();
    await (await HomePage.fuunyarticle3).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Funny");
    await HomePage.backPage();

    await (await HomePage.fuunyarticle4).waitForExist();
    await (await HomePage.fuunyarticle4).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Funny");
    await HomePage.backPage();

    await (await HomePage.seeMoreFuunyButton).waitForExist();
    await (await HomePage.seeMoreFuunyButton).click();
    await (await expect(Menu.header)).toHaveText("FUNNY");
  });

  it("Articles for good category", async () => {
    //await Menu.approveButton.click()
    await (await HomePage.goodarticle1).waitForExist();
    await (await HomePage.goodarticle1).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Good");
    await HomePage.backPage();

    await browser.pause(1000);
    await (await HomePage.goodarticle2).waitForExist();
    await (await HomePage.goodarticle2).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Good");
    HomePage.backPage();

    await (await HomePage.goodarticle3).waitForExist();
    await (await HomePage.goodarticle3).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Good");
    HomePage.backPage();

    await (await HomePage.goodarticle4).waitForExist();
    await (await HomePage.goodarticle4).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Good");
    HomePage.backPage();

    await (await HomePage.seeMoreGoodeButton).waitForExist();
    await (await HomePage.seeMoreGoodeButton).click();
    await (await expect(Menu.header)).toHaveText("GOOD");
  });

  it("Articles for omg category", async () => {
    //await Menu.approveButton.click()
    await (await HomePage.omgarticle1).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Omg");
    HomePage.backPage();

    await browser.pause(1000);
    await (await HomePage.omgarticle2).waitForExist();
    await (await HomePage.omgarticle2).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Omg");
    HomePage.backPage();

    await browser.pause(1000);
    await (await HomePage.omgarticle3).click();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Omg");
    HomePage.backPage();

    await (await HomePage.omgarticle4).waitForExist();
    await (await expect(AllArticles.galleryCategory)).toHaveText("Omg");

    HomePage.backPage();
    await (await HomePage.seeMoreOmgButton).click();
    await (await expect(Menu.header)).toHaveText("OMG");
  });
});
