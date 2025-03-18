import React, { useState } from 'react';

import JobCard from '../molicules/JobCard';
import JobFilters from '../molicules/JobFilters';

const JobsSection = () => {
  const initialJobs = [
    {
      title: 'Full Stack Developer',
      company: 'Data Skills Hub',
      date: '2024-11-23',
      location: 'Rajkot, Gujarat',
      experience: '0-2 yrs',
      vacancies: '100',
      applied: '9',
      roles: ['Full Stack Developer'],
      salary: '₹100000 - ₹300000',
    },
    {
      title: 'Frontend Developer',
      company: 'Tech Innovate',
      date: '2024-11-20',
      location: 'Mumbai, Maharashtra',
      experience: '1-3 yrs',
      vacancies: '50',
      applied: '15',
      roles: ['Frontend Developer'],
      salary: '₹300000 - ₹500000+',
    },
  ];

  const [jobs, setJobs] = useState(initialJobs);

  const handleFilterChange = (filters) => {
    const filteredJobs = initialJobs.filter((job) => {
      const matchesJobType =
        filters.jobType === 'All' || job.type === filters.jobType;
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
    <section className='p-6 lg:p-10 bg-gray-100 min-h-screen max-w-7xl mx-auto'>
      <div className='flex flex-col lg:flex-row gap-8'>
        <JobFilters onFilterChange={handleFilterChange} />
        <div className='flex-1'>
          {jobs.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2  gap-6'>
              {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
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
