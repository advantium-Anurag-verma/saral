const { element } = require("protractor");

var EC = protractor.ExpectedConditions;


let conversions = function(){
    //time format changes from 24hrs to 12 hrs
    this.convertTo12HourFormat = function(hr,mn) {
        // const [hours, minutes] = time24.split(':');
        let period = 'AM';
        let hours12 = parseInt(hr, 10);
      
        if (hours12 >= 12) {
          period = 'PM';
          hours12 = hours12 === 12 ? 12 : hours12 - 12;
        } else if (hours12 === 0) {
          hours12 = 12;
        }
      
        return `${hours12}:${mn} ${period}`;
      };



//capture start time entered and verify it
    this.captureTime = function(startTime){
        element(by.id('date_string')).getText().then(function(text) {
            time = text.substring(11,19);
          });
          start_time = startTime;
        this.verifyStartTime = function(start_time){
            expect(time).toBe(start_time);
        };
    };





//change date format
this.changeDateFormat = function(start_date, end_date) {
    // Split the start_date string by "/"
    const startDateParts = start_date.split('/');
    // Re-arrange the parts in the desired format "dd-mm-yyyy"
    const formattedStartDate = `${startDateParts[1]}-${startDateParts[0]}-${startDateParts[2]}`;
  
    // Split the end_date string by "/"
    const endDateParts = end_date.split('/');
    // Re-arrange the parts in the desired format "dd-mm-yyyy"
    const formattedEndDate = `${endDateParts[1]}-${endDateParts[0]}-${endDateParts[2]}`;
  
    // Return the formatted start_date and end_date as an object
    return { formattedStartDate, formattedEndDate };
  };


this.captureStartDate = function(startDate){
    var date;
    element(by.xpath('//table[@class="table table-striped table-responsive"]/tbody/tr/td[2]/lebel')).getText().then(function(text) {
        date = text.substring(0,10);
      });
    var startDatechanged = startDate;
    this.verifyStartTime = function(startDatechanged){
        expect(date).toBe(startDatechanged);
    };
    return date;
};



    this.captureEndDate = function(endDatechanged){
        const date = element(by.xpath('//table[@class="table table-striped table-responsive"]/tbody/tr/td[3]/lebel'));
        browser.wait(EC.visibilityOf(date), 5000, 'Label element not visible');
//         labelElement.click();
        expect(date.getText()).toBe(endDatechanged);
        return date;
    };


    this.compareDates = function(date1, date2) {
        const parsedDate1 = new Date(date1);
        const parsedDate2 = new Date(date2);
      
        if (parsedDate1 === parsedDate2) {
          console.log('pass - expected. start date is exactly the same as end date');
        } else if (parsedDate1 < parsedDate2) {
            console.log('pass - start date is in the past compared to end date');
        } else {
            console.log('fail - start date is in the future compared to end date');
        };
      };


    this.verifyCampaign = function(campaign_type, state_name, area_name, call_center_state){
        expect(element(by.xpath("(//tr)/td[text()='"+campaign_type+"']")).getText()).toBe(campaign_type);
        expect(element(by.xpath("(//tr)/td[text()='"+state_name+"']")).getText()).toBe(state_name);
        expect(element(by.xpath("(//tr)/td[text()='"+area_name+"']")).getText()).toBe(area_name);
        expect(element(by.xpath("(//tr)/td[text()='"+call_center_state+"']")).getText()).toBe(call_center_state);
    }
};


module.exports = new conversions();
