const { default: Menu } = require("../page-objects/components/Menu")
const { default: AllArticles } = require("../page-objects/pages/AllArticles")
const { default: HomePage, default: Homepage } = require("../page-objects/pages/Homepage")

describe('Category and articles for category', ()=>{
    beforeEach(async () => {
        await HomePage.openHomePage()     
         })

    it('Category', async ()=>{
        await Menu.approveButton.click()
        await browser.pause(3000)

        await browser.pause(3000)
        await HomePage.cuteCategory.click()
        await expect(AllArticles.galleryCategory).toHaveText("Cute") 
        browser.execute(function () {
            window.history.go(-2);
        });

        await browser.pause(3000)
        await HomePage.funnyCategory.click()
        await browser.pause(3000)
        await expect(AllArticles.galleryCategory).toHaveText("Funny") 
        browser.execute(function () {
            window.history.go(-2);
        });

        await browser.pause(3000)
        await HomePage.goodCategory.click()
        await expect(AllArticles.galleryCategory).toHaveText("Good") 
        browser.execute(function () {
            window.history.go(-2);
        });

        await browser.pause(3000)
        await HomePage.omgCategory.click()
        await expect(AllArticles.galleryCategory).toHaveText("Omg") 
    })

    it('Articles for cute category', async ()=>{
        //await Menu.approveButton.click()
        await browser.pause(3000)
        await HomePage.cutearticle1.click()
        await expect(AllArticles.galleryCategory).toHaveText("Cute") 
        await browser.pause(2000)
        browser.execute(function () {
            window.history.go(-2);
        });

        await browser.pause(2000)
        await HomePage.cutearticle2.waitForExist({ timeout: 5000 })
         
        await HomePage.cutearticle2.click()
        await expect(AllArticles.galleryCategory).toHaveText("Cute") 
        browser.execute(function () {
            window.history.go(-2);
        });

        await browser.pause(2000)
        await  HomePage.cutearticle3.waitForExist({ timeout: 5000 })
        await HomePage.cutearticle3.click()
        await expect(AllArticles.galleryCategory).toHaveText("Cute") 
        browser.execute(function () {
            window.history.go(-2);
        });

        await browser.pause(2000) 
        await  HomePage.cutearticle4.waitForExist({ timeout: 7000 })
        await HomePage.cutearticle4.click()
        await expect(AllArticles.galleryCategory).toHaveText("Cute") 
        browser.execute(function () {
            window.history.go(-2);
        });

        await browser.pause(2000) 
        await HomePage.seeMoreCuteButton.click()
        await expect(Menu.header).toHaveText('CUTE')
    })
    
    it('Articles for fuuny category', async ()=>{
        //await Menu.approveButton.click()
        await browser.pause(3000)
        await HomePage.fuunyarticle1.click()
        await expect(AllArticles.galleryCategory).toHaveText("Funny") 
        await browser.pause(2000)
        browser.execute(function () {
           window.history.go(-2);
        });

        await browser.pause(2000)
        await HomePage.fuunyarticle2.waitForExist({ timeout: 5000 })
        await HomePage.fuunyarticle2.click()
        await expect(AllArticles.galleryCategory).toHaveText("Funny") 
        browser.execute(function () {
           window.history.go(-2);
        });

        await browser.pause(2000)
        await  HomePage.fuunyarticle3.waitForExist({ timeout: 5000 })
        await HomePage.fuunyarticle3.click()
        await expect(AllArticles.galleryCategory).toHaveText("Funny") 
        browser.execute(function () {
           window.history.go(-2);
        });

        await browser.pause(2000) 
        await  HomePage.fuunyarticle4.waitForExist({ timeout: 7000 })
        await HomePage.fuunyarticle4.click()
        await expect(AllArticles.galleryCategory).toHaveText("Funny") 
        browser.execute(function () {
           window.history.go(-2);
        });

        await browser.pause(2000) 
        await HomePage.seeMoreFuunyButton.click()
        await expect(Menu.header).toHaveText('FUNNY')
   })



    it('Articles for good category', async ()=>{
        //await Menu.approveButton.click()
        await browser.pause(3000)
        await HomePage.goodarticle1.click()
        await expect(AllArticles.galleryCategory).toHaveText("Good") 
        await browser.pause(2000)
        browser.execute(function () {
            window.history.go(-2);
        });

        await browser.pause(2000)
        await HomePage.goodarticle2.waitForExist({ timeout: 5000 })
        await HomePage.goodarticle2.click()
        await expect(AllArticles.galleryCategory).toHaveText("Good") 
        browser.execute(function () {
            window.history.go(-2);
        });

        await browser.pause(2000)
        await  HomePage.goodarticle3.waitForExist({ timeout: 5000 })
        await HomePage.goodarticle3.click()
        await expect(AllArticles.galleryCategory).toHaveText("Good") 
        browser.execute(function () {
        window.history.go(-2);
        });

        await browser.pause(2000) 
        await  HomePage.goodarticle4.waitForExist({ timeout: 7000 })
        await HomePage.goodarticle4.click()
        await expect(AllArticles.galleryCategory).toHaveText("Good") 
        browser.execute(function () {
        window.history.go(-2);
        });

        await browser.pause(2000) 
        await HomePage.seeMoreGoodeButton.click()
        await expect(Menu.header).toHaveText('GOOD')
    })

    it('Articles for omg category', async ()=>{
        //await Menu.approveButton.click()
        await HomePage.omgarticle1.click()
        await expect(AllArticles.galleryCategory).toHaveText("Omg") 
        await browser.pause(2000)
        browser.execute(function () {
        window.history.go(-2);
        });

        await browser.pause(2000)
        await HomePage.omgarticle2.waitForExist({ timeout: 5000 })
        await HomePage.omgarticle2.click()
        await expect(AllArticles.galleryCategory).toHaveText("Omg") 
        browser.execute(function () {
        window.history.go(-2);
        });

        await browser.pause(2000)
        await  HomePage.omgarticle3.waitForExist({ timeout: 5000 })
        await HomePage.omgarticle3.click()
        await expect(AllArticles.galleryCategory).toHaveText("Omg") 
        browser.execute(function () {
        window.history.go(-2);
        });

        await browser.pause(2000) 
        await  HomePage.omgarticle4.waitForExist({ timeout: 7000 })
        await HomePage.omgarticle4.click()
        await expect(AllArticles.galleryCategory).toHaveText("Omg") 

        browser.execute(function () {
        window.history.go(-2);
        });
        await browser.pause(2000) 
        await HomePage.seeMoreOmgButton.click()
        await expect(Menu.header).toHaveText('OMG')
    })

    })