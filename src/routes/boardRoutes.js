import UserEdit from '../components/board/user/edit/UserEdit'
import UserInformation from '../components/board/user/information/UserInformation'
import Dashboard from '../components/board/dashboard/Dashboard'


const boardRoutes = [
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/useredit",
    component: UserEdit
  },
  {
    path: "/userinformation",
    component: UserInformation
  }
];

export default boardRoutes;