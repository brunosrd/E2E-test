class MyInfoPage {
    selectorsList () {
        const selectores  = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dataCloseButton: ".--close",
            submitButton: ".orangehrm-left-space",
            nationalityMaritalStatus: "[clear='false']",
            itemNationality: ".oxd-select-dropdown > :nth-child(27)",
            itemMaritalStatus: ".oxd-select-dropdown > :nth-child(4)",
            genderSelect: ".oxd-radio-input",
            typeBlood: ".oxd-select-text--arrow",
            bloodSelect: ".oxd-select-dropdown > :nth-child(6)",
            testField: "[options='']"
        }
        return selectores
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
       // cy.get(this.selectorsList().gerericField).eq(3).clear().type(nickName)
    }
    fillEmployeeDetails(employeeId, otherId, driversLicenceNumber, licenseDate) {    
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenceNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseDate)
        cy.get(this.selectorsList().dataCloseButton).click()
        //cy.get(this.selectorsList().genericField).eq(7).clear().type(ssnNumber)
        //cy.get(this.selectorsList().genericField).eq(8).clear().type(sinNumber)
    }

        //Firts Button Save
        // saveForm() {
        //     cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        //     cy.get('body').should('contain', 'Successfully Update')
        //     cy.get('.oxd-toast-close')
        // }

    fillStatus(dateOfBirth, testField) {
        cy.get(this.selectorsList().nationalityMaritalStatus).eq(0).click()
        cy.get(this.selectorsList().itemNationality).click()
        cy.get(this.selectorsList().nationalityMaritalStatus).eq(1).click()
        cy.get(this.selectorsList().itemMaritalStatus).click()
        cy.get(this.selectorsList().genericField).eq(7).clear().type(dateOfBirth)
        cy.get(this.selectorsList().dataCloseButton).click()
        cy.get(this.selectorsList().genderSelect).eq(0).click()
        //cy.get(this.selectorsList().genericField).eq(12).clear().type(militaryService)
        cy.get(this.selectorsList().typeBlood).eq(2).click()
        cy.get(this.selectorsList().bloodSelect).click()
        cy.get(this.selectorsList().testField).clear().type(testField)
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    } 
}


export default MyInfoPage