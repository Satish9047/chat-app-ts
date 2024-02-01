import { FC } from "react"
import profileImg from "../../assets/img/img-reg.jpg";

const Avatar:FC = () => {
  return (
    <figure className="w-[50px] h-[50px] rounded-full">
        <img className="rounded-full" src={profileImg} alt="profile image"/>
    </figure>
  )
}

export default Avatar