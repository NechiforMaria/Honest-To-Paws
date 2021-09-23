const { default: Menu } = require("../page-objects/components/Menu");
const { default: Homepage } = require("../page-objects/pages/Homepage");

describe("Check the search functionality", async () => {
  beforeEach(async () => {
    Homepage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
  });
  it("Search with valid word", async () => {
    await (await Menu.searchButton).waitForDisplayed();
    await (await Menu.searchButton).click();
    const validTextToSearch = "Finish The Most Iconic Book Titles In History";
    await (await Menu.searchButton).setValue(validTextToSearch);
    await (await Menu.searchIcon).waitForDisplayed();
    await (await Menu.searchIcon).click();
    await expect(await Menu.searchResultBoxMessage).toHaveTextContaining(
      validTextToSearch
    );
  });

  it("Search with invalid word", async () => {
    await (await Menu.searchButton).waitForDisplayed();
    await (await Menu.searchButton).click();
    const validTextToSearch = "qwq";
    await (await Menu.searchButton).setValue(validTextToSearch);
    await (await Menu.searchIcon).waitForDisplayed();
    await (await Menu.searchIcon).click();
    await expect(await Menu.searchResultBoxMessage).toHaveTextContaining(
      `Sorry, we couldn't find any results to match that search.`
    );
  });
});
