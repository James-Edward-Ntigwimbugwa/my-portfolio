import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment processing, inventory management, and admin dashboard.',
    image: '/projects/ecommerce.jpg',
    categories: ['Full Stack'],
    technologies: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
      { name: 'Stripe' },
    ],
    demoUrl: '#',
    codeUrl: '#',
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