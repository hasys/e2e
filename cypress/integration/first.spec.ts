/// <reference types="cypress"/>

import { LoginPage } from '../src/pageobects/LoginPage';
import { MegaMenu } from '../src/pageobects/MegaMenu';
import { login, logout } from '../src/constants/global';
import { Perspectives } from '../src/constants/Perspectives';

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

    it('Create and Deploy Space, Repository, Project, Asset', function() {
        login('admin', 'admin')
        MegaMenu.goto(Perspectives.AUTHORING)
        cy.url().should('include', 'LibraryScreen')
    })
  
});
