// app/context.tsx
import React, { createContext, useState, ReactNode } from 'react';

// Define the context type
interface MyContextType {
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

// Create context with default values
export const MyContext = createContext<MyContextType | undefined>(undefined);

// Context provider component
export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<any>(null);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

