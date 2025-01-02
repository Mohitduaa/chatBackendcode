// import mongoose from "mongoose";
// console.log(process.env.MONGODB_URI)
// function connect(){
//     mongoose.connect(process.env.MONGODB_URI)
//     .then(()=>{
//         console.log('connected to MongoDB');
//     })
//     .catch(err=>{
//         console.log(err);
        
//     })
// }
// export default connect;

import mongoose from 'mongoose';

console.log('MongoDB URI:', process.env.MONGODB_URI);

function connect() {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, // Timeout set to 30 seconds
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB:', err);
  });
}

export default connect;
