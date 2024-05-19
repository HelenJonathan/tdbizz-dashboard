



const TransDetails = ({isVisible, onClose }) => {
  
    if ( !isVisible) return null;
  
    const handleClose = (e) => {
      if ( e?.target.id === 'wrapper' ) onClose();
    }
  
    
    return (
      <main onClick={()=>onClose()}  id="wrapper" className="flex bg-black bg-opacity-25 inset-0 fixed backdrop-blur-sm min-h-screen items-center justify-center m-auto">
        <section  className="bg-white p-6 rounded w-[400px]">
            <div className="flex justify-between">
                <p className="text-sm:text-sm text-[#4C5483] text-gray-600 font-sm">Transaction details</p>
                <button onClick={()=>onClose()} className="text-gray-600 text-xl text-3x3">X</button>
             </div>
          
          <div>

          <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Transaction type</p>
        <p className="text-[#1E233E]">
         
          Purchase of goods
        </p>
      </div>

      
          <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Frequency</p>
        <p className="text-[#1E233E]">
         
        One-time
        </p>
      </div>

      <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Time of transaction</p>
        <p className="text-[#1E233E]">         
        07/02/2003 22:40
        </p>
      </div>

      <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Amount</p>
        <p className="text-[#1E233E]">     
        N65,467.00
        </p>
      </div>

       <div className="py-2 flex justify-between ">
        <p className="text-[#4C5483]">Platform charges</p>
        <p className="text-[#1E233E]">
         
        N2.00
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

          </div>
         
         
        </section>
      </main>
    );
  }
  
  export default TransDetails;
  
  