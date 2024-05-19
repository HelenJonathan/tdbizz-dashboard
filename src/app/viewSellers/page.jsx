"use client"

import Layout from "../components/Layout";
import Biodata from "../components/Biodata"
import SellerProfile from "../components/SellersProfile";
import { Fragment, useState } from "react";
import SellerQest from "../components/SellerQuest";
import ApproveUser from "../components/ApproveUser"

const ViewUsers = () => {

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    

  return (
    <Fragment>
          <Layout>
        <div className="flex gap-4">
          <div className="grow-0 flex flex-col gap-2">
            
            <SellerProfile />
            <Biodata />
          </div>
          <div className="bg-white w-64 h-full grow py-4">
            <div className="px-4">
              <h5 className="font-bold text-gray-500">User Request</h5>
            </div>

            <section  className="bg-white p-6 rounded">
            <div className="flex justify-between">
                <p className="text-sm:text-sm text-[#4C5483] text-gray-600 font-sm">Nature of services:</p>
                <p onClick={()=>onClose()} className="text-gray-600 text-xl text-3x3">Product Designer</p>
             </div>
          
          <div>

          <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Name and bio: <br />
(brief info including name)</p>
        <p className="text-[#1E233E]">
        Huckleberry Finn, skilled designer <br />
that has worked with Google & Meta
        </p>
      </div>

      
          <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Years of experience:</p>
        <p className="text-[#1E233E]">
         
        5 years
        </p>
      </div>

      <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Which type of service:</p>
        <p className="text-[#1E233E]">         
        Freelance digital services
        </p>
      </div>

      <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Location</p>
        <p className="text-[#1E233E]">     
        Birmingham, United <br /> Kingdom
        </p>
      </div>

       <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Birmingham, United Kingdom</p>
        <p className="text-[#1E233E]">
         
        huckfinn.design
        </p>
      </div>

      <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Currency</p>
        <p className="text-[#1E233E]">
         
        Nigerian Naira
        </p>
      </div>

      <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Sender</p>
        <p className="text-[#576FF1]">
         
        @daniella
        </p>
      </div>

      <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Sender Email</p>
        <p className="text-[#576FF1]">
         
        daniella.jacobbs@gmail.com
        </p>
      </div>

      <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Recipient</p>
        <p className="text-[#1E233E]">
         
        0224656581 <br />
Guaranty Trust Bank
        </p>
      </div>

      <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Description</p>
        <p className="text-[#1E233E]">     
       Nil
        </p>
      </div>


      <div className="flex justify-end ">
            
            <button onClick={() => setShowModal(true)} className="bg-white-500 text-[#EB5757] border-4 border-[#EB5757] py-2 px-4 rounded-md mr-2">
              Reject User
            </button>
            
            
            <button
              onClick={() => setShowModal2(true)} 
              className="bg-[#576FF1] text-white py-2 px-4 rounded-md hover:bg-gray-600"
            >
              Approve Request
            </button>
            
          </div>


          </div>
         
         
        </section>
          </div>
        </div>
      </Layout>

      <SellerQest isVisible={showModal} onClose={()=>setShowModal(false)} />
      <ApproveUser isVisible={showModal2} onClose={()=>setShowModal2(false)} />
    </Fragment>
    
    
  );
};

export default ViewUsers;

