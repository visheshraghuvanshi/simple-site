import React from 'react';
import './globals.css';
import Header from '../components/Header';

const Footer: React.FC = () => {
  return (
      <footer className="py-4 mt-3">
          <div className="container mx-auto text-center">
              <p>&copy; 2023 Vishesh Kumar. All rights reserved.</p>
          </div>
      </footer>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}