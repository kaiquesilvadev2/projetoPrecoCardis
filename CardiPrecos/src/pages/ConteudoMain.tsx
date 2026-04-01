import type React from "react";
import Header from "../componets/Header";
import { useEffect, useState } from "react";
import { CardiApi } from "../services/api/cardiPrecoApi";
import MenuPrecos from "../componets/MenuPreco";
import type { MenuPrecosType } from "../services/types/MenuPrecosType";


interface IConteudoMainProps extends React.ComponentProps<"section"> {
}


export default function ConteudoMain({ className, ...props }: IConteudoMainProps) {

    const [cardiList, setCardiList] = useState<MenuPrecosType[]>([])

    useEffect(() => {
        async function buscaTodos() {
            const data = await CardiApi.buscarTodos();
            console.log("DADOS:", data); // 👈 aqui

            setCardiList(data)
        }

        buscaTodos()

    }, ([]))


    return (

        <section className={` flex flex-col justify-center ${className}`} {...props}>
            <p className=" my-12 text-4xl text-center md:text-6xl uppercase font-bold text-white">Escolha seu plano</p>
            <MenuPrecos listaMenu={cardiList} />
        </section>
    )
}

