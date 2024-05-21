import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import GerenciarUsuario from "../pages/gerenciarUsuario.page";
const gerenciarUsuario = new GerenciarUsuario()

import MyProfile from '../pages/myProfile.page';
const myProfile = new MyProfile()

import PageLogin from '../pages/login.page';
const pageLogin = new PageLogin()

const { getUserid } = require('./criarNovoUsuario.step')


Given('que usuário do tipo comum acessa gerenciamento de conta', () => {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login')
    pageLogin.typeEmail('qacontratadoraro2024@dev.com')
    pageLogin.typePassword('123456')
    pageLogin.clickButtonLogin()
    pageLogin.clickMyProfile()
    myProfile.clickMyAccount()
})

Given('que usuário do tipo crítico acessa gerenciamento de conta', () => {
    cy.loginValido()
        .then(function (response) {
            const tokenid = response.body.accessToken;
            cy.promoverCritico(tokenid)
        })

    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login')
    pageLogin.typeEmail('qacontratadoraro2024@dev.com')
    pageLogin.typePassword('123456')
    pageLogin.clickButtonLogin()
    pageLogin.clickMyProfile()
    myProfile.clickMyAccount()
})

Given('que usuário do tipo admin acessa gerenciamento de conta', () => {
    cy.loginValido()
        .then(function (response) {
            const tokenid = response.body.accessToken;
            cy.promoverAdmin(tokenid)
        })

    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login')
    pageLogin.typeEmail('qacontratadoraro2024@dev.com')
    pageLogin.typePassword('123456')
    pageLogin.clickButtonLogin()
    pageLogin.clickMyProfile()
    myProfile.clickMyAccount()
})

When('visualizar formulário de edição de usuário', () => { })

When('informar um nome vazio', () => {
    cy.get(gerenciarUsuario.inputName).clear()
})

When('informar um novo nome', () => {
    gerenciarUsuario.typeName('Oswaldo')
})

When('selecionar o botão salvar', () => {
    const userid = getUserid();
    cy.intercept('PUT', 'https://raromdb-3c39614e42d4.herokuapp.com/api/users/' + userid)
        .as('intercept')
    gerenciarUsuario.clickButtonSave()
})

When('informar uma nova senha {string}', (senha) => {
    gerenciarUsuario.typePassword(senha)
})

When('confirmar a nova senha {string}', (senha) => {
    gerenciarUsuario.typeConfirmPassword(senha)
})

When('selecionar botão de alteração de senha', () => {
    gerenciarUsuario.clickButtonPassword()
})

When('informar uma nova senha válida', () => {
    gerenciarUsuario.typePassword('45612378')
})

When('informar uma confirmação de senha', () => {
    gerenciarUsuario.typeConfirmPassword('45612378')
})

Then('retorna mensagens de erro no formulário {string}', (mensagem) => {
    if (gerenciarUsuario.spanPassword > 0) {
        cy.get(gerenciarUsuario.spanPassword).contains(mensagem)
    } else {
        cy.get(gerenciarUsuario.spanConfirmPassword).contains(mensagem)
    }
})

Then('o nome não será alterado', () => {
    cy.get(gerenciarUsuario.spanName).contains('Informe o nome')
})

Then('o nome é alterado', () => {
    cy.wait('@intercept').then((updateUser) => {
        expect(updateUser.response.body.name).to.eq('Oswaldo')
        cy.get(gerenciarUsuario.modalSucess).contains('Sucesso')
        cy.get(gerenciarUsuario.modalInfo).contains('Informações atualizadas!')
        gerenciarUsuario.clickButtonOk()
        cy.get(gerenciarUsuario.inputName).invoke('val').should('eq', 'Oswaldo')
    })
})

Then('O perfil é comum, campos email, senha e confirmar senha estão visíveis e desabilitados', () => {
    cy.get(gerenciarUsuario.selectProfile).invoke('val').should('eq', '0');
    cy.get(gerenciarUsuario.selectProfile).should('be.visible').should('be.disabled')
    cy.get(gerenciarUsuario.inputEmail).invoke('val').should('eq', 'qacontratadoraro2024@dev.com');
    cy.get(gerenciarUsuario.inputEmail).should('be.disabled');
    cy.get(gerenciarUsuario.inputPassword).should('be.disabled')
    cy.get(gerenciarUsuario.inputConfirmPassword).should('be.disabled')
})

Then('O perfil é crítico, campos email, senha e confirmar senha estão visíveis e desabilitados', () => {
    cy.get(gerenciarUsuario.selectProfile).invoke('val').should('eq', '2');
    cy.get(gerenciarUsuario.selectProfile).should('be.visible').should('be.disabled')
    cy.get(gerenciarUsuario.inputEmail).invoke('val').should('eq', 'qacontratadoraro2024@dev.com');
    cy.get(gerenciarUsuario.inputEmail).should('be.disabled');
    cy.get(gerenciarUsuario.inputPassword).should('be.disabled')
    cy.get(gerenciarUsuario.inputConfirmPassword).should('be.disabled')
})

Then('O perfil é admin, campos email, senha e confirmar senha estão visíveis e desabilitados', () => {
    cy.get(gerenciarUsuario.selectProfile).invoke('val').should('eq', '1');
    cy.get(gerenciarUsuario.selectProfile).should('be.visible').should('be.disabled')
    cy.get(gerenciarUsuario.inputEmail).invoke('val').should('eq', 'qacontratadoraro2024@dev.com');
    cy.get(gerenciarUsuario.inputEmail).should('be.disabled');
    cy.get(gerenciarUsuario.inputPassword).should('be.disabled')
    cy.get(gerenciarUsuario.inputConfirmPassword).should('be.disabled')
})

Then('botão Alterar senha e campo nome estão visíveis e habilitados', () => {
    cy.get(gerenciarUsuario.buttonPassword).should('be.enabled')
    cy.get(gerenciarUsuario.inputName).invoke('val').should('eq', 'Romeu');
    cy.get(gerenciarUsuario.inputName).should('be.enabled')
})

Then('o nome não será alterado', () => {
    cy.get(gerenciarUsuario.spanName).contains('Informe o nome')
})

Then('retorna mensagens de erro nos campos alteração de senha', () => {
    cy.get(gerenciarUsuario.spanPassword).contains('Campo obrigatório')
    cy.get(gerenciarUsuario.spanConfirmPassword).contains('As senhas devem ser iguais.')
})

Then('retornará erro na confirmação de alteração de senha', () => {
    cy.get(gerenciarUsuario.spanConfirmPassword).contains('As senhas devem ser iguais.')
})

Then('retornará erro no campo nova senha', () => {
    cy.get(gerenciarUsuario.spanPassword).contains('Campo obrigatório')
})
