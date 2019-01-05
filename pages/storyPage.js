module.exports = function (browser) {

    this.hotSection = function() {
        browser
            .click('div#container li.selected > a.label')
            //.getTitle();
        
    };

    this.hotSectionOptionButton = function() {
        browser
            .click('div#container li.selected > a.button > i');
        
    };

    this.topPostsOption = function(){
        browser
        .click('div#container div > ul > li.selected > a');
    };

    this.mostRecent = function() {
        browser
        .click('div#container li.selected > div > ul > li:nth-child(2) > a');
    };

    this.trendingSection = function() {
        browser
        .click('div#container section.popular > ul > li:nth-child(2) > a')
        //.getTitle();
    };

    this.freshSection = function() {
        browser
        .click('div#container section.popular > ul > li:nth-child(3) > a')
        //.getTitle();
    };

    return this;
};
