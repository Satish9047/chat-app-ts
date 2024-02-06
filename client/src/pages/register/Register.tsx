// import { FC } from 'react'
import regImg from "../../assets/img/img-reg.jpg";
import chatIcon from "../../assets/icon/chat-icon.png";
import { ChangeEvent, FormEvent, useState } from "react";
import { getRegister } from "../../services/auth";

const Register: React.FC = () => {
    const [userInfo, setUserInfo] = useState({ username: "", email: "", contact: "", address: "", password: "" });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await getRegister(userInfo);
            console.log(res, "hello");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <main className=" flex w-screen h-screen">
                <div className=" w-3/12 flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <figure className=" max-w-52">
                            <img src={chatIcon} alt="Login photo" />
                        </figure>
                        <form onSubmit={handleRegister} className="flex flex-col text-sm">

                            <label htmlFor="username">User Name</label>
                            <input id="username" name="username" value={userInfo.username} onChange={handleChange} className="px-4 py-1 border-b-2 text-lg" />

                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" value={userInfo.email} onChange={handleChange} className="px-4 py-1 border-b-2 text-lg" />

                            <label htmlFor="contact">Contact</label>
                            <input id="contact" name="contact" type="tel" value={userInfo.contact} onChange={handleChange} className="px-4 py-1 border-b-2 text-lg" />

                            <label htmlFor="address">Address</label>
                            <input id="address" name="address" value={userInfo.address} onChange={handleChange} className="px-4 py-1 border-b-2 text-lg" />

                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" value={userInfo.password} onChange={handleChange} className="px-4 py-1 border-b-2 text-lg" />

                            <button className="px-7 py-4 my-6 bg-blue-800 text-white text-md rounded-xl">Register</button>

                        </form>
                        <div>
                            <p>Already have an Account <span className=" text-blue-900 font-bold">Login Here</span></p>
                        </div>
                    </div>
                </div>

                <figure className="w-9/12 h-300 bg-cover">
                    <img className="w-full h-full object-cover" src={regImg} alt="register image" />
                </figure>
            </main>
        </>
    );
};

export default Register;