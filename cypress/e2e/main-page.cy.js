const secureKey = process.env.REACT_APP_SCHOOLS_API_KEY;
const primaryUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?'

describe('main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should have the heading School Sailor, a sailboat icon, home button, and favorites button in the Navbar.', () => {
    cy.get('h1').should('have.text', 'School Sailor')
    cy.get('.sailboat').should('be.visible')
    cy.get('.home-container').should('exist')
    cy.get('.favorites-container').should('exist')
  })

  it('Should have a form for the user to input their name and select a state from a list of all 50 US states.', () => {
    cy.get('form').get('input').type('Jimmy').should('have.value', 'Jimmy')
    cy.get('select').select('Alaska').should('contain', 'Alaska').should('have.value', 'AK' )
    cy.get('select').select('Wyoming').should('contain', 'Wyoming').should('have.value', 'WY' )
  })

  it('Should be able to navigate to a different school pages based on user state selection.', () => {
    cy.get('form').get('input').type('Kim').should('have.value', 'Kim')
    cy.get('select').select('Colorado')
    cy.get('.user-name').should('have.text', 'Welcome Kim! Set sail on a school adventure today ⛵️')
    cy.get('.state-button').click()
    cy.intercept('GET', `${primaryUrl}school.state=CO&${secureKey}`, {fixture: 'colorado-schools'})
    cy.url().should('eq', 'http://localhost:3000/CO')
    cy.get('select').select('Maine')
    cy.get('.state-button').click()
    cy.url().should('eq', 'http://localhost:3000/ME')
  })

  it('Should be able to navigate back home from school page by clicking home button in the Navbar or back button in the window.', () => {
    cy.get('form').get('input').type('Gustavo')
    cy.get('select').select('Arizona')
    cy.get('.state-button').click()
    cy.url().should('eq', 'http://localhost:3000/AZ')
    cy.get('.home-container').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('select').select('West Virginia')
    cy.get('.state-button').click()
    cy.go('back').url().should('eq', 'http://localhost:3000/')
  })
})