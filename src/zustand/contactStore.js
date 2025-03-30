import axios from 'axios'; // Make sure axios is imported
import { create } from 'zustand';

const useContactStore = create((set) => ({
  contact: {
    name: '',
    email: '',
    mobile: '',
    resume: null,
    coverLetter: '',
    source: '',
    context: '',
  },
  setContact: (contact) => set({ contact }),

  createContact: async (contact) => {
    try {
      const formData = new FormData();
      formData.append('name', contact.name);
      formData.append('email', contact.email);
      formData.append('mobile', contact.mobile);
      formData.append('resume', contact.resume); // Assuming resume is a File object
      formData.append('coverLetter', contact.coverLetter);
      formData.append('source', contact.source); // Assuming source is a string
      formData.append('context', contact.context); // Assuming context is a string

      const response = await axios.post(
        'https://dataskillshubrestartedserver.onrender.com/api/v1/contacts',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      set({
        contact: {
          name: '',
          email: '',
          mobile: '',
          resume: null,
          coverLetter: '',
          source: '',
          context: '',
        },
      });

      return await response.data; // Assuming response.data contains the data you're expecting
    } catch (error) {
      console.error('Error creating contact:', error);
      // Optionally handle the error state, e.g., show a notification
    }
  },
}));

export default useContactStore;
