const fs = require('fs');
const using = require('jasmine-data-provider');
const testData = require('../test data/number.json');
let formPracharak = require('../../../pages/pracharak_form.js');
const { browser, element } = require('protractor');
const path = require('path');
const EC = protractor.ExpectedConditions;


describe('File Upload Test', function (){
  
  const datasetNames = Object.keys(testData);
    using(testData, (data, datasetKeyIndex) => {
        const datasetName = datasetNames[datasetKeyIndex];
    it('login_CCDMS', function(){
      formPracharak.LoginCCDMS();
    })

    it('upload pracharak form', async function(){

      await formPracharak.left_panel();
      browser.sleep(3000);
      await formPracharak.pracharkForm();
      browser.sleep(3000);
      const filePath = path.resolve(__dirname, 'C:\\Users\\anura\\OneDrive\\Documents\\Anurag\\Jarvis\\saral\\testcases\\pracharak form\\test data\\EminentUploadFormat.csv');
      await formPracharak.fileInput(filePath);
      browser.sleep(3000);
      await formPracharak.submitFile();
      browser.sleep(3000);
      const elementToCheck = element(by.xpath('//div[@class="pusher"]/div'))
      const timeoutMs = 5000; // Maximum time to wait for the element to be visible (in milliseconds)
      browser.wait(EC.visibilityOf(elementToCheck), timeoutMs, 'Warning element not visible');
      expect(elementToCheck.getText()).toBe('Success');

      browser.refresh();
      await formPracharak.logout();
    });

    it('login_pracharak', async function(){
      await formPracharak.LoginPracharak(data.mobile_number);
    });
    // it('mandatory fields check', function(){

    // });
    it('fill pracharak form', async function(){
      const profile_pic_path = path.resolve(__dirname, "C:/Users/anura/OneDrive/Documents/Anurag/Jarvis/saral/testcases/pracharak form/test data/ProfilePicture.jfif"); 
      browser.sleep(3000);
      await formPracharak.setProfilePic(profile_pic_path);
      await formPracharak.setFormType(data.form_type);
      browser.sleep(3000);
  });
});
})