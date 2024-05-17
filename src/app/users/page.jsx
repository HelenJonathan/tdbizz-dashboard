"use client"

import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Data from "../database.json"
import { useState } from "react";

const Users = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 7;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex -recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1)

  return (
    <div>
      <Layout page="users">
        <div className="bg-white w-full h-full py-4">
          <div className="flex px-4">
            <h3 className="grow font-bold">User list</h3>
            <div className="relative bg-[#EFF2FF]">
              <input
                type="text"
                placeholder="Search users with email or phone number"
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
                  Email/Password
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500">
                  Location
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500">
                  Last Active
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500">
                  User Type
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500">
                  KYC Status
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {records.map((d,i) => (

                <tr key={i}>
                <td className="px-3 py-2 whitespace-nowrap">{d.SN}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                {d.EmailPassword}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{d.Location}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                {d.LastActive}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{d.UserType}</td>
                <td className="px-3 py-1 my-2">
                  <span className={`${d.KYCStatus === 'Unverified' ? 'bg-[#E21609]' : d.KYCStatus === 'Pending' ? 'bg-[#F2A000]' : d.KYCStatus === 'Verified' ? 'bg-[#27AE60]' : ''} p-2 rounded-full`}>
                    {d.KYCStatus}
                  </span>             
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <Link href="/viewUser">
                    <button className="text-blue-500">{d.Action}</button>
                  </Link>
                </td>
              </tr>


              ) )}
              
             

            </tbody>
          </table>
          <nav>
            <ul className="flex mx-auto flex justify-end items-end mr-8">
              <li className="mr-2">
                <a href="#" className="" onClick={prePage}>PREV</a>
              </li>
              {
                numbers.map((n, i) => (
                  <li className={`mr-2 text-blue-500 ${currentPage === n ? "active" : ""}`} key={1}>
                    <a href="/users" className="" onClick={() => changeCPage(n)}>{n}</a>
                  </li>

                ))
              }
              <li>
                <a href="#" className="text-blue-500" onClick={nextPage}>NEXT</a>
              </li>
            </ul>
          </nav>
        </div>
      </Layout>
    </div>
  );

  function prePage() {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if(currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

};

export default Users;
