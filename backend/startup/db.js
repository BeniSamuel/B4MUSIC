const mongoose=require('mongoose');

module.exports=function(){
    const url='mongodb://localhost:27017/B4MUSIC'
    mongoose.connect(url)
    .then(()=>{
        console.log('Db successfully connected')
    })
    .catch(()=>console.log('Error occured during db connection'))
}