import React from 'react';
import toast from 'react-hot-toast';
import { IoCheckmarkCircle, IoWarning, IoClose } from 'react-icons/io5';

const CustomToast = ({ message, type = 'success', id, t }) => {
  return (
    <div
      className={`flex items-center justify-between max-w-xs w-full p-4 rounded-lg shadow-lg text-white ${
        type === 'success'
          ? 'bg-green-500'
          : type === 'error'
          ? 'bg-red-500'
          : 'bg-blue-500'
      } ${t.visible ? 'animate-slide-up' : 'animate-slide-down'}`}
    >
      <div className='flex items-center gap-2'>
        {type === 'success' && <IoCheckmarkCircle className='text-xl' />}
        {type === 'error' && <IoWarning className='text-xl' />}
        <span className='text-sm font-medium'>{message}</span>
      </div>
      <button
        onClick={() => toast.dismiss(id)}
        className='text-white hover:text-gray-200 focus:outline-none'
        aria-label='Close toast'
      >
        <IoClose className='text-xl' />
      </button>
    </div>
  );
};

export default CustomToast;
