import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

type Props = {
  requireAdmin?: boolean;
  children?: any;
};

export default function ProtectedRoute({ children, requireAdmin }: Props) {
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace />;
  }

  return children;
}
