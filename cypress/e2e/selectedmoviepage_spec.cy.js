describe('Rancid Tomatillos single movie selection', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: "moviesData"
    })
    .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 200,
      fixture: "singleMovieData"
    })
    
  });

  // As a user, when I click on a movie, I’m shown additional details about that movie

  it('should show movie details when a movie is selected', () => {
    cy.get('.movie-card').find('img')
    cy.get('.movie-card').first().click()
    cy.get('.single-movie-cont').contains('h2', 'Black Adam')
      .get('.single-movie-card').contains('h2', 'The world needed a hero. It got Black Adam.')
      .get('.single-movie-card').contains('h2', 'RATING: 4.0 / 10')
  })
})