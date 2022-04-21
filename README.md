# node-code-verifier
Node Express project - backend

# Requirements

- NodeJS *Recomendable ultima version lts
- npm *ultima version
- expressJS ```npm i express```

# Installations

- Clonar el Proyecto
- Instalar todas las dependencias ```npm install```
- Copiar 'env.example' to '.env' 
- Establecer tus propias variables

# Script

- ```"build": "npx tsc"``` Con el comando tsc va a generar a partir del archivo de configuracion tsconfig.json (ejecutara y realizara lo que tengamos definido dentro del archivo tsconfig.json)
- ```"start": "node dist/index.js"``` Ejecutara el codigo transpilado a partir de nuestro codigo typescript
- ```"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""``` Utilizaremos para realizar pruebas(para estar escuchando cualquier modificacion , hacer una transpilacion y nodemon para tener la ultima version disponible en nuestro navegador
- ```"test": "jest" ``` Ejecutaremos los archivos de test generados con jest que estan almacenados en la carpeta del proyecto __test__
- ```"serve:coverage": "npm run test && cd coverage/lcov-report && npx serve"``` Lanza el test de prueba, muestre el coverage y se sirva a la web

# Dependencies

- typescript ```npm i -D typescript```
- version typescript de node y express ```npm i -D @types/express @types/node```
- tsc (Herramienta para utilizar typescrpit, nos genera un archivo de configuracion de typescript) ```npx tsc --init```
- concurrently (Ejecuta comandos de forma concurrente en los script) ```npm i -D concurrently```
- webpack (Herramienta que empaqueta la solucion haciendola mas ligera)
- eslint (Herrmaienta para establecer reglas en el proyecto para trabajar en equipo progamando de manera correcta y limpia)      ```npm i -D eslint```
- jest (Libreria de test unitarios de integracion) ```npm i -D jest ts-jest @types/jest supertest```
- ts-node (Trasnpilar codigo a typescript) ```npm i -D ts-node```
- serve (Servir nuestro coverage a nivel de web) ```npm i -D serve```
- cors (Nos permitira hacer peticiones de dominio diferentes a donde tengamos deplegada la aplicacion)  ```npm i cors```
- helmet (Seguridad en determinadas peticiones)  ```npm i helmet```

