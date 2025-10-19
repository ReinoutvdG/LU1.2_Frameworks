describe("Module aanmaken", () => {
  const baseUrl = "http://localhost:5173";
  const moduleName = "Testmodule Cypress";
  const moduleDescription = "Dit is een testmodule voor Cypress";
  const moduleEC = "15"; // let op: value als string
  const moduleLevel = "NLQF-6";
  const moduleEducation = "Informatica";

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("kan een nieuwe module toevoegen via het formulier", () => {
    cy.contains("+ Nieuwe module").click();

    cy.get('input[name="name"]').type(moduleName);
    cy.get('input[name="description"]').type(moduleDescription); // textarea ipv input
    cy.get('select[name="ec"]').select(moduleEC); // select gebruiken
    cy.get('select[name="level"]').select(moduleLevel); // select gebruiken
    cy.get('input[name="education"]').type(moduleEducation);

    cy.contains("Opslaan").click();

    cy.contains(moduleName).should("be.visible");
  });
});
