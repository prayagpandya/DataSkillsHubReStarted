import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import FileUploadInput from '../atoms/ButtonsAndLinks/FileInput';
import MobileInput from '../atoms/ButtonsAndLinks/MobileInput'; // Adjust the import path as needed
import { errorToast, successToast } from '../molicules/ToastMessages';
import useContactStore from '../zustand/contactStore';

const Modal = ({
  isOpen,
  onClose,
  source,
  context,
  isJobPage = false,
  brochureUrl,
}) => {
  const { createContact } = useContactStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    resume: null,
    coverLetter: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\+\d{1,4}\d{6,}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must include country code and be valid';
    }
    if (isJobPage) {
      if (!formData.resume) newErrors.resume = 'Resume is required';
      if (!formData.coverLetter.trim())
        newErrors.coverLetter = 'Cover letter is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', { source, context, ...formData });

      // Download the brochure after successful form submission
      if (source.startsWith('Downloading Brochure')) {
        const link = document.createElement('a');
        link.href = brochureUrl;
        link.download = `${context}_Brochure.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      onClose();
      await createContact(formData);
      successToast('Form submitted successfully');
    } catch (error) {
      console.error('Form submission failed:', error);
      errorToast('Form submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className='fixed inset-0 bg-zinc-800/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300'
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } ${
          source === 'Applying for Job'
            ? 'p-6 max-h-[80vh] overflow-y-auto'
            : 'p-8 max-h-[90vh] overflow-y-auto'
        }`}
      >
        <button
          onClick={handleClose}
          className='absolute top-4 right-4 text-zinc-600 hover:text-zinc-800 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-full p-1'
          aria-label='Close modal'
        >
          ✕
        </button>
        <h2 id='modal-title' className='text-2xl font-bold text-zinc-800 mb-2'>
          {source.includes('Booking') &&
            `Book a Demo${context ? ` - ${context}` : ''}`}
          {source.includes('Brochure') &&
            `Requesting Brochure${context ? ` - ${context}` : ''}`}
          {source.includes('Inquiry') &&
            `Inquiry${context ? ` - ${context}` : ''}`}
          {source === 'Contact Us' && 'Contact Us'}
          {source === 'Applying for Job' &&
            `Apply for Job${context ? ` - ${context}` : ''}`}
        </h2>
        <p
          className={`text-sm text-zinc-600 ${
            source === 'Applying for Job' ? 'mb-4' : 'mb-6'
          }`}
        >
          {source.includes('Booking') &&
            `You're scheduling a demo${
              context ? ` for ${context}` : ''
            }. Please fill out the form below to proceed.`}
          {source.includes('Brochure') &&
            `You're requesting a brochure${
              context ? ` for ${context}` : ''
            }. Please provide your details to receive it.`}
          {source.includes('Inquiry') &&
            `You're inquiring about ${context}. Let us know how we can assist you.`}
          {source === 'Contact Us' &&
            'Reach out to us with your questions or concerns. We’re here to help!'}
          {source === 'Applying for Job' &&
            `You're applying for ${context}. Please submit your details and documents below.`}
        </p>
        <form
          onSubmit={handleSubmit}
          className={`space-y-${source === 'Applying for Job' ? '3' : '5'}`}
        >
          <div>
            <label
              className='block text-sm font-medium text-zinc-700 mb-1'
              htmlFor='name'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-zinc-300 focus:ring-yellow-400'
              }`}
              placeholder='Enter your name'
              required
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id='name-error' className='text-red-500 text-xs mt-1'>
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              className='block text-sm font-medium text-zinc-700 mb-1'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-zinc-300 focus:ring-yellow-400'
              }`}
              placeholder='Enter your email'
              required
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id='email-error' className='text-red-500 text-xs mt-1'>
                {errors.email}
              </p>
            )}
          </div>

          {/* Replace mobile input with MobileInput component */}
          <MobileInput
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />

          {isJobPage === false && (
            <div>
              <label
                className='block text-sm font-medium text-zinc-700 mb-1'
                htmlFor='message'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.message
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-zinc-300 focus:ring-yellow-400'
                }`}
                placeholder='Enter your message'
                rows={source === 'Applying for Job' ? '3' : '4'}
              />
              {errors.message && (
                <p id='message-error' className='text-red-500 text-xs mt-1'>
                  {errors.message}
                </p>
              )}
            </div>
          )}

          {isJobPage && (
            <>
              <FileUploadInput errors={errors} handleChange={handleChange} />
              <div>
                <label
                  className='block text-sm font-medium text-zinc-700 mb-1'
                  htmlFor='coverLetter'
                >
                  Cover Letter
                </label>
                <textarea
                  id='coverLetter'
                  name='coverLetter'
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.coverLetter
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-zinc-300 focus:ring-yellow-400'
                  }`}
                  placeholder='Enter your cover letter'
                  rows={source === 'Applying for Job' ? '3' : '4'}
                  required
                  aria-invalid={errors.coverLetter ? 'true' : 'false'}
                  aria-describedby={
                    errors.coverLetter ? 'coverLetter-error' : undefined
                  }
                />
                {errors.coverLetter && (
                  <p
                    id='coverLetter-error'
                    className='text-red-500 text-xs mt-1'
                  >
                    {errors.coverLetter}
                  </p>
                )}
              </div>
            </>
          )}

          <button
            type='submit'
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold text-zinc-800 transition-all duration-300 shadow-md ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
