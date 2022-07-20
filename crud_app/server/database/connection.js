// const mongoose = require('mongoose')

// const url = `mongodb+srv://admin:admin123@cluster0.hcpm0uv.mongodb.net/?retryWrites=true&w=majority`;

// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// }
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to the database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. n${err}`);
//     })


const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            //the doesnt support in the Mongoose version after 6
            //https://stackoverflow.com/questions/68915722/option-usefindandmodify-is-not-supported
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifiedTopology: true 
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB