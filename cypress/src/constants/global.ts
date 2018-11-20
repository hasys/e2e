import {LoginPage} from '../pageobects/LoginPage';

export function login(username: string, password: string): LoginPage {
    new LoginPage().login(username, password)
    cy.url().should('include', 'HomePerspective')

    return new LoginPage()
}

export function logout(username: string): LoginPage {
    cy.get('ul[data-field=right-menu-items] a').contains(username).click()
    cy.get('a').contains('Log Out').click()
    
    cy.url().should('include', 'logout.jsp')
    return new LoginPage()
}