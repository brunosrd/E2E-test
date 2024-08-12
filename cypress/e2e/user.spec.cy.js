import userData from '../fixtures/user/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboarPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Test', () => {

  it('User info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboarPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(userData.userSucess.firstName, userData.userSucess.middleName, userData.userSucess.lastName)
    myInfoPage.fillEmployeeDetails(userData.userSucess.employeeId, userData.userSucess.otherId, userData.userSucess.driversLicenceNumber, userData.userSucess.licenseDate)
    myInfoPage.fillStatus(userData.userSucess.dateOfBirth, userData.userSucess.testField)
    myInfoPage.saveForm()

  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })
})