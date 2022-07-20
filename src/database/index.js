const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nodejs_API:9igcc32A5h2N9Vsk@nodejsapi.lhpgyks.mongodb.net/?retryWrites=true&w=majority", {}, (error)=>{
    if(error){
        console.log('Falaha ao atenticar com mongodb');
        console.log(error);
        return
  }

  console.log('Conecção com mongodb estável');
})

mongoose.Promise = global.Promise;

module.exports = mongoose;
