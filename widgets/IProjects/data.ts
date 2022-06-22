export const projects = [
  {
    name: 'Personal Portfolio',
    description: '1ProjectDescription',
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
    description: '2ProjectDescription',
    technologies: ['React', 'Webpack', 'i18n', 'poedit'],
    imageRef: '/images/reactIntl.png',
    imageUrl: 'https://github.com/Aireck2/react-ts-intl',
    links: [{ type: 'github' as const, url: 'https://github.com/Aireck2/react-ts-intl' }],
  },
  {
    name: 'Dely Landing',
    description: '3ProjectDescription',
    technologies: ['TypeScript', 'React', 'Webpack', 'SCSS'],
    imageRef: '/images/dely.png',
    imageUrl: 'https://dely.pe/',
    links: [{ type: 'externalLink' as const, url: 'https://dely.pe/' }],
  },
]
