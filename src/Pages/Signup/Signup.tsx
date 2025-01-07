import React from "react";
import Regside from "../../Components/Regside/Regside";
import SignCP from "../../Components/SignCP/SignCP";

const Signup: React.FC = () => {
  return (
    <div className=" md:flex md:flex-row h-[100vh]">
      {/* regside component */}
      <Regside className=" h-full " />
      {/* login component */}
      <SignCP />
    </div>
  );
};

export default Signup;
