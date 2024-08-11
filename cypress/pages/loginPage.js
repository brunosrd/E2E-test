class LoginPage {
     selectorsList(){
        const  selectors ={
            usernameField: "[name='username']",
            passwordField: "[type='password']",
            loginButton: "[type='submit']",
            wrongCredencialAlert: "[role='alert']",
        }

        return selectors
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default LoginPage