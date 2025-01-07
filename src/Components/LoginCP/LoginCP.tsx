import Checkbox from "../Checkbox/Checkbox";
import { Link, useNavigate } from "react-router-dom";

function LoginCP() {
  const navigate = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();
    // handling input logic

    // navigating to the dashboard

    navigate("/dashboard");
  }

  return (
    <div className=" flex flex-col h-[100vh] bg-black md:w-[60vw] items-center justify-center gap-12">
      <div>
        <p className=" text-[#FB7800] font-bold text-xl font-poppins ">
          B4MUSIC
        </p>
      </div>
      <div>
        <form
          className=" flex flex-col items-center gap-12"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Email"
            className=" text-[#FB7800] font-poppins text-sm outline-none bg-transparent placeholder:text-[#7E7575] placeholder:font-poppins placeholder:text-sm w-96 h-12 border-[#FB7800] border-2 px-4 rounded-lg"
          />
          <div className=" flex flex-col gap-3">
            <input
              type="password"
              placeholder="Password"
              className=" text-[#FB7800] font-poppins outline-none bg-transparent placeholder:text-[#7E7575] placeholder:font-poppins placeholder:text-sm  w-96 h-12 border-[#FB7800] border-2 px-4 rounded-lg"
            />
            <div className=" flex flex-row gap-12 w-96 justify-between">
              <div className=" flex flex-row gap-2 items-center">
                <Checkbox />
                <span className=" text-[#7E7575] font-poppins text-sm ">
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
            value="Login"
            className=" bg-[#FB7800] text-white w-96 h-12 rounded-lg font-poppins text-sm"
            onClick={() => navigate("/dashboard")}
          />
          <div>
            <p className=" text-[#7E7575] font-medium font-poppins text-sm">
              New to site.{" "}
              <Link to="/signup">
                <span className=" text-[#FB7800] font-semibold">SignUp</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginCP;
