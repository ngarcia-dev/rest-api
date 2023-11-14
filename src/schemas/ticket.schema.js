import { z } from "zod";

export const createTicketSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description must be a string",
  }),
  dependency: z.string({ required_error: "Dependency is required" }),
  service: z.string({ required_error: "Service is required" }),
  date: z.string().datetime().optional(),
});
