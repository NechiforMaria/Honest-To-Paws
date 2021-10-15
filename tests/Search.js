import Menu from "../page-objects/components/Menu";
import HomePage from "../page-objects/pages/Homepage";

describe("Checking the appearance of buttons", () => {
  beforeEach(async () => {
    HomePage.openHomePage();
    Menu.waitForExistHeader();
    Menu.clickOnApproveButton();
    Menu.clickOnApproveButtonFirefox();
    await browser.pause(1000);
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

      const fontSize = await elem.getCSSProperty("font-size").value;
      await expect(fontSize).toEqual("16px");

      const minWidth = await elem.getCSSProperty("min-width").value;
      await expect(minWidth).toEqual("120px");

      const borderLeft = await elem.getCSSProperty("border-left-width");
      const valueBorderLeft = await borderLeft.value.slice(0, -2);
      await expect(Math.round(valueBorderLeft)).toEqual(2);

      const borderTop = await elem.getCSSProperty("border-top-width");
      const valueBorderTop = await borderTop.value.slice(0, -2);
      await expect(Math.round(valueBorderTop)).toEqual(5);

      const color = await elem.getCSSProperty("color");
      const valueColor = color.parsed.hex;
      await expect(valueColor).toEqual("#898989");

      const alignItems = await elem.getCSSProperty("align-items").value;
      await expect(alignItems).toEqual("center");
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
    await browser.pause(1000);

    for (let i = 0; i < submenuButtons.length; i++) {
      const object = await submenuButtons[i];

      let fontSize = await object.getCSSProperty("font-size").value;
      await expect(fontSize).toEqual("16px");

      const color = await object.getCSSProperty("color");
      const valueColor = await color.parsed.hex;
      await expect(valueColor).toEqual("#898989");

      const pandding = await object.getCSSProperty("padding-right").value;
      await expect(pandding).toEqual("10px");

      const width = await object.getCSSProperty("width").value;
      await expect(width).toEqual("150px");
    }
  });

  it("Checking the appearance of the placeholder for the search input", async () => {
    const search = await Menu.searchButton;

    const fontSize = await search.getCSSProperty("font-size").value;
    await expect(fontSize).toEqual("16px");

    const paddingLeft = await search.getCSSProperty("padding-left").value;
    await expect(paddingLeft).toEqual("15px");
  });

  it("Checking the appearance of the search icon", async () => {
    const searchIcon = await Menu.searchIcon;

    const backgroundPosition = await searchIcon.getCSSProperty(
      "background-position"
    ).value;
    await expect(backgroundPosition).toEqual("-290px -129px");

    const width = await searchIcon.getCSSProperty("width").value;
    await expect(width).toEqual("20px");

    const height = await searchIcon.getCSSProperty("height").value;
    await expect(height).toEqual("20px");
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
      const fontSize = await object.getCSSProperty("font-size").value;
      await expect(fontSie).toEqual("18px");

      const color = await object.getCSSProperty("color");
      const valueColor = await color.parsed.hex;
      await expect(valueColor).toEqual("#000000");
    }
  });

  it("Checking the appearance of the logo", async () => {
    const logo = await Menu.logo;

    const backgroundPosition = await logo.getCSSProperty("background-position")
      .value;
    await expect(backgroundPosition).toEqual("0px");

    const width = await logo.getCSSProperty("width").value;
    await expect(width).toEqual("335px");

    const height = await logo.getCSSProperty("height").value;
    await expect(height).toEqual("33px");
  });
});
