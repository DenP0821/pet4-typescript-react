import type { BenefitType } from "@/types/type";
import ActionButton from "@/utils/ActionButton";
import { motion } from "framer-motion";
import { baseMotion, slideUp, withDelay } from "@/utils/motionPresets";

type BenefitProps = BenefitType & { index: number };

const Benefit = ({ icon, title, description, index }: BenefitProps) => {
  return (
    <motion.div
      {...baseMotion}
      variants={slideUp}
      transition={withDelay(index, 0.2, 0.9)}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <ActionButton
        className="animate text-sm font-bold text-primary-500 underline cursor-pointer select-none hover:text-secondary-500"
        variant="link"
        to="ourclasses"
      >
        Learn More
      </ActionButton>
    </motion.div>
  );
};

export default Benefit;
