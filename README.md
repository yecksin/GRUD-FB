# GRUD-FB

# comandos para crear componentes del proyecto
- $ nest --help
- $ nest generate module
- $ nest generate module product
- $ nest g controller product  
- $ nest g service product  

- crear carpeta dto (data tranfer object) en carpta que se está instalando los s, c, m
    - *dentro* -> producto.dto.ts

- crear carpeta interfaces
    - *dentro* -> product.interface.ts

- schemas *Mongo db*
    - *dentro* -> product.schema.ts

# comandos npm
*En package.json hay mas comenados*
- $ npm run start:dev
*en main ts podemos cambiar el puerto*


# Terminos (¿como re entender lo olvidado? lee esto)

- Los *controladores* son las *rutas* o los enpoints, les pones nombres y llamas al servicio para ejecutar el codigo o peticion a la bd
  Puedes tomar referencias sin problemas de un archivo .controller para copiar los datos y entender la dinamica
  
  los parametros:
  *@Res() resp* Es la respuesta del servidor
  *@Body() createProductDTO* son los datos que manda el cliente, pero se debe crear un DTO en la carpta dto para poder decir que datos llegan, es una clase
  
   *(Para mas info mira el controller, tiene comentarios)*

-


# Probar con postman
- cuando uses postman, fijate en los headers, para mandar json *key: Content-type  = value: aplication/json*


# Conectar con mongo db
## instalar mongo
- googlear nestjs mongodb
- para que salga la url: https://docs.nestjs.com/techniques/mongodb

- $ npm install --save @nestjs/mongoose mongoose
- se agregan modulo *mongose es como un orm*


## configurarmongo
- en el app module
import { MongooseModule } from '@nestjs/mongoose';
- imports
MongooseModule.forRoot('mongodb://localhost/products-nest')
- lo ultimo es el nombre del bd, nada de puertos

- $ db.getMongo() *para saber el puerto que está al final*

# crear schemas
- esto es para restringir o ajusta variables que se van a guardar el md, se poneobligatrios, auto generado, etc
- se crea el schema en la carpeta schemas *ahí hay un ejemplo*
- $ npm install @types/mongoose -D  *para ayudas con ts*
importamos el schema
- En el *modulo que se esta trabajando, no app module* se debe crear el import array
  imports:[
    MongooseModule.forFeature([
      {
        name: 'Product',
        schema: ProductSchema
      }
      
    ])
  ], 
