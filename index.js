const express =  require('express');
const bodyParser=require('body-parser');
const morgan = require('morgan');
const app=express();
const middlewares=require('./util/validator.js');
const timestamp=require('time-stamp');

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var map=new Map();//This will help create new values and pairs for the url.



app.get('/',(req,res)=>

{
    res.sendFile(__dirname+'/views/index.html');
}); 

app.get('/getshort/:id',(req,res)=>
{
    try {
        const redirecturl=String(map.get(String(req.params.id)));
        
        res.redirect(new URL(redirecturl));
    } catch (error) {
        res.status(404).send(error);
    }
})
app.post('/getshort',middlewares.urlvalidator,middlewares.emailvalidator,(req,res,next)=>
{
    console.log(req.body)
    
    return next()
    
},(req,res,next)=>
{
    //TODO: Design a shorter URL. 
    //Of the format domainname.com/:id number. 
    if(!req.body.isValidURL|| !req.body.isValidEmail)
    res.status(400).send({message:"Bad URL or Email Address"});
    else
    {

        var randid=Math.floor(Math.random()*500);
        var ts=timestamp.utc('YYYYMMDDHHmmssms');
        console.log(ts);
        map.set(ts,req.body.url);
        //console.log("The map has been updated");
        const revampedURL=req.protocol + '://' + req.get('host') + req.originalUrl +'/'+ts;
        res.status(200).json({message:revampedURL});
        

    }


})

app.listen(process.env.PORT||8080,'0.0.0.0',()=>
{
    console.log("Hey the server is up! ");

});
