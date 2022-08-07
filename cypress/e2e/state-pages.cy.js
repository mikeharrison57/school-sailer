const secureKey = process.env.REACT_APP_SCHOOLS_API_KEY;
const primaryUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?'

describe('state pages', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it.skip('Should have the heading School Sailor, a sailboat icon, home button, and favorites button in the Navbar.', () => {
    cy.intercept('GET', `${primaryUrl}school.state=CO&${secureKey}`)
    cy.visit('http://localhost:3000/CO')
    cy.get('h1').should('have.text', 'School Sailor')
    cy.get('.sailboat').should('be.visible')
    cy.get('.home-container').should('exist')
    cy.get('.favorites-container').should('exist')
  })

  it.skip('Should fetch and display schools from user selected state', () => {
    cy.get('select').select('Hawaii')
    cy.get('.state-button').click()
    cy.intercept('GET', `${primaryUrl}school.state=HI&${secureKey}`)
    cy.url('should.eq', 'http://localhost:3000/HI')
    cy.get('.school-card').should('have.length', 20).should('not.be.empty')
  })

  it.skip('Should have basic information about each school displayed on each school card', () => {
    cy.intercept('GET', `${primaryUrl}school.state=WA&${secureKey}`)
    cy.visit('http://localhost:3000/WA')
    cy.get('.school-card').find('h3').first().should('have.text', 'Name: Charter College')
    cy.get('.school-container > :nth-child(1) > :nth-child(3)').should('have.text', 'City: Vancouver, WA')
    cy.get('.school-container > :nth-child(19)').should('exist').should('contain.text', 'Average Cost of Attendance Per Year: $14465')
  })

  it.skip('Should be able to fetch and dispaly schools from a different state' , () => {
    cy.intercept('GET', `${primaryUrl}school.state=AK&${secureKey}`)
    cy.visit('http://localhost:3000/AK')
    cy.get('.school-card').should('have.length', 9).should('not.be.empty')
    cy.get('.school-card').last().should('exist')
    cy.get(':nth-child(8) > h3').should('have.text', 'Name: Ilisagvik College')
    cy.get(':nth-child(8) > :nth-child(4)').should('have.text', 'Average Cost of Attendance Per Year: Currently Unavailable')
    cy.get('.school-container > :nth-child(2) > :nth-child(3)').should('have.text', 'City: Palmer, AK')
  })

  it('Should have a favorite buttons and more info buttons on each school card', () => {
    cy.intercept('GET', `${primaryUrl}school.state=MI&${secureKey}`)
    cy.visit('http://localhost:3000/MI')
    cy.get('.favorite-button').should('exist').should('have.length', 20)
    cy.get('.more-info').should('exist').should('have.length', 20)
  })

})