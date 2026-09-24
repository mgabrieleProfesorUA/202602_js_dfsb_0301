import express from 'express';

const app = express();

app.get("/", (req, res)=> {
  res.send("Bienvenido a la API RestFul")
});

app.listen(process.env.PUERTO, ()=>{
    console.log("Server escuchando por el puerto", process.env.PUERTO);
});