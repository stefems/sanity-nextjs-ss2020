export default {
    type: 'object',
    name: 'heroText',
    title: 'Large Text Content',
    fields: [
        {
            title: 'text',
            name: 'text',
            type: 'string',
        },
    ],
    preview: {
      select: {
        title: 'text',
      },
      prepare({ title }) {
        return {
          title,
        };
      },
    },
  };