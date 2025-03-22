import React, { useState } from 'react';
import Select from 'react-select';

// Sample location data (in a real app, fetch this from an API)
const locationData = {
  USA: [
    {
      state: 'Alabama',
      cities: ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville'],
    },
    { state: 'Alaska', cities: ['Anchorage', 'Fairbanks', 'Juneau'] },
    { state: 'Arizona', cities: ['Phoenix', 'Tucson', 'Mesa', 'Chandler'] },
    {
      state: 'Arkansas',
      cities: ['Little Rock', 'Fort Smith', 'Fayetteville'],
    },
    {
      state: 'California',
      cities: [
        'Los Angeles',
        'San Francisco',
        'San Diego',
        'Sacramento',
        'San Jose',
      ],
    },
    {
      state: 'Colorado',
      cities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins'],
    },
    {
      state: 'Connecticut',
      cities: ['Hartford', 'New Haven', 'Bridgeport', 'Stamford'],
    },
    { state: 'Delaware', cities: ['Wilmington', 'Dover', 'Newark'] },
    {
      state: 'Florida',
      cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Tallahassee'],
    },
    {
      state: 'Georgia',
      cities: ['Atlanta', 'Savannah', 'Augusta', 'Columbus'],
    },
    { state: 'Hawaii', cities: ['Honolulu', 'Hilo', 'Kailua'] },
    { state: 'Idaho', cities: ['Boise', 'Meridian', 'Nampa'] },
    {
      state: 'Illinois',
      cities: ['Chicago', 'Springfield', 'Peoria', 'Rockford'],
    },
    {
      state: 'Indiana',
      cities: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend'],
    },
    { state: 'Iowa', cities: ['Des Moines', 'Cedar Rapids', 'Davenport'] },
    {
      state: 'Kansas',
      cities: ['Wichita', 'Overland Park', 'Kansas City', 'Topeka'],
    },
    { state: 'Kentucky', cities: ['Louisville', 'Lexington', 'Bowling Green'] },
    {
      state: 'Louisiana',
      cities: ['New Orleans', 'Baton Rouge', 'Shreveport'],
    },
    { state: 'Maine', cities: ['Portland', 'Lewiston', 'Bangor'] },
    { state: 'Maryland', cities: ['Baltimore', 'Annapolis', 'Frederick'] },
    { state: 'Massachusetts', cities: ['Boston', 'Worcester', 'Springfield'] },
    {
      state: 'Michigan',
      cities: ['Detroit', 'Grand Rapids', 'Lansing', 'Ann Arbor'],
    },
    { state: 'Minnesota', cities: ['Minneapolis', 'Saint Paul', 'Duluth'] },
    { state: 'Mississippi', cities: ['Jackson', 'Gulfport', 'Southaven'] },
    {
      state: 'Missouri',
      cities: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia'],
    },
    { state: 'Montana', cities: ['Billings', 'Missoula', 'Bozeman'] },
    { state: 'Nebraska', cities: ['Omaha', 'Lincoln', 'Bellevue'] },
    { state: 'Nevada', cities: ['Las Vegas', 'Reno', 'Henderson'] },
    { state: 'New Hampshire', cities: ['Manchester', 'Nashua', 'Concord'] },
    {
      state: 'New Jersey',
      cities: ['Newark', 'Jersey City', 'Trenton', 'Paterson'],
    },
    { state: 'New Mexico', cities: ['Albuquerque', 'Santa Fe', 'Las Cruces'] },
    {
      state: 'New York',
      cities: ['New York City', 'Buffalo', 'Rochester', 'Albany'],
    },
    {
      state: 'North Carolina',
      cities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham'],
    },
    { state: 'North Dakota', cities: ['Fargo', 'Bismarck', 'Grand Forks'] },
    {
      state: 'Ohio',
      cities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo'],
    },
    { state: 'Oklahoma', cities: ['Oklahoma City', 'Tulsa', 'Norman'] },
    { state: 'Oregon', cities: ['Portland', 'Salem', 'Eugene'] },
    {
      state: 'Pennsylvania',
      cities: ['Philadelphia', 'Pittsburgh', 'Harrisburg', 'Allentown'],
    },
    { state: 'Rhode Island', cities: ['Providence', 'Warwick', 'Cranston'] },
    {
      state: 'South Carolina',
      cities: ['Charleston', 'Columbia', 'Greenville'],
    },
    {
      state: 'South Dakota',
      cities: ['Sioux Falls', 'Rapid City', 'Aberdeen'],
    },
    {
      state: 'Tennessee',
      cities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'],
    },
    {
      state: 'Texas',
      cities: ['Houston', 'Austin', 'Dallas', 'San Antonio', 'Fort Worth'],
    },
    { state: 'Utah', cities: ['Salt Lake City', 'West Valley City', 'Provo'] },
    { state: 'Vermont', cities: ['Burlington', 'Montpelier', 'Rutland'] },
    {
      state: 'Virginia',
      cities: ['Virginia Beach', 'Richmond', 'Norfolk', 'Chesapeake'],
    },
    {
      state: 'Washington',
      cities: ['Seattle', 'Spokane', 'Tacoma', 'Olympia'],
    },
    {
      state: 'West Virginia',
      cities: ['Charleston', 'Huntington', 'Morgantown'],
    },
    { state: 'Wisconsin', cities: ['Milwaukee', 'Madison', 'Green Bay'] },
    { state: 'Wyoming', cities: ['Cheyenne', 'Casper', 'Laramie'] },
  ],
  Canada: [
    { province: 'Alberta', cities: ['Calgary', 'Edmonton', 'Red Deer'] },
    {
      province: 'British Columbia',
      cities: ['Vancouver', 'Victoria', 'Kelowna'],
    },
    { province: 'Manitoba', cities: ['Winnipeg', 'Brandon', 'Steinbach'] },
    {
      province: 'New Brunswick',
      cities: ['Fredericton', 'Moncton', 'Saint John'],
    },
    {
      province: 'Newfoundland and Labrador',
      cities: ["St. John's", 'Corner Brook', 'Mount Pearl'],
    },
    { province: 'Nova Scotia', cities: ['Halifax', 'Sydney', 'Dartmouth'] },
    {
      province: 'Ontario',
      cities: ['Toronto', 'Ottawa', 'Hamilton', 'London', 'Kitchener'],
    },
    {
      province: 'Prince Edward Island',
      cities: ['Charlottetown', 'Summerside'],
    },
    {
      province: 'Quebec',
      cities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau'],
    },
    {
      province: 'Saskatchewan',
      cities: ['Saskatoon', 'Regina', 'Prince Albert'],
    },
    { territory: 'Northwest Territories', cities: ['Yellowknife'] },
    { territory: 'Nunavut', cities: ['Iqaluit'] },
    { territory: 'Yukon', cities: ['Whitehorse'] },
  ],
  Dubai: [{ emirate: 'Dubai', cities: ['Dubai', 'Jebel Ali', 'Hatta'] }],
  'Abu Dhabi': [
    { emirate: 'Abu Dhabi', cities: ['Abu Dhabi', 'Al Ain', 'Madinat Zayed'] },
  ],
  UK: [
    {
      country: 'England',
      cities: [
        'London',
        'Manchester',
        'Birmingham',
        'Liverpool',
        'Bristol',
        'Leeds',
      ],
    },
    {
      country: 'Scotland',
      cities: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee'],
    },
    { country: 'Wales', cities: ['Cardiff', 'Swansea', 'Newport'] },
    {
      country: 'Northern Ireland',
      cities: ['Belfast', 'Derry/Londonderry', 'Lisburn'],
    },
  ],
  Australia: [
    { state: 'New South Wales', cities: ['Sydney', 'Newcastle', 'Wollongong'] },
    { state: 'Victoria', cities: ['Melbourne', 'Geelong', 'Ballarat'] },
    {
      state: 'Queensland',
      cities: ['Brisbane', 'Gold Coast', 'Cairns', 'Townsville'],
    },
    {
      state: 'South Australia',
      cities: ['Adelaide', 'Mount Gambier', 'Whyalla'],
    },
    { state: 'Western Australia', cities: ['Perth', 'Fremantle', 'Bunbury'] },
    { state: 'Tasmania', cities: ['Hobart', 'Launceston', 'Devonport'] },
    { territory: 'Australian Capital Territory', cities: ['Canberra'] },
    { territory: 'Northern Territory', cities: ['Darwin', 'Alice Springs'] },
  ],
};

const JobFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    jobType: 'All',
    workType: 'All',
    country: 'All',
    state: 'All',
    city: 'All',
    workSetup: 'All',
    roles: 'All', // String for single-select
    salaryRange: '₹50000 - ₹500000+',
    experienceLevel: 'All',
    industry: 'All',
    datePosted: 'Any Time',
  });

  // Handle changes for native dropdowns
  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    // Reset dependent dropdowns when a higher-level dropdown changes
    if (name === 'country') {
      setFilters((prev) => ({
        ...prev,
        country: value,
        state: 'All', // Reset state when country changes
        city: 'All', // Reset city when country changes
        [name]: value,
      }));
    } else if (name === 'state') {
      setFilters((prev) => ({
        ...prev,
        state: value,
        city: 'All', // Reset city when state changes
        [name]: value,
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle changes for react-select dropdowns (State, City, Job Roles)
  const handleSelectChange = (selectedOption, actionMeta) => {
    const { name } = actionMeta;

    if (name === 'roles') {
      setFilters((prev) => ({
        ...prev,
        roles: selectedOption ? selectedOption.value : 'All',
      }));
    } else if (name === 'state') {
      setFilters((prev) => ({
        ...prev,
        state: selectedOption ? selectedOption.value : 'All',
        city: 'All', // Reset city when state changes
      }));
    } else if (name === 'city') {
      setFilters((prev) => ({
        ...prev,
        city: selectedOption ? selectedOption.value : 'All',
      }));
    }
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  const clearFilters = () => {
    setFilters({
      jobType: 'All',
      workType: 'All',
      country: 'All',
      state: 'All',
      city: 'All',
      workSetup: 'All',
      roles: 'All',
      salaryRange: '₹50000 - ₹500000+',
      experienceLevel: 'All',
      industry: 'All',
      datePosted: 'Any Time',
    });
  };

  // Determine the key for the second level (state, province, emirate, country, territory)
  const getRegionKey = (country) => {
    if (!country || country === 'All') return 'State';
    const regions = locationData[country];
    if (!regions || regions.length === 0) return 'State';
    const firstRegion = regions[0];
    if ('state' in firstRegion) return 'State';
    if ('province' in firstRegion) return 'Province';
    if ('emirate' in firstRegion) return 'Emirate';
    if ('country' in firstRegion) return 'Country';
    if ('territory' in firstRegion) return 'Territory';
    return 'State'; // Default fallback
  };

  // Get available states/provinces/territories based on selected country
  const availableRegions =
    filters.country === 'All' || !filters.country
      ? []
      : locationData[filters.country].map((region) => {
          if ('state' in region) return region.state;
          if ('province' in region) return region.province;
          if ('emirate' in region) return region.emirate;
          if ('country' in region) return region.country;
          if ('territory' in region) return region.territory;
          return '';
        });

  // Get available cities based on selected country and state/province/territory
  const availableCities =
    filters.country === 'All' ||
    filters.state === 'All' ||
    !filters.country ||
    !filters.state
      ? []
      : (() => {
          const region = locationData[filters.country].find(
            (r) =>
              r.state === filters.state ||
              r.province === filters.state ||
              r.emirate === filters.state ||
              r.country === filters.state ||
              r.territory === filters.state
          );
          return region ? region.cities : [];
        })();

  // Options for State/Province/Territory (for react-select)
  const regionOptions = [
    { value: 'All', label: `All ${getRegionKey(filters.country)}s` },
    ...availableRegions.map((region) => ({
      value: region,
      label: region,
    })),
  ];

  // Options for City (for react-select)
  const cityOptions = [
    { value: 'All', label: 'All Cities' },
    ...availableCities.map((city) => ({
      value: city,
      label: city,
    })),
  ];

  // Options for Job Roles (for react-select)
  const roleOptions = [
    { value: 'All', label: 'All Roles' },
    { value: 'Full Stack Developer', label: 'Full Stack Developer' },
    { value: 'Frontend Developer', label: 'Frontend Developer' },
    { value: 'Backend Developer', label: 'Backend Developer' },
    { value: 'UI/UX Designer', label: 'UI/UX Designer' },
    { value: 'Data Scientist', label: 'Data Scientist' },
  ];

  // Dynamic label for the State dropdown
  const regionLabel = getRegionKey(filters.country);

  return (
    <aside className='w-full bg-white p-6 rounded-xl shadow-lg h-fit'>
      <h3 className='text-xl font-semibold text-gray-800 mb-6'>Filter Jobs</h3>
      <div className='space-y-6 grid grid-cols-2 gap-2'>
        {/* Job Type */}
        <div className='col-span-2 grid grid-cols-3 gap-1'>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              Job Type
            </label>
            <select
              name='jobType'
              value={filters.jobType}
              onChange={handleFilterChange}
              className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            >
              <option value='All'>All Types</option>
              <option value='Full Time'>Full Time</option>
              <option value='Part Time'>Part Time</option>
              <option value='Contract'>Contract</option>
              <option value='Internship'>Internship</option>
              <option value='Freelance'>Freelance</option>
            </select>
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              Work Type
            </label>
            <select
              name='workType'
              value={filters.workType}
              onChange={handleFilterChange}
              className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            >
              <option value='All'>All Types</option>
              <option value='Full Time'>Full Time</option>
              <option value='Part Time'>Part Time</option>
              <option value='Contract'>Contract</option>
              <option value='Internship'>Internship</option>
              <option value='Freelance'>Freelance</option>
            </select>
          </div>
          {/* Date Posted */}
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              Date Posted
            </label>
            <select
              name='datePosted'
              value={filters.datePosted}
              onChange={handleFilterChange}
              className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            >
              <option value='Any Time'>Any Time</option>
              <option value='Last 24 Hours'>Last 24 Hours</option>
              <option value='Last 7 Days'>Last 7 Days</option>
              <option value='Last 30 Days'>Last 30 Days</option>
            </select>
          </div>
        </div>
        <div className='col-span-2'>
          {/* Country */}
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              Country
            </label>
            <select
              name='country'
              value={filters.country}
              onChange={handleFilterChange}
              className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            >
              <option value='All'>All Countries</option>
              {Object.keys(locationData).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='col-span-2 grid grid-cols-2 gap-2'>
          {/* State/Province/Territory (Using react-select) */}
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              {regionLabel}
            </label>
            <Select
              name='state'
              options={regionOptions}
              value={regionOptions.find(
                (option) => option.value === filters.state
              )}
              onChange={handleSelectChange}
              placeholder={`Select a ${regionLabel.toLowerCase()}...`}
              isDisabled={filters.country === 'All' || !filters.country}
              className='w-full'
              classNamePrefix='select'
            />
          </div>
          {/* City (Using react-select) */}
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              City
            </label>
            <Select
              name='city'
              options={cityOptions}
              value={cityOptions.find(
                (option) => option.value === filters.city
              )}
              onChange={handleSelectChange}
              placeholder='Select a city...'
              isDisabled={filters.state === 'All' || !filters.state}
              className='w-full'
              classNamePrefix='select'
            />
          </div>
        </div>

        {/* Job Roles (Using react-select) */}
        <div className='col-span-2'>
          <label className='block mb-2 text-sm font-medium text-gray-700'>
            Job Roles
          </label>
          <Select
            name='roles'
            options={roleOptions}
            value={roleOptions.find((option) => option.value === filters.roles)}
            onChange={handleSelectChange}
            placeholder='Select a role...'
            className='w-full'
            classNamePrefix='select'
          />
        </div>

        {/* Experience Level */}
        <div className='col-span-2'>
          <label className='block mb-2 text-sm font-medium text-gray-700'>
            Experience Level
          </label>
          <select
            name='experienceLevel'
            value={filters.experienceLevel}
            onChange={handleFilterChange}
            className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          >
            <option value='All'>All Levels</option>
            <option value='Entry Level'>Entry Level (0-2 years)</option>
            <option value='Mid-Level'>Mid-Level (3-5 years)</option>
            <option value='Senior Level'>Senior Level (5+ years)</option>
          </select>
        </div>

        {/* Buttons */}
        <div className='flex space-x-2 col-span-2'>
          <button
            onClick={applyFilters}
            className='w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200'
          >
            Apply Filters
          </button>
          <button
            onClick={clearFilters}
            className='w-full py-2 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400 transition-colors duration-200'
          >
            Clear Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default JobFilters;
