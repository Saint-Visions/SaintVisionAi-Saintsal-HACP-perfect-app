"use client";
import { createContext, useContext, useState } from 'react';

export const AppContext = createContext<any>({});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({});
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

