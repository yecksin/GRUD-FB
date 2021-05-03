import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor (private _productService: ProductService){

    }
    @Post('/create') //Metodo y ruta que sigue para hacer el post (Post se importa)
    async createPost(@Res() resp, @Body() createProductDTO: CreateProductDTO){ // @Res() nos permite manejar las respuestas  / @Body() data transfer object, se crea el dto para saber que data debellegar
        const product = await this._productService.createProduct(createProductDTO);
        return resp.status(HttpStatus.OK).json({ //HttpStatus nos permite devolver codigos de estados
            message: 'Producto creado con exito',
            product // le manda el producto creado 
        });
    }

}
