import portfolio from "../images/portfolio.png";

const projects = [
  {
    id: 1,
    name: "Test Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie ac feugiat sed lectus. Interdum varius sit amet mattis vulputate enim nulla. Quis hendrerit dolor magna eget.",
    image: "https://i.postimg.cc/52MGRBpw/1.png",
    appLink: "https://",
    github: "https://github.com/",
    techStack: ["React", "TMDB API", "React-Router"],
  },
  {
    id: 2,
    name: "Portfolio",
    description:
      "Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.",
    image: portfolio,
    appLink: "https://mariusciocoiu.dev",
    github: "https://github.com/",
    techStack: ["HTML5", "CSS3", "Sass", "Javascript", "ReactJS"],
  },
];

export default projects;
