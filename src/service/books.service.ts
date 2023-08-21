import { Environment } from "../environments/environment";
import { get } from "./service.wrapper";

const url = `${Environment.apiUrl}/books`

export const getAllBook = async (skip : number) => {
    return get(`${url}/${skip}`);
};