import type { ListaVantagens } from "./ListaVantagensType"

export interface MenuPrecosType {
    id: number
    nomePagote: string,
    preco: number,
    listaVantagens: ListaVantagens[]
};