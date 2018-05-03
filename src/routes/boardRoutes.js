import UserEdit from "src/userEdit/components/UserEdit";
import UserInformation from "src/userInformation/components/UserInformation";
import Dashboard from "src/dashboard/components/Dashboard";
import SignPage from "src/layout/components/SignPage";

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
    path: "/sign",
    component: SignPage,
    headerName: "Sign"
  }
];

export default boardRoutes;
