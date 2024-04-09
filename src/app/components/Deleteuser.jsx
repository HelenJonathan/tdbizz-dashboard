// components/Portal.js
import { useState } from 'react';
import { createPortal } from 'react-dom';

const Deleteuser = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const portalContainer = document.getElementById('portal-root');

  return (
    <>
      {isOpen && createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Confirmation</h2>
            <p className="text-gray-600 mb-4">Are you sure you want to proceed?</p>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600" onClick={onClose}>
                User
              </button>
              <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>,
        portalContainer
      )}
    </>
  );
};

export default Deleteuser;

