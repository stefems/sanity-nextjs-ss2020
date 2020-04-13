import { MdBusiness } from 'react-icons/md';

export default {
  name: 'office',
  type: 'document',
  title: 'Office',
  icon: MdBusiness,
  fields: [
    {
        name: 'name',
        type: 'string',
        title: 'name',
    },
    {
        name: 'address',
        type: 'string',
        title: 'address',
    },
    {
        name: 'image',
        type: 'image',
        title: 'Image'
    },
    {
        name: 'altImage',
        type: 'image',
        title: 'Alt Image'
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
