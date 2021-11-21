export const projects = [
  {
    name: 'Portfolio Personal',
    description:
      'The main purpose of this project is to show a collection of evidence, which not only summarizes my work, but also explains my individual learning processes.',
    technologies: ['TypeScript', 'NextJS', 'SCSS'],
    imageRef: '/images/portfolio.jpg',
    imageUrl: 'https://github.com/Aireck2/portfolio-ts',
    links: [
      { type: 'github' as const, url: 'https://github.com/Aireck2/portfolio-ts' },
      { type: 'externalLink' as const, url: 'https://erickescriba.vercel.app/' },
    ],
  },
  {
    name: 'React Intl',
    description:
      'Single Page App which show how React can be used with react-intl for translations management with Poedit',
    technologies: ['React', 'Webpack', 'i18n', 'poedit'],
    imageRef: '/images/reactIntl.png',
    imageUrl: 'https://github.com/Aireck2/react-ts-intl',
    links: [
      { type: 'github' as const, url: 'https://github.com/Aireck2/react-ts-intl' },
      // { type: 'externalLink' as const, url: 'https://codepen.io/Aireck' },
    ],
  },
  {
    name: 'Dely Landing',
    description:
      'A landing page for Dely company that was developed collaboratively with my colleague in a temporary job',
    technologies: ['TypeScript', 'React', 'Webpack', 'SCSS'],
    imageRef: '/images/dely.png',
    imageUrl: 'https://dely.pe/',
    links: [
      // { type: 'github' as const, url: 'https://github.com/Aireck2/dely-landing-page' },
      { type: 'externalLink' as const, url: 'https://dely.pe/' },
    ],
  },
]
