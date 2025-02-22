export const EXPERIENCE = [
  {
    id: 1,
    title: 'evt_title',
    subtitle: ['11/01/2022', 'now'],
    details: [
      'evt_desc_1',
      'evt_desc_2',
      'evt_desc_3',
      'evt_desc_4',
      'evt_desc_5',
      'evt_desc_6',
    ],
  },
];

export const BADGES = {
  core: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  webDevelopment: ['React.js', 'React Router DOM', 'Vite'],
  mobileDevelopment: [
    'React Native',
    'React Navigation',
    'React Native Reanimated',
    'AsyncStorage',
    'React Native CLI',
    'Expo',
  ],
  common: [
    'Storybook',
    'React Query',
    'Context API',
    'React Testing Library',
    'Jest',
    'Styled-components',
    'Sass',
    'Git',
    'i18next',
  ],
} as const;

export type BadgeCategory = keyof typeof BADGES;
