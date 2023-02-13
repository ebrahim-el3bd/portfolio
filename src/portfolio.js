/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import Profile from './containers/profile/Profile';

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "SamiColon",
  title: "Hi all, I'm Ebrahim El3bd",
  subTitle: emoji(
    " I fell in love with programming and I have at least learnt something, I think… , I am fluent in classics like React and Javascript. My field of Interest's are building new  Web Technologies and Products and also in areas related to Deep Learning and Natural Launguage Processing. Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js ..."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XaDS5dB3iLwTMJvTFH8rzVChaqX66D9B/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ebrahim-el3bd",
  linkedin: "https://www.linkedin.com/in/ebrahim-elabd-198b92213/",
  facebook: "https://www.facebook.com/ebrahem.elabd.7",
  medium: "https://medium.com/@ebrahimelabd798",
  twitter: "https://twitter.com/ebrahim_elabd34",
  whatsapp:"https://wa.me/01027182684",
  gmail:"ebrahimelabd30@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Determining the structure and design of web pages. And web design is optimized for smartphones."),
    emoji(
      "⚡ Convert PSD Or XD To Template"
    ),
    emoji(
      "⚡ Responsive Design"
    ),
    emoji(
      "⚡ Edit Templates"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cairo University",
      logo: require("./assets/images/du.png"),
      subHeader: "Bachelor in Computers and Information Systems",
      duration: "September 2014 - May 2018",
      desc: "Graduated from Cairo University, Faculty of Computers and Information Systems.",
      descBullets: [
        "Scored 72% in 1st year",
        "Scored 75.7% in 2nd year",
        "Scored 78.7% in 3nd year",
        "Scored 82% in the final year"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "HTML5",
      progressPercentage: "80%"
    },
    {
      Stack: "CSS3",
      progressPercentage: "77%"
    },
    {
      Stack: "SASS",
      progressPercentage: "80%"
    },
    {
      Stack: "JAVA SCRIPT",
      progressPercentage: "65%"
    },
    {
      Stack: "REACT",
      progressPercentage: "70%"
    },
    {
      Stack: "NODE JS",
      progressPercentage: "50%"
    },
    {
      Stack: "GIT",
      progressPercentage: "60%"
    },
    {
      Stack: "NPM",
      progressPercentage: "65%"
    },
    {
      Stack: "BOOTSTRAP",
      progressPercentage: "80%"
    },
    {
      Stack: "FIGMA",
      progressPercentage: "60%"
    },
    {
      Stack: "ADOBE XD",
      progressPercentage: "60%"
    },
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Truck MERN Stack",
      company: "Information Technology Institute",
      companylogo: require("./assets/images/iti-logo.png"),
      date: "September 2021 – June 2022",
      desc: "I Trained In Information Technology Institute On MERN Stack But I Mastered This FrontEnd"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on


const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS THAT I MANAGED TO CREATE DURING MY TRAINING PERIOD",
  projects: [
    {
      image: require("./assets/images/Bolby.png"),
      projectName: "Bolby",
      projectDesc: "This Site Was Created By Html And Css And Use Preprocessors SASS And Use Font Awesome And JavaScript",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: " https://ebrahim-el3bd.github.io/Bolby/"
        },
        {
          //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Bolby"
        }
      ]
    },
    {
      image: require("./assets/images/SpecilDesign.png"),
      projectName: "Specil Design",
      projectDesc: "This Site Was Created By Html And Css And Javascript And Use LocalStorage To Save Some Settings.",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/Design-Ze/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Design-Ze"
        }
      ]
    },
    {
      image: require("./assets/images/Bandi.png"),
      projectName: "Bandi",
      projectDesc: "This Site Was Created By Html And Css And Javascript And BootStrap5 And JQuery And Preprocessors SASS",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/bondi/"
        },
        {
          //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/bondi"
        }
      ]
    },
    {
      image: require("./assets/images/Weather.png"),
      projectName: "Weather",
      projectDesc: "This Site Was Created By Html And Css And Javascript And JQuery And Use API ",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/Weather/"
        },
        {
          //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Weather"
        }
      ]
    },
    {
      image: require("./assets/images/Crud.png"),
      projectName: "Crud",
      projectDesc: "This Site Was Created By Html And Css And Javascript And Use LocalStorage To Save All Data ",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: " https://ebrahim-el3bd.github.io/Cruds/"
        },
        {
          //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/Cruds"
        }
      ]
      },
    {
      image: require("./assets/images/WaZaker.png"),
      projectName: "WaZaker",
      projectDesc: "This Site Was Created By Html And Css And Javascript And Use API",
      footerLink: [
        {
          //! Website
          name: "Visit Website",
          url: "https://ebrahim-el3bd.github.io/WaZaker/"
        },
        {
           //! GitHub
          name: "GitHub",
          url: "https://github.com/ebrahim-el3bd/WaZaker"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};






// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
    
  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "My first certification and achievement comes from here, I've earned the Badge and certificate by scoring good among 300K other programmers.",
      image: require("./assets/images/gpca.png"),
      imageAlt: "Google Certification Badge",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1T6qYVOWA2OvY0m_eZXh_gofOkP2dYGr7/view"
        },
        {
          name: "Date of Achievement",
          subtitle: "Apr 2018"
        }        
      ]
    },    
    {
      title: "Google Professional Cloud Architect",
      subtitle:
        "Developed a Google Cloud PWA that is available on 2 Billion devices world wide.",
      image: require("./assets/images/gpca.png"),
      imageAlt: "Google Professional Cloud Architect",
      footerLink: [
        {
          name: "Date of Achievement",
          subtitle: "Jul 2019"
        }
      ]
    },
    {
      title: "IBM Certified Solution Developer",
      subtitle:
        "Developed a Google Cloud PWA that is available on 2 Billion devices world wide.",
      image: require("./assets/images/ibmsp.png"),
      imageAlt: "Google Professional Cloud Architect",
      footerLink: [
        {
          name: "Date of Achievement",
          subtitle: "Oct 2016"
        }
      ]
    },

    {
      title: "AWS Certified Associate Developer",
      subtitle: "Completed Certifcation from AWS in Web App Development",
      image: require("./assets/images/awscda.png"),
      imageAlt: "AWS Certification",
      footerLink: [
        {
        	name: " Date of Achievement", 
        	subtitle: "Sep 2020"
        	}
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@ebrahimelabd798/7amazing-github-repositories-every-developer-should-follow-in-2023-8f0bcfcce164",
      title: "7 Amazing GitHub Repositories Every Developer Should Follow in 2023",
      description:
        "GitHub is the dominant player in hosting Software Projects on the web. With 200 M+ repositories, GitHub offers a plethora of knowledge for the developers, but finding quality repositories to learn from in the sea of repositories is hard!"
    },
    {
      url: "https://medium.com/@ebrahimelabd798/my-favorite-vscode-extensions-in-2023-7cd727e22467",
      title: "My Favorite VSCode Extensions In 2023📸",
      description:
        "These are my favorite VSCode extensions."
    },
    {
      url: "https://medium.com/@ebrahimelabd798/12-websites-youll-love-as-a-developer-adb0ffe72152",
      title: "12 Websites You’ll Love As A Developer",
      description:
        "Websites are now an essential tool for every business. And if you are a web developer and need to find new material or resources, then this is the place for you. As a developer, it is not easy to find a website that can provide all the resources and information that you need. This article will take you through 12 websites that you’ll love as a developer."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections == CodeShare

const talkSection = {
  title: "CodeShare",
  subtitle: emoji(
    "I Like To Share My Limited Knowledge Through The CodeShare Service That I Provide To All Those Who Want To Learn Programming Or Inquire, So Do Not Hesitate To Talk To Me, As That Makes Me Happy 😅"
  ),

  talks: [
    {
      title: "CodeShare",
      subtitle: "You Are On A Date With The Tips Of The Fingers Of A Professional",
      slides_url: "https://drive.google.com/file/d/1fwa3N4CUY8UHnh6rLh-vMzoiLinO0lPI/view?usp=sharing",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT PROGRAMMING AND TECHNOLOGY 🥸",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a project in mind and want to discuss ? Feel free to connect me over here 😌",
  number: "+201027182684",
  email_address: "ebrahimelabd30@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ebrahim_elabd34", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
