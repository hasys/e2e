import { Assets } from '../constants/Assets';

export class Authoring {
    static createSpace(name:string) {
		cy.get('a[data-field=breadcrumbLink]').contains('Spaces').click()
		cy.url().should('include', 'LibraryPerspective%7C$LibraryOrganizationalUnitsScreen')
		cy.get('button').contains('Add Space').click()
		cy.get('input[data-field=name]').type(name)
        cy.get('div.modal button.btn-primary').click()
        
        cy.wait(3000)
        cy.get('div[data-field=cards-container]').contains('h2', 'MySmokeSpace').click()
        cy.url().should('include', 'LibraryPerspective%7C$LibraryScreen')
    }

    static createProject(name:string) {
        cy.url().should('include', 'LibraryPerspective%7C$LibraryScreen')
		cy.get('button[data-field=add-project]').click()
		cy.get('input[data-field=name]').type(name)
		cy.get('div.modal-dialog button.btn-primary').click()
		cy.url().should('include', 'LibraryPerspective%7C$ProjectScreen')
		cy.wait(3000)
    }

    static createAsset(type:Assets, name:string, pkg:string) {
		cy.get('button[data-field=add-asset]').click()
		cy.url().should('include', 'AddAssetsScreen')
		cy.get('input#filter-text').should('be.visible').and('be.empty')
		cy.get('input#filter-text').type(type.valueOf())
		cy.get('div h3').contains(type.valueOf()).click()

		cy.get('input#fileName').type(name)
		cy.get('div#packageSelectContainer').click()
		cy.get('div#packageSelectContainer li>a').contains(pkg).click()
		cy.get('div.modal-dialog button.btn-primary').click()
    }
}