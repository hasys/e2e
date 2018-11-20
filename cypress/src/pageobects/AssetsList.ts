export class AssetsList {
    static get assets() {
        return cy.get('div[data-field=assets-list]').find('div.list-view-pf-main-info')
    }

    static buildWithSuccess() {
        cy.get('button#deploy').click()
		cy.get("div.alert:contains('Build Successful')")       
    }
}