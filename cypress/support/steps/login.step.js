import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import PageLogin from '../pages/login.page';
const pageLogin = new PageLogin()

Given('que foi acessada a tela de login', () => {
    cy.viewport("macbook-16");
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login')
})

When('informar email válido', () => {
    pageLogin.typeEmail('qacontratadoraro2024@dev.com')
})

When('informar senha válida', () => {
    pageLogin.typePassword('123456')
})

When('visualizar o formulário de login', () => { })

When('selecionar botão login', () => {
    cy.intercept('POST', 'https://raromdb-3c39614e42d4.herokuapp.com/api/auth/login').as('login')
    pageLogin.clickButtonLogin()
})

When('informar senha inválida', () => {
    pageLogin.typePassword('789465')
})

When('informar email inválido', () => {
    pageLogin.typeEmail('xurupitasfarm21@panico.com')
})

Then('as instruções estão visíveis e inputs habilitados', () => {
    cy.get(pageLogin.inputEmail).should('be.enabled')
    cy.get(pageLogin.inputPassword).should('be.enabled')
    cy.get(pageLogin.buttonLogin).should('be.enabled')
    cy.get(pageLogin.title).should('have.text', "Login").should('be.visible');
    cy.get(pageLogin.description).should('have.text', "Entre com suas credenciais").should('be.visible');
})

Then('o login é realizado', () => {
    cy.wait('@login').its('response.body.accessToken').should('not.be.empty');
})

Then('o login não é realizado', () => {
    cy.wait('@login').then(() => {
        cy.get(pageLogin.modalFailAuth).contains('Falha ao autenticar')
        cy.get(pageLogin.modalInvalidUser).contains('Usuário ou senha inválidos.')
    })
})

Then('retorna mensagem informando que é necessário informar email', () => {
    cy.get(pageLogin.spanEmail).contains('Informe o e-mail')
})

Then('retorna mensagem informando que é necessário informar senha', () => {
    cy.get(pageLogin.spanPassword).contains('Informe a senha')
})

Then('retorna mensagem informando que é necessário informar email e senha', () => {
    cy.get(pageLogin.spanEmail).contains('Informe o e-mail')
    cy.get(pageLogin.spanPassword).contains('Informe a senha')
})