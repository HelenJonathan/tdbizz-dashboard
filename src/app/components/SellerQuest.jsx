

const Delete = ({isVisible, onClose }) => {
  
    if ( !isVisible) return null;
  
    const handleClose = (e) => {
      if ( e?.target.id === 'wrapper' ) onClose();
    }
  
    
    return (
      <main onClick={handleClose}  id="wrapper" className="flex bg-black bg-opacity-25 inset-0 fixed backdrop-blur-sm min-h-screen items-center justify-center m-auto">
        <section  className="bg-[#FFE9E9] p-6 rounded w-[400px]">
    <div className="flex justify-between">
            <p className="text-sm:text-sm text-[#4C5483] text-gray-600 font-sm">Deactivate user</p>
            <button onClick={()=>onClose()} className="text-gray-600 text-xl text-3x3">X</button>
          </div>
          <div><p className="text-sm mt-3 text-#1E233E text-center">
          WHY ARE YOU REJECTING THIS USER REQUEST? PLEASE
STATE REASON (REASON STATED WILL BE COMMUNICATED
TO THE USER VIA EMAIL).</p></div>
         

         <form action="">
            <textarea name="message" id="message" cols="33" rows="5" className="my-3"></textarea>
         </form>
         <div className="flex justify-center mt-6">
         
                      <button onClick={()=>onClose()} className="text-[#1E233E] w-[120px] bg-white-500 text-black border-4 py-2 px-4 rounded-md mr-2">Cancel</button>
                    
                      <button className="text-white bg-[#EB5757]  py-2 px-4 rounded-md">Delete</button>
                    
         </div> 
        </section>
      </main>
    );
  }
  
  export default Delete;
  
  