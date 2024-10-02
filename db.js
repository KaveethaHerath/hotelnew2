const { default: mongoose } = require("mongoose")

var mongoURL= 'mongodb+srv://kavee_herath:200160800190k@cluster0.octj7bq.mongodb.net/rooms'

//mongoose.connect(mongoURL,{useUnifiedTopology: true, useNewUrlParser:true})

//var connection= mongoose.connection

//connection.on('error',()=>{
  //  console.log('Mongo DB connection failed')
//})

//connection.on('connected',()=>{ 
  //  console.log('Mongo DB connection successful')
//})
//module.exports=mongoose 


mongoose.connect(mongoURL)
  .then(() => console.log('Mongo DB connection successful'))
  .catch(err => console.log('Mongo DB connection failed', err));

var connection = mongoose.connection;

module.exports=mongoose 