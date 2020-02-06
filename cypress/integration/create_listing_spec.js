beforeEach(() => {
  localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsIm9uZU1vcmUiOiJ5ZXMiLCJpYXQiOjE1ODA5NTk1NjEsImV4cCI6MTU4MDk2MzE2MX0.YInnIIGWTfH_8YbUiIVoIlOg6l7Qz39UkwCxLsG8bnU")
})


describe('Create Listing', function() {
    it("Clicks the create button and makes a new item and the item should show in the listings", function(){
      cy.visit('http://localhost:3000/admin')
      cy.contains("button", "Create Listing").click();
      cy.get("input[name=title]").type("Cypress Test");
      cy.get("input[name=price]").type("150");
      cy.get('[type="checkbox"]').check();
      cy.get("textarea[name=description]").type("Testing to see if description box works in Cypress")
      cy.contains("button", "Create Product").click();
      cy.wait(1000)
      

    })
  })

      // cy.visit('http://localhost:3000/admin')
  // cy.get("input[name=username").type("admin@gmail.com");
  // cy.get("input[name=password").type("password")
  // cy.contains("button", "Log In").click();
  // cy.wait(1000)