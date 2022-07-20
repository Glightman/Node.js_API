const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nodejs_api-GabsDev:Kaga@2019@cluster0.qrcqlwt.mongodb.net/?retryWrites=true&w=majority", {}, (error)=>{
    if(error){
        console.log('Falaha ao atenticar com mongodb');
        console.log(error);
        return
  }

  console.log('Conecção com mongodb estável');
})

mongoose.Promise = global.Promise;

module.exports = mongoose;