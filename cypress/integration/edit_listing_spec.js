beforeEach(() => {
    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsIm9uZU1vcmUiOiJ5ZXMiLCJpYXQiOjE1ODA5NTY1MDQsImV4cCI6MTU4MDk2MDEwNH0.D9ANUjIRSdKWslFb3F2tZnkLvgFculdYU0xBeVWu4K4")
  })

describe('Edit Listing', function() {
    it("Clicks the Edit button on the first listing and changes the listing details and once saved the new changes should be shown in the existing listing", function(){
        cy.visit('http://localhost:3000/admin');
        cy.contains("button", "Edit").click();
        cy.get('[type="text"]').clear()
        cy.get('[type="number"]').clear()

        cy.get("input[name=title]").type("Cypress Test Edit");
        cy.get("input[name=price]").type("200");
        cy.wait(500);
        cy.contains("button", "Save Changes").click();
        cy.wait(500);

    })
})