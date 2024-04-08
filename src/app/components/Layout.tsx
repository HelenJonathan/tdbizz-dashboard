import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode; // Define children prop as ReactNode type
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <Navbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;


