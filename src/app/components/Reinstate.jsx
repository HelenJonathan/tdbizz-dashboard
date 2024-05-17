




const Reinstate = ({isVisible, onClose }) => {
  
    if ( !isVisible) return null;
  
    const handleClose = (e) => {
      if ( e.target.id === 'wrapper' ) onClose();
    }
  
    
    return (
      <main onClick={()=>onClose()}  id="wrapper" className="flex bg-black bg-opacity-25 inset-0 fixed backdrop-blur-sm min-h-screen items-center justify-center m-auto">
        <section  className="bg-white p-6 rounded w-[400px]">
    <div className="flex justify-between">
            <p className="text-sm:text-sm text-[#4C5483] text-gray-600 font-sm">Re-instate User</p>
            <button onClick={()=>onClose()} className="text-gray-600 text-xl text-3x3">X</button>
          </div>
          <div><p className="text-sm mt-3 text-#1E233E text-center">
          THIS USER IS CURRENTLY UNDER SUSPENSION, ALL ACTIVITIES
ON THEIR ACCOUNT IS ON HOLD. RE-INSTATING THIS USER
WILL ACTIVATE THEIR ACCOUNT AGAIN. PROCEED?</p></div>
         
         <div className="flex justify-center mt-6">
         
                      <button onClick={()=>onClose()} className="text-[#1E233E] w-[120px] bg-white-500 text-black border-4 py-2 px-4 rounded-md mr-2">Cancel</button>
                    
                      <button className="text-[#FFFFFF] bg-[#27AE60]  py-2 px-4 rounded-md">Proceed user</button>
                    
         </div> 
        </section>
      </main>
    );
  }
  
  export default Reinstate;
  
  