import { createContext, useContext, useState } from "react";

interface AppContextTypes {
  authToken: string | null;
  setauthToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AppContext = createContext<AppContextTypes | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storedToken = localStorage.getItem("token");
  const [authToken, setauthToken] = useState(storedToken);
  const contextValue: AppContextTypes = {
    authToken,
    setauthToken,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
