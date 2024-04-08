import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
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
