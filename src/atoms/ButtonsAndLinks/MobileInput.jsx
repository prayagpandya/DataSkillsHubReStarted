import React, { useState } from 'react';

const MobileInput = ({ formData, handleChange, errors }) => {
  const [countryCode, setCountryCode] = useState('+1'); // Default to US code

  // Sample country codes (expand as needed)
  const countryCodes = [
    { code: '+1', label: 'US (+1)' },
    { code: '+44', label: 'UK (+44)' },
    { code: '+91', label: 'India (+91)' },
    { code: '+61', label: 'Australia (+61)' },
    { code: '+81', label: 'Japan (+81)' },
  ];

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
    // Optionally update formData with the full number if needed
    handleChange({
      target: {
        name: 'mobile',
        value: `${e.target.value}${formData.mobile || ''}`,
      },
    });
  };

  const handleNumberChange = (e) => {
    // Combine country code with the number
    handleChange({
      target: {
        name: 'mobile',
        value: `${countryCode}${e.target.value}`,
      },
    });
  };

  return (
    <div>
      <label
        className='block text-sm font-medium text-zinc-700 mb-1'
        htmlFor='mobile'
      >
        Mobile
      </label>
      <div className='flex w-full'>
        {/* Country Code Selector */}
        <select
          value={countryCode}
          onChange={handleCountryCodeChange}
          className={`w-24 py-2 border rounded-l-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
            errors.mobile
              ? 'border-red-500 focus:ring-red-500'
              : 'border-zinc-300 focus:ring-yellow-400'
          }`}
          aria-label='Country code'
        >
          {countryCodes.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Mobile Number Input */}
        <input
          type='tel'
          id='mobile'
          name='mobile'
          value={formData.mobile.replace(countryCode, '')} // Display only the number part
          onChange={handleNumberChange}
          className={`flex-1 px-4 py-2 border rounded-r-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
            errors.mobile
              ? 'border-red-500 focus:ring-red-500'
              : 'border-zinc-300 focus:ring-yellow-400'
          }`}
          placeholder='Enter your mobile number'
          required
          aria-invalid={errors.mobile ? 'true' : 'false'}
          aria-describedby={errors.mobile ? 'mobile-error' : undefined}
        />
      </div>
      {errors.mobile && (
        <p id='mobile-error' className='text-red-500 text-xs mt-1'>
          {errors.mobile}
        </p>
      )}
    </div>
  );
};

export default MobileInput;
