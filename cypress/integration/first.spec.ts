/// <reference types="cypress"/>

import { LoginPage } from './pageobects/LoginPage';
import { login, logout } from './pageobects/global';

describe('google search', () => {
  
    it('Log in / Log out test', function() {
        login('admin', 'admin')
		logout('admin').message.contains('Logout successful')
    })

    it('Incorrect login test', () => {
        const loginPage = new LoginPage()
        loginPage.visit()
        loginPage.username.type("admin")
        loginPage.password.type("incorrect_password")
        loginPage.submit()
    
		cy.url().should('not.include', 'HomePerspective')

		loginPage.message.contains('h3', 'Login failed: Not Authorized')
    });
  
});
