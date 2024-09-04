"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/@shubham_karad",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/shubham-karad-778393193/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/shubhamkarad",
    name: <RiGithubFill />,
  },
  {
    path: "/https://www.facebook.com/shubhamkarad",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/shubamkarad/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
