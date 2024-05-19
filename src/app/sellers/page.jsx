import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Sellers = () => {
  return (
    <div>
      <Layout page="sellers">
        <div className="bg-white w-full h-full py-4">
          <div className="flex px-4">
            <h3 className="grow font-bold">Sellers requests</h3>
            <div className="relative bg-[#EFF2FF]">
              <input
                type="text"
                placeholder="Search users with email or amount"
                className="w-full bg-[#EFF2FF] text-[#4C5483] text-sm py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:border-[#EFF2FF]"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="w-5 h-5 text-[#4C5483]"
                />
              </div>
            </div>
          </div>

          <table className="min-w-full divide-y divide-gray-200 mt-2">
            <thead className="bg-[#EFF2FF]">
              <tr>
                <th className="px-4 py-4 text-left text-xs font-medium text-[#4C5483]">
                  S/N
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500">
                 User Email/Password
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500">
                  Date registered
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500">
                  Request
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500">
                  Location
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500">
                  Status
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500">
                  
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            <tr>
                <td className="px-2 py-3 whitespace-nowrap">001</td>
                <td className="px-3 py-3 whitespace-nowrap text-[#576FF1]">
                daniella.jacobbs@example.com
                </td>
                <td className="px-3 py-3 whitespace-nowrap">07/02/2023</td>
                <td className="px-3 py-3 whitespace-nowrap">
                Become a service provider
                </td>
                <td className="px-3 py-3 whitespace-nowrap">Nigeria</td>
                <td className="px-3 py-1 my-2">
                  <span className="p-2 rounded-full bg-[green]">
                  Verified
                  </span>             
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                <Link href="/viewSellers">
                    <button className="text-blue-500">view request</button>
                  </Link>
                </td>
              </tr>
              
              <tr>
                <td className="px-2 py-3 whitespace-nowrap">001</td>
                <td className="px-3 py-3 whitespace-nowrap text-[#576FF1]">
                daniella.jacobbs@example.com
                </td>
                <td className="px-3 py-3 whitespace-nowrap">07/02/2023</td>
                <td className="px-3 py-3 whitespace-nowrap">
                Become a service provider
                </td>
                <td className="px-3 py-3 whitespace-nowrap">Nigeria</td>
                <td className="px-3 py-1 my-2">
                  <span className="p-2 rounded-full bg-[green]">
                  Verified
                  </span>             
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                <Link href="/viewSellers">
                    <button className="text-blue-500">view request</button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td className="px-2 py-3 whitespace-nowrap">001</td>
                <td className="px-3 py-3 whitespace-nowrap text-[#576FF1]">
                daniella.jacobbs@example.com
                </td>
                <td className="px-3 py-3 whitespace-nowrap">07/02/2023</td>
                <td className="px-3 py-3 whitespace-nowrap">
                Become a service provider
                </td>
                <td className="px-3 py-3 whitespace-nowrap">Nigeria</td>
                <td className="px-3 py-1 my-2">
                  <span className="p-2 rounded-full bg-[green]">
                  Verified
                  </span>             
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                <Link href="/viewSellers">
                    <button className="text-blue-500">view request</button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td className="px-2 py-3 whitespace-nowrap">001</td>
                <td className="px-3 py-3 whitespace-nowrap text-[#576FF1]">
                daniella.jacobbs@example.com
                </td>
                <td className="px-3 py-3 whitespace-nowrap">07/02/2023</td>
                <td className="px-3 py-3 whitespace-nowrap">
                Become a service provider
                </td>
                <td className="px-3 py-3 whitespace-nowrap">Nigeria</td>
                <td className="px-3 py-1 my-2">
                  <span className="p-2 rounded-full bg-[green]">
                  Verified
                  </span>             
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                <Link href="/viewSellers">
                    <button className="text-blue-500">view request</button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td className="px-2 py-3 whitespace-nowrap">001</td>
                <td className="px-3 py-3 whitespace-nowrap text-[#576FF1]">
                daniella.jacobbs@example.com
                </td>
                <td className="px-3 py-3 whitespace-nowrap">07/02/2023</td>
                <td className="px-3 py-3 whitespace-nowrap">
                Become a service provider
                </td>
                <td className="px-3 py-3 whitespace-nowrap">Nigeria</td>
                <td className="px-3 py-1 my-2">
                  <span className="p-2 rounded-full bg-[green]">
                  Verified
                  </span>             
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                <Link href="/viewSellers">
                    <button className="text-blue-500">view request</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3 whitespace-nowrap">001</td>
                <td className="px-3 py-3 whitespace-nowrap text-[#576FF1]">
                daniella.jacobbs@example.com
                </td>
                <td className="px-3 py-3 whitespace-nowrap">07/02/2023</td>
                <td className="px-3 py-3 whitespace-nowrap">
                Become a service provider
                </td>
                <td className="px-3 py-3 whitespace-nowrap">Nigeria</td>
                <td className="px-3 py-1 my-2">
                  <span className="p-2 rounded-full bg-[green]">
                  Verified
                  </span>             
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                <Link href="/viewSellers">
                    <button className="text-blue-500">view request</button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td className="px-2 py-3 whitespace-nowrap">001</td>
                <td className="px-3 py-3 whitespace-nowrap text-[#576FF1]">
                daniella.jacobbs@example.com
                </td>
                <td className="px-3 py-3 whitespace-nowrap">07/02/2023</td>
                <td className="px-3 py-3 whitespace-nowrap">
                Become a service provider
                </td>
                <td className="px-3 py-3 whitespace-nowrap">Nigeria</td>
                <td className="px-3 py-1 my-2">
                  <span className="p-2 rounded-full bg-[green]">
                  Verified
                  </span>             
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                <Link href="/viewSellers">
                    <button className="text-blue-500">view request</button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td className="px-2 py-3 whitespace-nowrap">001</td>
                <td className="px-3 py-3 whitespace-nowrap text-[#576FF1]">
                daniella.jacobbs@example.com
                </td>
                <td className="px-3 py-3 whitespace-nowrap">07/02/2023</td>
                <td className="px-3 py-3 whitespace-nowrap">
                Become a service provider
                </td>
                <td className="px-3 py-3 whitespace-nowrap">Nigeria</td>
                <td className="px-3 py-1 my-2">
                  <span className="p-2 rounded-full bg-[green]">
                  Verified
                  </span>             
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                <Link href="/viewSellers">
                    <button className="text-blue-500">view request</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
};

export default Sellers;
