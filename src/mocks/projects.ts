// import Adure from '@/assets/images/projects/adure.svg'
// import Express from '@/assets/images/projects/express.svg'
// import Flow from '@/assets/images/projects/flow.svg'
// import Hackathon from '@/assets/images/projects/hackathon.svg'
// import MongoDB from '@/assets/images/projects/mongo.svg'
// import React from '@/assets/images/projects/react.svg'
// import Sass from '@/assets/images/projects/sass.svg'
// import Spring from '@/assets/images/projects/spring.svg'
// import Tarbus from '@/assets/images/projects/tarbus.svg'
// import TypeScript from '@/assets/images/projects/typescript.svg'
// import Vue from '@/assets/images/projects/vue.svg'

import type { Project } from '@types'

export const projects: Project[] = [
  {
    id: 1,
    name: 'tarBUS Admin Panel',
    // logo: Tarbus,
    accentColor: '#34C7F7',
    demo: 'https://www.youtube-nocookie.com/embed/PPqOrbufu6E',
    link: '',
    repository: '',
    details: {
      caption: 'This app allows managing routes, departures and more for mobile app with 2000 users.',
      description:
                'A sleek yet featured-packed panel that allows administrators to manage bus routes, departures and bus lines. They can also create new connections, add timetables and introduce new bus stops.',
      problem:
                'Staying updated with the schedule of the bus is a challenge. There was a need for a solution that allowed users to stay informed of the next bus arriving at their nearest bus stop to avoid getting late for work or school.',
      timeline: 'June - Aug 2021',
      industry: 'Public transport',
      goals:
                'Looking forward to expanding our services in other cities alongside launching new features to allow bus administrators to import the data in a single location.',
      role1:
                'Responsibilities involved creating layouts and efficient dynamic components. I also worked with data from database, and additional libraries.',
      role2:
                'I collaborated with a friend and together we created collaborative environment to stay on the same page and be posted about the project’s progress.',
      summary:
                'The Minimal Viable Product (MVP) was successfully launched and we are all set to focus on the final product by introducing new features desired by the client. Working on this project helped me improve my skills in vue and become better at layout designing. The collaboration made me realized the importance of clear and coherent communication.',
    },
  },
  {
    id: 2,
    name: 'Adure Travel Website',
    // logo: Adure,
    accentColor: '#1CECA7',
    demo: 'https://www.youtube-nocookie.com/embed/WW5SLnCr7ts',
    link: 'https://keen-galileo-7becfc.netlify.app/',
    repository: 'https://github.com/jakubserwin/adure',
    details: {
      caption: 'Visit the most beautiful places in the world.',
      description:
                'Minimalist and simple application that shows and allows users to travel into the most beautiful places in the world.',
      problem: '-',
      timeline: '01-14 Aug 2021',
      industry: 'Travel',
      goals:
                'Goals of this project were to put in practice my Vue and UI Design skills, work with new libraries and challenge myself with handling application state.',
      role1:
                'Planning and wireframing website’s layout and core functionality. Designing components and layouts. Developing and testing.',
      role2:
                "Choosing appropriate libraries and implementing their functionalities e.g. 'PrimeVUE' for pictures slider and 'mdue' for material icons. ",
      summary:
                "The project went pretty smoothly. Components are rendered dynamically based on locations data and the application state is manage by Vuex. In the future I may improve the transitions between different elements and store data outside client's side.",
    },
  },
  {
    id: 3,
    name: 'Hackathon Featured Project',
    // logo: Hackathon,
    accentColor: '#EE0889',
    demo: 'https://www.youtube-nocookie.com/embed/2fW17aXyzCw',
    link: 'https://devpost.com/software/sleipnjs-ankieta-wyborcza',
    repository: 'https://github.com/SleipnJs/frontend-ankieta-obywatelska',
    details: {
      caption: "Citizen's survey to connect all trendy topics with the objective opinion of users.",
      description:
                'The Citizen Survey is a generator and at the same time a collection of questionnaires and petitions dealing with various social topics.',
      problem:
                'The theme of this year\'s Hacknarök was "True Reality". Our team had to came up with an project idea which would match that topic.',
      timeline: '28-29 Mar 2021',
      industry: 'Public sector',
      goals:
                'Create a place where users can express their opinion and compare it with the answers of others.',
      role1:
                "Designing and working on the frontend side of the project. Since the time limit was only 24 hours I had to immediately code mockups and solutions I've created.",
      role2:
                'Creating dynamic components with data received from backend side. Generating, modifying JSON objects and sending it to server.',
      summary:
                'Participating in hackathon was really fun and completely new experience for me. I had an opportunity to check if I am able to work on project for 24 hours straight. After submitting the project the jurors awarded prizes to 3 the best teams from 27 participating and I am happy to say that we were one of them.',
    },
  },
  {
    id: 4,
    name: 'Flow',
    accentColor: '#4F8A73',
    demo: 'https://www.youtube-nocookie.com/embed/6v-ICpb9rrc',
    link: 'https://resilient-salamander-db7dc3.netlify.app/',
    repository: 'https://github.com/jakubserwin/flow',
    details: {
      caption: 'Manage team projects or create a personal system to manage daily tasks and problems.',
      description: 'Manage team projects or create a personal system to manage daily tasks and problems. Create boards, cards and customize them with additional information such as description, labels or time limits.',
      problem: 'Managing both large-scale commercial projects and small private resources is a challenge not only at the level of creating an effective system of processes and decisions, but also requires appropriate tools and technologies.',
      timeline: 'Oct - Dec 2022',
      industry: 'Project Management',
      goals: 'Flow helps users to achieve various goals and manage work. The software is designed for individual units and teams, regardless of their size.',
      role1: 'Market research and designing layouts in Figma. Setting up the project from scratch using the latest technologies and tools that help keep the code clean. Creating both frontend and backend architecture. Testing software by unit tests and end-to-end tests.',
      role2: 'Creating REST API using Express.js and MongoDB. Securing resources by user authentication with JWT Token. Deploying both client and server on Netlify using lambda functions.',
      summary: 'It was my first full stack project. I am really satisfied with the result and the architecture I\'ve made, which separates business logic nicely using Pinia. I\'ve learned a lot: setting up Vite, Cypress, TypeScript on both ends, Husky with ESLint + Stylelint, making connection with MongoDB, creating queries and lots of more.',
    },
  },
];

export interface TODO {}
