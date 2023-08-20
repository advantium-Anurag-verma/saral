// An example configuration file.
exports.config = {
  directConnect: true,

  ////////////////////////////////////////////////////
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
    
  },

    // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../testcases/pracharak form/test case/pracharak_form_fill.js'],
  ///////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////
// Capabilities to be passed to the webdriver instance.
  //   multiCapabilities: [
  //   {
  //     browserName: 'chrome',
  //     specs: ['../testcases/dynamic type/end_date_equal_to_start_date.js']
  //   },
  //   {
  //     browserName: 'chrome',
  //     specs: ['../testcases/dynamic type/end_date_less_than_start_date.js']
  //   },
  //   {
  //     browserName: 'chrome',
  //     specs: ['../testcases/dynamic type/end_date_more_than_start_date.js']
  //   },
  //   {
  //     browserName: 'chrome',
  //     specs: ['../testcases/dynamic type/delete_campaign.js']
  //   },
  //   // Add more capabilities with their respective spec files as needed
  // ],

  ///////////////////////////////////////////////////////

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',



  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 1000000
  }

};
