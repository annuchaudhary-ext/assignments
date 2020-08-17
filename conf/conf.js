// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      // --allow-file-access-from-files - allow XHR from file://
      args: ['allow-file-access-from-files']
  }
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/login_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  // baseUrl: 'file:///D://Nag%20Assignments/Login%20App%20test%20using%20Protractor',

  onPrepare: function() {
    // By default, Protractor use data:text/html,<html></html> as resetUrl, but 
    // location.replace from the data: to the file: protocol is not allowed
    // (we'll get ‘not allowed local resource’ error), so we replace resetUrl with one
    // with the file: protocol (this particular one will open system's root folder)
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(500); 
    browser.resetUrl = 'file:///';
  }
};
