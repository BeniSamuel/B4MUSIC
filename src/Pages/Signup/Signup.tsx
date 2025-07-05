import React from "react";
import Form from "../../Layout/Forms/Form";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <Form>
      <div className=" flex flex-col h-[100vh] bg-black md:w-[50vw] items-center justify-center gap-12">
        <div>
          <p className=" text-[#FB7800] font-bold text-xl font-poppins">
            B4MUSIC
          </p>
        </div>
        <div>
          <form className=" flex flex-col items-center gap-12">
            <input
              type="text"
              placeholder="Username"
              className=" text-[#FB7800] text-sm font-poppins outline-none bg-transparent placeholder:text-[#7E7575] placeholder:font-poppins placeholder:text-sm w-96 h-12 border-[#FB7800] border-2 px-4 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className=" outline-none text-[#FB7800] bg-transparent placeholder:text-[#7E7575] placeholder:font-poppins placeholder:text-sm w-96 h-12 border-[#FB7800] border-2 px-4 rounded-lg font-poppins text-sm"
            />
            <div className=" flex flex-col gap-3">
              <input
                type="password"
                placeholder="Password"
                className=" outline-none text-[#FB7800] font-poppins text-sm bg-transparent placeholder:text-[#7E7575] placeholder:font-poppins placeholder:text-sm w-96 h-12 border-[#FB7800] border-2 px-4 rounded-lg"
              />
            </div>

            <input
              type="submit"
              value="Sign in"
              className=" bg-[#FB7800] text-white w-96 h-12 rounded-lg font-poppins text-sm"
            />
            <div>
              <p className=" text-[#7E7575] font-medium font-poppins text-sm">
                Already on the site.{" "}
                <Link to="/">
                  <span className=" text-[#FB7800] font-semibold font-poppins text-sm">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Form>
  );
};

export default Signup;
