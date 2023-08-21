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
    //   
    //   await formPracharak.pracharkForm();
    //   
    //   const filePath = path.resolve(__dirname, 'C:\\Users\\anura\\OneDrive\\Documents\\Anurag\\Jarvis\\saral\\testcases\\pracharak form\\test data\\EminentUploadFormat.csv');
    //   await formPracharak.fileInput(filePath);
    //   
    //   await formPracharak.submitFile();
    //   
    //   const elementToCheck = element(by.xpath('//div[@class="pusher"]/div'))
    //   const timeoutMs = 5000; // Maximum time to wait for the element to be visible (in milliseconds)
    //   browser.wait(EC.visibilityOf(elementToCheck), timeoutMs, 'Warning element not visible');
    //   expect(elementToCheck.getText()).toBe('Success');

    //   browser.refresh();
    //   await formPracharak.logout();
    // });

    it('login_pracharak', async function(){
      await formPracharak.LoginPracharak(data.mobile_number);
    })

    it('mandatory fields check', async function(){
      
      await formPracharak.setFormType(data.form_type);
      
      await formPracharak.setDob(data.date_of_birth);
      
      await formPracharak.setReligion(data.religion_type); 
      
      await formPracharak.setHomeState(data.home_state);
      
      await formPracharak.setResAdd1(data.res_address_1, data.res_pincode);
      
      await formPracharak.setOffAdd1(data.off_address_1, data.off_pincode);
      
      await formPracharak.setHomeTownAdd1(data.home_town_address_1, data.home_town_pincode);
      
      await formPracharak.setDegree(data.degree_value);
      
      await formPracharak.setSubject(data.subject_value);
      
      await formPracharak.setDesignation(data.designation_value);
      
      await formPracharak.setStartYear(data.start_year);
      
      await formPracharak.setEndYear(data.end_year);
      
      await formPracharak.setOrganisation(data.organisation_value);
      
      await formPracharak.setState(data.state_value);
      
      await formPracharak.father(data.father_name, data.father_residence);
      
      await formPracharak.mother(data.mother_name, data.mother_residence);
      
      // await formPracharak.statusValue(data.form_type);
      
      await formPracharak.submitForm();
      
      await formPracharak.success(data.Success_message);
    });
    // it('fill pracharak form', async function(){
      
      // const profile_pic_path = path.resolve(__dirname, "C:/Users/anura/OneDrive/Documents/Anurag/Jarvis/saral/testcases/pracharak form/test data/ProfilePicture.jfif"); 
      
      // await formPracharak.setProfilePic(profile_pic_path);
      // await formPracharak.setFormType(data.form_type);
      
      // await formPracharak.setDob(data.date_of_birth);
      
      // await formPracharak.setCategory(data.category_name);
      
      // await formPracharak.setReligion(data.religion_type); 
      
      // await formPracharak.setCaste(data.casteValue);
      
      // await formPracharak.setSubCaste(data.subCasteValue);
      
      // await formPracharak.setHomeState(data.home_state);
      
      // await formPracharak.setHomeTown(data.home_town);
      
      // await formPracharak.Setlandline(data.landline_value);
      
      // await formPracharak.verifyMobNum(data.mobile_number);
      
      // await formPracharak.setResAdd1(data.res_address_1, data.res_pincode);
      
      // await formPracharak.setResAdd2(data.res_address_2);
      
      // await formPracharak.setOffAdd1(data.off_address_1, data.off_pincode);
      
      // await formPracharak.setOffAdd2(data.off_address_2);
      
      // await formPracharak.setHomeTownAdd1(data.home_town_address_1, data.home_town_pincode);
      
      // await formPracharak.setHomeTownAdd2(data.home_town_2);
      
      // // await formPracharak.setEmail(data.email_value);
      
      // await formPracharak.setTwitter(data.twitter_value);
      
      // await formPracharak.setFacebook(data.facebook_value);
      
      // await formPracharak.setDegree(data.degree_value);
      
      // await formPracharak.setSubject(data.subject_value);
      
      // await formPracharak.setDesignation(data.designation_value);
      
      // await formPracharak.setStartYear(data.start_year);
      
      // await formPracharak.setEndYear(data.end_year);
      
      // await formPracharak.setOrganisation(data.organisation_value);
      
      // await formPracharak.setVibhagSambhag(data.vibhag_sambhag);
      
      // await formPracharak.setState(data.state_value);
      
      // await formPracharak.setDistrict(data.district_value);
      
      // await formPracharak.setMandal(data.mandal_value);
      
      // await formPracharak.father(data.father_name, data.father_residence);
      
      // await formPracharak.father1(data.father_age, data.father_profession, data.father_is_alive);
      
      // await formPracharak.mother(data.mother_name, data.mother_residence);
      
      // await formPracharak.mother1(data.mother_age, data.mother_profession, data.mother_is_alive);
      
      // await formPracharak.brother(data.brother_name,data.brother_age, data.brother_profession, data.brother_is_alive, data.brother_residence);
      
      // await formPracharak.sister(data.sister_name, data.sister_age, data.sister_profession, data.sister_is_alive, data.sister_residence);
      
      // await formPracharak.sInterest(data.s_interest);

      // await browser.sleep(5000);
      // await formPracharak.statusValue(data.form_type);
      
      // // formPracharak.submitForm();
      // // await formPracharak.success(data.Success_message);

      
  // });
});
})