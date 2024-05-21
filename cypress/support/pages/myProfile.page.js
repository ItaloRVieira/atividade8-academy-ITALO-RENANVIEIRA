export default class MyProfile {
    myAccount = '.account-link[href="/account"]'

    clickMyAccount() {
        cy.get(this.myAccount).click()
    }
}