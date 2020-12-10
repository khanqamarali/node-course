const request = require('postman-request')

const url = 'https://reqres.in/api/products/'

request({url:url,json:true}, (error,response) => {
            console.log(response.body.data)
    })
