import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'eCard',
    title: 'E-Card Platform',
    description: 'A full-featured Mobile App electronic card platform for creating and sharing digital cards.Project built with Spring Boot and Flutter.',
    image: '/projects/ecommerce.jpg',
    categories: ['Full Stack'],
    technologies: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
      { name: 'Stripe' },
    ],
    demoUrl: 'https://alltanzaniaecard.onrender.com/swagger-ui/index.html/',
    codeUrl: 'https://github.com/James-Edward-Ntigwimbugwa/eCard-Mobile-App/tree/master/ecard_app',
  },
  {
    id: 'taskmanager',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team workspaces, and analytics.',
    image: '/projects/taskmanager.jpg',
    categories: ['Frontend', 'Backend'],
    technologies: [
      { name: 'React' },
      { name: 'Firebase' },
      { name: 'Redux' },
      { name: 'Material UI' },
    ],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'finance',
    title: 'Finance Dashboard',
    description: 'Interactive dashboard for tracking investments, expenses, and financial goals with data visualization.',
    image: '/projects/finance.jpg',
    categories: ['Frontend', 'Full Stack'],
    technologies: [
      { name: 'Vue.js' },
      { name: 'D3.js' },
      { name: 'Express' },
      { name: 'PostgreSQL' },
    ],
    demoUrl: '#',
    codeUrl: '#',
  },
];