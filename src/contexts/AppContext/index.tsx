import React, {createContext, useContext, useState} from 'react';

interface AppContextTypes {
  authToken: string | null;
  setauthToken: React.Dispatch<React.SetStateAction<string | null>>;
  storedToken: string | null;
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextTypes | undefined>(undefined);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const storedToken = localStorage.getItem('token');
  const [authToken, setauthToken] = useState(storedToken);
  const [role, setRole] = useState<string>('');
  const contextValue: AppContextTypes = {
    authToken,
    setauthToken,
    storedToken,
    role,
    setRole,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
