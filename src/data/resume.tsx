import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Bharat Rana",
  initials: "BR",
  url: "http://localhost:3000/",
  location: "Noida, UP",
  locationLink: "https://www.google.com/maps/place/noida",
  description:
    "Passionate Software Engineer | Enthusiastic about coding, problem-solving, and development.",

  summary:
    `Full-Stack Software Engineer with 4+ years of experience building scalable web applications, cloud infrastructure, automation, and AI-powered solutions. Currently at Trackier, optimizing frontend performance, modernizing legacy systems, improving application security, and processing 30M+ analytics records per day with ClickHouse. Previously worked at Cozlo Technologies as a founding engineer for Superpen, building large-scale data aggregation and messaging systems, and at Sateeq on web applications and payment integrations. Solved 200+ problems on LeetCode and 150+ on GeeksforGeeks.`,
  avatarUrl: "/me-square.jpg",
  portraitUrl: "/me-portrait.jpg",
  status: "Building at Trackier",
  stats: [
    { value: "4+", label: "Years shipping production software" },
    { value: "30M+", label: "Analytics records processed daily" },
    { value: "6x", label: "Faster frontend load times" },
    { value: "350+", label: "DSA problems solved" },
  ],
  skills: [
    // Languages
    "C++",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "SCSS",

    // Frontend
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "Ant Design",
    "Material UI",
    "Cypress",

    // Backend
    "Node.js",
    "Express.js",
    "GraphQL",
    "Socket.io",
    "WebRTC",

    // Databases & Messaging
    "MongoDB",
    "MySQL",
    "Redis",
    "Elasticsearch",
    "ClickHouse",
    "Kafka",
    "BullMQ",

    // Cloud & Infrastructure
    "AWS S3",
    "AWS Lambda",
    "AWS VPC",
    "AWS EC2",
    "AWS SNS",
    "AWS SQS",
    "Azure",

    // Automation & AI
    "Puppeteer",
    "LangChain",
    "OpenAI",

    // Testing & Tools
    "Jest",
    "Git",
    "GitHub",
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
      company: "Trackier",
      href: "https://trackier.com/",
      badges: [],
      location: "Noida, IN",
      title: "Software Engineer - Full Stack",
      logoUrl: "/trackier_logo.jpeg",
      start: "Jul 2024",
      end: "Present",
      open: true,
      skills: [
        "React.js", "Node.js", "TypeScript", "AWS", "ClickHouse",
        "Cypress", "Tailwind CSS",
      ],
      description:
        "Led the migration of frontend infrastructure from GCP to AWS, improving scalability and deployment reliability across core products.\n" +
        "Optimized frontend performance through code splitting, lazy loading, and caching strategies, achieving nearly 6x faster load speeds.\n" +
        "Migrated legacy PHP modules to a modern React.js and Node.js architecture, improving maintainability and scalability.\n" +
        "Developed and maintained an internal component library and design system used across multiple products.\n" +
        "Implemented supply chain security prevention scripts and dependency validation workflows to improve application security.\n" +
        "Introduced Cypress end-to-end testing with 90%+ test coverage, improving release reliability.\n" +
        "Used ClickHouse for analytics and reporting, processing 30M+ records per day.",
    },
    {
      company: "Cozlo Technologies Private Limited",
      href: "https://superpen.io/",
      badges: [],
      location: "Gurugram, IN",
      title: "Software Engineer - Full Stack",
      logoUrl: "/superpen.png",
      start: "Oct 2023",
      end: "Jun 2024",
      open: false,
      skills: [
        "React.js", "Next.js", "Node.js", "AWS Lambda", "AWS SNS",
        "AWS SQS", "Puppeteer", "Elasticsearch", "OpenAI", "BullMQ",
        "MongoDB", "MySQL", "Redis",
      ],
      description:
        "Worked on two major products, serving as a founding engineer for Superpen.\n" +
        "Built a large-scale LinkedIn scraping and aggregation system handling 1M+ posts using Puppeteer, with real-time ingestion through AWS Lambda.\n" +
        "Integrated Elasticsearch and OpenAI models to enable fast search and automated tag generation for content discovery.\n" +
        "Designed and developed a wallet-based messaging system supporting 7M+ records for large-scale broadcast messaging.\n" +
        "Engineered a scalable MySQL-based system for user plans, permissions, and limits.\n" +
        "Integrated Meta WhatsApp webhooks with AWS SNS, SQS, Redis, and pub-sub architecture for real-time communication.",
    },
    {
      company: "Sateeq",
      href: "https://sateeq.com",
      badges: [],
      location: "Remote, IN",
      title: "Software Engineer - Full Stack",
      logoUrl: "/sateeq.png",
      start: "Jun 2022",
      end: "Sep 2023",
      open: false,
      skills: [
        "React.js", "Next.js", "TypeScript", "Node.js", "Material UI",
        "Tailwind CSS", "MongoDB", "MySQL", "Azure", "Jest",
      ],
      description:
        "Developed an admin dashboard for managing user data and visualizing key metrics through interactive charts.\n" +
        "Integrated the Razorpay payment gateway and implemented webhooks to handle payment failures.\n" +
        "Created data migration scripts to transition legacy data, improving system performance and data consistency.",
    },
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