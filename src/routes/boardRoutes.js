import UserEdit from "userEdit/components/UserEdit";
import UserInformation from "userInformation/components/UserInformation";
import Dashboard from "dashboard/components/Dashboard";
import ManageDesksPage from "desk/components/manageDesksPage";

export const  boardRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    headerName: "Dashboard",
    sidebarName: "Dashboard"
  },
  // {
  //   path: "/useredit",
  //   component: UserEdit,
  //   headerName: "User Profile"
  // },
  // {
  //   path: "/userinformation",
  //   component: UserInformation,
  //   headerName: "User Information"
  // },

  {
    path: "/desk",
    component: ManageDesksPage,
    headerName: "Manage Desks",
    sidebarName: "Manage Desks"
  }
];

