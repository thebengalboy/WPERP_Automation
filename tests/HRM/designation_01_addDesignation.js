Feature('AddDesignation');

Scenario('AddDesignation', (I) => {
I.amOnPage('/test6/wp-admin/');
I.fillField('Username or Email Address','admin')
I.fillField('Password','admin')
I.checkOption('Remember Me')
I.click('Log In')
I.click('WP ERP')
I.click('HR')
I.click('//*[@id="wpbody-content"]/div[2]/ul/li[4]/a')
I.click('//*[@id="erp-new-designation"]')
I.fillField('Designation Title','Graphic Designer')
I.fillField('Description','Software development')
I.click('Create Designation')
pause();

});
