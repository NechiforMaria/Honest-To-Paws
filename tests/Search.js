const { default: Menu } = require("../page-objects/components/Menu");
const { default: HomePage } = require("../page-objects/pages/Homepage");

DEVICE == "mobile"
  ? describe.skip
  : describe("Check the search functionality", async () => {
      beforeEach(async () => {
        HomePage.openDevice("https://astage.honesttopaws.com");
        //Homepage.openHomePage();
        //Menu.waitForExistHeader();
        Menu.clickOnApproveButton();
        Menu.clickOnApproveButtonFirefox();
      });
      it("Search with valid word", async () => {
        await HomePage.scrollDownToPixel100();
        await (await Menu.searchIcon).waitForDisplayed();
        await (await Menu.searchIcon).click();
        browser.pause(1000);
        await (await Menu.searchInput).waitForDisplayed();
        await (await Menu.searchInput).click();
        const validTextToSearch =
          "Finish The Most Iconic Book Titles In History";
        await (await Menu.searchInput).setValue(validTextToSearch);
        await (await Menu.searchIcon).waitForDisplayed();
        await (await Menu.searchIcon).click();
        await expect(await Menu.searchResultBoxMessage).toHaveTextContaining(
          validTextToSearch
        );
      });

      it("Search with invalid word", async () => {
        await (await Menu.searchIcon).waitForDisplayed();
        await (await Menu.searchIcon).click();
        browser.pause(1000);
        await (await Menu.searchInput).waitForDisplayed();
        await (await Menu.searchInput).click();
        const invalidTextToSearch = "qwq";
        await (await Menu.searchInput).setValue(invalidTextToSearch);
        await (await Menu.searchIcon).waitForDisplayed();
        await (await Menu.searchIcon).click();
        await expect(await Menu.searchResultBoxMessage).toHaveTextContaining(
          `Sorry, we couldn't find any results to match that search.`
        );
      });
    });
