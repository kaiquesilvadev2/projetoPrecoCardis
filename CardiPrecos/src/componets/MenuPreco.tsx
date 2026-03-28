import type React from "react";
import type { MenuPrecosType } from "../services/types/MenuPrecosType";

interface IMenuPrecosProps extends React.ComponentProps<"div"> {
    listaMenu: MenuPrecosType[]
}

export default function MenuPrecos({ className, listaMenu, ...props }: IMenuPrecosProps) {
    return (

        <div className={` ${className}`} {...props}>
            {listaMenu.map(itens => (
                <div className="bg-gray-800" key={itens.id}>
                    <p>{itens.nomePagote}</p>
                    <p>R$ {itens.preco}</p>
                    <ul>
                        {itens.listaVantagens.map(listavantagens => (
                            <li key={listavantagens.id}>
                                {listavantagens.pacoteIncluso}
                            </li>
                        ))
                        }
                    </ul>
                    <button>assine já</button>
                </div>
            ))
            }
        </div>
    )
}

