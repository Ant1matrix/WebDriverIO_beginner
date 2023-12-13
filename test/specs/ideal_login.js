describe('iDeal login', () => {
    it('should open main URL and verify the title', async () => {
        await browser.url('https://www.ideal.lv/'); //goes to iDeal landing page
        await expect(browser).toHaveTitle('iDeal - Front page');
    });
    it('should click on my account and verify login button to be displayed', async () => {
        const myaccButton = await $$('li.link-account span.bp3-popover-target a span.label')[0]; //$$ find elemntS (multiple); $ find element (single)
        await myaccButton.click();
        const loginButton = await $$('a.menu-item.bp3-menu-item.bp3-popover-dismiss.intent-default')[0]; 
        await expect(loginButton).toBeDisplayed();
    });
    it('should check button link, click and verify new url', async () => {
        const loginButton = await $$('a.menu-item.bp3-menu-item.bp3-popover-dismiss.intent-default')[0];        
        await loginButton.click();
        await expect(loginButton).toHaveUrl('https://www.ideal.lv/customer/account/login/referer/aHR0cHM6Ly93d3cuaWRlYWwubHYv/');
        await expect(browser).toHaveUrl('https://www.ideal.lv/customer/account/login/referer/aHR0cHM6Ly93d3cuaWRlYWwubHYv/');
    });
    it('should check the web-page to have title LOGIN', async () => {
        const loginTitle = await $('h1.page-title span');

        await expect(loginTitle).toHaveText('Pieslēgties');
    });
    it('should type in test email and pass, and check if submit is clickable', async () => {
        const emailField = await $('#email');
        const passField = await $('#pass');
        const submitBtn = await $('#send2');

        await emailField.addValue('test@test.com');
        await passField.addValue('testpass');

        await expect(submitBtn).toBeClickable();
    });
    it('should click on submit button and receive a warning message', async () => {
        const submitBtn = await $('#send2');
        await submitBtn.click();

        const alertMsg = await $('div.cart-callout.intent-danger');

        await expect(alertMsg).toHaveText('Pierakstīšanās kontā nebija veiksmīga un jūsu konts uz laiku ir slēgts. Lūdzu, uzgaidiet un vēlāk mēģiniet vēlreiz.');
    });
});