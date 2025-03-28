import { useState } from 'react';

import Modal from './Modal';

const AffordableStripHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-zinc-800 text-zinc-200 flex justify-between py-10 font-open-sans font-semibold items-center px-4 flex-col md:flex-row'>
      <div className='flex flex-col lg:ml-36 text-2xl lg:text-4xl leading-snug'>
        <span>Affordable Online Training and</span>
        <span>Guaranteed Job Opportunities in USA & Canada</span>
      </div>
      <div className='md:mr-36'>
        <button
          onClick={openModal}
          className='bg-zinc-100 mt-8 md:mt-0 text-sm md:text-base animate-bounce cursor-pointer py-3 text-zinc-800 px-4 rounded-md'
        >
          Book Free Demo Now
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        source='Booking'
        context='Trial'
        isJobPage={false}
      />
    </div>
  );
};

export default AffordableStripHome;
