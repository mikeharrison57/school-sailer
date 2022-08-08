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

  it('Should start empty by default, and inform the user that they currently have no favorites yet.', () => {
    cy.get('.school-card').should('not.exist')
    cy.get('h2').should('have.text', 'No Favorites Yet!')
  })

  it('Should be able to navigate to a state page and add favorites to the favorites page from the state page.', () => {
    cy.get('select').select('Minnesota').get('.state-button').click()
    cy.get(':nth-child(4) > header > .favorite-button').dblclick()
    cy.get(':nth-child(4) > header > .favorite-button').click()
    cy.get('.favorites-container').click()
  })
})