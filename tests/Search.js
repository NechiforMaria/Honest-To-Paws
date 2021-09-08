const { default: Menu } = require("../page-objects/components/Menu")
const { default: Homepage } = require("../page-objects/pages/Homepage")

describe('Search', ()=>{
    beforeEach(async () => {
        await Homepage.openHomePage()     
         })
    it('Search with valid word', async ()=>{
        
        await Menu.approveButton.click()
        await Menu.searchButton.click()
        const text='Finish The Most Iconic Book Titles In History'
        await Menu.searchButton.setValue(text)
        await browser.pause(3000)
        await Menu.searchIcon.click()
        await expect(Menu.searchResultBoxMessage).toHaveTextContaining(text) 
    })

    it('Search with invalid word', async ()=>{
        
        //await Menu.approveButton.click()
        await Menu.searchButton.click()
        const text='qwq'
        await Menu.searchButton.setValue(text)
        await browser.pause(3000)
        await Menu.searchIcon.click()
        await expect(Menu.searchResultBoxMessage).toHaveTextContaining(`Sorry, we couldn't find any results to match that search.`) 
    })
})