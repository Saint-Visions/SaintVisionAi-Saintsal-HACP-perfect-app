// app/layout.tsx
import React from 'react';
import { MyProvider } from '@/context'; // Make sure this is correctly imported

const Layout: React.FC = ({ children }) => {
  return (
    <MyProvider>
      <div>{children}</div>
    </MyProvider>
  );
};

export default Layout;

