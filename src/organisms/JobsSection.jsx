import React, { useState } from 'react';

import JobCard from '../molicules/JobCard';
import JobFilters from '../molicules/JobFilters';

const JobsSection = () => {
  const initialJobs = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Data Skills Hub',
      date: '2024-11-23',
      location: 'Rajkot, Gujarat',
      experience: '0-2 yrs',
      jobType: 'Full Time',
      roles: ['Full Stack Developer'],
      salary: '₹100000 - ₹300000',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Tech Innovate',
      date: '2024-11-20',
      location: 'Mumbai, Maharashtra',
      experience: '1-3 yrs',
      jobType: 'Full Time',
      roles: ['Frontend Developer'],
      salary: '₹300000 - ₹500000+',
    },
  ];

  const [jobs, setJobs] = useState(initialJobs);

  const handleFilterChange = (filters) => {
    const filteredJobs = initialJobs.filter((job) => {
      const matchesJobType =
        filters.jobType === 'All' || job.jobType === filters.jobType;
      const matchesLocation =
        filters.location === 'All' || job.location === filters.location;
      const matchesRoles =
        filters.roles.length === 0 ||
        job.roles.some((role) => filters.roles.includes(role));
      const matchesSalary =
        filters.salaryRange === '₹50000 - ₹500000+' ||
        job.salary === filters.salaryRange;

      return matchesJobType && matchesLocation && matchesRoles && matchesSalary;
    });
    setJobs(filteredJobs);
  };

  return (
    <section className='p-6 lg:p-10 min-h-screen max-w-7xl mx-auto'>
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Filter container: full width on mobile, fixed width and sticky on large screens */}
        <div className='w-full lg:w-1/3 lg:sticky lg:top-20'>
          <JobFilters onFilterChange={handleFilterChange} />
        </div>
        {/* Job cards container */}
        <div className='flex-1'>
          {jobs.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <p className='text-gray-600 text-center'>
              No jobs match your filters.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
