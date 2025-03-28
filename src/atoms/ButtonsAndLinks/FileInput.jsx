import React, { useState } from 'react';

const FileUploadInput = ({ handleChange, errors }) => {
  const [fileName, setFileName] = useState('');

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : '');
    handleChange(e); // Pass the event to parent handler
  };

  return (
    <div className='w-full'>
      <label
        className='block text-sm font-medium text-zinc-700 mb-1'
        htmlFor='resume'
      >
        Resume
      </label>
      <div className='relative'>
        {/* Hidden actual file input */}
        <input
          type='file'
          id='resume'
          name='resume'
          onChange={onFileChange}
          className='hidden'
          accept='.pdf,.doc,.docx'
          required
          aria-invalid={errors.resume ? 'true' : 'false'}
          aria-describedby={errors.resume ? 'resume-error' : undefined}
        />

        {/* Custom styled container */}
        <div
          className={`flex items-center w-full border rounded-lg overflow-hidden transition-all duration-200 ${
            errors.resume
              ? 'border-red-500 focus-within:ring-2 focus-within:ring-red-500'
              : 'border-zinc-300 focus-within:ring-2 focus-within:ring-yellow-400'
          }`}
        >
          {/* File name display */}
          <span className='flex-1 px-4 py-2 text-sm text-zinc-600 truncate bg-zinc-50'>
            {fileName || 'No file chosen'}
          </span>

          {/* Custom Choose File button */}
          <label
            htmlFor='resume'
            className='px-4 py-2 bg-yellow-400 text-zinc-800 font-medium text-sm hover:bg-yellow-500 cursor-pointer transition-colors duration-200 whitespace-nowrap'
          >
            Choose File
          </label>
        </div>
      </div>

      {/* Error message */}
      {errors.resume && (
        <p id='resume-error' className='text-red-500 text-xs mt-1'>
          {errors.resume}
        </p>
      )}
    </div>
  );
};

export default FileUploadInput;
