
describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[type='password']",
    loginButton: "[type='submit']",
    wrongCredencialAlert: "[role='alert']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
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

  it('User info Update - Success', () => {
    cy.visit('/auth/login') //visita a url de login
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)//usarnameField da lista de seletores, escreve a sequencia de dentro
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)// pega passordField e escreve userData-userSucess-password
    cy.get(selectorsList.loginButton).click()// clica no botão
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')// verifica se esta dentro/igual da url descrita
    cy.get(selectorsList.dashboardGrid).should('be.visible')//verifica se o elemento esta visivel na tela
    cy.get(selectorsList.myInfoButton).click()//clica no botão myInfoButton da lista de seletores
    cy.get(selectorsList.firstNameField).clear().type(userData.userSucess.firstName)//seleciona o campo, limpa, escreve
    cy.get(selectorsList.lastNameField).clear().type(userData.userSucess.lastName)//seleciona o campo, limpa, escreve
    cy.get(selectorsList.genericField).eq(3).clear().type(userData.userSucess.employeeId)//seleciona o elemento (3), limpa, ecreve
    cy.get(selectorsList.genericField).eq(4).clear().type(userData.userSucess.otherId)//seleciona o elemento (4), limpa, ecreve
    cy.get(selectorsList.genericField).eq(5).clear().type(userData.userSucess.driverLicence)//seleciona o elemento (5), limpa, ecreve
    cy.get(selectorsList.genericField).eq(6).clear().type('2024-10-08')//seleciona o elemento (6), limpa, ecreve
    cy.get(selectorsList.dataCloseButton).click()//clica no elemento que foi pego da lista dos seletores
    cy.get(selectorsList.nationalityMaritalStatus).eq(0).click()//pega o elemento(0) da lista dos seletorese clica
    cy.get(selectorsList.itemNationality).click()//pega o elemento da lista e clica
    cy.get(selectorsList.nationalityMaritalStatus).eq(1).click()//pega o elemente(1) da lista dos seletores e clica
    cy.get(selectorsList.itemMaritalStatus).click()//pega o elemento da lista e clica
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
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredencialAlert)
  })
