import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.email(),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.enum(["web", "mobile", "ai", "whatsapp", ""]).optional(),
  message: z.string().min(10).max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
