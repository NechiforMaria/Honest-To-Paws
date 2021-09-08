import Menu from "../page-objects/components/Menu"
import CutePage from "../page-objects/pages/CutePage"
import SubscribePage from "../page-objects/pages/SubscribePage"
const { default: HomePage, default: Homepage } = require("../page-objects/pages/Homepage")

describe('Articles pages', ()=>{
    beforeEach(async () => {
        await HomePage.openHomePage()     
         })
    it('Subscribe', async ()=>{
        await Menu.approveButton.click()
        await Menu.cuteButton.click()
        await browser.pause(4000)
        await CutePage.subscribeLabel.click()
        await CutePage.subscribeLabel.addValue(SubscribePage.email())
        await CutePage.emailButton.click()
        await expect(SubscribePage.confirmSubscribe).toBeDisplayed()
    })

    it('Trending On Honest To Paws', async ()=>{
        //await Menu.approveButton.click()
        await Menu.cuteButton.click()
        await browser.pause(2000)
        await CutePage.trendingArticle1.click()
        await expect(browser).toHaveUrl('https://astage.honesttopaws.com/g/test-post-draft?as=799&bdk=0')
        browser.execute(function () {
            window.history.go(-2);
          });
        await browser.pause(4000)

        await CutePage.trendingArticle2.click()
        await expect(browser).toHaveUrl('https://astage.honesttopaws.com/g/get-jinxed?as=799&bdk=0')

    })

    it('More from Honest To Paws', async ()=>{
      //await Menu.approveButton.click()
      await Menu.cuteButton.click()
      await browser.pause(2000)
        
      await CutePage.moreArticle1.click()
      await expect(browser).toHaveUrl('https://astage.honesttopaws.com/g/iconic-films-backstage-photos-copy-copy-copy-copy?as=799&bdk=0')
      browser.execute(function () {
          window.history.go(-2);
      });

        await browser.pause(2000)
        HomePage.footerContainer.scrollIntoView()
        await browser.pause(2000)
        
        await CutePage.moreArticle2.click()
        await expect(browser).toHaveUrl('https://astage.honesttopaws.com/g/iconic-films-backstage-photos-copy-copy-copy?as=799&bdk=0')
        browser.execute(function () {
            window.history.go(-2);
        });

        await browser.pause(2000)
        $('.qa-page-footer__container').scrollIntoView()
        await browser.pause(2000)
        await CutePage.moreArticle3.click()
        await expect(browser).toHaveUrl('https://astage.honesttopaws.com/g/iconic-films-backstage-photos-copy-copy?as=799&bdk=0')

    })

    it.only('Social media', async () =>{
       await Menu.approveButton.click()
        await Menu.cuteButton.click()
        await browser.pause(2000)

        await CutePage.facebookButton.click()
        await browser.pause(2000)
        const windows = await browser.getWindowHandles(); 
        await browser.switchToWindow(windows[1]);
        await expect(browser).toHaveUrlContaining('https://www.facebook.com/login.php')
        await browser.closeWindow()
        await browser.switchToWindow(windows[0]);

        await CutePage.twiterButton.click()
        await browser.pause(2000)
        const windows1 = await browser.getWindowHandles(); 
        await browser.switchToWindow(windows1[1]);
        await expect(browser).toHaveUrlContaining('https://twitter.com')
        await browser.closeWindow()
        await browser.switchToWindow(windows1[0]);  
    })


})