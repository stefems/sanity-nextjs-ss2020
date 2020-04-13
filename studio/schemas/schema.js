// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import route from './documents/route';
import project from './documents/project';
import siteConfig from './documents/siteConfig';
import tag from './documents/tag';
import office from './documents/office';
import news from './documents/news';
import person from './documents/person';
import job from './documents/job';
import info from './documents/info';

// Object types
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';
import homeSlogan from './objects/homeSlogan';
import heroText from './objects/heroText';

// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import mailchimp from './objects/mailchimp';
import textSection from './objects/textSection';
import homeModule from './objects/project/homeModule';
import workModule from './objects/project/workModule';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    hero,
    heroText,
    homeModule,
    homeSlogan,
    imageSection,
    info,
    internalLink,
    job,
    link,
    mailchimp,
    news,
    office,
    page,
    person,
    portableText,
    project,
    route,
    simplePortableText,
    siteConfig,
    tag,
    textSection,
    workModule
  ]),
});
