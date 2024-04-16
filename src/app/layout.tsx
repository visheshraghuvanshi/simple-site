import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-8">
        <h1 className="text-2xl font-bold">Vishesh Kumar</h1>
      </header>
      <main className="flex-grow px-8 py-12">{children}</main>
      <footer className="bg-gray-900 text-white py-4 px-8 text-center">
        <p>&copy; 2023 Vishesh Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;