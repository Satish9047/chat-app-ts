import  { FC } from "react";
import regImg from "../../assets/img/img-reg.jpg";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";


const Auth:FC = () => {
    const isValid = false;
    return (
        <main className=" flex w-screen h-screen">

            <div className=" w-3/12 flex flex-col justify-center items-center">
                {isValid? <Login />: <Register/>}
            </div>

            <figure className="w-9/12 h-300 bg-cover">
                <img className="w-full h-full object-cover" src={regImg} alt="register image" />
            </figure>
        </main>
    )
}

export default Auth