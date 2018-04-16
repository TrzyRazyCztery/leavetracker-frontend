import UserEdit from '../components/board/user/edit/UserEdit'
import UserInformation from '../components/board/user/information/UserInformation'
import Dashboard from '../components/board/dashboard/Dashboard'


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
  }
];

export default boardRoutes;