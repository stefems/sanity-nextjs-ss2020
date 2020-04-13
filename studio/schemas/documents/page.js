import { AiFillFile } from 'react-icons/ai';
import homeSlogan from '../objects/homeSlogan';

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: AiFillFile,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'heroText'},
        { type: 'homeSlogan'},
        { type: 'homeModule' },
        { type: 'workModule'}
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
