export class Asset {
    static closeAsset() {
        cy.get('button.btn-default i.fa-times').click()
    }
}