const secureKey = process.env.REACT_APP_SCHOOLS_API_KEY;
const primaryUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?'

describe('main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    // cy.intercept('GET', `${primaryUrl}school.state=CO&${secureKey}`, {fixture: 'colorado-schools'})
  })

  it('Should have the heading School Sailor in the navbar with a sailboat icon next to it.', () => {
    cy.get('h1').should('have.text', 'School Sailor')
    cy.get('.sailboat').should('be.visible')
  })

  

})