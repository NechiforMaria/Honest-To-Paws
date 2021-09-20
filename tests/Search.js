const { default: Menu } = require("../page-objects/components/Menu");
const { default: Homepage } = require("../page-objects/pages/Homepage");

describe("Search", () => {
  beforeEach(async () => {
    Homepage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
  });
  it("Search with valid word", async () => {
    await (await Menu.searchButton).waitForDisplayed();
    await (await Menu.searchButton).click();
    const text = "Finish The Most Iconic Book Titles In History";
    await (await Menu.searchButton).setValue(text);
    await (await Menu.searchIcon).waitForDisplayed();
    await (await Menu.searchIcon).click();
    await expect(await Menu.searchResultBoxMessage).toHaveTextContaining(text);
  });

  it("Search with invalid word", async () => {
    await (await Menu.searchButton).waitForDisplayed();
    await (await Menu.searchButton).click();
    const text = "qwq";
    await (await Menu.searchButton).setValue(text);
    await (await Menu.searchIcon).waitForDisplayed();
    await (await Menu.searchIcon).click();
    await expect(await Menu.searchResultBoxMessage).toHaveTextContaining(
      `Sorry, we couldn't find any results to match that search.`
    );
  });
});
