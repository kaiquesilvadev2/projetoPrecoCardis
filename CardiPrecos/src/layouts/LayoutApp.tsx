import type React from "react";
import Header from "../componets/Header";
import ConteudoMain from "../pages/ConteudoMain";


interface ILayoutAppProps extends React.ComponentProps<"div"> {
}


export default function LayoutApp({ className, ...props }: ILayoutAppProps) {
    return (

        <div className={`flex bg-[#272c2f] h-dvh w-dvw justify-center ${className}`} {...props}>
            <div className="w-3xl">
                <Header />
                <ConteudoMain />
            </div>
        </div>
    )
}

