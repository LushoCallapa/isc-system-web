describe('LOGIN', () => {
    const pageURL = 'https://es.pinterest.com/';
    const email = Cypress.env('Email');
    const password = Cypress.env('Password');
  
    beforeEach(()=>{
      cy.visit(pageURL);
    });
  
  
    it('Verifica que la inicie sesion se cargue correctamente', () => {
        cy.get('[data-test-id="simple-login-button"]').click();
        cy.get('[id="email"]').type(email);
        cy.get('[id="password"]').type(password);
        cy.get('[data-test-id="registerFormSubmitButton"]').click();
        cy.get('[data-test-id="gestalt-avatar-svg"]').should('be.visible')
      })

    it('Dirigirme Correctamente a la seccion Explorar', () => {
        cy.get('[data-test-id="simple-login-button"]').click();
        cy.get('[id="email"]').type(email);
        cy.get('[id="password"]').type(password);
        cy.get('[data-test-id="registerFormSubmitButton"]').click();
        cy.get('[data-test-id="today-tab"]').click()
      })

      it('Dirigirme Correctamente a una imagen', () => {
        cy.get('[data-test-id="simple-login-button"]').click();
        cy.get('[id="email"]').type(email);
        cy.get('[id="password"]').type(password);
        cy.get('[data-test-id="registerFormSubmitButton"]').click();
        cy.get('[data-test-id="notifications-button"]').click();
        cy.get('[data-test-id="full-height-inbox-container"]').should('be.visible');
      })
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    
  });