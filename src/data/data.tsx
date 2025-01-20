import {
  ArrowDownTrayIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/background.png';
import profilePic from '../images/editedheadshot.jpg';
import planet_parv from '../images/portfolio/Planet Parv.jpg';
import {
  About,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sabrina Nguyen',
  description: "Sabrina Nguyen's Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Email: 'sabrinanguyen21@yahoo.com',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Sabrina Nguyen`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hello, I'm Sabrina! I'm currently a <strong className="text-stone-100">Senior</strong> at the 
        <strong className="text-stone-100"> University of Massachusetts Amherst</strong> pursuing a double
        major in Computer Science and Mathematics.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        With a strong passion for video games, I hope to contribute to the Video Game Industry 
        as an aspiring <strong className="text-stone-100">Game Developer</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/Sabrina Nguyen Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `mailto:${SectionId.Email}`,
      text: 'Email',
      primary: false,
      Icon: EnvelopeIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilePic,
  description: `Hello! I am currently a senior at the University of Massachusetts Amherst 
  pursuing a double major in Computer Science and Mathematics with a concentration in Mathematical 
  Computing. Video games have inspired me to explore the intricacies that go into creating long-lasting 
  and immersive experiences for players like myself. I aim to bring diverse perspectives and experiences to players 
  around the world, while celebrating the impact and innovation of the video game industry. Thank you for reading about me!`,
  aboutItems: [
    // {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    // {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
// export const skills: SkillGroup[] = [
/*  {
    name: 'Spoken Languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      // {
      //   name: 'French',
      //   level: 4,
      // },
      // {
      //   name: 'Spanish',
      //   level: 3,
      // },
    ],
  },*/
/*  {
    name: 'Front-End Development',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Angular',
        level: 4,
      },
      {
        name: 'JavaScript/HTML/CSS',
        level: 6,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'C/C#/C++',
        level: 5,
      },
      {
        name: 'JavaScript/TypeScript',
        level: 4,
      },
      {
        name: 'Python',
        level: 3,
      },
    ],
  },
  {
    name: 'Developer Tools',
    skills: [
      {
        name: 'Microsoft Visual Studio Code',
        level: 7,
      },
      {
        name: 'GitHub',
        level: 5,
      },
      {
        name: 'MATLAB',
        level: 4,
      },
    ],
  },
];
*/

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Planet Parv',
    description: `Planet Parv is an educational Mars exploration game developed by Sabrina Nguyen, Ashley McNamara, Kaitlyn Malsky, Ricky Lam, and Kelly Deng as the final project in a Game Programming course at UMass Amherst.
    \n Built using Unity, C#, and GitHub, the game combines interactive learning with engaging gameplay to provide players a unique educational experience about Mars. Players control an astronaut named Parv, navigating Mars to collect samples, which each have a unique challenge in order to collect them.
    \n Enemy AI was implemented to create obstacles and increase the difficulty of collecting the samples, while Mars facts were delivered through the UI to provide an educational element to the game. The final objective is to collect all samples and return to the rocket ship, which completes the mission and the game.
    \n Click here to see a demo of the game.`,
    url: 'https://youtu.be/kDC0j8XS1l0',
    image: planet_parv,
  },
];


/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];
*/

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sknooyen'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sabrina-nguyen21/'},
  {label: 'Email', Icon: EnvelopeIcon, href: 'mailto:sabrinanguyen21@yahoo.com'},
];