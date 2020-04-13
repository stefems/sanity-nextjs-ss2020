import { MdCardTravel } from 'react-icons/md';

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  icon: MdCardTravel,
  fields: [
    {
        name: 'title',
        type: 'string',
        title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'blurb',
      type: 'string',
      title: 'blurb',
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
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}]
        }
      ],
    },
    {
      title: 'Senior Producers',
      name: 'producers',
      type: 'array',
      weak: true,
      of: [
        {
          type: 'reference',
          to: [{type: 'person'}],
        }
      ]
  },
  ],
  preview: {
    select: {
      title: 'title',
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
