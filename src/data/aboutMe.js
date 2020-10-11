const aboutMe = [
  {
    input: "Marius.currentLocation",
    return: "Bucharest, Romania",
  },

  {
    input: "Marius.contactInfo",
    return: [
      {
        link: "mailto:csmarius0@gmail.com",
        text: "csmarius0@gmail.com",
      },
      {
        link: "https://www.linkedin.com/in/marius-ciocoiu/",
        text: "LinkedIn",
      },
      {
        link: "https://github.com/misterblack0",
        text: "github",
      },
    ],
  },
  {
    input: "Marius.resume",
    return: {
      link: "/marius-ciocoiu_resume.pdf",
      text: "mariusciocoiu.pdf",
    },
  },

  {
    input: "Marius.interests",
    return: ["web development", "linux", "blockchain", "finance", "sport"],
  },
  {
    input: "Marius.skills",
    return: ["Sass", "JavaScript", "React", "webpack", "git"],
  },
];

export default aboutMe;
