var EC = protractor.ExpectedConditions;
const { browser, element } = require('protractor');
let campaign = require('../../../pages/campaign_creation.js');



async function closeDate() {
  let date = element(by.xpath('(//button[@onclick="showDateModal()"])'));
  await browser.executeScript("arguments[0].click();", date);
};

async function sendEndDate(formattedDate) {
  const end_date = element(by.xpath('(//input[@id="input_date"])'));
  await browser.executeScript("arguments[0].scrollIntoView(true);", end_date);
  await end_date.sendKeys(formattedDate);
};

async function saveEndDate() {
  let saveButton = element(by.xpath('(//button[text()="Save"])[last()]'));
  await saveButton.click();
};

async function campaignsPage() {
  let return_campaign_page = element(by.xpath('//*[@id="top_body"]/div[1]/div[2]/ol/li[2]/a'));
  await return_campaign_page.click();
};

describe('delete campaign', function(){
  it('login_CCDMS', function(){
    campaign.LoginCCDMS();
    })
  
  it('delete automated campaigns', async function () {

    //get current date in the format dd/mm/yyyy
    var currentDate = new Date();
    var day = currentDate.getDate().toString().padStart(2, '0');
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var formattedDate = day + '-' + month + '-' + currentDate.getFullYear();

    let nextPages = element(by.xpath('//a[text()="Next"]'));
    
  
    //after login, navigate to campaigns page
    campaign.left_panel();
    await browser.sleep(2000);
    campaign.Campaigns();
    await browser.sleep(5000);

    for (let j=0; j<10; j++){
    
    let rows = element.all(by.css('table tr'));

    rows.map(function(row) {
      return row.all(by.css('td')).getText();
    }).then(async function(twoDArray) {
      for (let i=0; i<twoDArray.length-1; i++) {
        
        let campaignID = twoDArray[i+1][0];
		
		
		const campaignRow = element(by.xpath(`//td[text()='${campaignID}']//following-sibling::td/a`)) ;
      browser.wait(EC.visibilityOf(campaignRow), 5000);

      const campaignText = await campaignRow.getText();

      let text ="Automated";
      if (campaignText.includes(text)) {
        campaignRow.click();
        const button = element(by.css('button.ui.fluid.button'));
      const isEnabled =  button.isEnabled();
      if (isEnabled) {
        await closeDate();
        await sendEndDate(formattedDate);
        await saveEndDate();
        
      } 
      else {
        console.log(campaignId + "Button is disabled. Cannot click.");
      }
      browser.sleep(2000);
      browser.refresh();
      // await campaignsPage();
      browser.navigate().back();
      await browser.sleep(2000);
      }
    } 
  await nextPages.click();
  await browser.sleep(2000);
});
}
});
})
