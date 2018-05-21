import Dashboard from 'dashboard/components/Dashboard';
import ManageDesksPage from 'desk/components/manageDesksPage';
import ManageRequestsPage from 'request/components/manageRequestsPage';
import EmployeeInformation from 'employeeInformation/components/employeeInformation'

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
    sidebarName: 'Manage Requests',
    requiredPermission: 1
  },
  {
    path: '/employee',
    component: EmployeeInformation,
    headerName: 'Employee Information',
    sidebarName: 'Employee Information',
    requiredPermission: 1
  }
];

