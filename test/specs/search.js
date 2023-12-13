describe('Ebay Product Search', () => { //this creates a test environemnt with a name
    it('should open the main url and verify the title', async ()=>{ //'it' creates a test case/iteration to be tested upon
        await browser.url('https://www.ebay.com/'); //browser.url goes to the required website
        await expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay'); //this function checks/expects the website to have an HTML5 title, that is search in Chrome -> Inspect -> Cmd+f -> <title; copy and paste title here
    });

    it('should search for a product and verify the search text value', async ()=>{
        const searchInput = await $('#gh-ac'); //create a var searchInput, with element/node/selector with this ID 'gh-ac'; # sign  denotes only 'gh-ac' not 'gh-ac-ght' and etc.
        const searchButton = await $('#gh-btn');// creates var with search button selector ID
        
        await searchInput.addValue('Laptop'); // adds value 'Laptop' into the searchInput element
        await searchButton.click(); //clicks on search button through searchButton element
        //now let's do assertion
        await expect(searchInput).toHaveValue('Laptop'); //to check why toHaveValue was used -> go to wdio website -> API
        // not toHaveValueContaining -> beacuse we expect and we already know the full value and not just its part
    });
    
    it('should redirect to a new page and verify the title', async () =>{
        await expect(browser).toHaveTitle('Laptop for sale | eBay');
    });

    it('should update the search category', async () => {
        const category = await $('#gh-cat option:nth-child(1)'); //:nth-child() is a css selector that let's select a child of a drop-down element. ALWAYS CHECK FOR ELEMENTS TO BE UNIQUE
        //assertion
        await expect(category).toHaveText('PC Laptops & Netbooks'); //checks for the drop down to have a specific text
    });
});