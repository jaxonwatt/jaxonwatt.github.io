// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'emcrald', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'F1 Driver Wordle',
          description:
            'F1 Driver Wordle is a browser-based word-guessing game where players attempt to guess the last name of an F1 driver within six attempts. The game features different eras of F1, allowing users to choose a time period and guess drivers from that era.',
          imageUrl: 'https://i.imgur.com/bkOBdIG.png',
          link: 'https://f1.jaxonwatt.com/',
        },
        {
          title: 'Revinal Bot',
          description:
            'An Advanced Logging and Moderation Discord Bot built with JavaScript and hosted on a Raspberry Pi Linux server',
          imageUrl: 'https://i.imgur.com/nZE5Y4Q.png',
          link: 'https://revinal.xyz',
        },
        {
          title: 'JaxConvert',
          description: 'Jax Convert is a browser-based image converter that allows users to upload .webp images and convert them to .png format instantly. The conversion is powered by Sharp and runs serverlessly on Netlify.',
          imageUrl: 'https://i.imgur.com/ncjOMS7.png',
          link: 'https://convert.jaxonwatt.com/',
        },
        {
          title: 'Shortna - URL Shortener',
          description: 'Shortna is a lightweight URL shortener that converts long URLs into short, easy-to-share links. It uses MongoDB to store URL mappings and Netlify Functions for backend processing.',
          imageUrl: 'https://i.imgur.com/90OtqJd.png',
          link: 'https://shortna.jaxonwatt.com/',
        },
        {
          title: 'ClobNet',
          description:
            'ClobNet is a 1.21.1+ Minecraft Java server packed with minigames and social aspects. Our custom resource pack brings a ton of cosmetics, including backpacks and hats you can wear to show off your style. Get ready for addicting minigames and fun features that will keep you coming back for more.',
          imageUrl: 'https://i.imgur.com/qvxDcz6.png',
          link: 'https://clobnet.org/',
        },
        {
          title: 'First Tech Challenge',
          description:
            'On November 5th, 2022, I had the privilege of participating in the Queensland Regionals First Tech Challenge where my team the Ninja-neers and I designed, constructed, and programmed a robot to autonomously navigate through a course collecting cones and depositing them into designated goals. This helped grow and improve my skills when it comes to designing and troubleshooting.',
          imageUrl: 'https://i.imgur.com/w6vzyKp.png',
          link: 'https://ftc-events.firstinspires.org/2022/team/19480',
        },
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'emcrald/F1-Driver-Wordle',
          'emcrald/JaxConvert',
          'emcrald/Shortna',
          'emerald-Bots-Studios/revinal',
          'emcrald/pi-estimator',
          'emcrald/JaxScript',
          'emcrald/Proxmox-LCD',
          'emcrald/is-discord-token',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
  seo: {
    title: 'Jaxon Watt - Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'jaxonwatt',
    twitter: 'emcraldtwt',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'jaxon.watt',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '19783530/jaxon-watt',
    skype: '',
    telegram: '',
    website: 'https://www.jaxonwatt.com',
    phone: '',
    email: 'mail@jaxonwatt.com',
  },
  resume: {
    fileUrl: 'https://jaxonwatt.com/resume.pdf',
  },
  skills: [
    'JavaScript',
    'Python',
    'HTML',
    'CSS',
    'Node.js',
    'SQL',
    'MongoDB',
    'Git',
    'Arduino',
    'Raspberry Pi',
    '3D Printing',
  ],
  experiences: [
    {
      company: 'Sublime Technologies',
      position: 'Junior Technician',
      from: 'May 2025',
      to: 'Present',
      companyLink: 'https://sublimetech.com.au',
    },
    {
      company: 'Sublime Technologies',
      position: 'Internship - Junior Technician',
      from: 'January 2022',
      to: 'December 2022',
      companyLink: 'https://sublimetech.com.au',
    },
  ],
  certifications: [
    {
      name: 'TAFE Certificate IV',
      body: 'Cybersecurity',
      year: 'July 2025',
      link: 'https://tafeqld.edu.au/course/18/18451/certificate-iv-in-cyber-security',
    },
    {
      name: 'TAFE Certificate II',
      body: 'Autonomous Technologies',
      year: 'June 2024',
      link: 'https://tafeqld.edu.au/course/19/19102/certificate-ii-in-autonomous-technologies',
    },
    {
      name: 'TAFE Certificate II',
      body: 'Networking',
      year: 'June 2024',
      link: 'https://tafeqld.edu.au/course/18/18079/certificate-ii-in-telecommunications-technology-networking',
    },
    {
      name: 'FutureLearn Cerificate of Completion',
      body: 'Introduction to Physical Computing',
      year: 'September 2022',
      link: 'https://www.futurelearn.com/courses/an-introduction-to-physical-computing',
    },
    {
      name: 'Codecademy Cerificate of Completion',
      body: 'Fundamentals of Cyber Resilience and Risk Management Skill Path',
      year: 'August 2022',
      link: 'https://www.codecademy.com/learn/paths/cyber-resilience-risk-management',
    },
    {
      name: 'Codecademy Cerificate of Completion',
      body: 'Learn JavaScript Course',
      year: 'August 2022',
      link: 'https://www.codecademy.com/learn/introduction-to-javascript',
    },
    {
      name: 'Machine Learning in Python',
      body: 'With Raspberry Pi & Sensors',
      year: 'January 2022',
      link: 'https://outschool.com/classes/machine-learning-in-python-with-raspberry-pi-sensors-level-1-3DTRS1Mj',
    },
  ],
  educations: [
    {
      institution: 'TAFE',
      degree: 'Certificate IV Cybersecurity',
      from: '2024',
      to: '2025',
    },
    {
      institution: 'TAFE',
      degree: 'Certificate II Autonomous Technologies',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Home-schooled',
      degree: 'School',
      from: '2021',
      to: '2023',
    }
  ],
  publications: [
    {
      title: 'Jaxon turns his passion into a tech career',
      conferenceName: '',
      journalName: '',
      authors: 'Andy Hunter',
      link: 'https://tafeqld.edu.au/news-and-events/news/2024/jaxon-turns-his-passion-into-a-tech-career',
      description:
        'Jaxon Watt’s journey to a technology career began when he enrolled in an entry-level TAFE at School electronics and programming qualification.',
    },
    {
      title: 'TAFE Queensland’s Cyber Stars Shine at National Grand Final',
      conferenceName: '',
      journalName: '',
      authors: 'TAFE Queensland',
      link: 'https://tafeqld.edu.au/news-and-events/news/2025/tafe-queenslands-cyber-stars-shine-at-national-grand-final',
      description:
        'TAFE Queensland’s cyber security students have proven they can hold their own on the national stage, with one team earning a top-three finish at the 2025 Cyber Battle Australia Grand Final in Melbourne.',
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ['business'],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#4ccdea',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#202020',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.

  enablePWA: true,
};

export default CONFIG;
