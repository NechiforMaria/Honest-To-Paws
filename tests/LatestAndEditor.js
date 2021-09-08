import Menu from "../page-objects/components/Menu"
import HomePage from "../page-objects/pages/Homepage"

describe(`Latest category and editor' picks`, ()=>{
    beforeEach(async () => {
        await HomePage.openHomePage() 
         })

    it('Articles for latest category', async ()=>{
        
        await Menu.approveButton.click()
        await browser.pause(3000)
        const title=await $$('.c-latest__posts .c-latest__title')

        const firstTitle= await title[0];
        const text = await firstTitle.getText()
        await HomePage.latestArticle1.click()
        await browser.pause(3000)
        const titlu= HomePage.titleArticle
        await expect(titlu).toHaveTextContaining(text)
        browser.execute(function () {
        window.history.go(-2);
        });
        
        const secondTitle= await title[1]
        const text2 = await secondTitle.getText()
        await browser.pause(2000)
        await HomePage.latestArticle2.waitForExist({ timeout: 5000 })
        await HomePage.latestArticle2.click()
        const titlu2= HomePage.titleArticle
        await expect(titlu2).toHaveTextContaining(text2)

        browser.execute(function () {
        window.history.go(-2);
        });

        const thirdTitle= await title[2]
        const text3 = await thirdTitle.getText()
        await browser.pause(2000)
        await  HomePage.latestArticle3.waitForExist({ timeout: 5000 })
        await HomePage.latestArticle3.click()
        const titlu3= HomePage.titleArticle
        await expect(titlu3).toHaveTextContaining(text3)

        browser.execute(function () {
        window.history.go(-2);
        });

        const fourthTitle= await title[3]
        const text4 = await fourthTitle.getText()
        await browser.pause(2000) 
        await  HomePage.latestArticle4.waitForExist({ timeout: 5000 })
        await HomePage.latestArticle4.click()
        const titlu4= HomePage.titleArticle
        await expect(titlu4).toHaveTextContaining(text4)
    })


    it('Editor`s Picks', async ()=>{
       // await Menu.aboutButton.click()
        const alltitle= await $$('.c-editors-picks__title')
        const firstTitle =await  alltitle[0]
        const text = await firstTitle.getText()
        await HomePage.editorsPicks1.click()
        const title= HomePage.titleArticle
        await expect(title).toHaveTextContaining(text)
        browser.execute(function () {
        window.history.go(-2);
        });
        

        const secondTitle =await  alltitle[1]
        const text2 = await secondTitle.getText()
        await browser.pause(2000) 
        await HomePage.editorsPicks2.click()
        const title2= HomePage.titleArticle
        await expect(title2).toHaveTextContaining(text2)
        browser.execute(function () {
        window.history.go(-2);
        });

        const thirdTitle =await  alltitle[2]
        const text3 = await thirdTitle.getText()
        await browser.pause(2000) 
        await HomePage.editorsPicks3.click()
        const title3= HomePage.titleArticle
        await expect(title3).toHaveTextContaining(text3)
        })

})