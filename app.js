// importar el módulo express js
const express = require("express");

//iniciar la funcionalidad de express js
const app = express();

//definir el puerto que vamos a usar
const PORT = 3000;

const books = {
    '1': { 'title':'El Quijote' },
    '2': { 'title':'La Iliada' },
    '3': { 'title':'La Metamorfosis' },
    '4': { 'title':'El Tenorio' },
};

//creamos peticiones rest

app.get("/", (request, response) => {
  response.send(
    "<h1> Buenos días </h1><p> Has recibido una respuesta del servidor</p>"
  );
});

app.get("/frutas", (req, res) => {
  res.send(`<ul>
        <li>Manzana</li>
        <li>Pera</li>
        <li>Naranja</li>
        <li>Fresa</li>
    </ul>`);
});

app.get("/getbook/:id", (req, res) => {
    //obtengo el parametro id que me manda en la request
    const id = req.params.id;
    //devuelvo el dato que se me pide
    res.send(books[id]);
})

//indicamos al servidor que puerto tiene que escuchar

app.listen(PORT, () => {
  console.log(`se ha iniciado el servidor en el puerto: ${PORT}`);
});
