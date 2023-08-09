const { element, by, browser, protractor } = require('protractor');
const fs = require('fs');
const using = require('jasmine-data-provider');
const testData = require('../test data/testData1.json');
let campaign = require('../../../pages/campaign_creation.js');
let conversion = require('../../../pages/conversions.js');


describe('dynamic type', function(){

    it('login_CCDMS', function(){
        campaign.LoginCCDMS();
    })

    
    const datasetNames = Object.keys(testData);
    using(testData, (data, datasetKeyIndex) => {
        const datasetName = datasetNames[datasetKeyIndex];
    it('end_date_less_than_start_date', function(){


        var currentDate = new Date();
        var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        var formattedDate = month + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
        
        
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
        campaign.statecallCenter();
        campaign.clickRadioButtonByText(data.radio_button_text);
        campaign.qcNotCompleted();
        campaign.notAttempted();
        campaign.verified();
        campaign.rejected();
        campaign.mismatched();
        campaign.notResponding();
        campaign.scheduledForCallLater();
        campaign.duplicateMobileNumbers();
        campaign.invalidNumber();
        campaign.deadNumber();
        campaign.karyakartaFilter();
        campaign.pradeshLevel();
        campaign.coreSangathan();
        campaign.officeBearerSubUnit();
        browser.sleep(3000);
        campaign.designationsAll();
        browser.sleep(3000);
        campaign.doneButton();
        browser.sleep(3000);
        campaign.setState(data.set_state);
        browser.sleep(3000);
        campaign.setArea(data.set_area);
        browser.sleep(3000);
        campaign.areaStateName(data.area_state_name);
        browser.sleep(3000);
        campaign.callCenterManual();
        browser.sleep(3000);
        campaign.callCenter(data.call_center);
        campaign.createScript();

        const warningElement = element(by.xpath('//div[text()="End Date needs to be after Start Date"]'))
        const EC = protractor.ExpectedConditions;
        const timeoutMs = 5000; // Maximum time to wait for the element to be visible (in milliseconds)
        browser.wait(EC.visibilityOf(warningElement), timeoutMs, 'Warning element not visible');
        expect(warningElement.getText()).toBe('End Date needs to be after Start Date');

    });
});
});
