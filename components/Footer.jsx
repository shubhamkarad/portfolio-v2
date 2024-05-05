import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 xl:mx-auto mb-4"
            iconStyles="text-primary dark:text-white/70 hover:text-white dark:hover:text-primary text-[20px] transition-all"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Shubham Karad. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
