//step1 : require the inbuild node js module https
const https = require('https');

//step2: use the get method of the https to make a get api call
//by default async method
https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {

    let resp = "";
    
    //step3 : read each and every chunk of data which is received and store it in data 
    res.on('data', (chunk) => {
        resp += chunk;
    })

    //step4: listen to the end event ,to know if full data is rececived 
    res.on('end', () => {
        let jsonData = JSON.parse(resp);
        console.log(jsonData);
    })
})