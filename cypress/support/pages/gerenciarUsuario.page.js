export default class GerenciarUsuario {
    inputName = '.input-container>[placeholder="Nome"]'
    inputEmail = '.input-container>[placeholder="E-mail"]'
    inputPassword = '.input-container>[placeholder="Senha"]'
    inputConfirmPassword = '.input-container>[placeholder="Confirmar senha"]'
    selectProfile = 'select[name="type"]'
    buttonSave = '.account-save-button'
    buttonPassword = '.account-password-button'
    modalSucess = '.modal-body>h3'
    modalInfo = '.modal-body>p'
    modalButtonOk = '.modal-actions'
    spanName = 'span.input-error'
    spanPassword = ':nth-child(5) > .input-error'
    spanConfirmPassword = ':nth-child(6) > .input-error'

    clickButtonOk() {
        cy.get(this.modalButtonOk).click()
    }

    typeName(name) {
        cy.get(this.inputName).clear().type(name)
    };
    typeEmail(email) {
        cy.get(this.inputEmail).type(email)
    };
    typePassword(password) {
        cy.get(this.inputPassword).type(password)
    };
    typeConfirmPassword(password) {
        cy.get(this.inputConfirmPassword).type(password)
    };
    clickButtonSave() {
        cy.get(this.buttonSave).click()
    }
    clickButtonPassword() {
        cy.get(this.buttonPassword).click()
    }
}