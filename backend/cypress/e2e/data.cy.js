describe('api testing', () => {
    let todoItem;
    it('fetches items - GET', () => {
        cy.request('http://localhost:8080').as('data');
        cy.get('@data').then(data => {
            expect(data.status).to.eq(200);
        });
    });
    it.s('Add items - Post', () => {
        cy.request('POST','http://localhost:8080',{"name":"nagendra","email":"nagendra@gmail.com","country":"india","travellers":"2","budget":"5000","total":'10000'}).as('data');
        cy.get('@data').then(data => {
            expect(data.status).to.eq(200);
        });
    });
    it.skip('when no data pass', () => {
        cy.request({method: 'POST',url: 'http://localhost:8080',failOnStatusCode: false,}).as('ERROR')
        cy.get('@ERROR').should((response) => {
            expect(response.status).eq(500)
        });
})
it('fetches items check body - GET', () => {
    cy.request('http://localhost:8080').as('data');
    cy.get('@data').then(data => {
        expect(data).to.have.property('body');
    });
});
 });