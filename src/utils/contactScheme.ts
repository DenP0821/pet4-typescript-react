import { z } from "zod";

export const contactScheme = z.object({
  name: z.string().min(3, "The name is short").max(20, "Too long name"),
  email: z.email("Invalid email"),
  message: z
    .string()
    .min(10, "The message is short")
    .max(2000, "Too long message"),
});

export type ContactFormType = z.infer<typeof contactScheme>;
