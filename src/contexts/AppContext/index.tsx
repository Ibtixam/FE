import React, {createContext, useContext, useState} from 'react';
import useDashboard from './useDashboard';

export const AppContext = createContext<any>({});

export const AppProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const storedToken = localStorage.getItem('token');
  const [authToken, setauthToken] = useState(storedToken);
  const [role, setRole] = useState<string>('');

  const contextValue: any = {
    authToken,
    setauthToken,
    storedToken,
    role,
    setRole,
    ...useDashboard(),
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
