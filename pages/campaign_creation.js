const { element } = require("protractor");

var EC = protractor.ExpectedConditions;


let campaign = function(){
    // constructor() {
    let userName = element(by.id('login_email'));
    let password = element(by.id('login_password'));
    let otp = element(by.id('login_otp'));
    let send_OTP = element(by.id('submit'));
    let submit = element(by.id('submit'));
    let left_panel = element(by.id('sidebar-icon'));
    let Campaigns = element(by.linkText('Campaigns'));
    let createCampaign = element(by.linkText('Create Campaign'));
    //campaign name
    let campaignName = element(by.id('campaign_name'));
    //campaign type
    let campaignType = element(by.id('campaign_campaign_type_id'));
    let startDate = element(by.id('campaign_start_date'));
    let hour = element(by.xpath('//*[@id="campaign_time_method_4i"]'));
    let minutes = element(by.xpath('//*[@id="campaign_time_method_5i"]'));
    let endDate = element(by.id('campaign_end_date'));
    //feedback
    let feedback_yes = element(by.id('campaign_require_feedback_yes'));
    let feedback_no = element(by.id('campaign_require_feedback_no'));
    //priority
    let priority = element(by.id('campaign_priority'));
    //call centers
    let nationalcallCenter = element(by.xpath('//*[@id="call_center_choice"]/div/div/div/input[1]'));
    let statecallCenter = element(by.xpath('//*[@id="call_center_choice"]/div/div/div/input[2]'));
    let lokSabhacallCenter = element(by.xpath('//*[@id="call_center_choice"]/div/div/div/input[3]'));
    //Callee Selection Select callees
    let csv = element(by.id('callee_selection_csv'));
    let karyakarta = element(by.id('callee_selection_filters'));
    let primaryMember = element(by.id('callee_selection_primary_members'));
    let keyVoter = element(by.id('callee_selection_beneficiary'));
    let noData = element(by.id('callee_selection_no_data'));
    //Select type of entries
    let qcCompleted = element(by.id('campaign_with_qc_true'));
    let qcNotCompleted = element(by.id('campaign_with_qc_false'));
    //Select type of callees
    let calleeTypeYes = element(by.id('campaign_include_completed_callees_true'));
    let calleeTypeNo = element(by.id('campaign_include_completed_callees_false'));
    //person type
    let notAttempted = element(by.xpath('//*[@id="campaign_person_type"][1]'));
    let verified = element(by.xpath('//*[@id="campaign_person_type"][2]'));
    let rejected = element(by.xpath('//*[@id="campaign_person_type"][3]'));
    let mismatched = element(by.xpath('//*[@id="campaign_person_type"][4]'));
    let notResponding = element(by.xpath('//*[@id="campaign_person_type"][5]'));
    let scheduledForCallLater = element(by.xpath('//*[@id="campaign_person_type"][6]'));
    let duplicateMobileNumbers = element(by.xpath('//*[@id="campaign_person_type"][7]'));
    let invalidNumber = element(by.xpath('//*[@id="campaign_person_type"][8]'));
    let deadNumber = element(by.xpath('//*[@id="campaign_person_type"][9]'));
    //filters

    //
    let karyakartaFilter = element(by.xpath('//*[@id="select-karyakarta-filters"]/ul/li[1]/div[2]/div[1]'));
    let electedRepresentative = element(by.cssContainingText('div', 'Elected Representative'));
    let poorvaKaryakarta = element(by.cssContainingText('div', 'Poorva Karyakarta'));
    let abhiyan = element(by.cssContainingText('div', 'Abhiyan'));
        //level
    let pradeshLevel = element(by.xpath('//*[@id="select-karyakarta-filters"]/ul/li[2]/div[2]/div[1]'));
    let lokSabhaLevel = element(by.cssContainingText('div', 'Lok Sabha'));
    let vidhanSabhaLevel = element(by.cssContainingText('div', 'Vidhan Sabha'));
    let zilaLevel = element(by.cssContainingText('div', 'Zila'));
    let mandalLevel = element(by.cssContainingText('div', 'Mandal'));
    let saktiKendraLevel = element(by.cssContainingText('div', 'Shakti Kendra'));
    let boothLevel = element(by.cssContainingText('div', 'Booth'));
    let vibhagLevel = element(by.cssContainingText('div', 'Vibhag'));
    let nationalLevel = element(by.cssContainingText('div', 'National'));
    let gramPanchayatLevel = element(by.cssContainingText('div', 'Gram Panchayat'));
    let talukaPanchayatLevel = element(by.cssContainingText('div', 'Taluka Panchayat'));
    let wardLevel = element(by.cssContainingText('div', 'Ward'));
    let pannaLevel = element(by.cssContainingText('div', 'Panna'));
    let urbanLocalBodiesLevel = element(by.cssContainingText('div', 'Urban Local Bodies'));
    let ruralLocalbodiesLevel = element(by.cssContainingText('div', 'Rural Local Bodies'));
    let rajyaSabhaLevel = element(by.cssContainingText('div', 'Rajya Sabha'));
    let governorNominatedLevel = element(by.cssContainingText('div', 'MLC - Governor Nominated'));
    let electedByMlaLevel = element(by.cssContainingText('div', 'MLC - Elected By MLA'));
    let electedByLocalBodiesLevel = element(by.cssContainingText('div', 'MLC - Elected by the Local bodies'));
    let electedByTeachersLevel = element(by.cssContainingText('div', 'MLC - Elected by the teachers'));
    let electedByGraduatesLevel = element(by.cssContainingText('div', 'MLC - Elected by the graduates'));
    let municipalCouncilLevel = element(by.cssContainingText('div', 'Municipal Council'));
    let nagarPanchayatLevel = element(by.cssContainingText('div', 'Nagar Panchayat'));
    let municipalCorporationLevel = element(by.cssContainingText('div', 'Municipal Corporation'));
    let zilaPanchayatLevel = element(by.cssContainingText('div', 'Zila Panchayat'));
    let zilaPanchayatWardLevel = element(by.cssContainingText('div', 'Zila Panchayat Ward'));
    let talukaPanchayatWardLevel = element(by.cssContainingText('div', 'Taluka Panchayat Ward'));
    let gramPanchayatWardLevel = element(by.cssContainingText('div', 'Gram Panchayat Ward'));
    let lokSabhaNominated = element(by.cssContainingText('div', 'Lok Sabha Nominated'));
    let rajyaSabhaNominatedLevel = element(by.cssContainingText('div', 'Rajya Sabha Nominated'));
    let vidhanSabhaNominatedLevel = element(by.cssContainingText('div', 'Vidhan Sabha Nominated'));
        //unit
    let coreSangathan = element(by.xpath('//*[@id="unit-stage"]/div[2]/div[1]'));
    let kisanMorcha = element(by.cssContainingText('div', 'Kisan Morcha'));
    let mahilaMorcha = element(by.cssContainingText('div', 'Mahila Morcha'));
    let yuvaMorcha = element(by.cssContainingText('div', 'Yuva Morcha'));
    let obcMrcha = element(by.cssContainingText('div', 'OBC Morcha'));
    let scMorcha = element(by.cssContainingText('div', 'SC Morcha'));
    let stMorcha = element(by.cssContainingText('div', 'ST Morcha'));
    let teaMorcha = element(by.cssContainingText('div', 'Tea Morcha'));
    let minorityMorcha = element(by.cssContainingText('div', 'Minority Morcha'));
    let Cell = element(by.cssContainingText('div', 'Cell'));
    let department = element(by.cssContainingText('div', 'Department'));
    let committee = element(by.cssContainingText('div', 'Committee'));
    let officeBearerUnit = element(by.cssContainingText('div', 'Office Bearer'));
        //sub unit
    let officeBearerSubUnit = element(by.xpath('//*[@id="sub-unit-stage"]/div[2]/div[1]'));
    let morchaSubUnit = element(by.cssContainingText('div','Morcha'));
    let councilSubUnit = element(by.cssContainingText('div','Council'));
    let karyakarniSubUnit = element(by.cssContainingText('div','Karyakarni'));
    let selectAllSubUnit = element(by.xpath('//*[@id="sub-unit-stage"]/div[2]/button'));
        //designations
    let designationsAll = element(by.xpath('//*[@id="select-designation"]/div[3]/button[1]'));
    let doneButton = element(by.id('btn-designation-select'));

    //templates

    //state
    let state = element(by.xpath('//*[@id="state"]'));
    let area = element(by.id('location_type'));
    // let areaStateName = element(by.xpath('//*[@onchange="onLocationValueDropdownChange(event)"]'));
    let callCenterManual = element(by.id('manual_cc_selection'));
    let callCenterAuto = element(by.cssContainingText('input', 'Auto'));
    let callCenterState = element(by.xpath('//*[@class="call-center-dropdown call-center-list-dropdown form-control"]'));
    let createScript = element(by.xpath('//*[@id="select-karyakarta"]/div/ul[2]/li[3]/button'));

    //Scripts
    let script =element(by.xpath('//*[@data-type="Script"]'));
    let faqs = element(by.xpath('//*[@id="4_faqs"]'));
    let DoAndDont = element(by.xpath('//*[@id="4_dos_and_dont"]'));
    let editTag = element(by.cssContainingText('button','EDIT TAG'));
    let submitScript = element(by.xpath('//*[@id="scripts_container"]/div[2]/div[2]/button'));
    let scriptLang = element(by.xpath('//*[@class="search"]'));

    //verification
    let memberVerification = element(by.id('checked1'));
    let bjpMember =element(by.xpath("(//*[@class='ng-scope'])[1]"));
    let whenBjpMember = element(by.xpath("(//*[@class='header']/input)[2]"));
    let wantToBecomeBjpMember = element(by.xpath("(//*[@class='header']/input)[3]"));

    //gap filling questions
    let gapFillingQuestions = element(by.id('checked2'));
    let gender = element(by.xpath("(//*[@id='checked3'])[1]"));
    let whatsappNumber = element(by.xpath("(//*[@id='checked3'])[2]"));
    let email = element(by.xpath("(//*[@id='checked3'])[3]"));
    let fullAddress = element(by.xpath("(//*[@id='checked3'])[4]"));
    let primaryMemberId = element(by.xpath("(//*[@id='checked3'])[5]"));
    let adhaarNumber = element(by.xpath("(//*[@id='checked3'])[6]"));
    let voterId = element(by.xpath("(//*[@id='checked3'])[7]"));
    let personCategoryId = element(by.xpath("(//*[@id='checked3'])[8]"));
    let personEducationId = element(by.xpath("(//*[@id='checked3'])[9]"));
    let personProfessionId = element(by.xpath("(//*[@id='checked3'])[10]"));
    let hasBike = element(by.xpath("(//*[@id='checked3'])[11]"));
    let dob = element(by.xpath("(//*[@id='checked3'])[12]"));
    let hasSmartphone = element(by.xpath("(//*[@id='checked3'])[13]"));
    let hasCar = element(by.xpath("(//*[@id='checked3'])[14]"));
    let relationName = element(by.xpath("(//*[@id='checked3'])[15]"));
    let personCasteId = element(by.xpath("(//*[@id='checked3'])[16]"));
    let inchargeId = element(by.xpath("(//*[@id='checked3'])[17]"));
    let vidhanSabhaQuestion = element(by.xpath("(//*[@id='checked3'])[18]"));

    //Additional Questions
    let additionalQuestions = element(by.id('checked6'));
    let addQuestion = element(by.xpath('//*[@id="top_body"]/div[1]/div[2]/div/div[1]/div[11]/div/div/div[2]/div/div[2]/div/div/div[2]/button[1]'))
    let subScript = element(by.id('question_sub_script'));
    let text = element(by.id('question_text'));
    let questionType = element(by.id('question_question_type'));
    let questionOption = element(by.id('question_options'));
    let createQuestion = element(by.xpath('//*[@id="question_form"]/input[3]'));
    let saveForm = element(by.xpath('//*[@id="top_body"]/div[1]/div[2]/div/div[2]/div/button'));

    //verify campaign name and open campaign
    let id;


    // this.get = function(url){
    //     browser.waitForAngularEnabled(false); // Only use this if your application is not an Angular application
    //     browser.get(url);
    //     browser.wait(EC.urlIs(url), 5000); // Wait for the URL to match before proceeding
    // };

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

    this.Campaigns = async function(){
        await  Campaigns.click();
    };

    this.createCampaign = async function(){
        await  createCampaign.click();
    };

    this.campaignName = async function(campaign_name){
        await  campaignName.sendKeys(campaign_name);
    };

    this.setCampaignType = async function(campaign_Type){
        await  campaignType.element(by.xpath("//option[text()='"+campaign_Type+"']")).click();
    };
    this.startDate =  function(formattedDate){
        startDate.sendKeys(formattedDate);
        console.log(formattedDate);
    };
    

    this.hour = async function(hr){
        await  hour.element(by.xpath("//option[text()='"+hr+"']")).click();
    };

    this.minutes = async function(mn){
        await   minutes.element(by.xpath("(//option[text()='"+mn+"'])[2]")).click();
    };
    this.endDate = async function(end_date){
        await   endDate.sendKeys(end_date);
    };
    this.feedback_yes = async function(){
        await   feedback_yes.click();
    };
    this.feedback_no = async function(){
        await  feedback_no.click();
    };
    this.priority = async function(set_priority){
        await  priority.sendKeys(set_priority);
    };
    this.nationalcallCenter = async function(){
        await  nationalcallCenter.click();
    };
    this.statecallCenter = async function(){
        await  statecallCenter.click();
    };
    this.lokSabhacallCenter = async function(){
        await  lokSabhacallCenter.click();
    };
    this.csv = async function(){
        await   csv.click();
    };
    this.karyakarta = async function(){
        await   karyakarta.click();
    };
    this.primaryMember = async function(){
        await   primaryMember.click();
    };
    this.keyVoter = async function(){
        await   keyVoter.click();
    };
    this.noData = async function(){
        await   noData.click();
    };
    this.qcCompleted = async function(){
        await   qcCompleted.click();
    };
    this.qcNotCompleted = async function(){
        await   qcNotCompleted.click();
    };
    this.calleeTypeYes = async function(){
        await   calleeTypeYes.click();
    };
    this.calleeTypeNo = async function(){
        await   calleeTypeNo.click();
    };
    this.notAttempted = async function(){
        await   notAttempted.click();
    };
    this.verified = async function(){
        await   verified.click();
    };
    this.rejected = async function(){
        await   rejected.click();
    };
    this.mismatched = async function(){
        await   mismatched.click();
    };
    this.notResponding = async function(){
        await   notResponding.click();
    };
    this.scheduledForCallLater = async function(){
        await  scheduledForCallLater.click();
    };
    this.duplicateMobileNumbers = async function(){
        await  duplicateMobileNumbers.click();
    };
    this.invalidNumber = async function(){
        await  invalidNumber.click();
    };
    this.deadNumber = async function(){
        await  deadNumber.click();
    };
    this.karyakartaFilter = async function(){
        await  karyakartaFilter.click();
    };
    this.electedRepresentative = async function(){
        await  electedRepresentative.click();
    };
    this.poorvaKaryakarta = async function(){
        await  poorvaKaryakarta.click();
    };
    this.abhiyan = async function(){
        await  abhiyan.click();
    };

    this.pradeshLevel = async function(){
        await  pradeshLevel.click();
    };
    this.lokSabhaLevel = async function(){
        await  lokSabhaLevel.click();
    };
    this.vidhanSabhaLevel = async function(){
        await  vidhanSabhaLevel.click();
    };
    this.zilaLevel = async function(){
        await  zilaLevel.click();
    };
    this.mandalLevel = async function(){
        await  mandalLevel.click();
    };
    this.saktiKendraLevel = async function(){
        await  saktiKendraLevel.click();
    };
    this.boothLevel = async function(){
        await  boothLevel.click();
    };
    this.vibhagLevel = async function(){
        await  vibhagLevel.click();
    };
    this.nationalLevel = async function(){
        await  nationalLevel.click();
    };
    this.gramPanchayatLevel = async function(){
        await  gramPanchayatLevel.click();
    };
    this.talukaPanchayatLevel = async function(){
        await  talukaPanchayatLevel.click();
    };
    this.wardLevel = async function(){
        await  wardLevel.click();
    };
    this.pannaLevel = async function(){
        await  pannaLevel.click();
    };
    this.urbanLocalBodiesLevel = async function(){
        await  urbanLocalBodiesLevel.click();
    };
    this.ruralLocalbodiesLevel = async function(){
        await  ruralLocalbodiesLevel.click();
    };
    this.rajyaSabhaLevel = async function(){
        await  rajyaSabhaLevel.click();
    };
    this.governorNominatedLevel = async function(){
        await  governorNominatedLevel.click();
    };
    this.electedByMlaLevel = async function(){
        await  electedByMlaLevel.click();
    };
    this.electedByLocalBodiesLevel = async function(){
        await  electedByLocalBodiesLevel.click();
    };
    this.electedByTeachersLevel = async function(){
        await  electedByTeachersLevel.click();
    };
    this.electedByGraduatesLevel = async function(){
        await  electedByGraduatesLevel.click();
    };
    this.municipalCouncilLevel = async function(){
        await   municipalCouncilLevel.click();
    };
    this.nagarPanchayatLevel = async function(){
        await  nagarPanchayatLevel.click();
    };
    this.municipalCorporationLevel = async function(){
        await  municipalCorporationLevel.click();
    };
    this.zilaPanchayatLevel = async function(){
        await  zilaPanchayatLevel.click();
    };
    this.zilaPanchayatWardLevel = async function(){
        await  zilaPanchayatWardLevel.click();
    };
    this.talukaPanchayatWardLevel = async function(){
        await  talukaPanchayatWardLevel.click();
    };
    this.gramPanchayatWardLevel = async function(){
        await  gramPanchayatWardLevel.click();
    };
    this.lokSabhaNominated = async function(){
        await  lokSabhaNominated.click();
    };
    this.rajyaSabhaNominatedLevel = async function(){
        await  rajyaSabhaNominatedLevel.click();
    };
    this.vidhanSabhaNominatedLevel = async function(){
        await  vidhanSabhaNominatedLevel.click();
    };
    this.coreSangathan = async function(){
        await  coreSangathan.click();
    };
    this.kisanMorcha = async function(){
        await  kisanMorcha.click();
    };
    this.mahilaMorcha = async function(){
        await  mahilaMorcha.click();
    };
    this.yuvaMorcha = async function(){
        await  yuvaMorcha.click();
    };
    this.obcMrcha = async function(){
        await   obcMrcha.click();
    };
    this.scMorcha = async function(){
        await   scMorcha.click();
    };
    this.stMorcha = async function(){
        await  stMorcha.click();
    };
    this.teaMorcha = async function(){
        await  teaMorcha.click();
    };
    this.minorityMorcha = async function(){
        await   minorityMorcha.click();
    };
    this.Cell = async function(){
        await   Cell.click();
    };
    this.department = async function(){
        await   department.click();
    };
    this.committee = async function(){
        await  committee.click();
    };
    this.officeBearerUnit = async function(){
        await  officeBearerUnit.click();
    };
    this.officeBearerSubUnit = async function(){
        await  officeBearerSubUnit.click();
    };
    this.morchaSubUnit = async function(){
        await   morchaSubUnit.click();
    };
    this.councilSubUnit = async function(){
        await   councilSubUnit.click();
    };
    this.karyakarniSubUnit = async function(){
        await   karyakarniSubUnit.click();
    };
    this.selectAllSubUnit = async function(){
        await  selectAllSubUnit.click();
    };
    this.designationsAll = async function(){
        await  designationsAll.click();
    };
    this.doneButton = async function(){
        await  doneButton.click();
    };
    this.setState = async function(state_name){
        await  state.element(by.xpath("//option[text()='"+state_name+"']")).click();
    };
    this.setArea = async function(areaType){
        await   area.element(by.xpath("//option[text()='"+areaType+"']")).click();
    };

    this.areaStateName = async function(area_state_name){
        await  element(by.xpath("(//*[@onchange='onLocationValueDropdownChange(event)'])//option[text()='"+area_state_name+"']")).click();
    };

    this.callCenterManual = async function(){
        await   callCenterManual.click();
    };
    this.callCenterAuto = async function(){
        await   callCenterAuto.click();
    };
    this.callCenter = async function(call_Center_Name){
        await   callCenterState.element(by.xpath("//option[text()='"+call_Center_Name+"']")).click();
    };
    this.createScript = async function(){
        await   createScript.click();
    };

    // scripts
    this.script = async function(scriptText){
        await  script.sendKeys(scriptText);
    };
    this.faqs = async function(set_faqs){
        await  faqs.sendKeys(set_faqs);
    };
    this.DoAndDont = async function(do_and_donts){
        await   DoAndDont.sendKeys(do_and_donts);
    };
    this.editTag = async function(){
        await  editTag.click();
    };
    this.submitScript = async function(){
        await  submitScript.click();
    };
    this.setScriptLang =async function(script_lang){
        await  scriptLang.sendKeys(script_lang);
    };
    this.memberVerification = async function(){
        await   memberVerification.click();
    };
    this.bjpMember = async function(){
        await  bjpMember.click();
    };
    this.whenBjpMember = async function(){
        await   whenBjpMember.click();
    };
    this.wantToBecomeBjpMember = async function(){
        await  wantToBecomeBjpMember.click();
    };
    this.gapFillingQuestions = async function(){
        await  gapFillingQuestions.click();
    };
    this.whatsappNumber = async function(){
        await  whatsappNumber.click();
    };
    this.gender = async function(){
        await   gender.click();
    };
    this.email = async function(){
        await   email.click();
    };
    this.fullAddress = async function(){
        await   fullAddress.click();
    };
    this.primaryMemberId = async function(){
        await  primaryMemberId.click();
    };
    this.adhaarNumber = async function(){
        await  adhaarNumber.click();
    };
    this.voterId = async function(){
        await  voterId.click();
    };
    this.personCategoryId = async function(){
        await   personCategoryId.click();
    };
    this.personEducationId = async function(){
        await   personEducationId.click();
    };
    this.personProfessionId = async function(){
        await  personProfessionId.click();
    };
    this.hasBike = async function(){
        await  hasBike.click();
    };
    this.dob = async function(){
        await  dob.click();
    };
    this.hasSmartphone = async function(){
        await   hasSmartphone.click();
    };
    this.hasCar = async function(){
        await   hasCar.click();
    };
    this.relationName = async function(){
        await   relationName.click();
    };
    this.personCasteId = async function(){
        await   personCasteId.click();
    };
    this.inchargeId = async function(){
        await  inchargeId.click();
    };
    this.vidhanSabhaQuestion = async function(){
        await   vidhanSabhaQuestion.click();
    };
    this.additionalQuestions = async function(){
        await   additionalQuestions.click();
    };
    this.addQuestion = async function(){
        await   addQuestion.click();
    };
    this.subScript = async function(){
        await   subScript.sendKeys('Which is your favorite politician?');
    };
    this.text = async function(){
        await   text.sendKeys('politician name');
    };
    this.setQuestionType = async function(ques_type){
        await  questionType.element(by.xpath("//option[text()='"+ques_type+"']")).click();
    };
    this.questionOption = async function(){
        await  questionOption.sendKeys('a,b,c,d,e');
    };
    this.createQuestion = async function(){
        await   createQuestion.click();
    };
    this.saveForm = async function(){
        await   saveForm.click();
    };
    this.verifyCampaignName = async function(verify_campaign_name){
        await   expect(element(by.xpath("(//*[@style='word-break: break-word'])/a[text()='"+verify_campaign_name+"']")).getText()).toBe(verify_campaign_name);
    };
    this.openCampaign = async function(verify_campaign_name){
        await  element(by.xpath("(//*[@style='word-break: break-word'])/a[text()='"+verify_campaign_name+"']")).click();
    };
    
    this.getId = async function(){
       
        await  element(by.xpath('//*[@class="col-md-11"]/h3')).getText().then(async function(text) {
            id = text.substring(4,8);
            console.log(id);
          });
    };

    this.LoginCCDMS = async function(){
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
    }


   

};


module.exports = new campaign();
