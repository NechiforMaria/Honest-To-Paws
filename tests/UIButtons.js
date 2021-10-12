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

  it("Checking the appearance of the menu buttons", async () => {
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
      console.log(fontSize);
      const valueFontSize = fontSize.value;
      await expect(valueFontSize).toEqual("16px");

      const minWidth = await elem.getCSSProperty("min-width");
      console.log(minWidth);
      const valueMinWidth = minWidth.value;
      await expect(valueMinWidth).toEqual("120px");

      const borderLeft = await elem.getCSSProperty("border-left-width");
      console.log(borderLeft);
      const valueBorderLeft = await borderLeft.value.slice(0, -2);
      await expect(Math.round(valueBorderLeft)).toEqual(2);

      const borderTop = await elem.getCSSProperty("border-top-width");
      console.log(borderTop);
      const valueBorderTop = await borderTop.value.slice(0, -2);
      await expect(Math.round(valueBorderTop)).toEqual(5);

      const color = await elem.getCSSProperty("color");
      console.log(color);
      const valueColor = color.parsed.hex;
      await expect(valueColor).toEqual("#898989");

      const alignItems = await elem.getCSSProperty("align-items");
      console.log(alignItems);
      const valueAlignItems = alignItems.value;
      await expect(valueAlignItems).toEqual("center");
    }
  });

  it("Checking the appearance of the submenu buttons", async () => {
    const submenuButtons = [
      await Menu.aboutButton,
      Menu.privacyPolicyButton,
      Menu.dmcaButton,
      Menu.advertisingButton,
    ];

    await (await Menu.moreButton).waitForDisplayed();
    await (await Menu.moreButton).click();
    await browser.pause(5000);

    for (let i = 0; i < submenuButtons.length; i++) {
      const object = await submenuButtons[i];

      await browser.pause(5000);

      let fontSize = await object.getCSSProperty("font-size");
      console.log(fontSize);
      const valueFontSize = await fontSize.value;
      await expect(valueFontSize).toEqual("16px");

      const color = await object.getCSSProperty("color");
      console.log(color);
      const valueColor = await color.parsed.hex;
      await expect(valueColor).toEqual("#898989");

      const pandding = await object.getCSSProperty("padding-right");
      console.log(pandding);
      const valuePandding = await pandding.value;
      await expect(valuePandding).toEqual("10px");

      const width = await object.getCSSProperty("width");
      console.log(width);
      const valueWidth = await width.value;
      await expect(valueWidth).toEqual("150px");
    }
  });

  it("Checking the appearance of the search button", async () => {
    const search = await Menu.searchButton;

    const fontSize = await search.getCSSProperty("font-size");
    console.log(fontSize);
    const valueFontSize = await fontSize.value;
    await expect(valueFontSize).toEqual("16px");

    const paddingLeft = await search.getCSSProperty("padding-left");
    console.log(paddingLeft);
    const valuePaddingLeft = await paddingLeft.value;
    await expect(valuePaddingLeft).toEqual("15px");
  });

  it("Checking the appearance of the search icon", async () => {
    const searchIcon = await Menu.searchIcon;

    const backgroundPosition = await searchIcon.getCSSProperty(
      "background-position"
    );
    console.log(backgroundPosition);
    const valueBackgroundPosition = await backgroundPosition.value;
    await expect(valueBackgroundPosition).toEqual("-290px -129px");

    const width = await searchIcon.getCSSProperty("width");
    console.log(width);
    const valueWidth = await width.value;
    await expect(valueWidth).toEqual("20px");

    const height = await searchIcon.getCSSProperty("height");
    console.log(height);
    const valueHeight = await height.value;
    await expect(valueHeight).toEqual("20px");
  });

  it("Checking the appearance of the see more buttons", async () => {
    const seeMoreButtons = [
      HomePage.seeMoreCuteButton,
      HomePage.seeMoreFuunyButton,
      HomePage.seeMoreGoodeButton,
      HomePage.seeMoreOmgButton,
    ];

    for (let i = 0; i < seeMoreButtons.length; i++) {
      const object = await seeMoreButtons[i];

      browser.pause(1000);
      const fontSize = await object.getCSSProperty("font-size");
      console.log(fontSize);
      const valueFontSie = await fontSize.value;
      await expect(valueFontSie).toEqual("18px");

      const color = await object.getCSSProperty("color");
      console.log(color);
      const valueColor = await color.parsed.hex;
      await expect(valueColor).toEqual("#000000");
    }
  });

  it("Checking the appearance of the logo", async () => {
    const logo = await Menu.logo;

    const backgroundPosition = await logo.getCSSProperty("background-position");
    console.log(backgroundPosition);
    const valueBackgroundPosition = await backgroundPosition.value;
    await expect(valueBackgroundPosition).toEqual("0px");

    const width = await logo.getCSSProperty("width");
    console.log(width);
    const valueWidth = await width.value;
    await expect(valueWidth).toEqual("335px");

    const height = await logo.getCSSProperty("height");
    console.log(height);
    const valueHeight = await height.value;
    await expect(valueHeight).toEqual("33px");
  });
});
