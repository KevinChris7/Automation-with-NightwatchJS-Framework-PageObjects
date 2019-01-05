module.exports = function(browser){

    this.openBrowser = function() {
        browser
            //.navigate()
            .url('https://9gag.com/')
            .waitForElementVisible('body',1000);
        return browser;

    };
    this.loginMainButton = function() {
        browser
            .click('a#jsid-login-button');
    };
    this.userLogin = function() {
        browser
            .waitForElementVisible('div.field:nth-child(3) > input',1000)
            .setValue('div.field:nth-child(3) > input','kevinchristopherkc7@gmail.com')
            .waitForElementVisible('#login-email-password',1000)
            .setValue('#login-email-password','kevin777!')
            .click('form#login-email div.btn-container > input');
    };
    return this;

};




// const logInCommands = {
//     logIn(email,password) {
//         return this
//         .waitForElementVisible('@logInButton')
//         .click('@logInButton')
//         .waitForElementVisible('@emailInput',1000)
//         .setValue('@emailInput',email)
//         .setValue('@passwordInput',password)
//         .click('@logInSubmit')

//     }
// };
// module.exports = {
//     url:'https://9gag.com/',
//     commands : [logInCommands],
//     elements : {
//         homePageTitle : {
//             selector: 'header#top-nav div > a',
//             locateStrategy : 'css'
//         },
//         logInButton : {
//             selector: 'a#jsid-login-button',
//             locateStrategy: 'css'
//         },
//         emailInput : {
//             selector: 'div.field:nth-child(3) > input',
//             //form#login-email div.field > input
//             locateStrategy: 'css'
//         },
//         passwordInput : {
//             selector: 'div.field:nth-child(4) > input',
//             //form input[type=password]
//             locateStrategy: 'css'
//         },
//         logInSubmit : {
//             selector: 'form#login-email div.btn-container > input'
//         }
//     }

// };
