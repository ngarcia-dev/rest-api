import { z } from "zod";

export const createTicketSchema = z.object({
  dependency: z.object({
    name: z.string({ required_error: "Name is required" }),
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
