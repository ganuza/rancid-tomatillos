describe('Error handling', () => {
  it('should display an error message when the server returns a 500 response', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
      statusCode: 500
    })
    cy.visit('http://localhost:3000')
    cy.get('.error-message').should('exist')
    cy.get('.error-message').should('contain', "Request Failed: Cannot read properties of undefined (reading 'movies')")
  })
})