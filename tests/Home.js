const { default: HamburgerMenu } = require("../page-objects/components/HamburgerMenu")
const { default: Menu } = require("../page-objects/components/Menu")
const { default: HomePage, default: Homepage } = require("../page-objects/pages/Homepage")

describe('Home page', () => {
    beforeEach(async () => {
        await HomePage.openHomePage()     
         })
    it('Menu', async () => {
        await Menu.approveButton.click()
        await Menu.cuteButton.click()
        await expect(Menu.header).toHaveText('CUTE')
        await Menu.logo.click()
        await Menu.categoryMix.isDisplayed()
        await Menu.funnyButton.click()
        await expect(Menu.header).toHaveText('FUNNY')
        await Menu.goodButton.click()
        await expect(Menu.header).toHaveText('GOOD')
        await Menu.omgButton.click()
        await expect(Menu.header).toHaveText('OMG')
        await Menu.moreButton.waitForExist()
        await Menu.navbar.isDisplayed()
        
    })

    it('Submenu', async ()=>{
      //await Menu.approveButton.click()
        await Menu.moreButton.click()
        await Menu.navbar.isDisplayed()
        await browser.pause(4000)
        await Menu.aboutButton.click()
        await expect(Menu.title).toHaveText('About Us')
        await Menu.moreButton.click()
        await browser.pause(4000)
        await Menu.privacyPolicyButton.click()
        await expect(Menu.title).toHaveText('Privacy Policy')
        await Menu.moreButton.click()
        await browser.pause(4000)
        await Menu.dmcaButton.click()
        await expect(Menu.title).toHaveText('DMCA Policy')
        await Menu.moreButton.click()
        await browser.pause(4000)
        await Menu.advertisingButton.click()
        await expect(Menu.title).toHaveText('Advertising Interest')
        await browser.pause(4000)
    })

    it('Hamburger Menu first part', async ()=>{
      //await Menu.approveButton.click()  
      await browser.execute(()=>window.scrollTo(0,500))
        await HamburgerMenu.hamburgerMenuButton.click()
        await browser.pause(3000)
        await console.log(HamburgerMenu.cuteButton.getText()) 
        await HamburgerMenu.cuteButton.click()
        await expect(Menu.header).toHaveText('CUTE')
        await browser.pause(3000)

        await browser.execute(()=>window.scrollTo(0,500))
        await HamburgerMenu.hamburgerMenuButton.click()
        await HamburgerMenu.funnyButton.click()
        await expect(Menu.header).toHaveText('FUNNY')

        await browser.pause(1000)
        browser.execute(()=>window.scrollTo(0,500))
        await HamburgerMenu.hamburgerMenuButton.click()
        await HamburgerMenu.goodButton.click()
        await expect(Menu.header).toHaveText('GOOD')

        await browser.pause(1000)
        browser.execute(()=>window.scrollTo(0,500))
        await HamburgerMenu.hamburgerMenuButton.click()
        await HamburgerMenu.omgButton.click()
        await expect(Menu.header).toHaveText('OMG')

        await browser.pause(1000)
    })

    it('Hamburger menu last part', async ()=>{
        //await Menu.approveButton.click()
        browser.execute(()=>window.scrollTo(0,500))
        await HamburgerMenu.hamburgerMenuButton.click()
        await HamburgerMenu.aboutButton.click()
        await expect(Menu.title).toHaveText('About Us')

        await browser.pause(1000)
        browser.execute(()=>window.scrollTo(0,500))
        await HamburgerMenu.hamburgerMenuButton.click()
        await HamburgerMenu.privacyPolicyButton.click()
        await expect(Menu.title).toHaveText('Privacy Policy')

        await browser.pause(1000)
        browser.execute(()=>window.scrollTo(0,500))
        await HamburgerMenu.hamburgerMenuButton.click()
        await HamburgerMenu.dmcaButton.click()
        await expect(Menu.title).toHaveText('DMCA Policy')

        await browser.pause(1000)
        browser.execute(()=>window.scrollTo(0,500))
        await HamburgerMenu.hamburgerMenuButton.click()
        await HamburgerMenu.advertisingButton.click()
        await expect(Menu.title).toHaveText('Advertising Interest')

        await browser.pause(1000)
        browser.execute(()=>window.scrollTo(0,500))
        await HamburgerMenu.hamburgerMenuButton.click()
        await browser.pause(1000)
        await HamburgerMenu.closeMenu.click()
        await browser.pause(1000)
    })
    
    it('Footer', async()=>{
        //await Menu.approveButton.click()
        await browser.pause(2000) 
        await HomePage.aboutFooterButton.click() 
        browser.execute(function () {
            window.history.go(-2);
          });
        await browser.pause(2000) 

        await HomePage.privacyPolicyFooterButton.click()
        browser.execute(function () {
            window.history.go(-2);
          });
        await browser.pause(2000)
          
        await HomePage.dmcaFooterButton.click()
        browser.execute(function () {
            window.history.go(-2);
          });
        await browser.pause(2000) 
        
        await HomePage.advertisingFooterButton.click()
    })

})