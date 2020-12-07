Feature('AddDepartment');

Scenario('AddDepartment', (I) => {
I.amOnPage('/test6/wp-admin/');
I.fillField('Username or Email Address','admin')
I.fillField('Password','admin')
I.checkOption('Remember Me')
I.click('Log In')
I.click('WP ERP')
I.click('HR')
I.click('//*[@id="wpbody-content"]/div[2]/ul/li[3]/a')
I.click('//*[@id="erp-new-dept"]')
I.fillField('Department Title','HR')
I.fillField('Description','Content development')
I.click('//*[@id="dept-lead"]')
I.click('//*[@id="dept-lead"]/option[2]')
I.click('//*[@id="dept-parent"]')
I.click('Create Department')

pause();
});
