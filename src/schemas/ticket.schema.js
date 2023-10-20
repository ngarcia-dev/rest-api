import { z } from "zod";

export const createTicketSchema = z.object({
  dependencies: z.string({
    required_error: "Dependencies is required",
  }),
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description must be a string",
  }),
  date: z.string().datetime().optional(),
});
