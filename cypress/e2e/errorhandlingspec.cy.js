describe('Error handling', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
      statusCode: 500
    }).as('interceptAllMoviesFetch')
  })

  it('should display an error message when the server returns a 500 response on page load', () => {
    cy.visit('http://localhost:3000')
    cy.wait('@interceptAllMoviesFetch')
    cy.get('header').should('exist')
    // cy.get('.p-movies-error').should('exist')
    cy.get('.app').last()
    cy.contains("Request Failed: Movies Page Something Went Wrong On The Server")
  })
  it('should display an error message when the server returns a 500 response for a single movie', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
      statusCode: 500
    })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { 
      statusCode: 500
    })
    cy.visit('http://localhost:3000/436270')
    cy.url().should('include', '/436270')
    cy.get('.app').should('exist')
    cy.get('.error-message').should('contain', "Request Failed: Movies Page Something Went Wrong On The Server")
  })
})