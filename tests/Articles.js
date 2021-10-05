import Menu from "../page-objects/components/Menu";
import Homepage from "../page-objects/pages/Homepage";
import HomePage from "../page-objects/pages/Homepage";

describe("All the articles", () => {
  beforeEach(async () => {
    browser.url("https://astage.honesttopaws.com/category/cute");
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
  });

  it("Click on all articles", async () => {
    const articles = await $$(".c-post__content .c-link__cover");
    console.log("articles ", await articles.length);
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
