Cypress.Commands.add('excluirUsuario', function (userid, tokenid) {
  cy.log('Excluir usuário');
  cy.request({
    method: 'DELETE',
    url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users/' + userid,
    headers: {
      Authorization: `Bearer ${tokenid}`
    }
  })
});


Cypress.Commands.add('promoverAdmin', function (tokenid) {
  cy.log('Promover para admin')
  cy.request({
    method: 'PATCH',
    url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users/admin',
    headers: {
      Authorization: `Bearer ${tokenid}`
    }
  })
});

Cypress.Commands.add('loginValido', function () {
  cy.fixture('login.json').then(function (login) {
    cy.request({
      method: 'POST',
      url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/auth/login',
      body: login.valido
    })
  })
});

Cypress.Commands.add('promoverCritico', function (tokenid) {
  cy.log('Promover para crítico')
  cy.request({
    method: 'PATCH',
    url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users/apply',
    headers: {
      Authorization: `Bearer ${tokenid}`
    }
  })
});