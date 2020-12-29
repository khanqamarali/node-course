setTimeout(()=>{
    console.log('Two seconds')
},4000
)

const names = ['salam farsi','luqnan','kiszer']
names.filter((name)=>{
    console.log(name)
})

const apiresult = (address,callback) =>
{
    setTimeout( () => {
            const data = {
                latitue :0,
                longtitue:0
            }
            callback(data)
        },4000)
}

apiresult('london',(data)=>
{
    console.log(data)
})