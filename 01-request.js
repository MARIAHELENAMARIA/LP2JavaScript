const express = require("express");

const app = express();

function home(request, response){
    console.log(request.method);
    console.log(request.url);

    //response.status(404);

    response.send("Home Page");
}

function contato(request, response){
    response.send("<h1>Contato</h1>");
}

function redirect(request, response){
    response.status(301);
    response.header("Location", "/contato");
    response.send();
}

//roteamento
app.get("/", home);
app.get("/contato", contato);
app.get("/redirect", redirect);



app.listen(3000, () => console.log("Rodando na porta 3000"));