import { AiTwotoneContainer } from 'react-icons/ai';

export default {
  name: 'info',
  type: 'document',
  title: 'Info',
  icon: AiTwotoneContainer,
  fields: [
    {
        name: 'summary',
        type: 'string',
        title: 'Summary',
    },
    {
        name: 'content',
        type: 'text',
        title: 'Content'
    },
  ],
  preview: {
    select: {
      title: 'summary',
    },
    prepare({ title }) {
      return {
        title: title,
      };
    },
  },
};
