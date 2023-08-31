describe('Rancid Tomatillos on-load', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: "moviesData"
    })
    cy.visit('http://localhost:3000');
  });
  
  // As a user, when I load the application, I can see the title of the application
  it('should have a title on page load', () => {
    cy.contains('RANCID TOMATILLOS')
  })
  // As a user, when I load the application, I can see a collection of movies.
  it('should show a collection of movies', () => {
    cy.get('.movies-box').find('.movie-card').should('have.length',40)
  })
})