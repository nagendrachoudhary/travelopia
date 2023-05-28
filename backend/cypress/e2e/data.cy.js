describe('api testing', () => {
    it('fetches items - GET', () => {
        cy.request('https://travelopia-btyp.onrender.com').as('data');
        cy.get('@data').then(data => {
            expect(data.status).to.eq(200);
        });
    });
    it('Add items - Post', () => {
        cy.request('POST', 'https://travelopia-btyp.onrender.com', { "name": "nagendra", "email": "nagendra@gmail.com", "country": "india", "travellers": "2", "budget": "5000", "total": '10000' }).as('data');
        cy.get('@data').then(data => {
            expect(data.status).to.eq(200);
        });
    });
    it('when no data pass', () => {
        cy.request({ method: 'POST', url: 'https://travelopia-btyp.onrender.com', failOnStatusCode: false, }).as('ERROR')
        cy.get('@ERROR').should((response) => {
            expect(response.status).eq(500)
        });
    })
    it('fetches items check - GET', () => {
        cy.request('https://travelopia-btyp.onrender.com').as('data');
        cy.get('@data').then(data => {
            expect(data).to.have.property('body');
        });
    });
});