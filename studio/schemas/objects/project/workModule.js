export default {
    type: 'object',
    name: 'workModule',
    title: 'Project Preview (Work)',
    fields: [
        {
            title: 'Project',
            name: 'project',
            type: 'reference',
            weak: true,
            to: [{type: 'project'}],
        },
        {
            title: 'Use Alt Image',
            name: 'use_alt_image',
            type: 'boolean',
        },
    ],
    preview: {
      select: {
        title: 'project.title',
        media: 'project.image',
      },
      prepare({ title, media }) {
        return {
          title,
          subtitle: 'Project Preview (Work)',
          media,
        };
      },
    },
  };