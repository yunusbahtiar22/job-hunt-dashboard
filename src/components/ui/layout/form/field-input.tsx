import React, { FC, InputHTMLAttributes, ReactNode } from "react";
import { Separator } from "../../separator";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  header?: string;
  text?: string;
}

const InputField: FC<InputFieldProps> = ({
  children,
  header,
  text,
  ...props
}) => {
  return (
    <>
      <div className="flex flex-row items-start">
        <div className="w-[35%]">
          <h4 className="font-semibold">{header}</h4>
          <p className="text-gray-500 w-80">{text}</p>
        </div>
        {children}
      </div>
      <Separator />
    </>
  );
};

export default InputField;
