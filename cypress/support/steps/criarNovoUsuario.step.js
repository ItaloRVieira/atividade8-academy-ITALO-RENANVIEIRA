import { Given, When, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';
import CriarUsuario from '../pages/criacaoDeUsuario.page'
const criarUsuario = new CriarUsuario()

import { faker } from '@faker-js/faker';

let userid
let tokenid

Before({ tags: '@createUser' }, () => {
    cy.fixture('usuario.json').then(function (newuser) {
        cy.request({
            method: 'POST',
            url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
            body: newuser.criado
        }).then((response) => {
            userid = response.body.id
        })
    })
})

module.exports = { getUserid: () => userid };

After({ tags: '@deleteUser' }, () => {
    cy.loginValido()
        .then(function (response) {
            tokenid = response.body.accessToken;
            cy.promoverAdmin(tokenid);
            cy.excluirUsuario(userid, tokenid)
        });
})

Given('que foi acessada a tela de criação de usuário', () => {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/register')
});

When('informar um nome {string}', (name) => {
    criarUsuario.typeName(name)
});

When('informar um nome válido', () => {
    const name = faker.person.firstName()
    criarUsuario.typeName(name)
});

When('informar um email {string}', (email) => {
    criarUsuario.typeEmail(email)
});

When('informar um email válido', () => {
    const email = faker.internet.email()
    criarUsuario.typeEmail(email)
});

When('informar uma senha {string}', (senha) => {
    criarUsuario.typePassword(senha)
});

When('confirmar a senha {string}', (senha) => {
    criarUsuario.typeConfirmPassword(senha)
});

When('clicar para cadastrar', () => {
    cy.intercept(
        'POST',
        'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
    ).as('criar')
    criarUsuario.clickButtomSubmit()
})

When('informar dados válidos com email já cadastrado', () => {
    criarUsuario.typeName('Josué')
    criarUsuario.typeEmail('carlitos@fra.com')
    criarUsuario.typePassword('654321')
    criarUsuario.typeConfirmPassword('654321')
})

When('informar uma senha válida', () => {
    criarUsuario.typePassword('654321')
})

When('informar uma senha válida no campo de confirmação de senha', () => {
    criarUsuario.typeConfirmPassword('654321')
})

When('visualizo a pagina de criação', () => { })

Then('um usuário do tipo comum será gerado', () => {
    cy.wait('@criar').its('response')
        .then((response) => {
            expect(response.body.type).to.eq(0)
            cy.get(criarUsuario.modalSucess).contains('Sucesso')
            cy.get(criarUsuario.modalRegistration).contains('Cadastro realizado!')
            userid = response.body.id;
        })
})

Then('retorna erro no campo nome', () => {
    cy.get(criarUsuario.spanName).contains('Informe o nome')
})

Then('retorna erro no campo email', () => {
    cy.get(criarUsuario.spanEmail).contains('Informe o e-mail')
})

Then('usuário não é criado', () => {
    cy.wait('@criar').its('response')
        .then((response) => {
            expect(response.statusCode).to.eq(409)
            cy.get(criarUsuario.modalSucess).contains('Falha no cadastro.')
            cy.get(criarUsuario.modalRegistration).contains('E-mail já cadastrado. Utilize outro e-mail')
        })
})

Then('retornará erro no formulário {string}', (mensagem) => {
    if (criarUsuario.spanPassword > 0) {
        cy.get(criarUsuario.spanPassword).contains(mensagem)
    } else {
        cy.get(criarUsuario.spanConfirmPassword).contains(mensagem)
    }
})

Then('retornará erro nos campos senha', () => {
    cy.get(criarUsuario.spanPassword).contains('Informe a senha')
    cy.get(criarUsuario.spanConfirmPassword).contains('Informe a senha')
})

Then('retornará erro no campo de confirmação de senha', () => {
    cy.get(criarUsuario.spanConfirmPassword).contains('Informe a senha')
})

Then('retornará erro no campo senha', () => {
    cy.get(criarUsuario.spanPassword).contains('Informe a senha')
    cy.get(criarUsuario.spanConfirmPassword).contains('As senhas devem ser iguais.')
})

Then('os inputs estão habilitados e instruções visíveis', () => {
    criarUsuario.paginaCriacao()
})