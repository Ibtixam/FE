import {lazy, Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PageNotFound from './components/pageNotFound';
import ProtectedRoutes from './utils/ProtectedRoutes';
import {Spinner} from './components';
import {useApp} from './contexts';
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const App = () => {
  const {isLoading, setIsLoading} = useApp();
  useEffect(() => {
    setIsLoading(true);

    return () => {
      setIsLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <Router>
        {isLoading && <Spinner />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<PageNotFound theme="dark" />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
