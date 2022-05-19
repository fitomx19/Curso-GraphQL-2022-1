import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from './schema';
import {connect} from '../database'

const app = express();
connect();


app.get('/', (req,res)=>{
    res.json({
        message: 'Hola mundo'
    })
})

app.use('/graphl' , graphqlHTTP({
    //configuracion del servidor graphql
    graphiql: true,
    schema:schema

    //context
}))
app.listen(3000, () => console.log("Servidor en puerto 3000"));