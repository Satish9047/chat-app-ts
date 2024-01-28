import  { FC, JSX, useContext } from "react";
import regImg from "../../assets/img/img-reg.jpg";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import { AuthContext } from "../../contexts/authContext";

export interface IAuthWrapper {
    children: JSX.Element
}

const AuthWrapper = ({children}:IAuthWrapper)=>{
    return (<main className=" flex w-screen h-screen">

            <div className=" w-3/12 flex flex-col justify-center items-center">
                {children}
            </div>

            <figure className="w-9/12 h-300 bg-cover">
                <img className="w-full h-full object-cover" src={regImg} alt="register image" />
            </figure>
        </main>)
}

const Auth:FC = () => {
    const [{isLoggedIn, ...rest}] = useContext(AuthContext)
    console.log(isLoggedIn, rest);
    if (isLoggedIn) return <AuthWrapper><Login/></AuthWrapper>

    return <AuthWrapper><Register/></AuthWrapper>
}

export default Auth