const secureKey = process.env.REACT_APP_SCHOOLS_API_KEY;
const primaryUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?'

describe('state pages', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should have the heading School Sailor, a sailboat icon, home button, and favorites button in the Navbar.', () => {
    cy.intercept('GET', `${primaryUrl}school.name=University%20of%20Colorado%20Colorado%20Springs&${secureKey}`)
    cy.visit('http://localhost:3000/CO/University%20of%20Colorado%20Colorado%20Springs')
    cy.get('h1').should('have.text', 'School Sailor')
    cy.get('.sailboat').should('be.visible')
    cy.get('.home-container').should('exist')
    cy.get('.favorites-container').should('exist')
  })


  it('Should fetch and display additional school information from user selected school.', () => {
    cy.intercept('GET', `${primaryUrl}school.state=GA&${secureKey}`)
    cy.visit('http://localhost:3000/GA')
    cy.get('.school-container > :nth-child(18)').find('.more-info').click()
    cy.intercept('GET', `${primaryUrl}school.name=University%20of%20Colorado%20Colorado%20Springs&${secureKey}`)
    cy.url().should('eq', 'http://localhost:3000/GA/Berry%20College')
    cy.get('.school-header').find('h2').should('have.text', 'Berry College')
    cy.get('.cost-info').should('contain', 'Campus Housing: $13370')
    cy.get('.stats').should('contain', 'Admission Rate: 77.22 %' )
  })

  it('Should be able to fetch and display a different school based on user selection, and information about said different school.' , () => {
    cy.intercept('GET', `${primaryUrl}school.state=SC&${secureKey}`)
    cy.visit('http://localhost:3000/SC')
    cy.get('.school-container > :nth-child(20)').find('.more-info').click()
    cy.intercept('GET', `${primaryUrl}school.name=Converse%20University&${secureKey}`)
    cy.url().should('eq', 'http://localhost:3000/SC/Converse%20University')
  })

  // it('Should be able to navigate to and invidual school ')
})