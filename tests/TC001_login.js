var homePage = require ('../pages/homePage');
var storyPage = require ('../pages/storyPage');

module.exports = {
//'@tags': ['TC001_login1'],
  before: function(browser){
    navigate();
    homePage(browser).openBrowser();
    browser.assert.urlEquals('https://9gag.com/');
    browser.assert.title("9GAG: Go Fun The World");
  },

  'Go to the Login Page' : function(browser) {
    browser.assert.visible('a#jsid-login-button');
    homePage(browser).loginMainButton();
  },

  'Login with User' : function(browser) {
    browser.assert.containsText('#signup > div > h2',"Login");
    homePage(browser).userLogin();
  },

'Go to Hot Section list' : function(browser) {
  browser.assert.containsText('#container > div.section-sidebar > div > section.popular > header > h3',"POPULAR");
  browser.assert.containsText('div#container li.selected > a.label',"Hot");
  browser.expect.element('div#container li.selected > a.label').to.be.visible();
  storyPage(browser).hotSection();
},

'Go to Trending Section list' : function(browser) {
  
  storyPage(browser).trendingSection();
},

'Go to Fresh Section list' : function(browser) {
  
  storyPage(browser).freshSection();
},

after: function(browser) {
    browser.end();
  }
};

// 'User sign In' : function(browser) {
//     const homePage = browser.page.homePage();
//     homePage
//     .navigate()
//     .logIn('kevinchristopherkc7@gmail.com','kevin777!')
//     .expect.element('@homePageTitle').text.to.contain('9GAG')
//   },