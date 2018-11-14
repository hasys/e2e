import { Perspectives } from './Perspectives';

export class MegaMenu {

    static goto(perspective: Perspectives) {
        cy.get('a#mega-menu-dropdown').click();
        cy.get('ul[data-field=left-menu-items] li a').contains(perspective.valueOf()).click()
    }

}