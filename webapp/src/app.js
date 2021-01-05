const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express();
const viewfolder = path.join(__dirname,'../template/views')
const partialfolder = path.join(__dirname,'../template/partials')
app.set('view engine','hbs')
app.set('views',viewfolder)
hbs.registerPartials(partialfolder)


app.get('',(req,res)=>{
    res.render('',{'title':'param','created':'qamar'})
})

app.get('/help',(req,res)=>
{
    res.send({'prod':'abc'})
})

app.get('/about',(req,res)=>
{
    res.send('About ')
})
app.listen(3000,()=>{console.log('running server')
})
console.log('Hello')