import { create } from 'zustand';

const useContactStore = create((set) => ({
  contact: {
    name: '',
    email: '',
    mobile: '',
    resume: null,
    coverLetter: '',
  },
  setContact: (contact) => set({ contact }),
  createContact: async (contact) => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(contact),
      });
      set({
        contact: {
          name: '',
          email: '',
          mobile: '',
          resume: null,
          coverLetter: '',
        },
      });
      return await response.json();
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  },
}));

export default useContactStore;
