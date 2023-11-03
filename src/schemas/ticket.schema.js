import { z } from "zod";

export const createTicketSchema = z.object({
  destination: z.object({
    dependency: z.string({ required_error: "Dependency is required" }),
    service: z.string({ required_error: "Service is required" }),
  }),
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description must be a string",
  }),
  date: z.string().datetime().optional(),
});
