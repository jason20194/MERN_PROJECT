describe("App E2E", () => {
  it("visit my homepage", () => {
    cy.visit("http://localhost:3000");
    cy.get(".Background_Content__1Ltsk");
  });

  it("Getting nav", () => {
    cy.visit("http://localhost:3000");
    cy.get(".btn").click();
  });

  it("clicking Contact page", () => {
    cy.get("nav")
      .get(".contact")
      .click();
  });

  it("Filling out the contact form and submitting", () => {
    cy.get(".name").type("Example Customer");
    cy.get(".email").type("Customer@gmail.com");
    cy.get(".message").type("this is the message for testing");
    cy.get(".submit-button").click();
    cy.wait(1000);
  });

  it("clicking Products page", () => {
    cy.get("nav")
      .get(".all-products")
      .click();
  });

  it("Viewing a Product", () => {
    cy.get("nav")
      .get(".all-products")
      .get(".each-product")
      // fails because its multiple divs
      .get(".product-details")
      .click();
  });

  it("admin login", () => {
    cy.visit("http://localhost:3000/admin/login");
    cy.get(".username").type("admin@gmail.com");
    cy.get(".password").type("password");
    cy.get(".admin-login").click();
  });

  // this doesnt run because it doesnt have a token
  it("create listing", () => {
    cy.visit("http://localhost:3000/new_listing");
    // cy.get(".create-listing").click();
  });
});
