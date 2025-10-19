describe('Modules overzicht', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); // of jouw poort
  });

  it('Toont de lijst met modules', () => {
    cy.contains('Modules').should('be.visible');
  });

  it('Kan zoeken in modules', () => {
    cy.get('input[placeholder*="Zoek"]').type('Frameworks');
    cy.contains('Frameworks').should('be.visible');
  });

});
