import React, { useState } from 'react';

const JobFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    jobType: 'All',
    location: 'All',
    roles: [],
    salaryRange: '₹50000 - ₹500000+',
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFilters((prev) => ({
        ...prev,
        roles: checked
          ? [...prev.roles, value]
          : prev.roles.filter((role) => role !== value),
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <aside className='w-72 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white p-6 rounded-xl shadow-lg mr-6 sticky top-6 h-fit'>
      <h3 className='text-xl font-bold mb-6 text-zinc-200'>Filter Jobs</h3>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium'>Job Type</label>
        <select
          name='jobType'
          value={filters.jobType}
          onChange={handleFilterChange}
          className='w-full p-2 bg-gray-700 rounded-md text-white focus:ring-2 focus:ring-zinc-200 outline-none transition-all'
        >
          <option value='All'>All</option>
          <option value='Full Time'>Full Time</option>
          <option value='Part Time'>Part Time</option>
          <option value='Contract'>Contract</option>
        </select>
      </div>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium'>Location</label>
        <select
          name='location'
          value={filters.location}
          onChange={handleFilterChange}
          className='w-full p-2 bg-gray-700 rounded-md text-white focus:ring-2 focus:ring-zinc-200 outline-none transition-all'
        >
          <option value='All'>All</option>
          <option value='Rajkot, Gujarat'>Rajkot, Gujarat</option>
          <option value='Mumbai, Maharashtra'>Mumbai, Maharashtra</option>
          <option value='Remote'>Remote</option>
        </select>
      </div>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium'>Job Roles</label>
        <div className='space-y-2'>
          {[
            'Full Stack Developer',
            'Frontend Developer',
            'Backend Developer',
          ].map((role) => (
            <div key={role} className='flex items-center'>
              <input
                type='checkbox'
                id={role}
                name='roles'
                value={role}
                checked={filters.roles.includes(role)}
                onChange={handleFilterChange}
                className='w-4 h-4 text-zinc-200 bg-gray-700 border-gray-600 rounded focus:ring-zinc-200'
              />
              <label htmlFor={role} className='ml-2 text-sm'>
                {role}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium'>Salary Range</label>
        <select
          name='salaryRange'
          value={filters.salaryRange}
          onChange={handleFilterChange}
          className='w-full p-2 bg-gray-700 rounded-md text-white focus:ring-2 focus:ring-zinc-200 outline-none transition-all'
        >
          <option value='₹50000 - ₹500000+'>₹50K - ₹5L+</option>
          <option value='₹50000 - ₹100000'>₹50K - ₹1L</option>
          <option value='₹100000 - ₹300000'>₹1L - ₹3L</option>
          <option value='₹300000 - ₹500000+'>₹3L - ₹5L+</option>
        </select>
      </div>
      <button
        onClick={applyFilters}
        className='w-full py-2 bg-zinc-200 text-zinc-800 font-semibold rounded-md hover:bg-zinc-300 transition-colors duration-200'
      >
        Apply Filters
      </button>
    </aside>
  );
};

export default JobFilters;
