import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Bharat Rana",
  initials: "BR",
  url: "http://localhost:3000/",
  location: "Gurugram, HR",
  locationLink: "https://www.google.com/maps/place/gurugram",
  description:
    "Passionate Software Engineer | Enthusiastic about coding, problem-solving, and development.",

  summary:
    `Full-Stack Developer with over ${(new Date().getFullYear() - 2022) + (new Date().getMonth() >= 6 ? 0.5 : 0)} years of experience in building scalable systems, automation, and AI-driven solutions. Currently at Cozlo Technologies, working on LinkedIn scraping, AI-based tagging, and high-performance messaging systems. Previously at Sateeq, contributing to fintech solutions. Passionate about coding with 190+ LeetCode and 150+ GeeksforGeeks problems solved.`,
  avatarUrl: "/me.jpg",
  skills: [
    "C++",
    "HTML/CSS",
    "Javascript",
    "React.js",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Material-UI",
    "SCSS",
    "Redux Toolkit",
    "Express.js",
    "Redis",
    "MongoDB",
    "MySQL",
    "Puppeteer",
    "Elasticsearch",
    "AWS S3",
    "AWS Lambda",
    "AWS VPC",
    "AWS EC2",
    "BullMQ",
    "Jest",
    "Git",
    "GitHub",
    "Socket.io",
    "WebRTC",
    "LangChain",
    "OpenAI",
    "VS Code"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "28brana@gmail.com",
    tel: "+91 7814368012",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/28brana",
        icon: Icons.github,
        navbar: true,
      },
      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/28brana/",
        icon: Icons.leetcode,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/28brana",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/28brana",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:28brana@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Superpen",
      href: "https://superpen.io/",
      badges: [],
      location: "Gurugram, IN",
      title: "Software Engineer",
      logoUrl: "/superpen.png",
      start: "Oct 2023",
      end: "Present",
      open: true,
      skills: [
        "Redux", "Tailwind CSS", "React.js", "Node.js", "MongoDB",
        "Elasticsearch", "AWS Lambda", "Open AI", "Puppeteer"
      ],
      description:
        "Developed a LinkedIn scraping solution for profile and post aggregation, efficiently handling over 1 million posts using Puppeteer.\n" +
        "Implemented real-time post scraping using AWS Lambda functions.\n" +
        "Integrated Elasticsearch to enable fast and efficient post searches.\n" +
        "Designed and applied AI models for generating relevant tags for aggregated posts.\n" +
        "Integrated Razorpay subscription plans to enable seamless automated billing for users."
    },
    {
      company: "NoApp",
      href: "https://noapp.io/",
      badges: [],
      location: "Gurugram, IN",
      title: "Software Engineer",
      logoUrl: "/noapp.jpg",
      start: "Oct 2023",
      end: "Present",
      open: true,
      skills: [
        "Node.js", "React.js", "Next.js", "AWS SQS", "AWS SNS",
        "BullMQ", "MongoDB", "MySQL", "Redis", "Socket.io"
      ],
      description:
        "Designed and built a wallet feature enabling users to broadcast messages to contacts, managing a database of over 7 million entries.\n" +
        "Developed a scalable MySQL-based system for user plans, permissions, and limits, ensuring efficient user administration.\n" +
        "Streamlined real-time message handling using Meta WhatsApp webhook integrations with AWS SNS, SQS, socket, and pub-sub architectures."
    },
    {
      company: "Sateeq",
      href: "https://sateeq.com",
      location: "Gurugram, IN",
      badges: [],
      title: "Software Engineer",
      logoUrl: "/sateeq.png",
      start: "Jun 2022",
      end: "Sep 2023",
      open: true,
      skills: [
        "Next.js", "React.js", "Material-UI (MUI)", "Tailwind CSS",
        "Jest", "Node.js", "Mixpanel", "TypeScript",
        "MongoDB", "MySQL", "Azure"
      ],
      description:
        "Developed an Admin panel for managing user data and displaying metrics through charts.\n" +
        "Integrated Razorpay for seamless payment processing and implemented webhooks for handling payment failures efficiently.\n" +
        "Wrote migration scripts to smoothly transition existing data to the updated website version, improving system efficiency."
    }
  ],
  education: [
    {
      school: "Amritsar Group of Colleges",
      href: "https://agcamritsar.in",
      degree: "BTech in Computer Science (CGPA: 7.8/10)",
      logoUrl: "/agc.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "DAV Sen Sec School",
      href: "https://www.davcollegeasr.org/school/",
      degree: "12th Grade (Percentage: 82%)",
      logoUrl: "/dav.png",
      start: "2017",
      end: "2019",
    },
    {
      school: "Jagat Jyoti School",
      href: "",
      degree: "10th Grade (Percentage: 83%)",
      logoUrl: "/jagat.png",
      start: "2015",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Turbo Talk",
      href: "https://turbo-talk.vercel.app/auth/login",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Crafted a scalable real-time chat and video call solution with advanced features.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "TailwindCSS",
        "WebRTC",
      ],
      links: [
        {
          type: "Website",
          href: "https://turbo-talk.vercel.app/auth/login",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/28brana/Turbo-Talk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/turbo-talk.png",
      video: "",
    },
    {
      title: "FashionX",
      href: "https://fashonx.onrender.com/",
      dates: "2023",
      active: true,
      description:
        "Clothing shopping platform with dynamic features and secure payments.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Stripe"],
      links: [
        {
          type: "Website",
          href: "https://fashonx.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/28brana/FashonX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/projects/Project1.png',
      video: "",
    },
    {
      title: "Weather App",
      href: "https://28brana.github.io/Weather_app.github.io/",
      dates: "2021",
      active: true,
      description:
        "Real-time weather information app with intuitive user interface.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
      links: [
        {
          type: "Website",
          href: "https://28brana.github.io/Weather_app.github.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/projects/Project2.png',
      video: "",
    },
    {
      title: "Indeed Data Extractor",
      href: "https://github.com/28brana/IndeedDataExtracter",
      dates: "2022",
      active: true,
      description:
        "Web scraping tool to extract job data from Indeed for specific criteria.",
      technologies: ["Puppeteer", "Node.js", "Cheerio"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/28brana/IndeedDataExtracter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/projects/Project4.png',
      video: "",
    },
    {
      title: "FileShare Website",
      href: "https://github.com/28brana/fileshare",
      dates: "2022",
      active: true,
      description:
        "Platform for simplified file sharing with seamless Gmail integration.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Google APIs"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/28brana/fileshare",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/projects/Project3.png',
      video: "",
    },
    {
      title: "Todo Website",
      href: "https://28brana.github.io/To_do_App/",
      dates: "2021",
      active: true,
      description:
        "A straightforward Todo website designed to manage tasks effectively.",
      technologies: ["React.js", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://28brana.github.io/To_do_App/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/28brana/To_do_App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/projects/Project5.png',
      video: "",
    },
    {
      title: "All Purpose Portfolio",
      href: "https://28brana.github.io/Websites/Portfolio-template-main/index.html",
      dates: "2020",
      active: true,
      description:
        "A versatile portfolio template with various sections.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://28brana.github.io/Websites/Portfolio-template-main/index.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/28brana/Websites",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/projects/Project7.png',
      video: "",
    },
    {
      title: "Template Websites",
      href: "https://28brana.github.io/Websites/",
      dates: "2020",
      active: true,
      description:
        "A collection of template websites showcasing different designs.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://28brana.github.io/Websites/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/28brana/Websites",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/projects/Project6.png',
      video: "",
    },

  ],
  hackathons: [
    {
      title: "2nd Runner-Up - CodeGaze Competition",
      dates: "2022",
      location: "India",
      description:
        "Secured 2nd runner-up position in the college-level CodeGaze competition organized by Coding Ninjas with worldwide participation.",
      image:
        "https://files.codingninjas.in/new_cn_logo-29829.svg",
      links: [

      ],
    },
    {
      title: "Tech Lead - GFG Student Chapter",
      dates: "2021-2022",
      location: "Amritsar",
      description:
        "Led the GFG Student Chapter, organizing coding competitions and technical events to promote programming among students.",
      image:
        "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
      links: [

      ],
    },
  ],
} as const;
