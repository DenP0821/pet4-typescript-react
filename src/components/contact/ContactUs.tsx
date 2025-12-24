import { contactScheme } from "@/utils/contactScheme";
import type { ContactFormType } from "@/utils/contactScheme";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import TextInput from "@/components/formElements/TextInput";
import Heading from "@/utils/Heading";
import { motion } from "framer-motion";
import {
  baseMotion,
  slideLeft,
  slideRight,
  slideUp,
} from "@/utils/motionPresets";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactScheme),
    mode: "onTouched",
  });

  const onSubmit = (data: ContactFormType) => {
    console.log("Form submitted with data:", data);

    setTimeout(() => {
      alert("Thank you for your message!");
      reset();
    }, 1000);
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        {...baseMotion}
        transition={{ duration: 0.9 }}
        variants={slideUp}
        className="md:w-3/5"
      >
        <Heading>
          <span className="text-primary-500">JOIN NOW </span>
          TO GET IN SHAPE
        </Heading>
        <p className="my-5">
          Join now to start your transformation today! Our team is ready to
          build your custom plan. Contact us to claim your first workout and
          take the first step toward a stronger you!
        </p>
      </motion.div>
      <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.9 }}
          variants={slideLeft}
          className="mt-10 basis-2/5 md:mt-0"
        >
          <form className="relative z-2" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              placeholder="NAME"
              register={register("name")}
              error={errors.name}
            />
            <TextInput
              type="email"
              placeholder="EMAIL"
              register={register("email")}
              error={errors.email}
            />
            <TextInput
              className="resize-none"
              type="textarea"
              placeholder="MESSAGE"
              register={register("message")}
              error={errors.message}
            />
            <button
              className="cursor-pointer mb-4 mt-2 rounded-lg bg-secondary-500 px-10 py-3 md:px-15 animate hover:bg-indigo-400 hover:text-white"
              type="submit"
            >
              SUBMIT
            </button>
            {isSubmitSuccessful && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-green-600 text-center font-semibold"
              >
                ✅ Your message has been sent successfully!
              </motion.p>
            )}
          </form>
        </motion.div>
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.9 }}
          variants={slideRight}
          className="mt-10 basis-3xl md:mt-0"
        >
          <div className="w-full relative before:absolute before:-bottom-25 before:-left-30 before:z-1 md:before:content-evolvetext">
            <img
              src={ContactUsPageGraphic}
              alt="contact-us-page-graphic"
              className="relative z-2 w-full object-cover object-center rounded-md shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
