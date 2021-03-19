describe("Header component test", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.setLocalStorage();
  });

  it("About page test", () => {
    cy.visit("/");
    cy.get("[data-test='about']").click();
    cy.contains("h1", "This is an about page");
  });

  it("Active link test", () => {
    cy.get("[data-test='home']").click();
    cy.get("[data-test='home']").should("have.class", "router-link-active");
  });

  it("Language switcher test", () => {
    cy.get("[data-test='ru']").click();
    cy.contains("[data-test='home']", "Главная")
  });

  it("Logout button test", () => {
    cy.get("[data-test='logout']").click();
    cy.url().should("include", "/Login");
  });
});
