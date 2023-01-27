import React from 'react'
import RoutesNavigation from './Router';
import { AuthProvider } from './AuthProvider';
function MyNavigation() {

  return (
    <AuthProvider>
        <RoutesNavigation />
    </AuthProvider>
  )
}

export default MyNavigation;