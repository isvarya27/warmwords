import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '800px', padding: '2000px', backgroundColor: '' }}>
      {children}
    </div>
  );
};

export default Layout;
