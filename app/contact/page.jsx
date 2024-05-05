import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall, Home } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_me_light dark:bg-contact_me_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32 mb-12 xl:mb-24 text-base xl:text-lg gap-y-6">
          <div className="flex flex-col gap-y-4 xl:gap-y-14">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>shubhkrd@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <Home size={18} className="text-primary" />
              <div>Nashik, Maharashtra, India 🇮🇳 </div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+91 8378040429</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
