import type React from "react";
import Header from "../componets/Header";
import ConteudoMain from "../pages/ConteudoMain";
import MenuPrecos from "../componets/MenuPreco";
import { useEffect, useState } from "react";
import { CardiApi } from "../services/api/cardiPrecoApi";
import type { MenuPrecosType } from "../services/types/MenuPrecosType";


interface ILayoutAppProps extends React.ComponentProps<"div"> {
}


export default function LayoutApp({ className, ...props }: ILayoutAppProps) {



    return (

        <div className={`flex bg-[#272c2f] min-h-screen w-full justify-center ${className}`} {...props}>
            <div className="w-3xl">
                <Header />
                <ConteudoMain />

            </div>
        </div>
    )
}

