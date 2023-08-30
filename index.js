import express from 'express';
import bodyParser from 'body-parser';
import { sendNotification, startNotificationListener } from './listener.mjs';

const app = express();

app.use(bodyParser.json());

const port = 3000;

startNotificationListener();

app.listen(port, () => console.log("http://localhost:3000"));

app.get("/", (req,res) =>{
    res.send("Hola mundo");
});

app.get("/test/:nombre", (req,res) =>{

    res.send("test " + req.params.nombre);
});

app.post("/testpost", (req, res) => {
    const data = req.body;
    console.log("Datos recibidos:", data);
    sendNotification(data);
    res.send("OK");
});