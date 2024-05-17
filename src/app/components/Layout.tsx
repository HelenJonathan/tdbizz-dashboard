import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { ReactNode } from 'react';

interface LayoutProps {
  page: string
  children: ReactNode; // Define children prop as ReactNode type
}

const Layout = ({ page, children }: LayoutProps) => {
  return (
    <div className="flex">
      <div className="sidebar">
        <Sidebar activePage={page} />
      </div>
      <div className="flex-grow">
        <Navbar />
        <div className="p-4 overflow-y-scroll">{children}</div>
      </div>
    </div>
  )
};

export default Layout;


