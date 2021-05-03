import { Document } from 'mongoose'
export interface Product extends Document{ // se extiende Document para que lo reonosca como document / json
    readonly name: string;
    readonly description: string;
    readonly imageURL:string;
    readonly price:number;
    readonly createdAt: Date;
}