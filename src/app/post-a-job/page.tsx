"use client";

import { JobFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormDescription,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import InputField from "@/components/ui/layout/form/field-input";
import SkillSelect from "@/components/ui/skill-select";
import { RxArrowLeft } from "react-icons/rx";
import { JOB_TYPES } from "../constants";
import CKEditor from "@/components/ui/editor";

interface PostJobPageProps {}

const fieldWithEditors = [
  {
    header: "Job Descriptions",
    text: "Desribe your role",
    name: "jobDescriptions",
  },
  {
    header: "Responsibilities",
    text: "Outline the core responsibilites of the position",
    name: "responsibilities",
  },
  {
    header: "Who You Are",
    text: "Add preferred candidates qualification",
    name: "whoYouAre",
  },
  {
    header: "Nice-To-haves",
    text: "Add nice-to-haves skills for the role to encourage a more diverse set of candidates to apply",
    name: "niceToHaves",
  },
];

const PostJobPage: FC<PostJobPageProps> = ({}) => {
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
  const form = useForm<z.infer<typeof JobFormSchema>>({
    resolver: zodResolver(JobFormSchema),
    defaultValues: {
      skills: [],
    },
  });

  const onSubmit = (val: z.infer<typeof JobFormSchema>) => {
    console.log(val);
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
        <RxArrowLeft className="w-7 h-7 " />
        <span className="text2xl font-semibold">Post a job</span>
      </div>
      <div className="my-5">
        <h3 className="text-lg font-semibold">Basic Informations</h3>
        <p className="text-gray-400">List out your top perks and benefits</p>
      </div>
      <Separator />
      <Form {...form}>
        <form className="space-y-6 py-6" onSubmit={form.handleSubmit(onSubmit)}>
          <InputField
            header="Job Title"
            text="Job title must describe one position"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-[450px]"
                      placeholder="e.g. Software Engineer"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>at least 80 characters</FormDescription>
                </FormItem>
              )}
            />
          </InputField>
          <InputField
            header="Type of Employment"
            text="You can select from multiple types of employment"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JOB_TYPES.map((job: string, i: number) => (
                        <FormItem
                          key={i + ". " + job}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={job.toLowerCase()} />
                          </FormControl>
                          <FormLabel className="font-normal">{job}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </InputField>
          <InputField
            header="Salary"
            text="Please specify the estimated salary range for the role"
          >
            <div className="w-[450px] flex flex-row justify-between items-center">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-full" placeholder="$100" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <span className="text-center">to</span>
              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="$1000"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </InputField>
          <InputField
            header="Categories"
            text="You can select multiple job categories"
          >
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[450px]">
                        <SelectValue placeholder="Select job category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </InputField>
          <InputField header="Skills" text="Add required skills for this role">
            <SkillSelect form={form} name="skills" label="Skills" />
          </InputField>
          {fieldWithEditors.map(({ header, text, name }) => (
            <InputField key={header} header={header} text={text}>
              <CKEditor editorLoaded={editorLoaded} form={form} name={name} />
            </InputField>
          ))}
        </form>
      </Form>
    </div>
  );
};

export default PostJobPage;
