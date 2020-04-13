import { FaRegAddressBook } from 'react-icons/fa';

export default {
  name: 'job',
  type: 'document',
  title: 'Job',
  icon: FaRegAddressBook,
  fields: [
    {
        name: 'title',
        type: 'string',
        title: 'Job Title',
    },
    {
        name: 'date',
        type: 'date',
        title: 'Date Posted',
    },
    {
        name: 'office',
        type: 'reference',
        title: 'Office',
        to: [{type: 'office'}]
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title,
      };
    },
  },
};
