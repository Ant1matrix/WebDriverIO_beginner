describe('iDeal search for iPhone 15 Pro', () => {
    it('should open main URL and verify the title', async () => {
        await browser.url('https://www.ideal.lv/'); //goes to iDeal landing page
        await expect(browser).toHaveTitle('iDeal - Front page');
    });
    it('should click search button and verify input value', async () => {
        const searchButton = await $('#main-header ul.userhub li.link-search a'); //$$ find elemntS (multiple); $ find element (single)
        await searchButton.click();
        expect(searchButton).toBeClickable();
    });
    it('should add value to search and verify input', async () => {
        const searchInput = await $$('div.search label input[name="q"]')[1];

        await searchInput.addValue('iPhone');

        expect(searchInput).toHaveValue('iPhone');
    });
    // await searchInput.setValue('iPhone 15 Pro');
    //const searchInput = await $$('div.search label input')[2];
    //div.search label input[name=q] search bar
});