import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

// import { isAdminSelector } from '../store/site';

import { summonFlashMessage } from './flashMessage';
import { PATHS } from '../constants/paths';

/**
 * DOCS
 * https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou
 */

export const InternalAdminRoute = (): React.ReactElement => {
  // const isAdmin = useSelector(isAdminSelector);
  // TODO
  const isAdmin = true;

  if (!isAdmin) {
    // Flash error message
    summonFlashMessage(
      'You do not have permission to access this page',
      'error'
    );
    return <Navigate to={PATHS.landing.path} />;
  } else {
    return <Outlet />;
  }
};
