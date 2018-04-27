import UserEdit from '../userEdit/components/UserEdit'
import UserInformation from '../userInformation/components/UserInformation'
import Dashboard from '../dashboard/components/Dashboard'
import AutenticationPage from '../layout/components/AutenticationPage'

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