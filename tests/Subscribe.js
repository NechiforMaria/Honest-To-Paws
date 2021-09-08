import Menu from "../page-objects/components/Menu"
import AllArticles from "../page-objects/pages/AllArticles"
import CutePage from "../page-objects/pages/CutePage"
import Homepage from "../page-objects/pages/Homepage"
import SubscribePage from "../page-objects/pages/SubscribePage"

describe('Subscribe', ()=>{
    beforeEach(async () => {
        
        await Homepage.openHomePage()     
         })
    it('Subscribe on the articles page', async() =>{
        await Menu.approveButton.click()
        await Menu.cuteButton.click()
        await browser.pause(4000)
        await CutePage.subscribeLabel.addValue(SubscribePage.email())
        await CutePage.emailButton.click()
        await expect(SubscribePage.confirmSubscribe).toBeDisplayed()
    })

    it('Subscribe with invalid email on the articles page ', async() =>{
       // await Menu.approveButton.click()
        await Menu.cuteButton.click()
        await browser.pause(4000)
        await CutePage.subscribeLabel.addValue('text@gmail.com')
        await CutePage.emailButton.click()
        await expect(SubscribePage.error.toHaveText('There are errors below'))
    })

    it('Subscribe after press email button', async ()=>{
        //await Menu.approveButton.click()
        await Menu.cuteButton.click()
        await browser.pause(2000)
        await CutePage.emailButton.click()
        await browser.pause(3000)
        await SubscribePage.emailAddress.addValue(SubscribePage.email())
        await browser.pause(2000)
        await SubscribePage.firstName.addValue('Ana')
        await browser.pause(2000)
        await SubscribePage.lastName.addValue('X')
        await browser.pause(2000)
        await SubscribePage.submitButton.click()
        await expect(browser).toHaveUrl('https://honesttopaws.us3.list-manage.com/subscribe/post')

    })
})