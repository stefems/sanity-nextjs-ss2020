const withCSS = require('@zeit/next-css')
const client = require('./client')

const isProduction = process.env.NODE_ENV === 'production'
const query = `
{
  "routes": *[_type == "route"] {
    ...,
    disallowRobot,
    includeInSitemap,
    page->{
      _id,
      title,
      _createdAt,
      _updatedAt
  }}
}
`
const project_query = `
{
  "projects": *[_type == "project"] {
    title,
    image,
    slug
  }
}
`
const reduceProjects = (obj, project) => {
  const {slug = {}} = project
  const path = `/project/${slug}`;
  obj[path] = {
    query: { slug: slug.current },
    page: `/project/[slug]`,
    includeInSitemap: true,
  }
  return obj
}
const reduceRoutes = (obj, route) => {
  const {page = {}, slug = {}} = route
  const {_createdAt, _updatedAt} = page
  const {includeInSitemap, disallowRobot} = route
  const path = route['slug']['current'] === '/' ? '/' : `/${route['slug']['current']}`
  obj[path] = {
    query: {
      slug: slug.current
    },
    includeInSitemap,
    disallowRobot,
    _createdAt,
    _updatedAt,
    page: '/LandingPage'
  }
  return obj
}

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]'
  },
  exportPathMap: function () {
    return Promise.all([client.fetch(project_query), client.fetch(query)]).then(res => {
      const { projects = []} = res[0];
      const {routes = []} = res[1]
      const nextRoutes = {
        // Routes imported from sanity
        ...routes.filter(({slug}) => slug.current).reduce(reduceRoutes, {}),
        ...projects.reduce(reduceProjects, {})
      }
      return nextRoutes
    })
  }
})
