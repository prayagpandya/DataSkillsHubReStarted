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
    <div className='bg-zinc-800 text-zinc-200 flex justify-between py-10 font-open-sans font-semibold items-center px-4'>
      <div className='flex flex-col ml-36 text-4xl leading-snug'>
        <span>Affordable Online Training and</span>
        <span>Guaranteed Job Opportunities in USA & Canada</span>
      </div>
      <div className='mr-36'>
        <button
          onClick={openModal}
          className='bg-zinc-100 animate-bounce cursor-pointer py-3 text-zinc-800 px-4 rounded-md'
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
