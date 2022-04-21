import { DateResponse } from "./types";
import { IGoodbyeController } from "./interfaces";
import { LogSucces } from "../utils/logger";

export class GoodbyeController implements IGoodbyeController {

    public async getMessage(name?: string): Promise<DateResponse> {
        LogSucces('[/api/goodbye] Get Request');

        return {
            message: `Goodbye, ${name || "world"}`,
            date: new Date()
        }
    }
}