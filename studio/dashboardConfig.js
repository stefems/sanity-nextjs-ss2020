export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e849ae59864ca6f74dd3024',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-ss2020-studio',
                  apiId: '6d449042-274f-40a4-a61d-280606e21abe'
                },
                {
                  buildHookId: '5e849ae59864ca65e1dd309e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-ss2020',
                  apiId: 'af462565-876e-46bd-b0ce-83fe16a2f401'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stefems/sanity-nextjs-ss2020',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-ss2020.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
