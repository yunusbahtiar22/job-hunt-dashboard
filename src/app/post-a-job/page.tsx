import { JobFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
  return <p>Post a Job</p>;
};

export default PostJobPage;
