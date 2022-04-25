import { userEntity } from "../entities/User.entity";

import { LogError, LogSucces } from "@/utils/logger";

// CRUD

/**
 *  Mehod to obtain all Users from Collection "Users" in Mongo Server
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {
    try{
        let userModel = userEntity();

        // Search all users
        return await userModel.find({isDelete: false})

    }catch (error) {
        LogError(`[ORM ERROR]: Getting All Users: ${error}`); 
    }

}