import {
  FaUser,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaClock,
  FaMoneyBillWave,
  FaCalendarAlt,
} from 'react-icons/fa';
import React, { useState } from 'react';

import CommonHero from '../molicules/CommonHero';
import Modal from '../organisms/Modal';

const JobInfoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('');

  const openModal = (source) => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalSource('');
  };
  return (
    <div>
      <CommonHero
        title={'Job Information'}
        description={'Your Bridge to IT Excellence and Opportunities'}
      />
      <div className='min-h-screen  flex items-center justify-center p-6'>
        <div className='flex flex-col md:flex-row gap-8 w-full max-w-5xl'>
          {/* Left Section: Job Information */}
          <div className='bg-white rounded-2xl shadow-lg p-8 w-full md:w-1/3 border border-zinc-200/50 transition-transform hover:scale-105 duration-300'>
            <h2 className='text-xl font-bold text-zinc-800 mb-6 border-b border-zinc-200 pb-2'>
              Job Information
            </h2>
            <div className='space-y-5'>
              {/* Employee Type */}
              <div className='flex items-center'>
                <FaUser className='text-zinc-600 mr-4 text-lg' />
                <div className='flex-1 flex justify-between'>
                  <p className='text-sm font-medium text-zinc-700'>
                    Employee Type:
                  </p>
                  <p className='text-sm font-semibold text-zinc-800'>Remote</p>
                </div>
              </div>

              {/* Location */}
              <div className='flex items-center'>
                <FaMapMarkerAlt className='text-zinc-600 mr-4 text-lg' />
                <div className='flex-1 flex justify-between'>
                  <p className='text-sm font-medium text-zinc-700'>Location:</p>
                  <p className='text-sm font-semibold text-zinc-800'>
                    Rajkot, Gujarat
                  </p>
                </div>
              </div>

              {/* Job Type */}
              <div className='flex items-center'>
                <FaLaptopCode className='text-zinc-600 mr-4 text-lg' />
                <div className='flex-1 flex justify-between'>
                  <p className='text-sm font-medium text-zinc-700'>Job Type:</p>
                  <p className='text-sm font-semibold text-zinc-800'>
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className='flex items-center'>
                <FaClock className='text-zinc-600 mr-4 text-lg' />
                <div className='flex-1 flex justify-between'>
                  <p className='text-sm font-medium text-zinc-700'>
                    Experience:
                  </p>
                  <p className='text-sm font-semibold text-zinc-800'>
                    0-2 Years
                  </p>
                </div>
              </div>

              {/* Salary */}
              <div className='flex items-center'>
                <FaMoneyBillWave className='text-zinc-600 mr-4 text-lg' />
                <div className='flex-1 flex justify-between'>
                  <p className='text-sm font-medium text-zinc-700'>Salary:</p>
                  <p className='text-sm font-semibold text-zinc-800'>₹50,000</p>
                </div>
              </div>

              {/* Date Posted */}
              <div className='flex items-center'>
                <FaCalendarAlt className='text-zinc-600 mr-4 text-lg' />
                <div className='flex-1 flex justify-between'>
                  <p className='text-sm font-medium text-zinc-700'>
                    Date Posted:
                  </p>
                  <p className='text-sm font-semibold text-zinc-800'>
                    2024-11-23
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Job Description */}
          <div className='bg-white rounded-2xl shadow-lg p-8 w-full md:w-2/3 border border-zinc-200/50 transition-transform hover:scale-105 duration-300'>
            <h2 className='text-xl font-bold text-zinc-800 mb-6 border-b border-zinc-200 pb-2'>
              Job Description
            </h2>

            {/* Job Title */}
            <h3 className='text-lg font-semibold text-zinc-800 mb-4'>
              Full-Stack Developer at DataSkillsHub
            </h3>

            {/* Responsibilities and Duties */}
            <div className='mb-6'>
              <h4 className='text-sm font-semibold text-zinc-700 mb-3'>
                Responsibilities and Duties:
              </h4>
              <ul className='list-disc pl-5 space-y-2 text-sm text-zinc-600'>
                <li>
                  Design, develop, and maintain scalable and high-performance
                  web applications using modern front-end and back-end
                  technologies.
                </li>
                <li>
                  Collaborate with cross-functional teams to define, design, and
                  ship new features, ensuring a seamless user experience and
                  robust architecture.
                </li>
                <li>
                  Monitor application performance, troubleshoot bugs, and
                  implement enhancements to improve the overall system
                  reliability and efficiency.
                </li>
              </ul>
            </div>

            {/* Required Experience, Skills, and Qualifications */}
            <div className='mb-8'>
              <h4 className='text-sm font-semibold text-zinc-700 mb-3'>
                Required Experience, Skills, and Qualifications:
              </h4>
              <ul className='list-disc pl-5 space-y-2 text-sm text-zinc-600'>
                <li>
                  Proficiency in front-end technologies such as React.js,
                  Angular, or Vue.js, and back-end frameworks like Node.js,
                  Express, or Django.
                </li>
                <li>
                  Strong understanding of database systems, both SQL (MySQL,
                  PostgreSQL) and NoSQL (MongoDB, Firebase), along with
                  experience in designing and optimizing schemas.
                </li>
                <li>
                  Familiarity with version control systems (Git), cloud
                  platforms (AWS, Azure), and deployment pipelines for CI/CD.
                </li>
              </ul>
            </div>

            {/* Apply Now Button */}
            <button
              onClick={() => openModal('Applying for Job')}
              className='w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-zinc-800 font-semibold py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-md'
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        source={modalSource}
        context={`full stack developer at DataSkillsHub`} // Pass the job title and company as context
        isJobPage={true} // Enable job-specific fields (Resume, Cover Letter)
      />
    </div>
  );
};

export default JobInfoPage;
