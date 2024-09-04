import { GanttChartIcon, Blocks, Gem, GanttChartSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "I specialize in building and designing modern web applications with the latest UI designs and utilizing trending technology stacks. With my expertise, I ensure that your web app not only looks visually appealing but also provides a seamless and user-friendly experience.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Developer",
    description:
      "With over 3 years of experience in development, I specialize in building dynamic web applications using React, Angular, Next.js, and Node.js. Having worked with big clients, I have honed my skills in delivering high-quality solutions tailored to diverse needs.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Videographer & Photographer",
    description:
      "I love capturing the beauty of travel adventures through videography and photography. Using tools like Premiere Pro, VN Editor, and CapCut, I bring creativity to life through editing, crafting engaging videos that tell captivating stories.",
  },
];
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-container mx-auto">
          My Services
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] xl:h-[300px] h-[370px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4 mt-8">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
