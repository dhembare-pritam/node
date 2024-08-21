// var express =require('express')
// var app=express();
// console.log(__dirname)
// // app.use('/cssFile',express.static(__dirname + '/assets'))
// app.listen(2003,function()
 
// {
//     console.log('listining at port  2003')
// })
 
// // app.get('/helloworld',function(req,res){
// //   jsonObj={name:"abhi"}
// //     res.send(jsonObj)
// // })

// app.get('/byebye',function(req,res){
 
//   data=[
//     {name:'pritam', email:'pritam@gmail.com', lname:'dhembare'}
//   ]
//  //res.send("bye bye")
//  res.send(data)
// })

// var express = require('express')
// var app = express()

// app.listen(2003,function(){
//    console.log('listining port 2003')
// })
// app.get((req,res)=>{
//    Data=[{name:'pritam', lname:"dhemabre", email:"dhembarepritam@gmail.com"}]
//    res.send(data)
// })
/*

*/
// var express = require('express')
// var dataobj = express()
// dataobj.listen(2003, function(){
//      console.log('listining port 2003')
// })

// dataobj.get('/user', function(req,res){

//    data={name:'pritam', email:'pritam@gmail.com', lname:'dhembare'}
//         res.send(data)
// })

// var express = require('express')
// var dataobj = express()

// dataobj.listen(2003, function(){
//       console.log('listining on the 2003')
// })

// // dataobj.get('/hello', function(req,res){

// //     data = {name:'pritam'}
// //     res.send(data)
// // })

// dataobj.post('/send', function(req, res){
    
// })

// // dataobj.put('/update')
// // dataobj.delete('/delete')

// // dataobj.get('/user', function(req,res){
// //     data={name:'tejas', email:'dhembare@gmail.com', password:'pritam@1234'} 
// //     res.send(data)
// // })


var express = require('express')

var app = express()

app.listen(2003, function(){
      console.log('listening at port 2003')
})

app.get('/helloworld', function(req,res){
     data = {name:'pritam'}
     res.send(data)
})
