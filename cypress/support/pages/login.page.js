export default class PageLogin {
    inputEmail = '.input-container>[placeholder="E-mail"]'
    inputPassword = '.input-container>[placeholder="Password"]'
    buttonLogin = '.login-button'
    title = '.login-content-header > h3'
    description = '.login-content-header > span'
    modalFailAuth = '.modal-body>h3'
    modalInvalidUser = '.modal-body>p'
    spanEmail = ':nth-child(1) > .input-error'
    spanPassword = ':nth-child(2) > .input-error'
    myProfile = '.movies-page-link[href="/profile"]'

    typeEmail(email) {
        cy.get(this.inputEmail).type(email)
    }

    typePassword(password) {
        cy.get(this.inputPassword).type(password)
    }

    clickButtonLogin() {
        cy.get(this.buttonLogin).click()
    }

    clickMyProfile() {
        cy.get(this.myProfile).click()
    }
}