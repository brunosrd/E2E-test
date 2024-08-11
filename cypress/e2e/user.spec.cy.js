import userData from '../fixtures/user/user-data.json'
describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[type='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredencialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
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

  it.only('User info Update - Success', () => {
    
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid).should('be.visible')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type(userData.userSucess.firstName)
    cy.get(selectorsList.lastNameField).clear().type(userData.userSucess.lastName)
    cy.get(selectorsList.genericField).eq(3).clear().type(userData.userSucess.employeeId)
    cy.get(selectorsList.genericField).eq(4).clear().type(userData.userSucess.otherId)
    cy.get(selectorsList.genericField).eq(5).clear().type(userData.userSucess.driverLicence)
    cy.get(selectorsList.genericField).eq(6).clear().type('2024-10-08')
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.nationalityMaritalStatus).eq(0).click()
    cy.get(selectorsList.itemNationality).click()
    cy.get(selectorsList.nationalityMaritalStatus).eq(1).click()
    cy.get(selectorsList.itemMaritalStatus).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('1999-19-01')
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.genderSelect).eq(0).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.typeBlood).eq(2).click()
    cy.get(selectorsList.bloodSelect).click()
    cy.get(selectorsList.testField).clear().type('TestField')
    cy.get(selectorsList.submitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
    cy.get('.oxd-toast-close')



 
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredencialAlert)
  })
})