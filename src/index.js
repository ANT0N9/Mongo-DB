const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 9000;
app.listen(port, ()=> console.log('El puerto es',port)) //detecta a que puerto estas conectado

//rutas (petiviones y solicitudes)
app.get('/',(req,res)=>{
    res.send('Bienvenido a mi API')
})


//Coneccion a mongodb
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ppantojam09:1234@cluster0.wgcd0zf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("Cluster0").collection("devices");
  // perform actions on the collection object
  client.close();
});
