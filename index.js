import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.listen(port, () => console.log("http://localhost:3000"));

app.get("/", (req,res) =>{
    res.send("Hola Andrea");
});

app.get("/test/:nombre", (req,res) =>{

    res.send("test " + req.params.nombre);
});

app.post("/testpost", (req, res) => {
    const data = req.body;
    console.log("Datos recibidos:", data);
    res.send("OK");
});