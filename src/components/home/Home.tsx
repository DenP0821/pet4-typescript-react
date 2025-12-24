import ActionButton from "@/utils/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { motion } from "framer-motion";
import { sponsorImages } from "@/utils/sponsorImages";
import {
  baseMotion,
  slideLeft,
  slideRight,
  slideUp,
  withDelay,
} from "@/utils/motionPresets";

const Home = () => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            {...baseMotion}
            transition={{ duration: 0.9 }}
            variants={slideLeft}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of... Get Your Dream
              Body Now!
            </p>
          </motion.div>
          <motion.div
            {...baseMotion}
            transition={{ delay: 0.2, duration: 0.9 }}
            variants={slideLeft}
            className="mt-8 flex items-center gap-8"
          >
            <ActionButton to="contactus" variant="link">
              Join Now
            </ActionButton>
            <ActionButton
              to="benefits"
              variant="link"
              className="animation rounded-md bg-primary-500 px-6 py-2 md:px-10 hover:bg-indigo-400 cursor-pointer select-none hover:text-white whitespace-nowrap text-sm md:text-base"
            >
              Learn More
            </ActionButton>
          </motion.div>
        </div>
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.9 }}
          variants={slideRight}
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16"
        >
          <img src={HomePageGraphic} alt="page-graphic" />
        </motion.div>
      </div>
      <div className="h-[150] w-full bg-primary-100 py-10">
        <div className="mx-auto w-5/6 flex items-center justify-between gap-8">
          {sponsorImages.map((image, index) => (
            <motion.div
              key={index}
              {...baseMotion}
              variants={slideUp}
              transition={withDelay(index, 0.2, 0.9)}
            >
              <img src={image.src} alt={image.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
