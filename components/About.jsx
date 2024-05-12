import DevImg from "./DevImg";
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsTriggerItem,
} from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Shubham Karad",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 8378040439",
  },
  {
    icon: <MailIcon size={20} />,
    text: "shubhkrd@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 16th Feb 1999",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Maharashtra, India",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.E in Computer Science",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "HTML", icon: "/about/html.svg", category: "frontend" },
      { name: "CSS", icon: "/about/css.svg", category: "frontend" },
      {
        name: "Javascript",
        icon: "/about/javascript.svg",
        category: "frontend",
      },
      {
        name: "Typescript",
        icon: "/about/typescript.svg",
        category: "frontend",
      },
      { name: "NodeJS", icon: "/about/nodejs.svg", category: "backend" },
      { name: "python", icon: "/about/python.svg", category: "backend" },
      { name: "MySQL", icon: "/about/mysql.svg", category: "backend" },
      { name: "MongoDB", icon: "/about/mongodb.svg", category: "backend" },
      { name: "MsSQL", icon: "/about/mssql.svg", category: "backend" },
      {
        name: "Postgresql",
        icon: "/about/postgresql.svg",
        category: "backend",
      },
      { name: "Amazon RDS", icon: "/about/amazon-rds.svg", category: "tools" },
      {
        name: "Amazon DynamoDB",
        icon: "amazon-dynamodb.svg",
        category: "tools",
      },
      { name: "Firebase", icon: "firebase.svg", category: "tools" },
      { name: "Git", icon: "git.svg", category: "tools" },
      { name: "Docker", icon: "docker.svg", category: "tools" },
      { name: "Jira", icon: "jira.svg", category: "tools" },
      { name: "Azure", icon: "azure.svg", category: "tools" },

      // {
      //   name: "NodeJS, python",
      // },

      // {
      //   name: "MySQL, MongoDB, MsSQL, Postgresql, Amazon RDS, Amazon DynamoDB, Firebase",
      // },
      // {
      //   name: "Git, Docker, Jira, Azure",
      // },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];
const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Sandip Foundation",
        qualification: "Bacholer of Engineering (Computer)",
        years: "2016 - 2020",
      },
      {
        university: "Aarambha Mahavidyalay",
        qualification: "HSC (Science)",
        years: "2014 - 2016",
      },
      {
        university: "P E School",
        qualification: "SSC",
        years: "2013 - 2014",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Capgemini",
        role: "Software Developer",
        years: "2020 - 2022",
      },
      {
        company: "Konfhub PVT LTD",
        role: "Backend Developer",
        years: "2022 - 2023",
      },
      {
        company: "Winjit Technologies",
        role: "Software Engineer",
        years: "2023 - present",
      },
    ],
  },
];
const frontendSkills = [
  { name: "HTML", icon: "/about/html-5.svg", category: "frontend" },
  { name: "CSS", icon: "/about/css-3.svg", category: "frontend" },
  { name: "Javascript", icon: "/about/javascript.svg", category: "frontend" },
  {
    name: "Typescript",
    icon: "/about/typescript-icon.svg",
    category: "frontend",
  },
  { name: "Angular", icon: "/about/angular-icon.svg", category: "frontend" },
  { name: "React", icon: "/about/react.svg", category: "frontend" },
  { name: "NextJS", icon: "/about/nextjs.svg", category: "frontend" },
  { name: "Sass", icon: "/about/sass.svg", category: "frontend" },
  {
    name: "tailwind",
    icon: "/about/tailwindcss-icon.svg",
    category: "frontend",
  },
];

const backendSkills = [
  { name: "NodeJS", icon: "/about/nodejs-icon.svg", category: "backend" },
  { name: "python", icon: "/about/python.svg", category: "backend" },
  { name: "MySQL", icon: "/about/mysql-icon.svg", category: "backend" },
  { name: "MongoDB", icon: "/about/mongodb-icon.svg", category: "backend" },
  { name: "Postgresql", icon: "/about/postgresql.svg", category: "backend" },
];

