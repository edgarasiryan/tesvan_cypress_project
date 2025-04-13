import { faker } from '@faker-js/faker';

describe('Test order flow with invalid promo code on RahulShettyAcademy', () => {
    const promoCode = faker.string.alphanumeric(8).toUpperCase();

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.url().should('include', 'rahulshettyacademy')
    });

    it('should search for Broccoli, add it to the cart and apply invalid promo code', () => {        
        cy.get('.search-keyword').type('Brocolli');
        cy.get('.search-button').click();    
        cy.get('.product:visible').should('have.length', 1);
        cy.get('.stepper-input>.increment').click().click();
        cy.get('.stepper-input>.quantity').should('have.value', 3);
        cy.get('.product:visible').contains('ADD TO CART').click();
        cy.contains('button','ADDED').should('be.visible');
        cy.get('a.cart-icon').click();
        cy.get('.cart-preview').should('be.visible').contains('Brocolli');
        cy.contains('button', 'PROCEED TO CHECKOUT').click();     
        cy.get('.product-name').should('contain', 'Brocolli');
        cy.get('.promoCode').type(promoCode);
        cy.get('.promoBtn').click();
        cy.get('.promoInfo', { timeout: 10000 }).should('be.visible').and('contain', 'Invalid code');
        cy.contains('button', 'Place Order').click();
        cy.get('select').select('Armenia').should('have.value','Armenia');
        cy.get('.chkAgree').check();
        cy.contains('button', 'Proceed').click();
        cy.contains('span', 'Thank you, your order has been placed successfully').should('be.visible');
    });

})