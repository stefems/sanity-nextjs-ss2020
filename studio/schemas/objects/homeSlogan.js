export default {
    type: 'object',
    name: 'homeSlogan',
    title: 'Home Page Slogan Area',
    fields: [
        {
            title: 'Text Chunks',
            name: 'textChunks',
            type: 'array',
            weak: true,
            of: [
                {
                    type: 'reference',
                    to: [{type: 'info'}],
                }
            ]
        },
    ],
    preview: {
      select: {
        title: 'Home Slogans',
      },
      prepare({ title }) {
        return {
          title: 'Home Slogans'
        };
      },
    },
  };