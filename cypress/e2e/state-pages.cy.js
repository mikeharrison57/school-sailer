const secureKey = process.env.REACT_APP_SCHOOLS_API_KEY;
const primaryUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?'

describe('state pages', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it.skip('Should have the heading School Sailor, a sailboat icon, home button, and favorites button in the Navbar.', () => {
    cy.intercept('GET', `${primaryUrl}school.state=CO&${secureKey}`, {fixture: 'colorado-schools'})
    cy.visit('http://localhost:3000/CO')
    cy.get('h1').should('have.text', 'School Sailor')
    cy.get('.sailboat').should('be.visible')
    cy.get('.home-container').should('exist')
    cy.get('.favorites-container').should('exist')
  })

  it.skip('Should fetch and display schools from user selected state', () => {
    cy.get('select').select('Hawaii')
    cy.intercept('GET', `${primaryUrl}school.state=HI&${secureKey}`, {fixture: 'colorado-schools'})
    cy.get('.state-button').click()
    cy.get('.school-card').should('have.length', 20).should('not.be.empty')
  })

  it('Should have basic information about each school displayed on each school card', () => {
    cy.intercept('GET', `${primaryUrl}school.state=WA&${secureKey}`, {fixture: 'colorado-schools'})
    cy.visit('http://localhost:3000/WA')
    cy.get('.school-card').find('h3').first().should('have.text', 'Name: Charter College')
    cy.get('.school-container > :nth-child(1) > :nth-child(3)').should('have.text', 'City: Vancouver, WA')
    cy.get('.school-container > :nth-child(19)').should('exist').should('contain.text', 'Average Cost of Attendance Per Year: $14465')
  })
})