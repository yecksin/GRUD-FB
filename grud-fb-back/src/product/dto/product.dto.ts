export class CreateProductDTO{    // readonly como que no es necesario ponerlo
    readonly name: string;
    readonly description: string;
    readonly imageURL:string;
    readonly price:number;
    readonly createdAt: Date;
}