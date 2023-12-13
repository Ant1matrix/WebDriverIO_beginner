describe('Watches Page', () => {
    it('should show the banner container', async () => {
        browser.url ('https://www.ebay.com/b/Luxury-Watches/31387/bn_36841947?_trkparms=pageci%3A26a9f94b-96b3-11ee-9d7b-3a87568678d2%7Cparentrq%3A4f7d6aa218c0ab3a96b9d8b5ffff85de%7Ciid%3A0');
        const promoBanner = await $('section.b-promobanner.clearfix._191919E5E5E5');
        await expect(promoBanner).toBeDisplayed(); // checks if the banner is displayed
    });

    it('should show the banner title', async () => {
        const infoTitle = await $('section.b-promobanner.clearfix._191919E5E5E5 h2.b-promobanner__info-title');
        await expect(infoTitle).toHaveTextContaining('my mind');
    });

    it('should contain link on banner button and verify if its clickable', async () => {
        const bannerBtn = await $('section.b-promobanner.clearfix._191919E5E5E5 a.b-promobanner__info-btn');
        await expect(bannerBtn).toHaveLinkContaining('Luxury-Watches'); //checks if href link has text in it
        await expect(bannerBtn).toBeClickable(); // checks if the exsiting button is clickable
    });

    it('should click on the shop button and verify the new url', async () => {
        const bannerBtn = await $('section.b-promobanner.clearfix._191919E5E5E5 a.b-promobanner__info-btn');
        await bannerBtn.click ();
        await expect(browser).toHaveUrl('https://www.ebay.com/b/Luxury-Watches/31387/bn_36841947');
    });
});