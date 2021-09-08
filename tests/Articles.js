import Menu from "../page-objects/components/Menu"
import AllArticles from "../page-objects/pages/AllArticles"
import Homepage from "../page-objects/pages/Homepage"

describe('All the articles', ()=>{
    beforeEach(async () => {
        await Homepage.openHomePage()     
         })
         
    it('Click on the all articles', async() =>{
        await Menu.approveButton.click()
        await Menu.cuteButton.click()
        await browser.pause(4000)
        await AllArticles.first.click()
        browser.execute(function () {
            window.history.go(-2);
          });
        
        await browser.pause(2000)
        await AllArticles.second.click()
        browser.execute(function () {
            window.history.go(-2);
          });
        
        await browser.pause(2000)
        await AllArticles.third.click()
        browser.execute(function () {
            window.history.go(-2);
          });
        
        await browser.pause(2000)
        await AllArticles.fourth.click()
        browser.execute(function () {
            window.history.go(-2);
          });
       
        await browser.pause(2000)
        await AllArticles.fifth.click()
        browser.execute(function () {
            window.history.go(-2);
          });
        
        await browser.pause(2000)
        await AllArticles.sixth.click()
        browser.execute(function () {
            window.history.go(-2);
          });
        
        await browser.pause(2000)
        await AllArticles.seventh.click()
        browser.execute(function () {
            window.history.go(-2);
          });
        
        await browser.pause(2000)
        await AllArticles.eighth.click()
        browser.execute(function () {
            window.history.go(-2);
          });
        
        await browser.pause(2000)
        await AllArticles.ninth.click()
        browser.execute(function () {
            window.history.go(-2);
          });
        
        await browser.pause(2000)
        await AllArticles.tenth.click()
        
    })
})