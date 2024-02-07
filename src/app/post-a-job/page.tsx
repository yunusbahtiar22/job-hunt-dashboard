"use client";

import { JobFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import { Form } from "@/components/ui/form";
import InputField from "@/components/ui/layout/form/field-input";
import { RxArrowLeft } from "react-icons/rx";

interface PostJobPageProps {}

const PostJobPage: FC<PostJobPageProps> = ({}) => {
  const form = useForm<z.infer<typeof JobFormSchema>>({
    resolver: zodResolver(JobFormSchema),
    defaultValues: {
      skills: [],
    },
  });

  const onSubmit = (val: z.infer<typeof JobFormSchema>) => {
    console.log(val);
  };
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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputField
            header="Job Title"
            text="Job title must describe one position"
          />
        </form>
      </Form>
    </div>
  );
};

export default PostJobPage;
