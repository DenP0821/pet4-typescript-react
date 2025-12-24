import Heading from "@/utils/Heading";
import ClassesSlider from "./ClassesSlider";
import { baseMotion, slideLeft } from "@/utils/motionPresets";
import { motion } from "framer-motion";

const OurClasses = () => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <div className="mx-auto w-5/6">
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.9 }}
          variants={slideLeft}
          className="md:w-3/5"
        >
          <Heading>OUR CLASSES</Heading>
          <p className="py-5 text-gray-700">
            Discover the power of movement with our wide range of training
            options. From high-intensity challenges to calming practices, we
            have something for everyone. Our expert-led sessions are designed to
            keep you motivated and help you reach your goals!
          </p>
        </motion.div>
      </div>
      <div className="mt-10 w-full">
        <ClassesSlider />
      </div>
    </section>
  );
};

export default OurClasses;
