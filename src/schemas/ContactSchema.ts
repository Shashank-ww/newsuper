import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters long, like Dave"
  }),
  email: z.string().email({
    message: "Please enter a valid official email address"
  }),
  contact: z.string()
  .regex(/^\d+$/, {
    message: "Contact must be numeric"
  })
  .length(10, {
    message: "Contact number must be exactly 10 digits"
  }),
  industry: z.string().optional().transform((value) => value || undefined),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long"
  }),
});
