import express from 'express';

const app = express();

app.get("/", (req, res)=> {
  res.send("Bienvenido a la API RestFul")
});

app.listen(3000, ()=>{
    console.log("Server escuchando por el puerto 3000");
});