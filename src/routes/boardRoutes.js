import UserEdit from '../components/board/user/edit/UserEdit'
import UserInformation from '../components/board/user/information/UserInformation'
import Dashboard from '../components/board/dashboard/Dashboard'
import AutenticationPage from '../components/board/authentication/AutenticationPage'

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
    path: "/authentication",
    component: AutenticationPage,
    headerName: "Login Page"
  }
];

export default boardRoutes;