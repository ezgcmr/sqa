// var constants = require('./constants');
// //Protractor wouldn't wait for Angular loaded or access the webdriver instance directly with browser.driver.
// browser.ignoreSynchronization = true; 

// describe('login', function(){
//    it('should get homepage', function(){
//       browser.get("http://www.ncl.com/");
//       console.log(constants.config.username);
//       expect(browser.getTitle()).toEqual('Cruises & Cruise Deals | Caribbean Cruise Vacations | Norwegian Cruise Line');
//    });
// });

describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});