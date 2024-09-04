import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiUser2Fill,
} from "react-icons/ri";
import { Button } from "./ui/button";
import Link from "next/link";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 xl:h-[84vh] xl:pt-28 bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1"> Hello, my name is Shubham Karad </h1>
            <p className="subtitle max-w[490px] mx-auto xl:mx-0">
              Passionate software engineer and UI developer dedicated to
              crafting innovative solutions and delightful user experiences.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me
                  <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                <a href="/work/ShubhamKaradRes.pdf" download>
                  Download CV
                </a>
                <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary trnasition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText={"Years Of Experience"}
            />
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={20}
              endCountText={"+"}
              badgeText={"Projects Done"}
            />
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiUser2Fill />}
              endCountNum={4}
              endCountText={"+"}
              badgeText={"Years Of Experience In UI"}
            />
            {/* <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div> */}
            <DevImg
              containerStyles=" w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/profile.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
