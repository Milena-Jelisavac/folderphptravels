///<reference types="Cypress" />
import { authHeader } from '../page_objects/heder_objects'
import { signUp } from '../page_objects/sign_up'
import { bookingHotel } from '../page_objects/booking_hotel'

const strings = require("../fixtures/strings.json")

describe("Signup", () => {

    before('Poseti sajt ', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit("https://www.phptravels.net")


    })


    it('Uspesna registracija', () => {
        authHeader.myAccount.click()
        authHeader.signUp.then(($name)=>{
            expect ($name.text()).to.eql('Sign Up');
        }).click({force: true})
        cy.url().should('contains', '/register')
        cy.server();
        cy.route({
            method: 'POST',
            url: 'https://www.phptravels.net/account/signup'
        }).as('register')

        signUp.validRegistration(strings.SignUp.validFirstName, strings.SignUp.validLastName, strings.SignUp.validMobilePhoneNumber, strings.SignUp.validEmail, strings.SignUp.validPassword, strings.SignUp.validConPassword)
        cy.wait('@register').then(xhr => {
            cy.log(xhr.requestBody);
            cy.log(xhr.responseBody);
            expect(xhr.method).to.eq('POST');
            expect(xhr.status).to.eq(200)
            expect(xhr.responseBody).to.eq(true)

        })
        cy.url().should("eq", "https://www.phptravels.net/account/")
    })

    it('Izbor city-a', () => {
        bookingHotel.home.then(($name)=>{
            expect($name.text()).to.eql('Home')
        }).click()
        // Sa eql ne radi
        bookingHotel.hotels.then(($name)=>{
            expect($name.text()).to.contains('Hotels')
        }).click({ force: true })
        bookingHotel.selectDestination()
        bookingHotel.destinationSpin.filter(':visible').invoke('text').then((val) => {
            expect(strings.Booking.destination).to.equal(val);

        })
    })

    it("Rezervacija datuma", () => {
        bookingHotel.checkIn.click().clear().type(strings.Booking.checkInData, '{enter}').click()
        bookingHotel.checkIn.invoke('val').then((text) => {
            expect(strings.Booking.checkInData).to.equal(text);
        });
        bookingHotel.checkOut.click().clear().type(strings.Booking.checkOutData, '{enter}').click()
        bookingHotel.checkOut.invoke('val').then((text) => {
            expect(strings.Booking.checkOutData).to.equal(text);
        });
        
        
    })
    it("Broj odraslih i dece", () => {
        bookingHotel.increaseNumberOfAdults()
        bookingHotel.adults.filter(':visible').invoke("val").then((val) => {
            expect("3").to.equal(val);
        })
        bookingHotel.increaseNumberOfChilderen()
        bookingHotel.children.filter(':visible').invoke("val").then((val) => {
            expect("1").to.equal(val);
        })

        bookingHotel.search.then(($name)=>{
            expect($name.text()).to.contains('Search')
        }).click()
    })




})

