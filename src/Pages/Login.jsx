import React, { useState } from "react";
import { GoogleButton } from "react-google-button";
import { useNavigate } from "react-router-dom";
import {
  //   signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, signUp, logIn } from "../firebase-login";

const Login = () => {
  // const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const registerUser = async () => {
  //   await signUp(email, password);
  //   setIsRegistering(false);
  // };

  const loginUser = async () => {
    await signUp(email, password);
    await logIn(email, password);
  };

  const loginWithEmail = async () => {
    loginUser();
    navigate("/dashboard/rooms-list");
    // await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    navigate("/dashboard/rooms-list");
  };

  return (
    <div>
      <div className="">
        <div className="">
          <div className="h-[200px] w-[200px] absolute rounded-[50%] first:right-[35%] first:bottom-[10%] last:left-[35%] bg-gradient-to-r from-[#ff512f] to-[#f09819]"></div>
          <div className="h-[200px] w-[200px] absolute rounded-[50%] first:right-[35%] first:bottom-[15%] last:left-[35%] bg-gradient-to-r from-[#1845ad] to-[#23a2f6]"></div>
        </div>
        <div className="w-[100vw] h-[100vh] flex flex-row">
          <form className="max-w-[600px] bg-[rgba(255,255,255,0.13)] backdrop-blur-[10px] shadow-[0_0_40px_rgba(8,7,16,0.6)] px-[35px] py-[50px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.1)] m-auto">
            <h3 className="text-[2rem] font-medium text-center">Login Here!</h3>
            <label className="block font-medium mt-[30px]" htmlFor="username">
              Email
              <input
                className="w-full bg-[rgba(255,255,255,0.07)] border border-gray-400 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                type="text"
                placeholder="Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="block font-medium mt-[30px]" htmlFor="password">
              Password
              <input
                className="w-full bg-[rgba(255,255,255,0.07)] border border-gray-400 text-[0.8rem] font-light mt-2 p-4 rounded-[5px] placeholder:text-gray-400 placeholder:text-[0.9rem]"
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              className="w-full bg-white text-[#080710] mt-[50px] px-0 py-[0.9em] border border-orange-400 rounded-[5px] text-base font-semibold cursor-pointer"
              type="submit"
              onClick={loginWithEmail}
            >
              Log In with Email/Password
            </button>
            <div className="flex justify-center mt-4">
              <div className="go">
                {/* <i className="fab fa-google"></i> */}
                <GoogleButton className="" onClick={loginWithGoogle} />
              </div>
              {/* <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
