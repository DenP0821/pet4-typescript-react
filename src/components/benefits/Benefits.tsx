import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/utils/ActionButton";
import Heading from "@/utils/Heading";
import { benefits } from "@/utils/benefitData";
import { baseMotion, slideLeft, slideRight } from "@/utils/motionPresets";

const Benefits = () => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        {...baseMotion}
        transition={{ duration: 0.9 }}
        variants={slideLeft}
        className="md:my-5 md:w-3/5"
      >
        <Heading>MORE THAN JUST GYM</Heading>
        <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member!
        </p>
      </motion.div>
      <div className="mt-5 items-center justify-between gap-8 md:flex">
        {benefits.map((benefit, index) => (
          <Benefit key={benefit.title} {...benefit} index={index} />
        ))}
      </div>
      <div className="mt-16 md:mt-28 md:flex items-center justify-between gap-20">
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.9 }}
          variants={slideLeft}
          className="flex-1"
        >
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />
        </motion.div>
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.9 }}
          variants={slideRight}
          className="flex-1 relative"
        >
          <div className="hidden md:block before:absolute before:-left-20 before:-top-20 before:z-1 before:content-abstractwaves">
            <Heading>
              MILLIONS OF HAPPY MEMBERS GETTING{" "}
              <span className="text-primary-500">FIT</span>
            </Heading>
          </div>
          <div>
            <p className="my-5">
              Join a global movement of millions of happy members getting fit.
              Our club offers a vibrant community dedicated to your health.
              Whether you are a beginner or a pro, you will find the perfect
              place to thrive. We combine top-tier technology with a supportive
              atmosphere!
            </p>
            <p className="mb-5">
              Unlock your potential with our expert coaching and diverse
              programs. We provide all the tools for your success. Our members
              enjoy a unique experience tailored to their goals. Become part of
              our story and see why millions choose us to stay healthy and
              strong every day!
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            <ActionButton variant="link" to="contactus">
              Join Now
            </ActionButton>
            <div className="relative before:z-[-1] before:content-sparkles"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
