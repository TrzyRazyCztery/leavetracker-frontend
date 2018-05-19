import React from 'react';
import { List } from 'material-ui';
import { boardRoutes } from 'routes/boardRoutes';
import 'navigation/styles/sidebarNavigationLinks.css';
import Authenticated from 'shared/components/authenticated';
import Unauthenticated from 'shared/components/unauthenticated';
import SidebarNavigationItem from 'navigation/components/sidebarNavigationItem';

const SidebarNavigationList = props => {
  const activeRoute = routeName => {
    return window.location.pathname.indexOf(routeName) > -1;
  };
  return (
    <List className='sidebar-navigation-list'>
      {boardRoutes.map((route, key) => {
        return route.requiredPermission ? (
          <Authenticated key = {key} requiredPermission = {1}>
            <SidebarNavigationItem
              route={route}
              key={key}
              activeRoute={activeRoute(route.path)}
            />
          </Authenticated>
        ) : (
          <Unauthenticated key = {key}>
            <SidebarNavigationItem
              route={route}
              key={key}
              activeRoute={activeRoute(route.path)}
            />
          </Unauthenticated>
        );
      })}
    </List>
  );
};

export default SidebarNavigationList;
