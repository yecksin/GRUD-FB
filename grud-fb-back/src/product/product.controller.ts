import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';

@Controller('product')
export class ProductController {

    @Post('/create') //Metodo y ruta que sigue para hacer el post (Post se importa)
    createPost(@Res() resp, @Body() createProductDTO: CreateProductDTO){ // @Res() nos permite manejar las respuestas  / @Body() data transfer object, se crea el dto para saber que data debellegar
        // console.log(createProductDTO);
        return resp.status(HttpStatus.OK).json({ //HttpStatus nos permite devolver codigos de estados
            message: 'received'
        });
    }

}
