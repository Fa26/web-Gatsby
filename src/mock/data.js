import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Fatima', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Programmer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi,',
  name: 'Chuckaboo',
  subtitle: 'Be Bricky',
  cta: 'woot!!',
};

// ABOUT DATA
export const aboutData = {
  img: 'tobe.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cdog.png',
    title: 'Floosy',
    info: '',
    info2: '',
    url: '',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },


];

//MIDLE SECTION
export const midleData =[
  {
    id:nanoid(),
    img:'project.jpg',
    info:'',
    info2:'',
    url:'',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up

  },
];



// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
