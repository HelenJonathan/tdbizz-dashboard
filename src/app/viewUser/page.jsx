import Layout from "../components/Layout";
import Biodata from "../components/Biodata"
import ProfileCard from "../components/ProfileCard";

const ViewUsers = () => {
  return (
    <>
      <Layout>
        <div className="flex gap-4">
          <div className="grow-0 flex flex-col gap-2">
            <ProfileCard />
            <Biodata />
          </div>
          <div className="bg-white w-64 h-full grow py-4">
            <div className="px-4">
              <h3 className="font-bold text-gray-500">Transaction history</h3>
            </div>

            <table className="min-w-full divide-y divide-gray-200 mt-2">
              <thead className="bg-[#EFF2FF]">
                <tr>
                  <th className="px-1 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Date/Time
                  </th>
                  <th className="px-1 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Transaction
                  </th>
                  <th className="px-1 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">
                    From/To
                  </th>
                  <th className="px-1 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Status
                  </th>
                  <th className="px-1 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-1 text-xs py-3 whitespace-nowrap">
                    07/02/2023/22:40
                  </td>

                  <td className="px-1 py-3  text-xs whitespace-nowrap">
                    IN: # 65,467.00
                  </td>
                  <td className="px-1 py-3 text-xs whitespace-nowrap">
                    GTB: 0224656581
                  </td>
                  <td className="px-1 mr-1 my-2 text-xs whitespace-nowrap rounded-full bg-[yellow]">
                    Pending
                  </td>
                  <td className="px-1 py-3 whitespace-nowrap">
                    <button className="text-[blue] text-xs">
                      # 344,978.00
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-1 text-xs py-3 whitespace-nowrap">
                    07/02/2023/22:40
                  </td>

                  <td className="px-1 py-3  text-xs whitespace-nowrap">
                    IN: # 65,467.00
                  </td>
                  <td className="px-1 py-3 text-xs whitespace-nowrap">
                    GTB: 0224656581
                  </td>
                  <td className="px-1 mr-1 my-2 text-xs whitespace-nowrap rounded-full bg-[green]">
                    Successful
                  </td>
                  <td className="px-1 py-3 whitespace-nowrap">
                    <button className="text-[blue] text-xs">
                      # 344,978.00
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-1 text-xs py-3 whitespace-nowrap">
                    07/02/2023/22:40
                  </td>

                  <td className="px-1 py-3  text-xs whitespace-nowrap">
                    IN: # 65,467.00
                  </td>
                  <td className="px-1 py-3 text-xs whitespace-nowrap">
                    GTB: 0224656581
                  </td>
                  <td className="px-1 mr-1 my-2 text-xs whitespace-nowrap rounded-full bg-[green]">
                    Successful
                  </td>
                  <td className="px-1 py-3 whitespace-nowrap">
                    <button className="text-[blue] text-xs">
                      # 344,978.00
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-1 text-xs py-3 whitespace-nowrap">
                    07/02/2023/22:40
                  </td>

                  <td className="px-1 py-3  text-xs whitespace-nowrap">
                    IN: # 65,467.00
                  </td>
                  <td className="px-1 py-3 text-xs whitespace-nowrap">
                    GTB: 0224656581
                  </td>
                  <td className="px-1 mr-1 my-2 text-xs whitespace-nowrap rounded-full bg-[green]">
                    Successful
                  </td>
                  <td className="px-1 py-3 whitespace-nowrap">
                    <button className="text-[blue] text-xs">
                      # 344,978.00
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-1 text-xs py-3 whitespace-nowrap">
                    07/02/2023/22:40
                  </td>

                  <td className="px-1 py-3  text-xs whitespace-nowrap">
                    IN: # 65,467.00
                  </td>
                  <td className="px-1 py-3 text-xs whitespace-nowrap">
                    GTB: 0224656581
                  </td>
                  <td className="px-1 mr-1 my-2 text-xs whitespace-nowrap rounded-full bg-[green]">
                    Successful
                  </td>
                  <td className="px-1 py-3 whitespace-nowrap">
                    <button className="text-[blue] text-xs">
                      # 344,978.00
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-1 text-xs py-3 whitespace-nowrap">
                    07/02/2023/22:40
                  </td>

                  <td className="px-1 py-3  text-xs whitespace-nowrap">
                    IN: # 65,467.00
                  </td>
                  <td className="px-1 py-3 text-xs whitespace-nowrap">
                    GTB: 0224656581
                  </td>
                  <td className="px-1 mr-1 my-2 text-xs whitespace-nowrap rounded-full bg-[green]">
                    Successful
                  </td>
                  <td className="px-1 py-3 whitespace-nowrap">
                    <button className="text-[blue] text-xs">
                      # 344,978.00
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-1 text-xs py-3 whitespace-nowrap">
                    07/02/2023/22:40
                  </td>

                  <td className="px-1 py-3  text-xs whitespace-nowrap">
                    IN: # 65,467.00
                  </td>
                  <td className="px-1 py-3 text-xs whitespace-nowrap">
                    GTB: 0224656581
                  </td>
                  <td className="px-1 mr-1 my-2 text-xs whitespace-nowrap rounded-full bg-[red]">
                    Failed
                  </td>
                  <td className="px-1 py-3 whitespace-nowrap">
                    <button className="text-[blue] text-xs">
                      # 344,978.00
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-1 text-xs py-3 whitespace-nowrap">
                    07/02/2023/22:40
                  </td>

                  <td className="px-1 py-3  text-xs whitespace-nowrap">
                    IN: # 65,467.00
                  </td>
                  <td className="px-1 py-3 text-xs whitespace-nowrap">
                    GTB: 0224656581
                  </td>
                  <td className="px-1 mr-1 my-2 text-xs whitespace-nowrap rounded-full bg-[yellow]">
                    Pending
                  </td>
                  <td className="px-1 py-3 whitespace-nowrap">
                    <button className="text-[blue] text-xs">
                      # 344,978.00
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ViewUsers;
