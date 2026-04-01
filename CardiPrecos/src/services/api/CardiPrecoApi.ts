import axios from "axios";
import type { MenuPrecosType } from "../types/MenuPrecosType";

const api = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
)

export const CardiApi = {

    async buscarTodos(): Promise<MenuPrecosType[]> {

        const { data } = await api.get("/menuPrecos");
        return data;
    }

}

