describe('GET /', () => {
  it('should return a list of cars sorted by modell', () => {
    const cars = [
      { modell: 'Model X', marke: 'Tesla' },
      { modell: 'Civic', marke: 'Honda' },
      { modell: 'Mustang', marke: 'Ford' }
    ];

    cy.intercept('GET', '/cars?sortBy=modell', (req) => {
      req.reply((res) => {
        res.send(cars.sort((a, b) => a.modell.localeCompare(b.modell)));
      });
    }).as('getCars');

    cy.visit('/cars?sortBy=modell');

    cy.wait('@getCars').then((interception) => {
      expect(interception.response!.statusCode).to.eq(200);
      expect(interception.response!.body).to.have.length(3);
      expect(interception.response!.body[0].modell).to.eq('Civic');
      expect(interception.response!.body[1].modell).to.eq('Model X');
      expect(interception.response!.body[2].modell).to.eq('Mustang');
    });
  });
});

describe('POST /', () => {
  it('should create a new car and return it', () => {
    const newCar = {
      modell: 'Corolla',
      marke: 'Toyota'
    };

    cy.intercept('POST', '/cars', (req) => {
      expect(req.body).to.deep.equal(newCar);
      req.reply((res) => {
        res.send(newCar);
      });
    }).as('createCar');

    cy.request('POST', '/cars', newCar).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.deep.equal(newCar);
    });
  });
});