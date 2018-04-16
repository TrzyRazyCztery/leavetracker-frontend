import UserEdit from '../components/board/user/edit/UserEdit'
import UserInformation from '../components/board/user/information/UserInformation'
import Dashboard from '../components/board/dashboard/Dashboard'
import LoginPage from '../components/login/LoginPage'

const boardRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    headerName: "Dashboard"
  },
  {
    path: "/useredit",
    component: UserEdit,
    headerName: "User Profile"
  },
  {
    path: "/userinformation",
    component: UserInformation,
    headerName: "User Information"
  },
  {
    path: "/loginpage",
    component: LoginPage,
    headerName: "Login Page"
  }
];

export default boardRoutes;