/// <reference types="cypress"/>

import { LoginPage } from '../src/pageobects/LoginPage';
import { MegaMenu } from '../src/pageobects/MegaMenu';
import { Authoring } from '../src/pageobects/Authoring';
import { AssetsList } from '../src/pageobects/AssetsList';
import { Asset } from '../src/pageobects/Asset';
import { login, logout } from '../src/constants/global';
import { Perspectives } from '../src/constants/Perspectives';
import { Assets } from '../src/constants/Assets';

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
        login('admin', 'admin').goto(Perspectives.AUTHORING)

        Authoring.createSpace('MySmokeSpace')
        Authoring.createProject('MySmokeProject')
        Authoring.createAsset(Assets.DATA_OBJECT, 'MySmokeAsset', 'mysmokespace.mysmokeproject')
        cy.url().should('include', 'DataModelerEditor')

        cy.get('button.btn-link').contains('MySmokeAsset')

        Asset.closeAsset()

        AssetsList.assets.should('have.length', 1).contains('a[data-field=asset-name]', 'MySmokeAsset')

        AssetsList.buildWithSuccess()
    })
  
});
