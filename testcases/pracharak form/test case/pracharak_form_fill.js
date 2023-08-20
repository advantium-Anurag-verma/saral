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
    // it('login_CCDMS', function(){
    //   formPracharak.LoginCCDMS();
    // })

    // it('upload pracharak form', async function(){

    //   await formPracharak.left_panel();
    //   browser.sleep(3000);
    //   await formPracharak.pracharkForm();
    //   browser.sleep(3000);
    //   const filePath = path.resolve(__dirname, 'C:\\Users\\anura\\OneDrive\\Documents\\Anurag\\Jarvis\\saral\\testcases\\pracharak form\\test data\\EminentUploadFormat.csv');
    //   await formPracharak.fileInput(filePath);
    //   browser.sleep(3000);
    //   await formPracharak.submitFile();
    //   browser.sleep(3000);
    //   const elementToCheck = element(by.xpath('//div[@class="pusher"]/div'))
    //   const timeoutMs = 5000; // Maximum time to wait for the element to be visible (in milliseconds)
    //   browser.wait(EC.visibilityOf(elementToCheck), timeoutMs, 'Warning element not visible');
    //   expect(elementToCheck.getText()).toBe('Success');

    //   browser.refresh();
    //   await formPracharak.logout();
    // });

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
      await formPracharak.setDob(data.date_of_birth);
      browser.sleep(3000);
      await formPracharak.setCategory(data.category_name);
      browser.sleep(3000);
      await formPracharak.setReligion(data.religion_type); 
      browser.sleep(3000);
      await formPracharak.setCaste(data.casteValue);
      browser.sleep(3000);
      await formPracharak.setSubCaste(data.subCasteValue);
      browser.sleep(3000);
      await formPracharak.setHomeState(data.home_state);
      browser.sleep(3000);
      await formPracharak.setHomeTown(data.home_town);
      browser.sleep(3000);
      await formPracharak.Setlandline(data.landline_value);
      browser.sleep(3000);
      await formPracharak.verifyMobNum(data.mobile_number);
      browser.sleep(3000);
      await formPracharak.setResAdd1(data.res_address_1, data.res_pincode);
      browser.sleep(3000);
      await formPracharak.setResAdd2(data.res_address_2);
      browser.sleep(3000);
      await formPracharak.setOffAdd1(data.off_address_1, data.off_pincode);
      browser.sleep(3000);
      await formPracharak.setOffAdd2(data.off_address_2);
      browser.sleep(3000);
      await formPracharak.setHomeTownAdd1(data.home_town_address_1, data.home_town_pincode);
      browser.sleep(3000);
      await formPracharak.setHomeTownAdd2(data.home_town_2);
      browser.sleep(5000);
      await formPracharak.setEmail(data.email_value);
      browser.sleep(3000);
      await formPracharak.setTwitter(data.twitter_value);
      browser.sleep(3000);
      await formPracharak.setFacebook(data.facebook_value);
      browser.sleep(3000);
      await formPracharak.setDegree(data.degree_value);
      browser.sleep(3000);
      await formPracharak.setSubject(data.subject_value);
      browser.sleep(3000);
      await formPracharak.setDesignation(data.designation_value);
      browser.sleep(3000);
      await formPracharak.setStartYear(data.start_year);
      browser.sleep(3000);
      await formPracharak.setEndYear(data.end_year);
      browser.sleep(3000);
      await formPracharak.setOrganisation(data.organisation_value);
      browser.sleep(3000);
      await formPracharak.setVibhagSambhag(data.vibhag_sambhag);
      browser.sleep(3000);
      await formPracharak.setState(data.state_value);
      browser.sleep(3000);
      await formPracharak.setDistrict(data.district_value);
      browser.sleep(3000);
      await formPracharak.setMandal(data.mandal_value);
      browser.sleep(3000);
  });
});
})