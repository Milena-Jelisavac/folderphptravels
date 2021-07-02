class AuthHeader {

    get myAccount() {
        return cy.get('.dropdown-login').children("#dropdownCurrency")
    }
    get login() {
        return cy.get("a[href ='https://www.phptravels.net/login']")
    }
    get signUp() {
        return cy.get("a[href ='https://www.phptravels.net/register']")
    }

    
    
}
export const authHeader = new AuthHeader()