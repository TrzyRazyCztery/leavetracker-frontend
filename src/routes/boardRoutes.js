import Dashboard from 'dashboard/components/Dashboard';
import ManageDesksPage from 'desk/components/manageDesksPage';
import ManageRequestsPage from 'request/components/manageRequestsPage';
export const  boardRoutes = [
  {
    path: '/dashboard',
    component: Dashboard,
    headerName: 'Dashboard',
    sidebarName: 'Dashboard',
    requiredPermission: 1
  },
  {
    path: '/desk',
    component: ManageDesksPage,
    headerName: 'Manage Desks',
    sidebarName: 'Desks',
    requiredPermission: 1
  },
  {
    path: '/request',
    component: ManageRequestsPage,
    headerName: 'Manage Requests',
    sidebarName: 'Requests',
    requiredPermission: 1
  }
];

