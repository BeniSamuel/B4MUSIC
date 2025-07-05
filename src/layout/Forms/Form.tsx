import React, { ReactNode } from "react";
import FormLeft from "./FormLeft";
import FormRight from "./FormRight";

type FormProps = {
  children: ReactNode;
};

const Form: React.FC<FormProps> = ({ children }) => {
  return (
    <div className=" flex flex-col md:flex-row ">
      <FormLeft className="" />
      <FormRight>{children}</FormRight>
    </div>
  );
};

export default Form;
