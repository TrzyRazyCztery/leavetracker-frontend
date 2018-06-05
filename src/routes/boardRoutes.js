import Dashboard from 'dashboard/components/Dashboard';
import ManageDesksPage from 'desk/components/manageDesksPage';
import ManageRequestsPage from 'request/components/manageRequestsPage';
import EmployeeInformation from 'employeeInformation/components/employeeInformation';
import DeskAvailabilityPage from 'deskAvailability/components/deskAvailabilityPage';

export const  boardRoutes = [
  {
    path: '/dashboard',
    component: Dashboard,
    headerName: 'Dashboard',
    sidebarName: 'Dashboard',
    requiredPermission: 1
  },
  {
    path: '/managedesks',
    component: ManageDesksPage,
    headerName: 'Manage Desks',
    sidebarName: 'Manage Desks',
    requiredPermission: 1
  },
  {
    path: '/managerequests',
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
  },
  {
    path: '/deskavailability',
    component: DeskAvailabilityPage,
    headerName: 'Desk Availability',
    sidebarName: 'Desk Availability',
    requiredPermission: 1
  }

];

