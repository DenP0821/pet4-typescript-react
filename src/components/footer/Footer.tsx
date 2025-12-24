import Logo from "@/assets/Logo.png";
import { footerLinks } from "@/utils/footerLinks";
import { withDelay, baseMotion, slideUp } from "@/utils/motionPresets";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 flex flex-col gap-16 md:flex-row md:justify-between">
        <motion.div
          {...baseMotion}
          custom={1}
          variants={slideUp}
          transition={withDelay(1)}
          className="mt-16 basis-1/2 md:mt-0"
        >
          <img src={Logo} alt="logo" className="w-32" />
          <p className="my-5 text-sm md:text-base text-gray-600">
            Evolution of your body, mind, and strength. Join our community and
            push your limits today. Your journey to excellence starts here!
          </p>
          <p className="text-sm md:text-base text-gray-500">
            © Evogym All Rights Reserved
          </p>
        </motion.div>
        <motion.div
          {...baseMotion}
          custom={2}
          variants={slideUp}
          transition={withDelay(2)}
          className="mt-16 basis-1/4 md:mt-0"
        >
          <h4 className="font-bold text-lg">Links</h4>
          {footerLinks && footerLinks.length > 0 && (
            <div className="flex flex-col mt-3 gap-4">
              {footerLinks.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className="underline text-sm md:text-base text-gray-700 hover:text-primary-500 animate"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </motion.div>
        <motion.div
          {...baseMotion}
          custom={3}
          variants={slideUp}
          transition={withDelay(3)}
          className="mt-16 basis-1/4 md:mt-0"
        >
          <h4 className="font-bold text-lg">Contact Us</h4>
          <p className="my-3 text-sm md:text-base text-gray-700">
            123 Fitness Ave, Central District
          </p>
          <a
            href="tel:+1 (555) 000-0000"
            className="text-sm md:text-base text-gray-700 hover:text-primary-500 animate block"
          >
            Phone: +1 (555) 000-0000
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
