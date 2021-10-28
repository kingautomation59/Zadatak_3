/// <reference types="cypress" />

describe('BonusZadatak', function() {

    it('Zadatak', function() {


        cy.visit('/')

        cy.get('#searchInput').clear().type('Juraj Dobrila{enter}')

        cy.get('#firstHeading').should('have.text', 'Juraj Dobrila')

        cy.contains('Hrvatski').click()

        cy.get('#ca-history').click()

        cy.get('.oo-ui-icon-expand', {timeout: 3000}).should(($x) => {

            expect($x).to.have.class('oo-ui-widget oo-ui-widget-enabled oo-ui-iconElement-icon oo-ui-icon-expand oo-ui-iconElement oo-ui-labelElement-invisible oo-ui-iconWidget')

        }).click()

        cy.xpath('//input[@type="text"]').eq(0).focus().type('2020-07-01{enter}',{force: true})

        cy.get('#ooui-php-7 > .oo-ui-inputWidget-input').click({force: true})

        cy.get('.before > .mw-changeslist-date', {timeout: 3000}).should(($x) => {
            expect($x).have.text('22:33, 24. travnja 2020.')
        })
        


        
    })


})