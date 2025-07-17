import project1 from '../assets/project-1.webp'
import project2 from '../assets/project-2.webp'

export const projects = [
    {
        title: "Blog App",
        image: project1,
        description: "Built a full-stack blogging platform enabling users to create and publishing blog posts.",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
        title: "Todo App",
        image: project2,
        description: "A responsive React-based Todo App with task creation, completion, and local storage support.",
        technologies: ["React.js", "Tailwind CSS"]
    },
    {
        title: "Quiz App",
        image: "https://img.freepik.com/premium-photo/close-up-colorful-object-black-surface-generative-ai_955925-45713.jpg",
        description: "Developed an interactive quiz application using React, allowing users to answer questions with instant score feedback.",
        technologies: ["React.js","JavaScript", "CSS"]
    }
]

export const contact = {
    address: "Kottayam, Kerala",
    phoneNo: "+91 9061368912",
    email: "smerasabu@gmail.com"
}