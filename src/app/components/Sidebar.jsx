import Image from "next/image";
import Link from "next/link";


const Sidebar = () => {
  return (
    <div className="flex h-screen">
      <div className="p-4 flex flex-col flex-grow lg:flex lg:items-center lg:w-auto  bg-[#050b2b] w-18 flex-shrink-0">
        <ul className="mt-4 lg:flex-grow">
          <li>
            <Image
              className=""
              src="/Ellipse1.png"
              alt="admin -profile"
              width="25"
              height="25"
            />
          </li>
          <li className="rounded">
            <Image
              className="rounded mt-3"
              src="/Group98.jpg"
              alt="admin -profile"
              width="25"
              height="25"
            />
          </li>
        </ul>
        <div className=" flex flex-col justify-center items-center">
          <Image
            className=""
            src="/dashicons_admin-users.png"
            alt="admin -profile"
            width="25"
            height="25"
          />
          <p className="text-white">Admin</p>
        </div>
      </div>

      <div className="bg-white text-050b2b w-46 flex-shrink-0 overflow-y-auto h-screen mt-150px">
        <div className="">
          <Image
            src="/TradeplaAdminLogo.jpg"
            alt="admin-logo"
            width="150"
            height="100"
            className="m-5"
          />
          <ul className="mt-10">
            <li className="flex hover:bg-[#050b2b] hover:text-[#e4bb81] px-3 py-4">
              <Image
                className="mr-3"
                src="/grid.jpg"
                width="35"
                height="35"
                alt="grid"
              />
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="flex hover:bg-[#050b2b] hover:text-[#e4bb81] px-3 py-4">
              <Image
                className="mr-3"
                src="/users.png"
                width="35"
                height="35"
                alt="grid"
              />
              <Link href="/users">Users</Link>
            </li>
            <li className="flex hover:bg-[#050b2b] hover:text-[#e4bb81] px-3 py-4">
              <Image
                className="mr-3"
                src="/git-pull-request.jpg"
                width="35"
                height="35"
                alt="grid"
              />
              <Link href="/dashboard">Sellers requests</Link>
            </li>
            <li className="flex hover:bg-[#050b2b] hover:text-[#e4bb81] px-3 py-4">
              <Image
                className="mr-3"
                src="/bar-chart-2.jpg"
                width="35"
                height="35"
                alt="grid"
              />
              <Link href="/dashboard">Transactions</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
