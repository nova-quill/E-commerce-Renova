
// import{id}from "../js/common.js";




function loginCallback(res){
    console.log(res);
}
let gg;
async function jkj(){
let jh=await fetch('https://apis.google.com/js/platform.js');
 gg=await jh.text();
console.log(gg);
return gg;
} 
   function initClient(){
       gapi.load('auth2',function(){
            const auth2=gapi.auth2.init({
                client_id:'464005441496-a3h35rbmsico35k5obv7a1euu4a1bi0o.apps.googleusercontent.com',
            })
        auth2.then(function(){
            console.log('kllk');
        }).catch(function(error){
            console.error('lll',error);
        })})
    }

function signIn(){
        const authInstance=gapi.auth2.getAuthInstance();
 authInstance.signIn().then(googleUser=>{
            const idToken=googleUser.getAuthResponse().id_token;
             console.log('token',idToken);
     }).catch(error=>{
         console.error('error',error);
     })
 }

 document.addEventListener('DOMContentLoaded',function(){
// jkj();
    // initClient();
// document.getElementById('button').addEventListener('click',()=>signIn());
});
