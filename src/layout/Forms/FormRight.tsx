import React, { ReactNode } from "react";

type FormRightProps = {
  children: ReactNode;
};

const FormRight: React.FC<FormRightProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default FormRight;
