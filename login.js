var constants = require('./constants');
var EC = protractor.ExpectedConditions;
var width = 1124;
var height = 850;

// browser.driver.manage().window().setSize(width, height);
//Protractor wouldn't wait for Angular loaded or access the webdriver instance directly with browser.driver.
// <img usemap="#IPEMap" border="0" width="427" height="403" src="http://ipinvite.iperceptions.com/Invitations/survey850/images/invitation1.png">

browser.ignoreSynchronization = true; 

// describe('Protractor Demo App',function() {
//    it('should add one and two',function() {
//       browser.driver.manage().window().maximize();
//       browser.get('http://juliemr.github.io/protractor-demo/');
//       constants.objects.first().sendKeys(1);
//       constants.objects.second().sendKeys(2);
//       constants.objects.gob().click();
//       expect(element(by.binding('latest')).getText()).toEqual('3'); // This is wrong!
//       console.log(constants.objects.username);
//       browser.driver.sleep(3000);      constants.objects.viewresults().click();
//   });
// });

describe('Ncl Demo App', function() {
   it('should view the results', function() {
      // browser.driver.manage().window().maximize();
      browser.driver.manage().window().setSize(width, height);
      browser.get('http://www.ncl.com/');
      // constants.objects.viewresults().click();
      // Waits for the element with id to be visible on the dom.
      browser.wait(EC.visibilityOf($('#invL')), 5000);
      element(by.xpath(".//*[@id='invL']/img[1]"));
      // browser.wait(EC.presenceOf($('#invL')), 5000);
      // browser.driver.sleep(3000);
   });
});

// describe('should work', function(){
//    it('should work 2', function(){
//       browser.get('http://www.ncl.com/');
//       element(by.name('q')).sendKeys('webdriver');
//       element(by.name('btnG')).click();
//       browser.wait(function() {
//        return browser.getTitle().then(function(title) {
//          return title === 'webdriver - Google Search';
//        });
//       }, 1000);
//    })
// });