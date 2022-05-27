import { makeExecutableSchema } from "@graphql-tools/schema";
import {resolvers} from "./resolvers";

const typeDefs = `
    type Query{
        hola:String
        mascotas:[Mascotas]
    }
    type Mascotas {
        _id: ID
        nombre: String
        edad: Int
        propietario: String
    }
    input MascotaInput{
        _id: ID
        nombre: String
        edad: Int
        propietario: String
    }
    type Mutation{
        createMascota(input: MascotaInput) : Mascotas
        updateMascota(_id:ID, input: MascotaInput) : Mascotas
        deleteMascota(_id:ID) : Mascotas
    }
`;

export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
})