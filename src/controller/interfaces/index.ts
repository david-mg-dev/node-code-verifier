import { BasicResponse } from "../types";
import { DateResponse } from "../types";


export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IGoodbyeController {
    getMessage(name?:string): Promise<DateResponse>
}