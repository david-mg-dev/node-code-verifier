import mongoose from 'mongoose';
import { userEntity } from './User.entity';

export const kataEntity = () => {

    let kataSchema = new mongoose.Schema(
        {
            name: String,
            descripcion: String,
            level: Number,
            user: userEntity,
            date: Date,
            valoration: Number,
            chances: Number
        }
    )
}