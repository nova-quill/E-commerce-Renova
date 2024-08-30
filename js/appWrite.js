const {Client,Account} =Appwrite;
// import {Client,Account}from Appwrite;
console.log(Client);
let client;
let account;
// document.addEventListener('DOMContentLoaded',function(){
    client=new Client();
    client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66d18c3b0004da1a8334');
account=new Account(client);

account.createSession('mm6136793@gmail.com','mmmmmnnnnn').then(res=>{
    console.log(res);
}).catch(error=>{
    console.log(error);
})





// })
export{client,account};