import React from "react";
import logo2 from "../../../src/Assets/logo2.png";
const Signin = () => {
  return (
    <div>
      <div className="bg-gray-500 w-full h-svh">
        <div className="flex justify-center">
          <div className="bg-gray-800 w-full md:rounded-lg md:py-10 md:mx-6 md:top-[12%]  absolute md:px-6 md:w-[700px] lg:w-[1000px] m-auto h-full md:h-fit ">
            <div className=" md:max-w-[500px] gap-10 m-auto">
              <div className="text-center pt-5">
                <div className="flex justify-center">
                  <img src={logo2} alt="" className="w-[100px]" />
                </div>
                <p className="pb-4 text-gray-200 text-[1.1rem] ">
                Sign in to your account
                </p>
              </div>
              <div className=" px-3">
               <form action="">
                
                <div >
                  <input
                    type="tel"
                    required
                    name="mobile"
                    placeholder="Mobile No"
                    className="w-full mt-3 pl-5 bg-gray-500 text-gray-200 placeholder:text-gray-200  py-2 outline-none  border border-gray-400 focus:text-gray-700 focus:bg-gray-300 focus:placeholder:text-gray-700 rounded-full"
                  />
                </div>
                 <div className="pt-4">
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="password"
                    className="w-full mt-3 py-2 bg-gray-500 text-gray-200 placeholder:text-gray-200 outline-none  border border-gray-400 focus:text-gray-700 focus:bg-gray-300 focus:placeholder:text-gray-700 rounded-full pl-5"
                  />
                </div>

                <p className="pt-4 text-end text-gray-200">
                  <a href="/Signin" className="underline">
                    forgot password?
                  </a>
                </p>
                <div className="pt-8">
                  <button
                    type="submit"
                    className="bg-gray-100 hover:text-white hover:bg-gray-600 py-2 w-full rounded-full"
                  >
                    SIGN IN
                  </button>
                  <p className='pt-3 text-center text-gray-200'>No account? <a href="/Signup" className='underline'>Sign up</a></p>
                </div>
               </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
