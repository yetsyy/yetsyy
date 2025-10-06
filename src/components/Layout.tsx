
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div 
      className="bg-cover bg-fixed bg-center min-h-screen text-white"
      style={{ backgroundImage: 'url(/yetsyy/fondo.png)' }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <Header />
        <main className="container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
