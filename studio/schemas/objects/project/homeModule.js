export default {
    type: 'object',
    name: 'homeModule',
    title: 'Project Preview (Home)',
    fields: [
        {
            title: 'Project',
            name: 'project',
            type: 'reference',
            weak: true,
            to: [{type: 'project'}],
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
          subtitle: 'Project Preview (Home)',
          media,
        };
      },
    },
  };