export class LoginPage {
    visit() {
        cy.visit('http://localhost:8080/business-central')
    }

    get username() {
        return cy.get('input[name=j_username]');
    }

    get password() {
        return cy.get('input[name=j_password]')
    }

    login(login:string, pass:string) {
        this.visit()
        this.username.type(login)
        this.password.type(pass)
        this.submit()
    }

    get message() {
        return cy.get('div#login-content');
    }

    submit() {
        cy.get('input[type=submit]').click()
    }
}