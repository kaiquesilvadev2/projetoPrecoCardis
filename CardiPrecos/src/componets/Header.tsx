import type React from "react";
import NavBar from "./NavBar";


interface IHeaderProps extends React.ComponentProps<"header"> {
}


export default function Header({ className, ...props }: IHeaderProps) {
    return (

        <header className={`bg-[#040608] flex flex-wrap justify-between items-center p-4 w-full min-h-20 ${className}`} {...props}>
            <div><p className="text-white text-3xl uppercase">Myserver</p></div>
            <NavBar />
        </header>
    )
}

