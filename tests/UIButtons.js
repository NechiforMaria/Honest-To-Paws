import Menu from "../page-objects/components/Menu";
import HomePage from "../page-objects/pages/Homepage";

describe("Checking the appearance of buttons", () => {
  beforeEach(async () => {
    HomePage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
    await browser.pause(5000);
  });

  it("Checking the appearance of the menu buttons from the header", async () => {
    const buttons = [
      Menu.cuteButton,
      Menu.funnyButton,
      Menu.goodButton,
      Menu.omgButton,
      Menu.moreButton,
    ];

    for (let i = 0; i < buttons.length; i++) {
      const elem = buttons[i];

      const fontSize = await elem.getCSSProperty("font-size");
      await expect(fontSize.value).toEqual("16px");

      const minWidth = await elem.getCSSProperty("min-width");
      await expect(minWidth.value).toEqual("120px");

      const borderLeft = await elem.getCSSProperty("border-left-width");
      const valueBorderLeft = await borderLeft.value.slice(0, -2);
      await expect(Math.round(valueBorderLeft)).toEqual(2);

      const borderTop = await elem.getCSSProperty("border-top-width");
      const valueBorderTop = await borderTop.value.slice(0, -2);
      await expect(Math.round(valueBorderTop)).toEqual(5);

      const color = await elem.getCSSProperty("color");
      await expect(color.parsed.hex).toEqual("#898989");

      const alignItems = await elem.getCSSProperty("align-items");
      await expect(alignItems.value).toEqual("center");
    }
  });

  it("Checking the appearance of the submenu buttons from the header", async () => {
    const submenuButtons = [
      await Menu.aboutButton,
      Menu.privacyPolicyButton,
      Menu.dmcaButton,
      Menu.advertisingButton,
    ];

    await (await Menu.moreButton).waitForDisplayed();
    await (await Menu.moreButton).click();
    await browser.pause(1000);

    for (let i = 0; i < submenuButtons.length; i++) {
      const object = await submenuButtons[i];

      let fontSize = await object.getCSSProperty("font-size");
      await expect(fontSize.value).toEqual("16px");

      const color = await object.getCSSProperty("color");
      await expect(color.parsed.hex).toEqual("#898989");

      const pandding = await object.getCSSProperty("padding-right");
      await expect(pandding.value).toEqual("10px");

      const width = await object.getCSSProperty("width");
      await expect(width.value).toEqual("150px");
    }
  });

  it("Checking the appearance of the placeholder for the search input", async () => {
    const search = await Menu.searchButton;

    const fontSize = await search.getCSSProperty("font-size");
    await expect(fontSize.value).toEqual("16px");

    const paddingLeft = await search.getCSSProperty("padding-left");
    await expect(paddingLeft.value).toEqual("15px");
  });

  it("Checking the appearance of the search icon", async () => {
    const searchIcon = await Menu.searchIcon;

    const backgroundImage = await searchIcon.getCSSProperty("background-image");
    await expect(backgroundImage).isVisible;

    const width = await searchIcon.getCSSProperty("width");
    await expect(width.value).toEqual("20px");

    const height = await searchIcon.getCSSProperty("height");
    await expect(height.value).toEqual("20px");
  });

  it("Checking the appearance of the see more buttons in the middle of the page", async () => {
    const seeMoreButtons = [
      HomePage.seeMoreCuteButton,
      HomePage.seeMoreFuunyButton,
      HomePage.seeMoreGoodeButton,
      HomePage.seeMoreOmgButton,
    ];

    for (let i = 0; i < seeMoreButtons.length; i++) {
      const object = await seeMoreButtons[i];

      const fontSize = await object.getCSSProperty("font-size");
      await expect(fontSize.value).toEqual("18px");

      const color = await object.getCSSProperty("color");
      await expect(color.parsed.hex).toEqual("#000000");
    }
  });

  it("Checking the appearance of the logo", async () => {
    const logo = await Menu.logo;

    const backgroundImage = await logo.getCSSProperty("background-image");
    await expect(backgroundImage).isVisible;

    const width = await logo.getCSSProperty("width");
    await expect(width.value).toEqual("335px");

    const height = await logo.getCSSProperty("height");
    await expect(height.value).toEqual("33px");
  });
});
