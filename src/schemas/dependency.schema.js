import { z } from "zod";

export const createDependencySchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z.string({
    required_error: "Email is required",
  }),
  staff: z.array(
    z.string({
      required_error: "Staff is required",
    })
  ),
  services: z.array(
    z.string({
      required_error: "Services is required",
    })
  ),
  date: z.string().datetime().optional(),
});
