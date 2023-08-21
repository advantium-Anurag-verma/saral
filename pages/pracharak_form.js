const { element, browser, by } = require('protractor');
var EC = protractor.ExpectedConditions;


let pracharak = function(){
    let userName = element(by.id('login_email'));
    let password = element(by.id('login_password'));
    let otp = element(by.id('login_otp'));
    let send_OTP = element(by.id('submit'));
    let submit = element(by.id('submit'));
    let left_panel = element(by.id('sidebar-icon'));
    let eminentManualDataUpload = element(by.linkText('Eminent Manual Data Upload'));
    const inputFileElement = element(by.id('file'));
    let submitPracharakButton = element(by.xpath('//button[text()="Submit"]'));
    let logOut = element(by.xpath('//*[@id="navbarManagement"]/ul/li[2]/a'));

    //pracharak login
    let mNumber = element(by.xpath('//input[@data-placeholder="Phone Number"]'));
    let submitOTPNumber = element(by.xpath('//button[@type="submit"]'));
    let otpField = element(by.id('mat-input-1'));

    //pracharak form
    const profilePic = element(by.id('file-input'));
    let picPreviewClose = element(by.xpath('//button[text()="Close"]'));
    let dob = element(by.xpath('//input[@formcontrolname="dob"]'));
    let category =element(by.xpath('//mat-select[@id="mat-select-0"]'));
    let caste = element(by.xpath('//input[@formcontrolname="caste"]'));
    let subCaste = element(by.xpath('//input[@formcontrolname="sub_caste"]'));
    let homeState = element(by.xpath('//div[@id="mat-select-value-5"]/span'));
    let homeTown = element(by.xpath('//input[@formcontrolname="home_town"]'));
    let landLine = element (by.xpath('//input[@formcontrolname="landline"]'));
    let mobileNumber1 = element(by.xpath('//input[@placeholder="Mobile no"]'));
    let addMobNum = element(by.xpath('(//div[@class="multiple-section-icons ng-star-inserted"]/mat-icon)[1]'));
    let delMobNum = element(by.xpath('(//div[@class="multiple-section-icons ng-star-inserted"]/mat-icon)[1]/following-sibling::mat-icon'));
    let resAdd1 = element(by.xpath('//input[@formcontrolname="res_address_1"]'));
    let resAdd2 = element(by.xpath('//input[@formcontrolname="res_address_2"]'));
    let resPin = element(by.xpath('//input[@formcontrolname="res_pincode"]'));
    let offAdd1 = element(by.xpath('//input[@formcontrolname="off_address_1"]'));
    let offAdd2 = element(by.xpath('//input[@formcontrolname="off_address_2"]'));
    let offPin = element(by.xpath('//input[@formcontrolname="off_pincode"]'));
    let homeTownAdd1 = element(by.xpath('//input[@formcontrolname="home_town_address_1"]'));
    let homeTownAdd2 = element(by.xpath('//input[@formcontrolname="home_town_address_2"]'));
    let homeTownPin = element(by.xpath('//input[@formcontrolname="home_town_pincode"]'));
    let email = element(by.xpath('//input[@formcontrolname="email"]'));
    let twitter = element(by.xpath('//input[@formcontrolname="twitter"]'));
    let facebook = element(by.xpath('//input[@formcontrolname="facebook"]'));
    let degree = element(by.xpath('//input[@formcontrolname="degree"]'));
    let subject = element(by.xpath('//input[@formcontrolname="subject"]'));
    let designation = element(by.xpath('//input[@formcontrolname="designation"]'));
    let startYear = element(by.xpath('//input[@id="mat-input-42"]'));
    let endYear = element(by.xpath('//input[@id="mat-input-43"]'));
    let organisation = element(by.xpath('//input[@formcontrolname="organisation"]'));
    let vibhagSambhag = element(by.xpath('//input[@formcontrolname="vibhag_sambhag"]'));
    let state = element(by.id('mat-select-6'));
    let district = element(by.id('mat-select-8'));
    let mandal = element(by.id('mat-select-value-11'));

    //Father
    let fatherName = element(by.xpath('//input[@formcontrolname="father_name"]'));
    let fatherAge = element(by.xpath('//input[@formcontrolname="father_age"]'));
    let fatherProfession = element(by.xpath('//input[@formcontrolname="father_profession"]'));
    let fatherresidence = element(by.xpath('//input[@formcontrolname="father_residence"]'));

    //Mother
    let motherName = element(by.xpath('//input[@formcontrolname="mother_name"]'));
    let motherAge = element(by.xpath('//input[@formcontrolname="mother_age"]'));
    let motherProfession = element(by.xpath('//input[@formcontrolname="mother_profession"]'));
    let motherresidence = element(by.xpath('//input[@formcontrolname="mother_residence"]'));

    //Brother
    let brotherName = element(by.xpath('//input[@formcontrolname="brother_name"]'));
    let brotherAge = element(by.xpath('//input[@formcontrolname="brother_age"]'));
    let brotherProfession = element(by.xpath('//input[@formcontrolname="brother_profession"]'));
    let brotherresidence = element(by.xpath('//input[@formcontrolname="brother_residence"]'));

    //Sister
    let sisterName = element(by.xpath('//input[@formcontrolname="sister_name"]'));
    let sisterAge = element(by.xpath('//input[@formcontrolname="sister_age"]'));
    let sisterProfession = element(by.xpath('//input[@formcontrolname="sister_profession"]'));
    let sisterresidence = element(by.xpath('//input[@formcontrolname="sister_residence"]'));

    //specialInterest
    let specialInterest = element(by.id('mat-input-29'));

    //submit
    let submitFormButton = element(by.xpath('//div[@class="col-md-12 text-center display-flex"]/button'));
    let successMessage = element(by.xpath('//h3[text()="Your form has been updated successfully."]'));

    async function setUserName(user_name){
        await  userName.sendKeys(user_name);
      };
  
    async function setPassword(paswrd){
        await  password.sendKeys(paswrd);
    };

    async function sendOTP(){
        await  send_OTP.click();
    };

    async function setOtp(master_otp){
        await   otp.sendKeys(master_otp);
    };

    async function submitButton(){
        await  submit.click();
    };

    this.left_panel = async function(){
        await  left_panel.click();
    };
    this.pracharkForm = async function(){
        await  eminentManualDataUpload.click();
    };
    this.fileInput = async function(file){
    //   await  fileInput.sendKeys(file);
        await  inputFileElement.sendKeys(file);
    };
    this.submitFile = async function(){
        await  submitPracharakButton.click();
    };
    this.logout = async function(){
        await  logOut.click();
    };


    //pracharak form link 
    async function mobileNumber(mobile_number){
        await  mNumber.sendKeys(mobile_number);
    };
    async function submitMobileNumber(){
        await  submitOTPNumber.click();
    };
    async function setOTPNumber(otp){
        await  otpField.sendKeys(otp);
    };
    this.setProfilePic = async function(profile_pic){
        browser.executeScript('arguments[0].style.display = "block";', profilePic);
        await  profilePic.sendKeys(profile_pic);
        await  picPreviewClose.click();
        await  browser.sleep(2000);
    };
    this.setFormType = async function(form_type){
        let radioButton = element(by.xpath("//input[@value='"+form_type+"']"));
        await browser.wait(EC.presenceOf(radioButton), 5000);
        await browser.executeScript("arguments[0].click();", radioButton);
    };
    this.setDob = async function(date_of_birth){
        await dob.click();
        await  dob.sendKeys(date_of_birth);
    };
    
    this.setCategory = async function (category_name) {
        await category.click();
        let categoryOption = element(by.xpath("//span[@class='mat-option-text'][text()='" + category_name + "']"));
        await browser.wait(EC.elementToBeClickable(categoryOption), 5000);
        await categoryOption.click();
        await browser.sleep(2000);
    };    
    this.setReligion= async function(religion_type){
        element(by.xpath('//div[@id="mat-select-value-3"]')).click();
        let religion = element(by.xpath("//span[@class='mat-option-text'][text()='"+religion_type+"']"));
        await browser.wait(EC.presenceOf(religion), 5000);
        await religion.click();
    };
    this.setCaste = async function(casteValue){
        await  caste.sendKeys(casteValue);
    };
    this.setSubCaste = async function(subCasteValue){
        await  subCaste.sendKeys(subCasteValue);
    };
    this.setHomeState = async function(home_state){
        await  homeState.click();
        browser.sleep(2000);
        let hState = element(by.xpath("//span[@class='mat-option-text'][text()='"+home_state+"']"));
        await browser.wait(EC.presenceOf(hState), 5000);
        await hState.click();
    };
    this.setHomeTown = async function(home_town){
        browser.executeScript('arguments[0].scrollIntoView()', homeTown.getWebElement());
        await homeTown.click();
        await  homeTown.sendKeys(home_town);
    };
    this.Setlandline = async function(landline_value){
        browser.executeScript('arguments[0].scrollIntoView()', landLine.getWebElement());
        await  landLine.sendKeys(landline_value);
    };
    this.verifyMobNum = async function(mobile_number){
        browser.executeScript('arguments[0].scrollIntoView()', mobileNumber1.getWebElement());
        await expect(mobileNumber1.getAttribute('value')).toBe(mobile_number);
    };
    this.addMobNum = async function(){
        await addMobNum.click();
        browser.executeScript('arguments[0].scrollIntoView()', mobileNumber1.getWebElement());
        await expect(mobileNumber1.getAttribute('value')).toBe(mobile_number);
    };
    this.delMobNum = async function(){
        await delMobNum.click();
    };
    this.setResAdd1 = async function(res_address_1, res_pincode){
        browser.executeScript('arguments[0].scrollIntoView()', resAdd1.getWebElement());
        await resAdd1.click();
        await resAdd1.sendKeys(res_address_1);
        await resPin.click();
        await resPin.sendKeys(res_pincode);
    };
    this.setResAdd2 = async function(res_address_2){
        await resAdd2.sendKeys(res_address_2);
    };
    this.setOffAdd1 = async function(off_address_1, off_pincode){
        browser.executeScript('arguments[0].scrollIntoView()', offAdd1.getWebElement());
        await offAdd1.click();
        await offAdd1.sendKeys(off_address_1);
        await offPin.click();
        await offPin.sendKeys(off_pincode);
    };
    this.setOffAdd2 = async function(off_address_2){
        await offAdd2.sendKeys(off_address_2);
    };
    this.setHomeTownAdd1 = async function(home_town_address_1, home_town_pincode){
        browser.executeScript('arguments[0].scrollIntoView()', homeTownAdd1.getWebElement());
        await homeTownAdd1.click();
        await homeTownAdd1.sendKeys(home_town_address_1);
        await homeTownPin.click();
        await homeTownPin.sendKeys(home_town_pincode);
    };
    this.setHomeTownAdd2 = async function(home_town_2){
        await homeTownAdd2.sendKeys(home_town_2);
    };
    this.setEmail = async function(email_value){
        browser.executeScript('arguments[0].scrollIntoView()', email.getWebElement());
        await email.sendKeys(email_value);
    };
    this.setTwitter = async function(twitter_value){
        await twitter.sendKeys(twitter_value);
    };
    this.setFacebook = async function(facebook_value){
        browser.executeScript('arguments[0].scrollIntoView()', facebook.getWebElement());
        await facebook.sendKeys(facebook_value);
    };
    this.setDegree = async function(degree_value){
        browser.executeScript('arguments[0].scrollIntoView()', degree.getWebElement());
        await degree.click();
        await degree.sendKeys(degree_value);
    };
    this.setSubject = async function(subject_value){
        await subject.click();
        await subject.sendKeys(subject_value);
    };
    this.setDesignation = async function(designation_value){
        browser.executeScript('arguments[0].scrollIntoView()', designation.getWebElement());
        await designation.click();
        await designation.sendKeys(designation_value);
    };
    this.setStartYear = async function(start_year){
        await startYear.click();
        browser.sleep(2000);
        element(by.xpath("//button[@aria-label='"+start_year+"']")).click();
        await browser.sleep(3000);
    };
    this.setEndYear = async function(end_year){
        await endYear.click();
        await browser.executeScript('arguments[0].scrollIntoView()', endYear.getWebElement());
        await browser.sleep(2000);
        let year = element(by.xpath("//button[@aria-label='"+end_year+"']"));
        await year.click();
    };
    this.setOrganisation = async function(organisation_value){
        browser.executeScript('arguments[0].scrollIntoView()', organisation.getWebElement());
        await organisation.click();
        await organisation.sendKeys(organisation_value);
    };
    this.setVibhagSambhag = async function(vibhag_sambhag){
        await vibhagSambhag.sendKeys(vibhag_sambhag);
    };
    this.setState = async function(state_value){
        browser.executeScript('arguments[0].scrollIntoView()', state.getWebElement());
        await state.click();
        await browser.sleep(2000);
        let stateOption = element(by.xpath("//span[@class='mat-option-text'][text()='"+state_value+"']"));
        await browser.wait(EC.presenceOf(stateOption), 5000);
        await stateOption.click();
        await browser.sleep(2000);
    };
    this.setDistrict = async function(district_value){
        await district.click();
        await browser.sleep(2000);
        let districtOption = element(by.xpath("//span[@class='mat-option-text'][text()='"+ district_value+"']"));
        await browser.wait(EC.presenceOf(districtOption), 5000);
        await districtOption.click();
        await browser.sleep(2000);
    };
    this.setMandal = async function(mandal_value){
        await mandal.click();
        await browser.sleep(2000);
        let mandalOption = element(by.xpath("//span[@class='mat-option-text'][text()='"+ mandal_value+"']"));
        await browser.wait(EC.presenceOf(mandalOption), 5000);
        await mandalOption.click();
        await browser.sleep(3000);
    };
    this.father = async function(father_name, father_residence){
        await fatherName.click();
        await fatherName.sendKeys(father_name);
        await fatherresidence.click();
        await fatherresidence.sendKeys(father_residence);
    };
    this.father1 = async function(father_age, father_profession, is_alive){
        await fatherAge.sendKeys(father_age);
        await fatherProfession.sendKeys(father_profession);
        await fatherIsAlive.click();
    };
    this.mother = async function(mother_name, mother_residence){
        await motherName.click();
        await motherName.sendKeys(mother_name);
        await motherresidence.click();
        await motherresidence.sendKeys(mother_residence);
    };
    this.mother1 = async function(mother_age, mother_profession,is_alive){
        let motherIsAlive = element(by.xpath("//input[@name='mat-radio-group-6'][@value='"+is_alive+"']"));
        await motherAge.sendKeys(mother_age);
        await motherProfession.sendKeys(mother_profession);
        await motherIsAlive.click();
    };
    this.brother = async function(brother_name, brother_age, brother_profession, is_alive, brother_residence){
        await brotherName.sendKeys(brother_name);
        await brotherAge.sendKeys(brother_age);
        await brotherProfession.sendKeys(brother_profession);
        await brotherresidence.sendKeys(brother_residence);
    };
    this.sister = async function(sister_name, sister_age, sister_profession,is_alive, sister_residence){
        await sisterName.sendKeys(sister_name);
        await sisterAge.sendKeys(sister_age);
        await sisterProfession.sendKeys(sister_profession);
        await sisterresidence.sendKeys(sister_residence);
    };
    this.sInterest = async function(special_interest){
        await specialInterest.sendKeys(special_interest);
    };
    this.submitForm = function(){
        submitFormButton.click();
        browser.sleep(3000);
    };
    // this.statusValue = async function(form_type){
    //     // console.log(profile_pic.getAttribute('value'));
    //     let radioButton = element(by.xpath("//input[@value='"+form_type+"']"));
    //     let religion = element(by.xpath('//div[@id="mat-select-value-3"]'));
    //     console.log("form type:",radioButton.getAttribute('value'));
    //     console.log('Status:', radioButton.isEnabled());
    //     console.log("====================================================================");
    //     console.log("date of birth:",dob.getAttribute('value'));
    //     console.log('Status:', dob.isEnabled());
    //     console.log("====================================================================");
    //     console.log("religion:",religion.getAttribute('value'));
    //     console.log('Status:', religion.isEnabled());
    //     console.log("====================================================================");
    //     console.log("home state:",homeState.getAttribute('value'));
    //     console.log('Status:', homeState.isEnabled());
    //     console.log("====================================================================");
    //     console.log("residential address:",resAdd1.getAttribute('value'));
    //     console.log('Status:', resAdd1.isEnabled());
    //     console.log("====================================================================");
    //     console.log("residential pin:",resPin.getAttribute('value'));
    //     console.log('Status:', resPin.isEnabled());
    //     console.log("====================================================================");
    //     console.log("office address:",offAdd1.getAttribute('value'));
    //     console.log('Status:', offAdd1.isEnabled());
    //     console.log("====================================================================");
    //     console.log("office pin:",offPin.getAttribute('value'));
    //     console.log('Status:', offPin.isEnabled());
    //     console.log("====================================================================");
    //     console.log("home town address:",homeTownAdd1.getAttribute('value'));
    //     console.log('Status:', homeTownAdd1.isEnabled());
    //     console.log("====================================================================");
    //     console.log("home town pin:",homeTownPin.getAttribute('value'));
    //     console.log('Status:', homeTownPin.isEnabled());
    //     console.log("====================================================================");
    //     console.log("degree:",degree.getAttribute('value'));
    //     console.log('Status:', degree.isEnabled());
    //     console.log("====================================================================");
    //     console.log("subject:",subject.getAttribute('value'));
    //     console.log('Status:', subject.isEnabled());
    //     console.log("====================================================================");
    //     console.log("designation:",designation.getAttribute('value'));
    //     console.log('Status:', designation.isEnabled());
    //     console.log("====================================================================");
    //     console.log("starte year:",startYear.getAttribute('value'));
    //     console.log('Status:', startYear.isEnabled());
    //     console.log("====================================================================");
    //     console.log("end year:",endYear.getAttribute('value'));
    //     console.log('Status:', endYear.isEnabled());
    //     console.log("====================================================================");
    //     console.log("organisation:",organisation.getAttribute('value'));
    //     console.log('Status:', organisation.isEnabled());
    //     console.log("====================================================================");
    //     console.log("state:",state.getAttribute('value'));
    //     console.log('Status:', state.isEnabled());
    //     console.log("====================================================================");
    //     console.log("father's name:",fatherName.getAttribute('value'));
    //     console.log('Status:', fatherName.isEnabled());
    //     console.log("====================================================================");
    //     console.log("father's residence:",fatherresidence.getAttribute('value'));
    //     console.log('Status:', fatherresidence.isEnabled());
    //     console.log("====================================================================");
    //     console.log("mother's name:",motherName.getAttribute('value'));
    //     console.log('Status:', motherName.isEnabled());
    //     console.log("====================================================================");
    //     console.log("mother's residence:",motherresidence.getAttribute('value'));
    //     console.log('Status:', motherresidence.isEnabled());
    //     console.log("====================================================================");
    // }



    this.success = async function(Success_message){
        await browser.wait(EC.presenceOf(successMessage), 5000);
        await expect(successMessage.getText()).toBe(Success_message);
        console.log("====================================================================");
        console.log("success message:",Success_message);
        console.log("====================================================================");
    }


    this.LoginCCDMS = function(){
        let url = "https://saral-staging.ccdms.in/login"; 
        let user_name = "admin@jarvis.consulting";
        let set_password = "Praveen@2022";
        let otp = "010203";
    
        browser.waitForAngularEnabled(false); // Only use this if your application is not an Angular application
        browser.get(url);
        browser.wait(EC.urlIs(url), 5000); // Wait for the URL to match before proceeding
        
        browser.manage().window().maximize();
        setUserName(user_name);
        setPassword(set_password);
        sendOTP();
        setOtp(otp);
        submitButton();
        browser.sleep(3000);
        };
    this.LoginPracharak = function(mobile_number){
        let url = "https://zila-staging.ccdms.in/pracharak/login"; 
        let otp = "227244";
    
        browser.waitForAngularEnabled(false); // Only use this if your application is not an Angular application
        browser.get(url);
        browser.wait(EC.urlIs(url), 5000); // Wait for the URL to match before proceeding
        
        browser.manage().window().maximize();
        mobileNumber(mobile_number);
        browser.sleep(3000);
        submitMobileNumber();
        browser.sleep(3000);
        setOTPNumber(otp);
        browser.sleep(3000);
        submitMobileNumber();
        browser.sleep(3000);
        }
};

module.exports = new pracharak();