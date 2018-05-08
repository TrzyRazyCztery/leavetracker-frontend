import Dashboard from "dashboard/components/Dashboard";
import ManageDesksPage from "desk/components/manageDesksPage";

export const  boardRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    headerName: "Dashboard",
    sidebarName: "Dashboard",
    authenticationRequired: true
  },
  {
    path: "/desk",
    component: ManageDesksPage,
    headerName: "Manage Desks",
    sidebarName: "Manage Desks",
    authenticationRequired: true
  }
];

