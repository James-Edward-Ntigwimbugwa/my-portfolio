import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: '</>',
    skills: [
      { name: 'React', percentage: 90 },
      { name: 'JavaScript/TypeScript', percentage: 85 },
      { name: 'HTML/CSS', percentage: 95 },
      { name: 'Tailwind CSS', percentage: 90 },
      { name: 'Next.js', percentage: 80 },
    ],
  },
  {
    title: 'Backend Development',
    icon: '=',
    skills: [
      { name: 'Node.js', percentage: 85 },
      { name: 'Express', percentage: 80 },
      { name: 'Python', percentage: 75 },
      { name: 'MongoDB', percentage: 80 },
      { name: 'SQL', percentage: 70 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '⚒',
    skills: [
      { name: 'Git/GitHub', percentage: 90 },
      { name: 'Docker', percentage: 75 },
      { name: 'AWS', percentage: 70 },
      { name: 'CI/CD', percentage: 80 },
      { name: 'Figma', percentage: 65 },
    ],
  },
];