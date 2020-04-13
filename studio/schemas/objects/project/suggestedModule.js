export default {
    type: 'object',
    name: 'suggestedModule',
    title: 'Project Suggestions',
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
          subtitle: 'Project Suggestions',
          media,
        };
      },
    },
  };