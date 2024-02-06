import { ChangeEvent, FormEvent, useState } from "react";
import regImg from "../../assets/img/img-reg.jpg";
import chatIcon from "../../assets/icon/chat-icon.png";
import { ILogin } from "../../interface/auth";
import { getLogin } from "../../services/auth";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";

const Login = () => {
    const [userData, setUserData] = useState<ILogin>({ email: "", password: "" });
    const [LoginResult, setLoginResult] = useState<{ data?: object, error?: object }>({});

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const res: { data?: object, error?: object } = await getLogin(userData);
            if ("error" in res) {
                console.log(res.error);
                setLoginResult({ error: res });
            } else {
                console.log(res.data);
                setLoginResult({ data: res.data });
            }

        } catch (error) {

            console.log((error instanceof AxiosError), "helloss");
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
                        <form onSubmit={handleSubmit} className="flex flex-col text-sm">

                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" value={userData.email} type="email" onChange={inputHandler}
                                className="px-4 py-1 border-b-2 text-lg" />

                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" value={userData.password} type="password" onChange={inputHandler}
                                className="px-4 py-1 border-b-2 text-lg" />

                            <button type="submit" className="px-7 py-4 my-6 bg-blue-800 text-white text-md rounded-xl">Login</button>
                            {/* <div><p>{LoginResult.error}</p></div> */}

                        </form>
                        <div>
                            <p>Don&apos;t have Account <span className=" text-blue-900 font-bold"><Link to="/register">Register Here</Link></span></p>
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

export default Login;