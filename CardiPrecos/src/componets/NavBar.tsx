import type React from "react";

const ListaNav = [
    {
        id: 1,
        nome: "Home"
    }, {
        id: 2,
        nome: "Planos"
    }, {
        id: 3,
        nome: "Suport"
    }, {
        id: 4,
        nome: "Contato"
    }
]

interface INavBarProps extends React.ComponentProps<"nav"> {
}


export default function NavBar({ className, ...props }: INavBarProps) {
    return (

        <nav className={` ${className}`} {...props}>
            <ul className="flex gap-4 flex-wrap">
                {
                    ListaNav.map(item => (
                        <li className="flex-1 " key={item.id}>
                            <button className="text-white text-1xl px-2 py-3 
                                rounded-[0.3rem] hover:bg-[#A1B50E]  ease-in-out hover:text-black 
                                transition-all duration-800"
                            >{item.nome}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

