// describe("A suite", function() {
//   it("contains spec with an expectation", function() {
//     expect(true).toBe(true);
//   });
// });

// describe('Protractor Demo App', function() {
//   var firstNumber = element(by.model('first'));
//   var secondNumber = element(by.model('second'));
//   var goButton = element(by.id('gobutton'));
//   var latestResult = element(by.binding('latest'));

//    beforeEach(function() {
//       browser.get('http://juliemr.github.io/protractor-demo/');
//       console.log("here");
//   });

//   it('should have a title', function() {
//     expect(browser.getTitle()).toEqual('Super Calculator');
//   });

//   it('should add one and two', function() {
//     firstNumber.sendKeys(1);
//     secondNumber.sendKeys(2);

//     goButton.click();

//     expect(latestResult.getText()).toEqual('3');
//   });

//   it('should add four and six', function() {
//     // Fill this in.
//     expect(latestResult.getText()).toEqual('0');
//   });
// });

// var webdriver = require('selenium-webdriver');

// var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
browser.ignoreSynchronization = true; 

describe('should work', function(){
   it('should work 2', function(){
      browser.get('http://www.google.com');
      element(by.name('q')).sendKeys('webdriver');
      element(by.name('btnG')).click();
      browser.wait(function() {
       return browser.getTitle().then(function(title) {
         return title === 'webdriver - Google Search';
       });
      }, 1000);
   })
});
