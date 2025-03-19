import { useState } from 'react';

import Modal from '../organisms/Modal';

const ServiceSection = ({ isLeft = false, sectionData }) => {
  // Fallback data in case sectionData is incomplete
  const [modalSource, setModalSource] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    title = 'Default Title',
    description = 'Default description text.',
    videoUrl = '',
    altText = 'Service video',
  } = sectionData || {};

  const openModal = (source) => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalSource('');
  };
  return (
    <section className='py-12 md:py-6 font-open-sans '>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 transition-all duration-700 ease-in-out ${
            isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } opacity-0 translate-y-10 animate-slide-in`}
        >
          {/* Text Content */}
          <div className='w-full lg:w-1/2 p-6 transition-all duration-500 hover:-translate-y-1 border border-gray-100/30'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight bg-clip-text  bg-gradient-to-r from-indigo-600 to-purple-600'>
              {title}
            </h2>
            <p className='text-gray-600 leading-relaxed text-base md:text-lg mb-6'>
              {description}
            </p>
            <button
              onClick={() => openModal(`Inquiry for Service`)}
              className='px-6 py-3 bg-zinc-900 text-zinc-200 font-semibold rounded-full shadow-md hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105 border border-zinc-200/50'
            >
              Inquire Now
            </button>
          </div>

          {/* Video Section */}
          <div className='w-full lg:w-1/2 p-6 relative group'>
            <div className='relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-200 shadow-lg border border-gray-100/30'>
              {videoUrl ? (
                <>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    src={videoUrl}
                    aria-label={altText}
                    onError={(e) => {
                      console.error('Video failed to load:', videoUrl);
                      e.target.style.display = 'none'; // Hide broken video
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                  {/* <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4'>
                    <h3 className='text-xl font-semibold text-white'>
                      {title}
                    </h3>
                  </div> */}
                  {/* <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <div className='w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        ></path>
                      </svg>
                    </div>
                  </div> */}
                </>
              ) : (
                <div className='absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500'>
                  <span className='text-lg font-medium'>Video unavailable</span>
                </div>
              )}
            </div>
            {/* Decorative Glow Effect */}
            <div className='absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        source={modalSource}
        context={title}
        isJobPage={false}
      />
    </section>
  );
};

export default ServiceSection;
