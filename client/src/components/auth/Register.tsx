import { FC, useContext } from 'react';
import chatIcon from "../../assets/icon/chat-icon.png";
import { AuthContext } from '../../contexts/authContext';

const Register: FC = () => {
  // const authState = useContext(AuthContext)[0];
  const setAuthState = useContext(AuthContext)[1];

  const onRegister = () => {
    console.log("clicked");
    // setAuthState({...authState, isLoggedIn: true});

    // setAuthState({...authState, user:{email:"suraj@gmail.com"}});

    setAuthState((oldState)=>({
      ...oldState,
      isLoggedIn: true
    }));
    setAuthState((oldState)=>({
      ...oldState,
      user: { email: "suraj@gmail.com" }
    }));
    setAuthState((oldState)=>({
      ...oldState,
      isLoggedIn: false
    }));
    // setAuthState({ ...authState, isLoggedIn: true })
    // setAuthState({ ...authState, user: { email: "suraj@gmail.com" } })
    // setAuthState({ ...authState, isLoggedIn: false })
    // console.log(authState, "does change?");
  }

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
          <p>Already have an Account <span className=" text-blue-900 font-bold" onClick={onRegister}>Login Here</span></p>
        </div>
      </div>
    </>
  )
}

export default Register