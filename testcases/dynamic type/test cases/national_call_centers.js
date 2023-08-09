const fs = require('fs');
const using = require('jasmine-data-provider');
const testData = require('../test data/testData4.json');
let campaign = require('../../../pages/campaign_creation.js');
let conversion = require('../../../pages/conversions.js');


describe('dynamic type', function(){

    let csv = element(by.xpath('//input[@id="callee_selection_csv"]'));
    let karyakarta = element(by.xpath('//input[@id="callee_selection_filters"]'));
    let primaryMember = element(by.xpath('//input[@id="callee_selection_primary_members"]'));
    let keyVoter = element(by.xpath('//input[@id="callee_selection_beneficiary"]'));
    let noData = element(by.xpath('//input[@id="callee_selection_no_data"]'));

    it('login_CCDMS', function(){
        campaign.LoginCCDMS();
    })

    
    const datasetNames = Object.keys(testData);
    using(testData, (data, datasetKeyIndex) => {
        const datasetName = datasetNames[datasetKeyIndex];
    it('end_date_equal_to_start_date', function(){


        var currentDate = new Date();
        var day = currentDate.getDate().toString().padStart(2, '0');
        var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        var formattedDate = month + '/' + day + '/' + currentDate.getFullYear();
        
        
        campaign.left_panel();
        browser.sleep(3000);
        campaign.Campaigns();
        browser.sleep(3000);
        campaign.createCampaign();
        browser.sleep(3000);
        campaign.campaignName(data.campaign_name);
        campaign.setCampaignType(data.campaign_type);
        campaign.startDate(data.start_date);
        campaign.hour(data.time_hr);
        campaign.minutes(data.time_mn);
        campaign.endDate(data.end_date);
        campaign.feedback_yes();
        campaign.priority(data.set_priority);
        campaign.nationalcallCenter();

        campaign.is_enabled(csv, karyakarta, primaryMember, keyVoter, noData).then((result) => {
        console.log("--------------------------------------------------");
        console.log("Enabled elements:", result.enabled);
        console.log("Disabled elements:", result.disabled);
        console.log("--------------------------------------------------");
        }).catch((error) => {
        console.error(error);
        });

        // Call the function to click on a radio button by passing its text
        campaign.clickRadioButtonByText(data.radio_button_text);

        // campaign.karyakarta();
        // campaign.qcNotCompleted();
        // campaign.notAttempted();
        // campaign.verified();
        // campaign.rejected();
        // campaign.mismatched();
        // campaign.notResponding();
        // campaign.scheduledForCallLater();
        // campaign.duplicateMobileNumbers();
        // campaign.invalidNumber();
        // campaign.deadNumber();
        // campaign.karyakartaFilter();
        // campaign.pradeshLevel();
        // campaign.coreSangathan();
        // campaign.officeBearerSubUnit();
        // browser.sleep(3000);
        // campaign.designationsAll();
        // browser.sleep(3000);
        // campaign.doneButton();
        // browser.sleep(3000);
        // campaign.setState(data.set_state);
        // browser.sleep(3000);
        // campaign.setArea(data.set_area);
        // browser.sleep(3000);
        // campaign.areaStateName(data.area_state_name);
        // browser.sleep(3000);
        // campaign.callCenterManual();
        // browser.sleep(3000);
        // campaign.callCenter(data.call_center);
        // campaign.createScript();
        // browser.sleep(3000);

        // //scripts
        // campaign.script(data.script);
        // browser.sleep(3000);
        // campaign.submitScript();
        // browser.sleep(3000);

        // //verification
        // campaign.setScriptLang(data.script_lang);
        // campaign.memberVerification();
        // campaign.bjpMember();
        // campaign.whenBjpMember();
        // campaign.wantToBecomeBjpMember();
        // campaign.gapFillingQuestions();
        // campaign.gender();
        // campaign.email();
        // campaign.additionalQuestions();
        // campaign.addQuestion();
        // campaign.subScript();
        // campaign.text();
        // campaign.setQuestionType(data.question_type);
        // campaign.questionOption();
        // campaign.createQuestion();
        // browser.sleep(3000);
        // campaign.saveForm();
        // browser.sleep(5000);
        
        // campaign.verifyCampaignName(data.verify_campaign_name);
        // browser.sleep(3000);
        // campaign.openCampaign(data.verify_campaign_name);
        // browser.sleep(3000);
    });
});
});
