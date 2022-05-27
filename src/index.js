import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import { connect } from "../database";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
connect();
//habilitar express json
app.use(express.json({ extended: true }));
app.use(cors())


//middleware
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.json({
    message: "Hola mundo",
  });
});


app.post("/api/editar", (req, res) => {
  let {id,nombre,edad} = req.body;
  edad = parseInt(edad)
  axios('http://localhost:4000/graphl',{
    method:'post',
    data:{
      query:
      `
      mutation( $identificador :ID ){
        updateMascota(_id: $identificador , input:{nombre:$nombre , edad:$edad}){
          nombre
          edad
        }
      }
      `,
      variables:{
        nombre: nombre,
        edad:edad,
        identificador:id
      }
    }
  }).catch((err) => console.log(err.message));
  res.redirect("http://localhost:3000/");
});


app.use(
  "/graphl",
  graphqlHTTP({
    //configuracion del servidor graphql
    graphiql: true,
    schema: schema,

    //context
  })
);
app.listen(4000, () => console.log("Servidor en puerto 4000"));
