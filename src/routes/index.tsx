import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useAuth} from '@hooks/auth';
import PublicRoutes from './PublicRoutes';
import AuthRoutes from './AuthRoutes';

function Routes() {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }
  return user ? <AuthRoutes /> : <PublicRoutes />;
}

export default Routes;
