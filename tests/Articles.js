import Menu from "../page-objects/components/Menu";
import AllArticles from "../page-objects/pages/AllArticles";
import Homepage from "../page-objects/pages/Homepage";
import HomePage from "../page-objects/pages/Homepage";

describe("Click on all articles from the cute page", () => {
  beforeEach(async () => {
    browser.url("https://astage.honesttopaws.com/category/cute");
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
  });

  it("Check if can click on the articles and if they open correctly", async () => {
    const articles = AllArticles.articles;
    let article;
    let articleHref;
    for await (article of articles) {
      articleHref = await article.getAttribute("href");
      await Homepage.scrollDown();
      await article.scrollIntoView({ block: "center" });
      await article.click();
      await browser.pause(1000);
      await expect(browser).toHaveUrlContaining(articleHref.slice(0, -6));
      await HomePage.backPage();
      await browser.pause(1000);
    }
  });
});
