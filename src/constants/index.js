import {
  node,
  expo,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cc,
  ds,
  java,
  cpp,
  python,
  skyHeights,
  digiBallot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development",
    company_name: "Starbucks",
    icon: reactjs,
    iconBg: "#383E56",
    date: "December 2024 - present",
    points: [
      "Specialized in building interactive and scalable front-end applications using React.js, leveraging component-based architecture and hooks.",
      " Created responsive UIs with frameworks like Tailwind CSS and handled state management using tools like Context API and Redux",
      "Efficiently managed global and local states in complex React applications using Context API, useReducer, and useState, ensuring clean data flow and maintainable code architecture",
      "Integrated APIs and dynamic data rendering in React apps to deliver seamless user experiences with high performance.",
    ],
  },
  {
    title: "React Native Development",
    company_name: "Tesla",
    icon: expo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Proficient in building high-performance mobile applications for both Android and iOS using a single React Native codebase.",
      "Skilled at creating sleek and responsive interfaces using React Native components and libraries like React Navigation and Reanimated.",
      "Experienced in managing complex app state efficiently with Context API and external libraries like Redux or Zustand.",
      "Capable of integrating native modules and third-party plugins for extended functionalities such as camera, push notifications, maps, and sensors.",
    ],
  },
  {
    title: "Backend Development",
    company_name: "Shopify",
    icon: nodejs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Skilled in building scalable and efficient RESTful APIs using Express.js, with proper routing, error handling, and middleware integration.",
      "Experienced in designing flexible NoSQL schemas with Mongoose, performing complex queries, and optimizing database interactions.",
      "Implemented secure user authentication and role-based access control using JWT, bcrypt, and middleware logic in Node.js.",
      "Leveraged Supabase as a powerful backend-as-a-service for real-time data syncing, authentication, and hosted Postgres solutions.",
    ],
  },
  {
    title: "Competitive Coding",
    company_name: "Meta",
    icon: cc,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Proficient in core data structures like arrays, trees, graphs, heaps, and algorithms like DP, recursion, and backtracking.",
      "Experienced in writing efficient and clean code under time constraints, focusing on reducing time and space complexity.",
      "Solved 250+ problems on platforms like LeetCode and Codeforces using both Java and C++, showcasing flexibility and speed.",
      "Quick at analyzing problems, breaking them down into sub-tasks, and debugging edge cases in high-pressure environments.",
    ],
  },
  {
    title: "Data Science",
    company_name: "Meta",
    icon: ds,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Skilled in training and validating machine learning models, including regression, classification, and clustering algorithms to derive actionable insights.",
      "Hands-on experience building and optimizing neural network architectures for predictive modeling and pattern recognition.",
      "Proficient in implementing decision trees, random forests, and boosting techniques for high-accuracy results in structured data problems.",
      "Applied association rule mining techniques like Apriori and FP-Growth to uncover purchasing patterns and drive business strategies.",
    ],
  },
  {
    title: "Devops Virtualisation & Version Control",
    company_name: "Meta",
    icon: docker,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Proficient in creating and managing Docker containers to ensure consistent development and deployment environments.",
      "Experienced in using Git and GitHub for collaborative development, code versioning, and streamlined project workflows. ",
      "Implemented automated build and deployment pipelines using Jenkins and Maven to accelerate development cycles and maintain code quality.",
      "Familiar with deploying and managing containerized applications at scale using Kubernetes for robust and scalable infrastructure.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Digi Ballot",
    description:
      "Built a secure, role-based online voting system with ReactJS and optimized APIs, enabling face recognition login, real-time voting, and result tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: digiBallot,
    live_link: "https://digi-ballot.vercel.app/",
    source_code_link: "https://github.com/sanketyelugotla/DigiBallotModern",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    live_link: "https://digi-ballot.vercel.app/",
    source_code_link: "https://github.com/",
  },
  {
    name: "Sky Heights",
    description:
      "Designed a responsive property search platform with advanced filters, enhancing user experience and reducing search time by 60%.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: skyHeights,
    source_code_link: "https://sanketyelugotla.github.io/skyheights/",
    live_link: "https://github.com/sanketyelugotla/skyheights",
  },
];

export { services, technologies, experiences, testimonials, projects };
