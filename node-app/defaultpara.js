const user =
{
    firstname:'abc',
    lastname:''
}
const sendname = (name,{firstname,lastname}={})=>
{
    console.log(name,user)
}

sendname('qama',user)