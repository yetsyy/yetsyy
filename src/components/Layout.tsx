import React from 'react';
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('./Header'), { ssr: false });
const DynamicFooter = dynamic(() => import('./Footer'), { ssr: false });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div 
      className="bg-cover bg-fixed bg-center min-h-screen text-white"
      style={{ backgroundImage: 'url(/yetsyy/fondo.png)' }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col">
        <DynamicHeader />
        <main className="container mx-auto p-4 flex-grow pt-20">
          {children}
        </main>
        <DynamicFooter />
      </div>
    </div>
  );
};

export default Layout;
