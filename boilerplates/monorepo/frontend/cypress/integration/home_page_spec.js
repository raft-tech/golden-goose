describe('Home page loads', () => {
  /**
   * To Do: Determine rake/rails commands for seeding test user to test db
   * Stub out data after testing successful seeding and set up of server, so do not need to everytime.
   
  beforeEach(() => {
    //determine how we're interfacing with rails server
    //reset and seed db with test user perhaps??
    cy.exec('RAILS/RAKE COMMANDS FOR SEEDING')
  })
  */
  
  it('successfully loads', () => {
    cy.visit('/')

    cy.contains('Home').click()
  })
})