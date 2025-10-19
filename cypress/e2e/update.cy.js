describe("Module bijwerken", () => {
  const baseUrl = "http://localhost:5173";
  const originalName = "Testmodule Cypress";
  const newDescription = "Bijgewerkte description via Cypress";

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("kan een bestaande module bewerken en nieuwe description zien", () => {
    // Zoek de modulekaart en klik op "Bewerken"
    cy.contains(originalName)
      .parents('.card')
      .within(() => {
        cy.contains("Bewerken").click();
      });

    // Pas de description aan
    cy.get('input[name="description"]')
      .clear()
      .type(newDescription);

    // Opslaan
    cy.contains("Opslaan").click();

    // Klik op Details knop van dezelfde module
    cy.contains(originalName)
      .parents('.card')
      .within(() => {
        cy.contains("Details").click();
      });

    // Controleer dat de modal de nieuwe description toont
    cy.get('.modal-content')
      .should("be.visible")
      .within(() => {
        cy.contains(newDescription).should("be.visible");
        cy.contains(originalName).should("be.visible");
      });

    // Sluit modal
    cy.get('.modal-content').within(() => {
      cy.contains("Sluiten").click();
    });
  });
});
