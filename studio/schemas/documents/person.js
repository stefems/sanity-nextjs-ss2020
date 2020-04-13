import { MdPerson } from 'react-icons/md';

export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  icon: MdPerson,
  fields: [
    {
        name: 'title',
        type: 'string',
        title: 'Job Title',
    },
    {
        name: 'image',
        type: 'image',
        title: 'Image'
    },
    {
        name: 'name',
        type: 'string',
        title: 'Name'
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
      title: 'name',
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title: title,
        media: media
      };
    },
  },
};
