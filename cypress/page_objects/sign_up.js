class SignUp{

    get firstName() {
        return cy.get('input[name="firstname"]')
    }
    get lastName() {
        return cy.contains('Last Name')
    }
    get mobileNumber() {
        return cy.contains('Mobile Number')
    }
    get email () {
        return cy.contains('Email')
    }
    get password () {
        return cy.contains('Password')
    }
    get confirmPassword (){
        return cy.contains('Confirm Password')
    }
    get signUp(){
        return cy.get("button.signupbtn")
    }
    
    validRegistration (firstName,lastName,mobileNumber,email,password,confirmPassword,signUp){
        this.firstName.click({force: true}).type(firstName)
        this.lastName.click ({force: true}).type(lastName)
        this.mobileNumber.click({force: true}).type(mobileNumber)
        this.email.click({force: true}).type(email)
        this.password.click({force: true}).type(password)
        this.confirmPassword.click({force: true}).type(confirmPassword)
        this.signUp.click({force: true})
    }
}
export const signUp = new SignUp()