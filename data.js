/**
 * Static Data for Career Mappings and Learning Roadmaps
 * This isolates the configuration from the application logic.
 */

const CAREER_DATA = {
  "Data Scientist": {
    requirements: {
      "python": 9,
      "mathematics": 8,
      "sql": 7,
      "communication": 6
    },
    description: "Analyze and interpret complex data to help companies make actionable decisions.",
    roadmap: [
      { step: "Mathematics Foundation", desc: "Learn Linear Algebra & Statistics", link: "https://www.khanacademy.org/math/linear-algebra" },
      { step: "Python for Data", desc: "Master Pandas, NumPy, and Scikit-Learn", link: "https://www.coursera.org/" },
      { step: "Database Management", desc: "Learn SQL and relational database design", link: "https://www.w3schools.com/sql/" },
      { step: "Machine Learning", desc: "Build predictive models and classify data", link: "https://www.kaggle.com/learn" }
    ]
  },
  "Frontend Developer": {
    requirements: {
      "html_css": 9,
      "javascript": 8,
      "design_sense": 7,
      "communication": 6
    },
    description: "Create engaging, responsive, and interactive user interfaces for modern web applications.",
    roadmap: [
      { step: "Web Fundamentals", desc: "Master HTML5 semantics and Advanced CSS", link: "https://developer.mozilla.org/en-US/docs/Learn" },
      { step: "JavaScript Deep Dive", desc: "Understand DOM manipulation, ES6+, and Async JS", link: "https://javascript.info/" },
      { step: "Frontend Framework", desc: "Learn React, Vue, or Angular", link: "https://react.dev/" },
      { step: "UI/UX Basics", desc: "Understand responsive design and accessibility", link: "https://web.dev/learn/design/" }
    ]
  },

  "Backend Developer": {
    requirements: {
      "python": 6,
      "sql": 8,
      "javascript": 6,
      "system_design": 8
    },
    description: "Design robust server-side logic, secure RESTful APIs, and database architectures.",
    roadmap: [
      { step: "Server Languages", desc: "Learn Node.js, Python/Django, or Java", link: "https://nodejs.org/en/learn" },
      { step: "APIs", desc: "Build secure RESTful services and GraphQL schemas", link: "https://restfulapi.net/" },
      { step: "Databases", desc: "Master SQL and NoSQL (MongoDB, Postgres)", link: "https://www.mongodb.com/" },
      { step: "Deployment", desc: "Learn Docker and basic Cloud architecture integrations", link: "https://docs.docker.com/get-started/" }
    ]
  },

  "Product Manager": {
    requirements: {
      "communication": 9,
      "design_sense": 7,
      "system_design": 5,
      "mathematics": 5
    },
    description: "Lead product strategies, interpret user needs, and guide engineering teams to success.",
    roadmap: [
      { step: "Product Strategy", desc: "Learn to execute market research and define roadmaps", link: "#" },
      { step: "Agile Methodologies", desc: "Understand Scrum and sprint planning tools", link: "#" },
      { step: "Data Analytics", desc: "Use metrics and A/B testing to drive decisions", link: "#" },
      { step: "Leadership", desc: "Develop soft skills to communicate with stakeholders", link: "#" }
    ]
  }
};

const ALL_SKILLS = [
  { id: "python", name: "Python / Scripting" },
  { id: "html_css", name: "HTML & CSS" },
  { id: "javascript", name: "JavaScript" },
  { id: "mathematics", name: "Mathematics & Statistics" },
  { id: "sql", name: "SQL & Databases" },
  { id: "system_design", name: "System Architecture" },
  { id: "design_sense", name: "UI/UX Design Sense" },
  { id: "communication", name: "Communication & Leadership" }
];
