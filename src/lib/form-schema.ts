import { z } from "zod";
import { JOB_TYPES } from "@/app/constants";

export const JobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job title is required" })
    .min(3, { message: "Job title must contain at least 3 characters" }),
  jobType: z.enum(JOB_TYPES, {
    required_error: "You need to select a job type",
  }),
  salaryFrom: z.string({ required_error: "Salary from is required" }),
  salaryTo: z.string({ required_error: "Salary to is required" }),
  categoryId: z.string({ required_error: "You need to select a category" }),
  skills: z
    .string()
    .array()
    .nonempty({ message: "skills must contain at least 1 skill" }),
  jobDescription: z
    .string({ required_error: "Job Description is required" })
    .min(10, {
      message: "Job description must contain at least 10 characters",
    }),
  responsibilities: z
    .string({ required_error: "Responsibility is required" })
    .min(10, { message: "Responsibility must contain at least 10 characters" }),
  whoYouAre: z
    .string({ required_error: "Who You Are is required" })
    .min(10, { message: "Who You Are must contain at least 10 characters" }),
  niceToHaves: z
    .string({ required_error: "Nice To Have is required" })
    .min(10, { message: "Nice To Have must contain at least 10 characters" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must contain at least 1 benefit" }),
});
