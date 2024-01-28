import { FC } from 'react';
import chatIcon from "../../assets/icon/chat-icon.png";

const Register:FC = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
          <figure className=" max-w-52">
            <img src={chatIcon} alt="Login photo" />
          </figure>
          <form className="flex flex-col text-sm">

            <label htmlFor="username">User Name</label>
            <input id="username" className="px-4 py-1 border-b-2 text-lg" />

            <label htmlFor="email">Email</label>
            <input id="email" className="px-4 py-1 border-b-2 text-lg" />

            <label htmlFor="contact">Contact</label>
            <input id="contact" className="px-4 py-1 border-b-2 text-lg" />

            <label htmlFor="address">Address</label>
            <input id="address" className="px-4 py-1 border-b-2 text-lg" />

            <label htmlFor="password">Password</label>
            <input id="password" className="px-4 py-1 border-b-2 text-lg" />

            <button className="px-7 py-4 my-6 bg-blue-800 text-white text-md rounded-xl">Register</button>

          </form>
          <div>
            <p>Already have an Account <span className=" text-blue-900 font-bold">Login Here</span></p>
          </div>
        </div>
    </>
  )
}

export default Register