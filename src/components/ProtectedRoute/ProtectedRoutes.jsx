import React from 'react';

import {Outlet, useLocation} from "react-router";
import {Navigate} from "react-router";

const ProtectedRoutes = (props) => {
  const location = useLocation();
  const {loggedIn} = props;

  return loggedIn ? <Outlet/> : <Navigate to='/signup' replace state={{from: location}}/>
};

export default ProtectedRoutes;
