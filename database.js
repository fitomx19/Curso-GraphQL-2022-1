import  mongoose  from "mongoose";

export async function connect(){
    try {
        
        await mongoose.connect('mongodb+srv://GRAPH:birds123@cluster0.vse0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        console.log("Base de datos funcionando =>")

    } catch (error) {
        console.log(error.message)
    }
}

//npm i mongoose dotenv
//mongodb+srv://GRAPH:<password>@cluster0.vse0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
