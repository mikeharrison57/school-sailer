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
    cy.get(':nth-child(4) > header > .favorite-button').click()
    cy.get(':nth-child(10) > header > .favorite-button').click()
    cy.get('.favorites-container').click()
    cy.get('.school-card').first().should('exist').should('contain', 'Name: American Indian OIC Inc')
    cy.get('.school-card').last().should('exist').should('contain', 'Average Cost of Attendance Per Year: $20919')
  })

  it('Should be able to add a favorite school, go back to state page, and add another favorite school.', () => {
    cy.get('select').select('Delaware').get('.state-button').click()
    cy.get('.school-card').first().find('h3').should('have.text', 'Name: Margaret H Rollins School of Nursing at Beebe Medical Center')
    cy.get('.favorite-button').first().click()
    cy.get('.favorites-container').click()
    cy.get('.school-card').find('h3').should('have.text', 'Name: Margaret H Rollins School of Nursing at Beebe Medical Center')
    cy.go('back')
    cy.get('.school-card').last().find('p').first().should('have.text', 'City: Wilmington, DE')
    cy.get('.favorite-button').last().click()
    cy.go('forward')
    cy.get('.school-card').last().find('p').first().should('have.text', 'City: Wilmington, DE')
  })

  it('Should be able to navigate to individual school page from favorites page.', () => {
    cy.get('select').select('Ohio').get('.state-button').click()
    cy.get('.school-container > :nth-child(4)').find('.favorite-button').click()
    cy.get('.favorites-container').click()
    cy.get('.more-info').click()
    cy.url().should('eq', 'http://localhost:3000/state/chosen/OH/University%20of%20Akron%20Main%20Campus')
    cy.get('.school-header').should('contain', 'University of Akron Main Campus')
    cy.go('back').url().should('eq', 'http://localhost:3000/state/chosen/favorites')
  })

  it('Should NOT GET school data if there is an error with the network request.', () => {
    cy.request({
      method: "GET",
      url: `${primaryUrl}school.state=CO&${secureKey}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(403)
      expect(response.statusText).to.contain('Forbidden')
    })
  })
})