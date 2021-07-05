class BookingHotel {
    get home () {
        return cy.get ("a[title='home']")
    }
    get hotels () {
        return cy.get('.nav > :nth-child(1) > .text-center')
    }
    get destination (){
        return cy.get('.select2-container')
    }
    get destionationInput () {
        return cy.get('#s2id_autogen2')
    }
    get destinationSpin(){
        return cy.get('.select2-chosen')
    }
    get checkIn () {
        return cy.get("#checkin")
    }
    get checkOut () {
        return cy.get("#checkout")
    }

    get div () {
        return cy.get("div[class='form-icon-left']")
    }
    get plus() {
        return cy.get('.bootstrap-touchspin-up')
    }

    get adults () {
        return cy.get("input[name='adults']")
    }
    get children (){
        return cy.get('input[name="children"]')
    }
    get search (){
        return cy.get('button[type="submit"]').contains('Search')
    }
   
    selectDestination() {
        cy.get('.select2-container').find('#s2id_autogen2').click({force: true}).type("New"," ", { force: true}).then(option => {
            cy.contains('New Delhi, India').click()
                })
    }

    increaseNumberOfAdults () {
        cy.get("div[class='form-icon-left']").find('.bootstrap-touchspin-up').filter(':visible').first().click()
    }

    increaseNumberOfChilderen () {
        cy.get('input[name="children"]').filter(':visible').next().children('.bootstrap-touchspin-up').click()
    }












}
export const bookingHotel = new BookingHotel()