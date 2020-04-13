import { FaRegNewspaper } from 'react-icons/fa';

export default {
  name: 'news',
  type: 'document',
  title: 'News',
  icon: FaRegNewspaper,
  fields: [
    {
        name: 'title',
        type: 'string',
        title: 'Title',
    },
    {
        name: 'date',
        type: 'date',
        title: 'Date Published',
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
      title: "Author",
      name: "author",
      type: 'reference',
      to: [{type: 'person'}],
    },
    {
      title: "Project",
      name: "project",
      type: 'reference',
      to: [{type: 'project'}],
    }
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
