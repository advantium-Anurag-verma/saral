const { element, browser } = require('protractor');
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
    };
    this.setFormType = async function(form_type){
        let radioButton = element(by.xpath("//input[@value='"+form_type+"']"));
        await browser.wait(EC.presenceOf(radioButton), 5000);
        await browser.executeScript("arguments[0].click();", radioButton);
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