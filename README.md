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
