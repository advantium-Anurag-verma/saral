const fs = require('fs');
const using = require('jasmine-data-provider');
const testData = require('../test data/number.json');
let formPracharak = require('../../../pages/pracharak_form.js');
const { browser, element } = require('protractor');
const path = require('path');
const { clear } = require('console');

describe('File Upload Test', function (){
  
  const datasetNames = Object.keys(testData);
    using(testData, (data, datasetKeyIndex) => {
        const datasetName = datasetNames[datasetKeyIndex];
    it('login_CCDMS', function(){
      formPracharak.LoginCCDMS();
    })

    it('upload pracharak form', async function(){
    
    const filePath = path.resolve(__dirname, 'C:\\Users\\anura\\OneDrive\\Documents\\Anurag\\Jarvis\\saral\\testcases\\pracharak form\\test data\\EminentUploadFormat.csv');
    let alert_message = element(by.xpath('//div[@class="alert alert-success"]'));


     await formPracharak.left_panel();
     browser.sleep(3000);
     await formPracharak.pracharkForm();
     browser.sleep(3000);
    
    formPracharak.fileInput(filePath);
    browser.sleep(3000);
    formPracharak.submitFile();
    browser.refresh();
    
    const alertMessage = expect(alert_message.getText()).toBe('Success');

    if (alertMessage == true) {
      console.log('Successfully csv file uploaded');
    };
    await formPracharak.logout();

    });

    it('login_pracharak', function(){
      formPracharak.LoginPracharak(data.mobile_number);
    });
    // it('mandatory fields check', function(){

    // });
  //   it('fill pracharak form', async function(){
  //     let profile_pic_path = "C:/Users/anura/OneDrive/Documents/Anurag/Jarvis/saral/testcases/pracharak form/test data/ProfilePicture.png"; 
  //    await formPracharak.setProfilePic(profile_pic_path);
  //    await formPracharak.setFormType(data.form_type);
  // });
});
})