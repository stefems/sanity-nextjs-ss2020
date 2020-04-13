import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../../components/Layout'
import styles from './[slug].module.css'
import SuggestedModule from '../../components/sections/SuggestedModule';
import ProducerModule from '../../components/sections/ProducerModule';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Project = (props) => {
  const {
    title, image, subtitle, tags, _id, producers
  } = props
  return (
    <Layout config={props.config}>
      <div className={styles.container}>
        <img className={styles.image} src={urlFor(image)} />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className={styles.content}>
          {producers.map( (person) => (
            <ProducerModule key={person._id} person={person} />
          ))}
          <SuggestedModule tags={tags} projectId={_id}/>
        </div>
      </div>
      
    </Layout>
  )
}
  
Project.getInitialProps = async function(context) {
  const slug = context.asPath.split("/project/")[1];
  return await client.fetch(`
    *[_type == "project" && slug.current == $slug][0]{
        ...,  
        tags[]->,
        producers[]-> {
          ...,
          office->
        },
    }
  `,  { slug })
}

export default Project