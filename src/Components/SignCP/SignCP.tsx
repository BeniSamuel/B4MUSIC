import Checkbox from "../Checkbox/Checkbox";
import { Link } from "react-router-dom";

function LoginCP() {
  return (
    <div className=" flex flex-col h-[100vh] bg-black md:w-[60vw] items-center justify-center gap-12">
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
            <div className=" flex flex-row gap-12 w-96 justify-between">
              <div className=" flex flex-row gap-2 items-center">
                <Checkbox />
                <span className=" text-[#7E7575] font-poppins text-sm">
                  Remember me
                </span>
              </div>
              <span className=" text-[#FB7800] underline font-semibold font-poppins text-sm">
                Forgot Password?
              </span>
            </div>
          </div>

          <input
            type="submit"
            value="Signin"
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
  );
}

export default LoginCP;
