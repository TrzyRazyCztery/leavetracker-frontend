import UserEdit from '../components/board/user/edit/UserEdit'
import UserInformation from '../components/board/user/information/UserInformation'
import Dashboard from '../components/board/dashboard/Dashboard'
import CredentialPage from '../components/board/credentials/CredentialPage'

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
    path: "/credentialpage",
    component: CredentialPage,
    headerName: "Login Page"
  }
];

export default boardRoutes;