import React from 'react';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

function Routes() {
  const signed = true;
  const loading = false;

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
