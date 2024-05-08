import {Navigate, Outlet} from 'react-router-dom';
import {useApp} from '@contexts';

const ProtectedRoutes = () => {
  const {authToken} = useApp() || {};
  return authToken ? <Outlet /> : <Navigate to={'/'} />;
};

export default ProtectedRoutes;
