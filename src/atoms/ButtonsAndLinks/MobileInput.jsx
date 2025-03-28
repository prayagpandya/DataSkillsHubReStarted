import React, { useState } from 'react';

const MobileInput = ({ formData, handleChange, errors }) => {
  const [countryCode, setCountryCode] = useState('+1'); // Default to US code

  const countryCodes = [
    { code: '+1' },
    { code: '+44' },
    { code: '+91' },
    { code: '+61' },
    { code: '+81' },
  ];

  // Extract just the number part from formData.mobile by removing the current country code
  const getNumberWithoutCode = () => {
    if (!formData.mobile) return '';
    return formData.mobile.startsWith(countryCode)
      ? formData.mobile.slice(countryCode.length)
      : formData.mobile;
  };

  const handleCountryCodeChange = (e) => {
    const newCode = e.target.value;
    const numberPart = getNumberWithoutCode(); // Get the current number without code
    setCountryCode(newCode);
    // Update formData with new country code + existing number
    handleChange({
      target: {
        name: 'mobile',
        value: `${newCode}${numberPart}`,
      },
    });
  };

  const handleNumberChange = (e) => {
    // Combine current country code with the new number input
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
          className={`w-16 py-2 border rounded-l-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
            errors.mobile
              ? 'border-red-500 focus:ring-red-500'
              : 'border-zinc-300 focus:ring-yellow-400'
          }`}
          aria-label='Country code'
        >
          {countryCodes.map((option) => (
            <option key={option.code} value={option.code}>
              {option.code}
            </option>
          ))}
        </select>

        <input
          type='tel'
          id='mobile'
          name='mobile'
          value={getNumberWithoutCode()} // Display only the number part
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
