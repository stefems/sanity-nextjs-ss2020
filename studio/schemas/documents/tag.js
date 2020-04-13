import { MdStyle } from 'react-icons/md';

export default {
    name: 'tag',
    type: 'document',
    title: 'Tag',
    icon: MdStyle,
    fields: [
      {
          name: 'name',
          type: 'string',
          title: 'name',
      },
      {
        name: 'metadata',
        type: 'string',
        title: 'Metadata',
    },
    ],
    preview: {
        select: {
          title: 'name',
        },
        prepare({ title }) {
          return {
            title: title,
          };
        },
      },
    };