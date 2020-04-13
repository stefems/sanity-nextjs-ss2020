export default {
    type: 'object',
    name: 'newsPreview',
    title: 'News Preview',
    fields: [
        {
            title: 'Article',
            name: 'article',
            type: 'reference',
            weak: true,
            to: [{type: 'news'}],
        },
    ],
    preview: {
      select: {
        title: 'article.title',
        media: 'article.image',
      },
      prepare({ title, media }) {
        return {
          title,
          subtitle: 'News Preview',
          media,
        };
      },
    },
  };