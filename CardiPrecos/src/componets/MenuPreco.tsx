import type React from "react";
import type { MenuPrecosType } from "../services/types/MenuPrecosType";

interface IMenuPrecosProps extends React.ComponentProps<"div"> {
    listaMenu: MenuPrecosType[]
}

export default function MenuPrecos({ className, listaMenu, ...props }: IMenuPrecosProps) {
    return (

        <div className={`flex gap-5 w-full flex-wrap items-stretch justify-center ${className}`} {...props}>
            {listaMenu.map(itens => (
                <div className="flex flex-col justify-between flex-1 max-w-2xs
                bg-[#383f44] p-5 min-h-72 rounded-[0.4rem] shadow-sm "
                    key={itens.id}>
                    <div>
                        <h2 className="text-white text-left text-2xl truncate max-w-[200px] uppercase -tracking-wider border-b-[#cbe300] border-b-2 pb-2.5 ">{itens.nomePagote}</h2>
                        <p className="text-white text-2xl mt-2">R$ {itens.preco} <span className="text-[1rem]">/ mês</span></p>
                        <ul className="flex flex-col gap-1.5 mt-3">
                            {itens.listaVantagens?.map(listavantagens => (
                                <li className=" text-[#b5b5b5] text-[0.9rem] " key={listavantagens.id}>
                                    <p className="flex items-center justify-between"><span className="block rounded-full w-1 h-1 bg-[#A1B50E] mr-2.5"></span> <span className="flex-1">{listavantagens.pacoteIncluso}</span> </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="text-[1.3rem] bg-[#A1B50E] rounded-[0.3rem] py-1.5 w-full hover:scale-110  transition-all duration-500 mt-3.5">assine já</button>
                </div>
            ))
            }
        </div>
    )
}

