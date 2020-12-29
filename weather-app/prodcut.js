const request = require('postman-request')
const url = 'https://reqres.in/api/products/'
console.log('Getting Products')
const getproduct = function() 
{
    request({url:url,json:true}, (error,response) => {
        
        if(error)
        {
            console.log('message')
        }
        else
        {
        console.log(response.body.data)
        }
})
}
module.exports = getproduct