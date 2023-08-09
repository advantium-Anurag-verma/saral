exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['test.js'],
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless', '--disable-gpu']
      }
    }
  };
  