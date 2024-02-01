import  { FC } from "react"
import Avatar from "../avatar/Avatar";

const Navbar:FC = () => {
  return (
    <div className="px-5 md:px-10 h-20 w-screen flex justify-between bg-[#7E2553] items-center ">
        <h1 className=" text-2xl font-bold">Chat App</h1>
        <Avatar />
    </div>
  )
}

export default Navbar