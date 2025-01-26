import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Korode Ogunfowote",
  initials: "KO",
  url: "https://korode.io",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Product Manager",
  summary:
    "Results-oriented Product Manager with 4+ years of experience delivering innovative digital solutions across diverse industries, complemented by a strong background as a Full Stack Engineer. Proven track record in launching scalable, user-centric platforms and leading cross-functional teams to success. Skilled in product roadmaps, interactive UI development, and integrating modern technologies to enhance user experiences.",
  avatarUrl: "/me.png",
  skills: [
    "Strategic Thinking",
    "Communication and Collaboration",
    "Problem-Solving and Analytical Thinking",
    "Leadership and Decision-Making",
    "Full-Stack Development",
    "Jira",
    "Trello",
    "Notion",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "TailwindCSS",
    "MongoDB",
    "AWS",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+2348103074036",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Korodee",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/korode-ogunfowote-56680b220/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kaysaxk",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:koroskki@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Sportzio",
      badges: [],
      href: "https://sportzio.io",
      location: "Montreal, Quebec, Canada (Remote)",
      title: "Tecnical Product Manager (Engineering)",
      logoUrl: "/sportzio.png",
      start: "Jan 2024",
      end: "Present",
      description:
        "As the Technical Product Manager (Engineering) at Sportzio, I combined product leadership with hands-on full-stack development to deliver a seamless live trivia experience. I managed the engineering team, overseeing the development of interactive features and ensuring alignment with business goals. Leveraging Next.js, Tailwind CSS, and TypeScript on the frontend, along with MongoDB and TypeScript on the backend, I built and optimized scalable, responsive features that allowed players to compete in real-time.",
    },
    {
      company: "Options Depth",
      href: "https://optionsdepth.com",
      badges: [],
      location: "Canada (Remote)",
      title: "Product Owner",
      logoUrl: "/od.png",
      start: "Aug 2024",
      end: "Jan 2025",
      description:
        "As the Product Owner at Options Depth, I led the end-to-end development of the product, combining strategic decision-making with hands-on execution. I utilized Webflow to build the landing page from scratch and used Figma to design the user dashboard, article layouts, and thumbnails. I collaborated closely with developers to ensure seamless implementation of designs and played a key role in defining project requirements, prioritizing features, and driving the overall product strategy.",
    },
    {
      company: "Endowd Africa",
      href: "https://endowd.africa/",
      badges: [],
      location: "London, England, United Kingdom (Remote)",
      title: "Product Manager",
      logoUrl: "/endowd.png",
      start: "Aug 2023",
      end: "Sep 2024",
      description:
        "Acted as the bridge between vision and execution, aligning cross-functional teams to deliver customer-centric products that drove measurable business growth in fast-paced startup environments. Improved team productivity by 30% through clear documentation and collaboration tools. Transformed user feedback into actionable insights, driving innovative solutions.",
    },
    {
      company: "Househaeds",
      href: "https://househaeds.com/",
      badges: [],
      location: "Irvine, California, United States (Remote",
      title: "Technical Product Manager",
      logoUrl: "/househaeds.png",
      start: "Jan 2023",
      end: "Jun 2023",
      description:
        "Managed and launched an NFT-based gaming platform, driving initial user adoption and generating over 3000 active users within the first three months.",
    },
    {
      company: "Novem",
      href: "https://novem.dev/",
      badges: [],
      location: "Montreal, Quebec Canada (Remote)",
      title: "Product Manager / Junior Frontend Enginner",
      logoUrl: "/novem.png",
      start: "Jan 2021",
      end: "Jan 2023",
      description:
        "Started as a Frontend Engineer, building a strong foundation in software development and leading the creation of user-focused applications. Successfully delivered 10+ digital platforms, integrating modern technologies to meet client needs Transitioned into Product Management, overseeing product development, setting timelines with clients, managing project allocation across departments, and ensuring successful project delivery.",
    },
  ],
  education: [
    {
      school: "Obafemi Awolowo University",
      href: "https://oauife.edu.ng/",
      degree: "Bachelor's Degree of Economics",
      logoUrl: "/oau.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "Lead City University",
      href: "https://www.lcu.edu.ng/",
      degree: "Diploma in Computer Science and Maths",
      logoUrl: "/lcu.png",
      start: "2017",
      end: "2019",
    },
  ],
  //   projects: [
  //     {
  //       title: "Options Depth",
  //       href: "https://optionsdepth.com",
  //       dates: "Aug 2024 - Jan 2025",
  //       active: true,
  //       description:
  //         "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
  //       technologies: [
  //         "Next.js",
  //         "Typescript",
  //         "PostgreSQL",
  //         "Prisma",
  //         "TailwindCSS",
  //         "Stripe",
  //         "Shadcn UI",
  //         "Magic UI",
  //       ],
  //       links: [
  //         {
  //           type: "Website",
  //           href: "https://chatcollect.com",
  //           icon: <Icons.globe className="size-3" />,
  //         },
  //       ],
  //       image: "",
  //       video:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  //     },
  //     {
  //       title: "Magic UI",
  //       href: "https://magicui.design",
  //       dates: "June 2023 - Present",
  //       active: true,
  //       description:
  //         "Designed, developed and sold animated UI components for developers.",
  //       technologies: [
  //         "Next.js",
  //         "Typescript",
  //         "PostgreSQL",
  //         "Prisma",
  //         "TailwindCSS",
  //         "Stripe",
  //         "Shadcn UI",
  //         "Magic UI",
  //       ],
  //       links: [
  //         {
  //           type: "Website",
  //           href: "https://magicui.design",
  //           icon: <Icons.globe className="size-3" />,
  //         },
  //         {
  //           type: "Source",
  //           href: "https://github.com/magicuidesign/magicui",
  //           icon: <Icons.github className="size-3" />,
  //         },
  //       ],
  //       image: "",
  //       video: "https://cdn.magicui.design/bento-grid.mp4",
  //     },
  //     {
  //       title: "llm.report",
  //       href: "https://llm.report",
  //       dates: "April 2023 - September 2023",
  //       active: true,
  //       description:
  //         "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
  //       technologies: [
  //         "Next.js",
  //         "Typescript",
  //         "PostgreSQL",
  //         "Prisma",
  //         "TailwindCSS",
  //         "Shadcn UI",
  //         "Magic UI",
  //         "Stripe",
  //         "Cloudflare Workers",
  //       ],
  //       links: [
  //         {
  //           type: "Website",
  //           href: "https://llm.report",
  //           icon: <Icons.globe className="size-3" />,
  //         },
  //         {
  //           type: "Source",
  //           href: "https://github.com/dillionverma/llm.report",
  //           icon: <Icons.github className="size-3" />,
  //         },
  //       ],
  //       image: "",
  //       video: "https://cdn.llm.report/openai-demo.mp4",
  //     },
  //     {
  //       title: "Automatic Chat",
  //       href: "https://automatic.chat",
  //       dates: "April 2023 - March 2024",
  //       active: true,
  //       description:
  //         "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
  //       technologies: [
  //         "Next.js",
  //         "Typescript",
  //         "PostgreSQL",
  //         "Prisma",
  //         "TailwindCSS",
  //         "Shadcn UI",
  //         "Magic UI",
  //         "Stripe",
  //         "Cloudflare Workers",
  //       ],
  //       links: [
  //         {
  //           type: "Website",
  //           href: "https://automatic.chat",
  //           icon: <Icons.globe className="size-3" />,
  //         },
  //       ],
  //       image: "",
  //       video:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
  //     },
  //   ],
  //   hackathons: [
  //     {
  //       title: "Hack Western 5",
  //       dates: "November 23rd - 25th, 2018",
  //       location: "London, Ontario",
  //       description:
  //         "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //       links: [],
  //     },
  //     {
  //       title: "Hack The North",
  //       dates: "September 14th - 16th, 2018",
  //       location: "Waterloo, Ontario",
  //       description:
  //         "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //       links: [],
  //     },
  //     {
  //       title: "FirstNet Public Safety Hackathon",
  //       dates: "March 23rd - 24th, 2018",
  //       location: "San Francisco, California",
  //       description:
  //         "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //       icon: "public",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //       links: [],
  //     },
  //     {
  //       title: "DeveloperWeek Hackathon",
  //       dates: "February 3rd - 4th, 2018",
  //       location: "San Francisco, California",
  //       description:
  //         "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //       links: [
  //         {
  //           title: "Github",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/cryptotrends/cryptotrends",
  //         },
  //       ],
  //     },
  //     {
  //       title: "HackDavis",
  //       dates: "January 20th - 21st, 2018",
  //       location: "Davis, California",
  //       description:
  //         "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //       win: "Best Data Hack",
  //       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //       links: [
  //         {
  //           title: "Devpost",
  //           icon: <Icons.globe className="h-4 w-4" />,
  //           href: "https://devpost.com/software/my6footprint",
  //         },
  //         {
  //           title: "ML",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //         },
  //         {
  //           title: "iOS",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/Wallet6/CarbonWallet",
  //         },
  //         {
  //           title: "Server",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/Wallet6/wallet6-server",
  //         },
  //       ],
  //     },
  //     {
  //       title: "ETH Waterloo",
  //       dates: "October 13th - 15th, 2017",
  //       location: "Waterloo, Ontario",
  //       description:
  //         "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //       links: [
  //         {
  //           title: "Organization",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/ethdocnet",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hack The North",
  //       dates: "September 15th - 17th, 2017",
  //       location: "Waterloo, Ontario",
  //       description:
  //         "Developed a virtual reality application allowing users to see themselves in third person.",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //       links: [
  //         {
  //           title: "Streamer Source",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/justinmichaud/htn2017",
  //         },
  //         {
  //           title: "Client Source",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/dillionverma/RTSPClient",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hack The 6ix",
  //       dates: "August 26th - 27th, 2017",
  //       location: "Toronto, Ontario",
  //       description:
  //         "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //       links: [
  //         {
  //           title: "Source",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/ShareShip/ShareShip",
  //         },
  //         {
  //           title: "Site",
  //           icon: <Icons.globe className="h-4 w-4" />,
  //           href: "https://share-ship.herokuapp.com/",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Stupid Hack Toronto",
  //       dates: "July 23rd, 2017",
  //       location: "Toronto, Ontario",
  //       description:
  //         "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //       links: [
  //         {
  //           title: "Source",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Global AI Hackathon - Toronto",
  //       dates: "June 23rd - 25th, 2017",
  //       location: "Toronto, Ontario",
  //       description:
  //         "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //       win: "1st Place Winner",
  //       links: [
  //         {
  //           title: "Article",
  //           icon: <Icons.globe className="h-4 w-4" />,
  //           href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //         },
  //         {
  //           title: "Source",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/TinySamosas/",
  //         },
  //       ],
  //     },
  //     {
  //       title: "McGill AI for Social Innovation Hackathon",
  //       dates: "June 17th - 18th, 2017",
  //       location: "Montreal, Quebec",
  //       description:
  //         "Developed realtime facial microexpression analyzer using AI",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //       links: [],
  //     },
  //     {
  //       title: "Open Source Circular Economy Days Hackathon",
  //       dates: "June 10th, 2017",
  //       location: "Toronto, Ontario",
  //       description:
  //         "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //       win: "1st Place Winner",
  //       links: [
  //         {
  //           title: "Source",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/dillionverma/genecis",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Make School's Student App Competition 2017",
  //       dates: "May 19th - 21st, 2017",
  //       location: "International",
  //       description: "Improved PocketDoc and submitted to online competition",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //       win: "Top 10 Finalist | Honourable Mention",
  //       links: [
  //         {
  //           title: "Medium Article",
  //           icon: <Icons.globe className="h-4 w-4" />,
  //           href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //         },
  //         {
  //           title: "Devpost",
  //           icon: <Icons.globe className="h-4 w-4" />,
  //           href: "https://devpost.com/software/pocketdoc-react-native",
  //         },
  //         {
  //           title: "YouTube",
  //           icon: <Icons.youtube className="h-4 w-4" />,
  //           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //         },
  //         {
  //           title: "Source",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/dillionverma/pocketdoc-react-native",
  //         },
  //       ],
  //     },
  //     {
  //       title: "HackMining",
  //       dates: "May 12th - 14th, 2017",
  //       location: "Toronto, Ontario",
  //       description: "Developed neural network to optimize a mining process",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //       links: [],
  //     },
  //     {
  //       title: "Waterloo Equithon",
  //       dates: "May 5th - 7th, 2017",
  //       location: "Waterloo, Ontario",
  //       description:
  //         "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //       links: [
  //         {
  //           title: "Devpost",
  //           icon: <Icons.globe className="h-4 w-4" />,
  //           href: "https://devpost.com/software/pocketdoc-react-native",
  //         },
  //         {
  //           title: "YouTube",
  //           icon: <Icons.youtube className="h-4 w-4" />,
  //           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //         },
  //         {
  //           title: "Source",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/dillionverma/pocketdoc-react-native",
  //         },
  //       ],
  //     },
  //     {
  //       title: "SpaceApps Waterloo",
  //       dates: "April 28th - 30th, 2017",
  //       location: "Waterloo, Ontario",
  //       description:
  //         "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //       image:
  //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //       links: [
  //         {
  //           title: "Source",
  //           icon: <Icons.github className="h-4 w-4" />,
  //           href: "https://github.com/dillionverma/earthwatch",
  //         },
  //       ],
  //     },
  //   ],
} as const;
