const secureKey = process.env.REACT_APP_SCHOOLS_API_KEY;
const primaryUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?'

describe('favorites page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/state/chosen/favorites')
  })

  it('Should have the heading School Sailor, a sailboat icon, home button, and favorites button in the Navbar.', () => {
    cy.get('h1').should('have.text', 'School Sailor')
    cy.get('.sailboat').should('be.visible')
    cy.get('.home-container').should('exist')
    cy.get('.favorites-container').should('exist')
  })

})