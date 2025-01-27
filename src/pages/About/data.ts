export const EXPERIENCE = [
  {
    id: 1,
    title: 'mid_level_title',
    subtitle: ['01/01/2024', 'now'],
    details: [
      'mid_level_desc_1',
      'mid_level_desc_2',
      'mid_level_desc_3',
      'mid_level_desc_4',
    ],
  },
  {
    id: 2,
    title: 'junior_title',
    subtitle: ['04/01/2023', '12/31/2023'],
    details: [
      'junior_desc_1',
      'junior_desc_2',
      'junior_desc_3',
      'junior_desc_4',
    ],
  },
  {
    id: 3,
    title: 'trainee_title',
    subtitle: ['11/01/2022', '03/31/2023'],
    details: [
      'trainee_desc_1',
      'trainee_desc_2',
      'trainee_desc_3',
      'trainee_desc_4',
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
