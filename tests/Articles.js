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
    await (await AllArticles.firstArticle).waitForExist();
    await (await AllArticles.firstArticle).click();
    await await expect(browser).toHaveUrlContaining("people-looked-past-pff");
    HomePage.backPage();
    await await expect(browser).toHaveUrl(
      "https://astage.honesttopaws.com/category/cute"
    );

    await (await AllArticles.secondArticle).waitForExist();
    await (await AllArticles.secondArticle).click();
    await await expect(browser).toHaveUrlContaining("get-jinxed");
    HomePage.backPage();
    await await expect(browser).toHaveUrl(
      "https://astage.honesttopaws.com/category/cute"
    );

    await (await AllArticles.thirdArticle).waitForExist();
    await (await AllArticles.thirdArticle).click();
    await await expect(browser).toHaveUrlContaining(
      "iconic-films-backstage-photos-copy-copy-copy-copy"
    );
    HomePage.backPage();
    await await expect(browser).toHaveUrl(
      "https://astage.honesttopaws.com/category/cute"
    );

    await (await AllArticles.fourthArticle).waitForExist();
    await (await AllArticles.fourthArticle).click();
    await await expect(browser).toHaveUrlContaining(
      "iconic-films-backstage-photos-copy-copy-copy"
    );
    HomePage.backPage();
    await await expect(browser).toHaveUrl(
      "https://astage.honesttopaws.com/category/cute"
    );

    await (await AllArticles.fifthArticle).waitForExist();
    await (await AllArticles.fifthArticle).click();
    await await expect(browser).toHaveUrlContaining(
      "iconic-films-backstage-photos-copy-copy"
    );
    await HomePage.backPage();
    await await expect(browser).toHaveUrl(
      "https://astage.honesttopaws.com/category/cute"
    );

    await (await AllArticles.sixthArticle).waitForExist();
    await (await AllArticles.sixthArticle).click();
    await await expect(browser).toHaveUrlContaining(
      "iconic-films-backstage-photos-copy"
    );
    HomePage.backPage();
    await await expect(browser).toHaveUrl(
      "https://astage.honesttopaws.com/category/cute"
    );

    await (await AllArticles.seventhArticle).waitForExist();
    await (await AllArticles.seventhArticle).click();
    await await expect(browser).toHaveUrlContaining("ecommerce");
    HomePage.backPage();
    await await expect(browser).toHaveUrl(
      "https://astage.honesttopaws.com/category/cute"
    );

    await (await AllArticles.eighthArticle).waitForExist();
    await (await AllArticles.eighthArticle).click();
    await await expect(browser).toHaveUrlContaining(
      "how-to-keep-your-health-insurance-when-furloughed-or-laid-off"
    );
    HomePage.backPage();
    await await expect(browser).toHaveUrl(
      "https://astage.honesttopaws.com/category/cute"
    );

    await (await AllArticles.ninthArticle).waitForExist();
    await (await AllArticles.ninthArticle).click();
    await await expect(browser).toHaveUrlContaining("beatles-lyrics");
    HomePage.backPage();
    await await expect(browser).toHaveUrl(
      "https://astage.honesttopaws.com/category/cute"
    );

    await (await AllArticles.tenthArticle).waitForExist();
    await (await AllArticles.tenthArticle).click();
    await await expect(browser).toHaveUrlContaining("delusional-house-cats");
  });
});