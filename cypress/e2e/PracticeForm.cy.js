describe('DemoQA Practice Form Submission', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.url().should('include', 'demoqa');
    });

    it('should fill and submit the form with valid data ', () => {
        cy.get('#firstName').type('Edgar');
        cy.get('#lastName').type('Asiryan');
        cy.get('#userEmail').type('edgar@mail.ru');
        cy.get('label[for="gender-radio-1"]').click(); //cy.get('#gender-radio-1').check({ force: true }); 
        cy.get('#userNumber').type('37477777777');
        cy.get('#hobbies-checkbox-1').check({force: true}); //cy.get('label[for="hobbies-checkbox-1"]').click();
        cy.get('#currentAddress').type('Armenia Yerevan');
        cy.get('#submit').scrollIntoView().should('be.visible').click();
        cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')
        cy.get('#closeLargeModal').click({ force: true });
    })

})
