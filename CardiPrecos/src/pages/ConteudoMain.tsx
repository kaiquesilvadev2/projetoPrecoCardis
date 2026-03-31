import type React from "react";
import Header from "../componets/Header";


interface IConteudoMainProps extends React.ComponentProps<"section"> {
}


export default function ConteudoMain({ className, ...props }: IConteudoMainProps) {
    return (

        <section className={` flex justify-center my-12 ${className}`} {...props}>
            <p className="text-6xl uppercase font-bold text-white">Escolha seu plano</p>
        </section>
    )
}

