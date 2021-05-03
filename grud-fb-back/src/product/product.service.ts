import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/product.dto';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){  // InjectModel

    }
    async getAllProducts(): Promise<Product[]>{ // esto va a tomar un tiempo (promesa) pero me va a deovler un arreglo de productos :)
       const products =  await this.productModel.find();
        return products;
    }
    async getProduct(productID:string):Promise<Product>{
        const product  = await this.productModel.findById(productID);
        return product;
    }
    async createProduct(createProductDTO:CreateProductDTO):Promise<Product>{ // dto porque es el body que le manda el user
       const product = new this.productModel(createProductDTO); // solo estamos crando el objeto que vamos a guardar
       return  await product.save(); // cuando es creado se guarda
       //otra forma
    //    await product.save(); // cuando es creado se guarda
    //    return product
    }
    async deleteProduct(productID:string):Promise<Product>{
        return await this.productModel.findByIdAndDelete(productID);
    }
    async updateProduct(productID:string,createProductDTO:CreateProductDTO){
        return await this.productModel.findByIdAndUpdate(productID, createProductDTO, {new:true}); // {new:true} me retorna el objeto actualizado 
    }

}
