import { FC } from 'react'
import regImg from "../../assets/img/img-reg.jpg";
import chatIcon from "../../assets/icon/chat-icon.png";
const Login: FC = () => {
    return (
        <>
            <main className=" flex w-screen h-screen">

                <div className=" w-3/12 flex flex-col justify-center items-center">
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
                            <p>Don't have Account <span className=" text-blue-900 font-bold">Register Here</span></p>
                        </div>
                    </div>
                </div>

                <figure className="w-9/12 h-300 bg-cover">
                    <img className="w-full h-full object-cover" src={regImg} alt="register image" />
                </figure>
            </main>
        </>
    )
}

export default Login