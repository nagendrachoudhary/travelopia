describe('travelopia app testing', () => {
  it('my webpage should be show', () => {
    cy.visit('http://localhost:3000')
  })
  it('top visible in ui',()=>{
    cy.visit('http://localhost:3000')
    cy.get('[test_id=logo]').should('be.visible')
    cy.get('[test_id=home]').should('be.visible')
    cy.get('[test_id=dashboard]').should('be.visible')
  })
  it('home button should work',()=>{
    cy.visit('http://localhost:3000')
    cy.get('[test_id=home]').click()
    cy.get('[test_id=Form]').should('be.visible')
  })
  it('dashboard button should work',()=>{
    cy.visit('http://localhost:3000')
    cy.get('[test_id=dashboard]').click()
    cy.get('[test_id=dashboard_page]').should('be.visible')
  })
  it('should show form in UI',()=>{
    cy.visit('http://localhost:3000')
    cy.get('[test_id=Form]').should('be.visible')
    cy.get('[test_id=input]').should('have.length', 5)
    cy.get('[test_id=total]').should('be.visible')
    cy.get('[test_id=submit]').should('be.visible')
  })
  it('Add data in inputBox',()=>{
    cy.intercept('POST','http://localhost:8080',{'value':{'name':'nagendra','email':'nagendra@gamil.com','country':'india','travellers':'5','budget':'2000','total':'30000'}}).as('postrequest')
    cy.visit('http://localhost:3000')
    cy.get('[test_inputid=name]').type('nagendra')
    cy.get('[test_inputid=email]').type('nagendra@gamil.com')
    cy.get('[test_inputid=country]').click().get('[test_inputid=india]').click()
    cy.get('[test_inputid=travellers]').type(5)
    cy.get('[test_inputid=budget]').type(2000)
    cy.get('[test_id=total]').should('have.text','Total:-30000')
    cy.get('[test_id=submit]').click()
    cy.wait('@postrequest')
   
  })
  it('should be Loading',()=>{
    cy.visit('http://localhost:3000')
    cy.get('[test_id=submit]').click()
    cy.get('[test_id=loading]').should('be.visible')
  })
  it('dashbord should have prv , next and sort button',()=>{
    cy.visit('http://localhost:3000')
    cy.get('[test_id=dashboard]').click();
    cy.get('[test_id=dashboard_page]').should('be.visible')
    cy.get('[test_id=prv]').should('be.visible')
    cy.get('[test_id=next]').should('be.visible')
    cy.get('[test_id=sort]').should('be.visible')
  })
  it('dashbord work good',()=>{
    cy.visit('http://localhost:3000')
    cy.get('[test_id=dashboard]').click();
    cy.get('[test_id=loading]').should('be.visible')
    cy.get('[test_id=dashboard_page]').should('be.visible')
    cy.get('[test_id=list]').should('have.length', 5)
    cy.get('[test_id=next]').click()
    cy.get('[test_id=loading]').should('be.visible')
    cy.get('[test_id=prv]').click()
    cy.get('[test_id=dashboard_page]').should('be.visible')
  })
})