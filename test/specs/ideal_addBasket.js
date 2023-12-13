describe('iDeal - add iPhone to basket and remove from basket', () => {
    it('should open main URL and verify the title', async () => {
        await browser.url('https://www.ideal.lv/iphone-15-pro?color=308&erply_storage=8'); //iDeal iPhone 15 Pro page
        
        const productLabel = await $('div.frame-ideal__body h1');
        
        await expect(productLabel).toHaveText('iPhone 15 Pro');
    });

    it('should check if add to Basket button is clickable', async () => {
        const addButton = await $('div.product-pricing.type02 button');

        await expect(addButton).toBeClickable();
    });

    it('should click on add to basket and check new page url', async () => {
        const addButton = await $('div.product-pricing.type02 button');
        await addButton.click();

        await expect(browser).toHaveUrl('https://www.ideal.lv/crosssell/success/view/productId/8215/');
    });

    it('should check if item counter updated to 1 and for the page to have text sucesfully added', async () => {
        const itmCounter = await $('#main-header  ul.userhub li.link-cart a b.products');
        const succText = await $('div.frame-ideal__pre-cart__message');

        await expect(itmCounter).toHaveText('1');        
        await expect(succText).toHaveText('Pievienots grozam');
    });

    it('should check the if theres a link in the basket to check out', async () => {
        const itmBasket = await $('#main-header  ul.userhub li.link-cart a');

        await expect(itmBasket).toHaveLink('https://www.ideal.lv/checkout/cart/');
    });

    it('should click on the basket icon and check new url', async () => {
        const itmBasket = await $('#main-header  ul.userhub li.link-cart a');       
        await itmBasket.click();

        await expect(browser).toHaveUrl('https://www.ideal.lv/checkout/cart/');
    });

    it('should check if theres an iPhone 15 Pro in the basket and if iphone title has link to the product', async () => {
        const iPhoneItm = await $$('div.layout-cart__main tbody tr td p.cart-table-title a')[0];

        await expect(iPhoneItm).toHaveText('iPhone 15 Pro');
        await expect(iPhoneItm).toHaveLink('https://www.ideal.lv/iphone-15-pro');
    });

    it('should check if theres remove from basket button and if its clickable', async () => {
        const removeButton = await $('p.cart-table-remove');

        await expect(removeButton).toBeClickable();
    });

    it('should click on remove button and check if the item counter is 0', async () => {
        const removeButton = await $('p.cart-table-remove');
        const itmCounter = await $('#main-header  ul.userhub li.link-cart a b.products');

        await removeButton.click();
        await expect(itmCounter).toHaveText('0'); 

    });
    // await searchInput.setValue('iPhone 15 Pro');
    //const searchInput = await $$('div.search label input')[2];
    //div.search label input[name=q] search bar
});