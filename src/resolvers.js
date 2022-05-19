//import {mascotas} from './sample';
import Mascotas from '../src/Models/Mascotas'


export const resolvers = {
    Query:{
        hola: () => {
            return 'Hello world'
        },
        async mascotas(){
            return await Mascotas.find();
        }
    },
    Mutation:{
        async createMascota(_, {input}){
            const nuevaMascota = Mascotas(input)
            await nuevaMascota.save()
            console.log(nuevaMascota)
            return nuevaMascota
        }
    }
}