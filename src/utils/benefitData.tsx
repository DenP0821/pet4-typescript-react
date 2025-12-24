import type { BenefitType } from "@/types/type";
import { HiHomeModern, HiMiniUserGroup, HiAcademicCap } from "react-icons/hi2";

export const benefits: Array<BenefitType> = [
  {
    icon: <HiHomeModern className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Experience the future of fitness in our state-of-the-art facility. Featuring the latest smart-equipment and cutting-edge technology, we provide everything you need to surpass your goals",
  },
  {
    icon: <HiMiniUserGroup className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Never get bored with our incredible variety of 100's of diverse classes. From high-intensity HIIT and power yoga to rhythmic dance workouts, we have the perfect session for every fitness level and mood",
  },
  {
    icon: <HiAcademicCap className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Train with the best to be your best. Our team of expert and pro trainers is dedicated to your success, providing the motivation, technique, and support you need at every step of your journey",
  },
];