const tools = [
  { name: "VS Code", icon: "/about/visual-studio-code.svg", category: "tools" },
  { name: "Github", icon: "/about/github-icon.svg", category: "tools" },
  { name: "Jira", icon: "/about/jira.svg", category: "tools" },
  { name: "AWS Services", icon: "/about/aws.svg", category: "tools" },
  { name: "Azure", icon: "/about/microsoft-azure.svg", category: "tools" },
  { name: "Figma", icon: "/about/figma.svg", category: "tools" },
  { name: "Docker", icon: "/about/docker-icon.svg", category: "tools" },
  { name: "Notion", icon: "/about/notion-icon.svg", category: "tools" },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-216 text-center mx-auto">
          About Me
        </h2>

        <div className="block mx-auto">
          {/* <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[450px] h-[505px] bg-no-repeat relative border-8 rounded-md"
              imgSrc="/hero/aboutPort.jpg"
            />
          </div> */}
          <div className="block mx-auto">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none mx-auto">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center">
                    <h3 className="h3 mb-4">Tech-Savvy Fullstack Developer</h3>
                    <p className="subtitle max-w-xl mx-auto">
                      I'm a Fullstack Developer with three years of experience
                      across NodeJS, React, Angular, Serverless architecture,
                      and AWS services. During my internship, I honed my skills
                      in React and Firebase, while at Capgemini, I expanded my
                      expertise in serverless applications and AWS services like
                      Amplify. Proficient in JavaScript/TypeScript, C++, and
                      various frameworks, I'm committed to continuous learning
                      and delivering impactful solutions.
                    </p>
                    <div className="grid xl:grid-cols-3 gap-4 mb-12 ">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 justify-center"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="h4">Languages known</div>
                      <div className="border-b border-border"></div>
                      <div>English, Marathi, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center">My Journey</h3>
                    {/* Experience & education  */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6 mx-auto">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />

                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] trnasition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6  mx-auto">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />

                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] trnasition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        <div>
                          <h4 className="h4 py-2 mb-2">Frontend</h4>
                          <div className="flex w-fit mb-2 flex-wrap mx-auto">
                            {frontendSkills.map((item, index) => {
                              const { name, icon } = item;
                              const width =
                                name === "HTML" || name === "CSS" ? 18 : 24;
                              return (
                                <div
                                  className="w-max mb-4 xl:text-left flex items-center px-4 py-2 dark:border-orange-500 border ml-2 rounded-full transition-all duration-300 hover:scale-110"
                                  key={index}
                                >
                                  <div className="mr-3">
                                    <Image
                                      src={icon}
                                      width={width}
                                      height={24}
                                      alt=""
                                      priority
                                    />
                                  </div>
                                  <div className="font-medium">{name}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div>
                          <h4 className="h4 py-2 mb-2">Backend</h4>
                          <div className="flex w-fit mb-2 flex-wrap mx-auto">
                            {backendSkills.map((item, index) => {
                              const { name, icon } = item;
                              const width = name === "MongoDB" ? 12 : 24;
                              return (
                                <div
                                  className="w-max mb-4 xl:text-left flex items-center px-4 py-2 dark:border-orange-500 border ml-2 rounded-full transition-all duration-300 hover:scale-110"
                                  key={index}
                                >
                                  <div className="mr-3">
                                    <Image
                                      src={icon}
                                      width={width}
                                      height={24}
                                      alt=""
                                      priority
                                    />
                                  </div>
                                  <div className="font-medium">{name}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div>
                          <h4 className="h4 p-2 mb-2 ">Tools</h4>
                          <div className="flex w-fit mb-2 mx-auto flex-wrap">
                            {tools.map((item, index) => {
                              const { name, icon } = item;
                              const width = name === "Figma" ? 14 : 24;
                              return (
                                <div
                                  className="w-max  mb-4 xl:text-left flex items-center px-4 py-2 border dark:border-orange-500 rounded-full ml-2 transition-all duration-300 hover:scale-110"
                                  key={index}
                                >
                                  <div className="mr-3">
                                    <Image
                                      src={icon}
                                      width={width}
                                      height={24}
                                      alt=""
                                      priority
                                    />
                                  </div>
                                  <div className="font-medium">{name}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
