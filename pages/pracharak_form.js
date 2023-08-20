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
        await  dob.sendKeys(date_of_birth);
    };
    this.setCategory = async function(category_name){
        await category.click();
        let category_type = element(by.xpath("//span[@class='mat-option-text'][text()='"+category_name+"']")).click();
        await browser.wait(EC.presenceOf(category_type), 5000);
        await category_type.click();
        await browser.sleep(2000);
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
        let hState = element(by.xpath("//span[@class='mat-option-text'][text()='"+home_state+"']"));
        await browser.wait(EC.presenceOf(hState), 5000);
        await hState.click();
    };
    this.setHomeTown = async function(home_town){
        browser.executeScript('arguments[0].scrollIntoView()', homeTown.getWebElement());
        // browser.actions().mouseMove(homeTown).perform();
        await  homeTown.sendKeys(home_town);
    };
    this.Setlandline = async function(landline_value){
        browser.executeScript('arguments[0].scrollIntoView()', landLine.getWebElement());
        // browser.actions().mouseMove(landLine).perform();
        await  landLine.sendKeys(landline_value);
    };
    this.verifyMobNum = async function(mobile_number){
        browser.executeScript('arguments[0].scrollIntoView()', mobileNumber1.getWebElement());
        // browser.actions().mouseMove(mobileNumber1).perform();
        await expect(mobileNumber1.getAttribute('value')).toBe(mobile_number);
    };
    this.addMobNum = async function(){
        await addMobNum.click();
        // browser.actions().mouseMove(mobileNumber1).perform();
        browser.executeScript('arguments[0].scrollIntoView()', mobileNumber1.getWebElement());
        await expect(mobileNumber1.getAttribute('value')).toBe(mobile_number);
    };
    this.delMobNum = async function(){
        await delMobNum.click();
    };
    this.setResAdd1 = async function(res_address_1, res_pincode){
        // browser.actions().mouseMove(resAdd1).perform();
        browser.executeScript('arguments[0].scrollIntoView()', resAdd1.getWebElement());
        await resAdd1.sendKeys(res_address_1);
        await resPin.sendKeys(res_pincode);
    };
    this.setResAdd2 = async function(res_address_2){
        await resAdd2.sendKeys(res_address_2);
    };
    this.setOffAdd1 = async function(off_address_1, off_pincode){
        // browser.actions().mouseMove(offAdd1).perform();
        browser.executeScript('arguments[0].scrollIntoView()', offAdd1.getWebElement());
        await offAdd1.sendKeys(off_address_1);
        await offPin.sendKeys(off_pincode);
    };
    this.setOffAdd2 = async function(off_address_2){
        await offAdd2.sendKeys(off_address_2);
    };
    this.setHomeTownAdd1 = async function(home_town_address_1, home_town_pincode){
        // browser.actions().mouseMove(homeTownAdd1).perform();
        browser.executeScript('arguments[0].scrollIntoView()', homeTownAdd1.getWebElement());
        await homeTownAdd1.sendKeys(home_town_address_1);
        await homeTownPin.sendKeys(home_town_pincode);
    };
    this.setHomeTownAdd2 = async function(home_town_2){
        await homeTownAdd2.sendKeys(home_town_2);
    };
    this.setEmail = async function(email_value){
        // browser.actions().mouseMove(email).perform();
        browser.executeScript('arguments[0].scrollIntoView()', email.getWebElement());
        await email.sendKeys(email_value);
    };
    this.setTwitter = async function(twitter_value){
        await twitter.sendKeys(twitter_value);
    };
    this.setFacebook = async function(facebook_value){
        // browser.actions().mouseMove(facebook).perform();
        browser.executeScript('arguments[0].scrollIntoView()', facebook.getWebElement());
        await facebook.sendKeys(facebook_value);
    };
    this.setDegree = async function(degree_value){
        // browser.actions().mouseMove(degree).perform();
        browser.executeScript('arguments[0].scrollIntoView()', degree.getWebElement());
        await degree.sendKeys(degree_value);
    };
    this.setSubject = async function(subject_value){
        await subject.sendKeys(subject_value);
    };
    this.setDesignation = async function(designation_value){
        // browser.actions().mouseMove(designation).perform();
        browser.executeScript('arguments[0].scrollIntoView()', designation.getWebElement());
        await designation.sendKeys(designation_value);
    };
    this.setStartYear = async function(start_year){
        await startYear.sendKeys(start_year);
    };
    this.setEndYear = async function(end_year){
        await endYear.sendKeys(end_year);
    };
    this.setOrganisation = async function(organisation_value){
        // browser.actions().mouseMove(organisation).perform();
        browser.executeScript('arguments[0].scrollIntoView()', organisation.getWebElement());
        await organisation.sendKeys(organisation_value);
    };
    this.setVibhagSambhag = async function(vibhag_sambhag){
        await vibhagSambhag.sendKeys(vibhag_sambhag);
    };
    this.setState = async function(state_value){
        // browser.actions().mouseMove(state).perform();
        browser.executeScript('arguments[0].scrollIntoView()', state.getWebElement());
        await state.click();
        await browser.sleep(2000);
        let stateOption = element(by.xpath("//span[@class='mat-option-text'][text()='"+state_value+"']"));
        await browser.wait(EC.presenceOf(stateOption), 5000);
        await stateOption.click();
    };
    this.setDistrict = async function(district_value){
        await district.click();
        await browser.sleep(2000);
        let districtOption = element(by.xpath("//span[@class='mat-option-text'][text()='"+ district_value+"']"));
        await browser.wait(EC.presenceOf(districtOption), 5000);
        await districtOption.click();
    };
    this.setMandal = async function(mandal_value){
        await mandal.click();
        await browser.sleep(2000);
        let mandalOption = element(by.xpath("//span[@class='mat-option-text'][text()='"+ mandal_value+"']"));
        await browser.wait(EC.presenceOf(mandalOption), 5000);
        await mandalOption.click();
    };


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