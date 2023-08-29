// As a user, when I load the application, I can see the title of the application
describe('Rancid Tomatillos on-load', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    statusCode: 200,
    fixture: "moviesData.json"
  })
    cy.visit('http://localhost:3000');
  });

  it('should have a title on page load', () => {
    cy.contains('RANCID TOMATILLOS')
  })
})