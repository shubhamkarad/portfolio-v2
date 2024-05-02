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
  BriefCase,
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
    text: "Bron on 16th Feb 1999",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.E in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Nashik Road, Nashik, Maharashtra, India",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Frontend Developement",
      },

      {
        name: "Javascript, Java core",
      },
      {
        name: "Backend Development",
      },
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
        Years: "2016 - 2020",
      },
      {
        university: "Aarambha Mahavidyalay",
        qualification: "HSC (Science)",
        Years: "2014 - 2016",
      },
      {
        university: "P E School",
        qualification: "SSC",
        Years: "2013 - 2014",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        qualification: "Capgemini",
        qualification: "Software Developer",
        Years: "2020 - 2022",
      },
      {
        qualification: "Konfhub PVT LTD",
        qualification: "Backend Developer",
        Years: "2022 - 2023",
      },
      {
        qualification: "Winjit Technologies",
        qualification: "Software Engineer",
        Years: "2023 - current",
      },
    ],
  },
];
const About = () => {
  const geData = (arr, title) => {
    return arr.find(item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="hidden xl:flex flex-1 relative">
          <DevImg
            containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
            imgSrc="/about/developer.png"
          />
        </div>
        <div className="flex-1">
          <Tabs defaultValue="personal">
            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
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
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-4">Tech-Savvy Fullstack Developer</h3>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    I'm a Fullstack Developer with three years of experience
                    across NodeJS, React, Angular, Serverless architecture, and
                    AWS services. During my internship, I honed my skills in
                    React and Firebase, while at Capgemini, I expanded my
                    expertise in serverless applications and AWS services like
                    Amplify. Proficient in JavaScript/TypeScript, C++, and
                    various frameworks, I'm committed to continuous learning and
                    delivering impactful solutions.
                  </p>
                  <div className="grid xl:grid-cols-2 gap-4 mb-12">
                    {infoData.map((item, index) => {
                      return (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="qualification">
                qualification Info
              </TabsContent>
              <TabsContent value="skills">skills Info</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
