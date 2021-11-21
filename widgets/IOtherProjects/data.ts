export const otherProjects = [
  {
    name: 'Form List',
    description:
      'An example of Form List using Formik, for form management, and AntD, for UI components',
    technologies: ['React', 'TypeScript', 'Formik', 'AntDesign'],
    imageRef: '/images/portfolio-bg.png',
    links: [
      { type: 'github' as const, url: 'https://github.com/Aireck2/formik-list-antd' },
      // { type: 'externalLink' as const, url: 'https://erickescriba.vercel.app/' },
    ],
  },
  {
    name: 'SpaceX Launch Statistics ',
    description:
      'A Graphql API using Apollo, Express, NodeJS and SpaceX API to fetch Launch Statistics',
    technologies: ['React', 'NodeJS', 'ExpressJS', 'Graphql', 'Apollo'],
    links: [
      { type: 'github' as const, url: 'https://github.com/Aireck2/graphql-apollo/' },
      // { type: 'externalLink' as const, url: 'https://codepen.io/Aireck' },
    ],
  },
  {
    name: 'Slides: Introduction to Apollo Client',
    description:
      'Build presentation slides, an introduction to Apollo Client, using Gastby and gatsby-plugin-mdx, which let me write JSX embedded inside Markdown.',
    technologies: ['Gastby', 'Markdown', 'JSX', 'CSS'],
    links: [
      { type: 'github' as const, url: 'https://github.com/Aireck2/mdx-gastby' },
      { type: 'externalLink' as const, url: 'https://apollo-slides.netlify.app/#0' },
    ],
  },
]
