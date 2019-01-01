const signInCommands = {
    signIn(email,password){
        return this
        .waitForElementVisible('@emailInput')
        .setValue('@emailInput', email)
        .setValue('@emailPasswordInput',password)
        .waitForElementVisible('@signInButton',1000)
        .click('@signInButton')
    }
}


    module.exports = {
    url:'https://cjdocs.herokuapp.com/auth/signin',
    commands:[signInCommands],
    elements : {
        emailInput : {
        selector:'input[type=email]'
        },
        emailPasswordInput : {
            selector:'input[name=password]'
        },
        signInButton : {
            selector:'button[type=submit]'
        }
    }
}