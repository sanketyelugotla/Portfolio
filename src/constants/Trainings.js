import {
  mernTraining,
  dsaTraining,
} from "../assets";

const trainings = [
  {
    name: "MERN Stack Training & Certification",
    description:
      "Gained expertise in MongoDB, Express.js, React, and Node.js for full-stack development. Built dynamic web apps with RESTful APIs and seamless front-end/back-end integration. Hands-on experience in database management, server-side logic, and client-side rendering.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
    ],
    image: mernTraining,
    live_link: "https://lpucart.vercel.app/",
    source_code_link: "https://github.com/sanketyelugotla/lpucart",
  },
  {
    name: "Data Structures and Algorithms | Hitbullseye",
    description:
      "Strengthened problem-solving skills with arrays, linked lists, stacks, queues, trees, and graphs. Mastered sorting, searching, dynamic programming, and recursion. Practiced analyzing and optimizing code for time and space complexity.",
    tags: [
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "algorithms",
        color: "blue-text-gradient",
      },
      {
        name: "DSA",
        color: "pink-text-gradient",
      },
      {
        name: "optimization",
        color: "orange-text-gradient",
      },
    ],
    image: dsaTraining,
    source_code_link: "https://github.com/sanketyelugotla/Sudoku-Solver-Simulation",
  },
];

export { trainings };
