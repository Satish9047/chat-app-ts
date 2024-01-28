import { FC } from 'react'
import chatIcon from "../../assets/icon/chat-icon.png"
const Login: FC = () => {
    const onRegister = ()=>{
        console.log("clicked")
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <figure className=" max-w-52">
                    <img src={chatIcon} alt="Login photo" />
                </figure>
                <form className="flex flex-col text-sm">

                    <label htmlFor="email">Email</label>
                    <input id="email" className="px-4 py-1 border-b-2 text-lg" />

                    <label htmlFor="password">Password</label>
                    <input id="password" className="px-4 py-1 border-b-2 text-lg" />

                    <button className="px-7 py-4 my-6 bg-blue-800 text-white text-md rounded-xl">Login</button>

                </form>
                <div>
                    <p>Don't have Account <span className=" text-blue-900 font-bold" onClick={onRegister}>Register Here</span></p>
                </div>
            </div>
        </>
    )
}

export default Login