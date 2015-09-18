module.exports.objects = {
   username:'shorexpro',
   passport: '123qwe',
   url: 'http://www.ncl.com/',
   // view_results_link : "element.by.id('filter-submit')",
   viewresults : function(){return element(by.id('filter-submit'));},
   gob : function(){return element(by.id('gobutton'));},
   first : function(){return element(by.model('first'));},
   second : function(){return element(by.model('second'));}
   // test : "console.log('test');"
};
