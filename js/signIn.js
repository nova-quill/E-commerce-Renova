
import{account}from "../js/appWrite.js";
fetch('https://cloud.appwrite.io/v1',{
    method:'GET',
    mode:'no-cors'
})

async function hundleLogin() {
    // account.createSession('mm6136793@gmail.com','mmmmmnnnnn');
account.createOAuth2Session(
    'google',
    'https://chic-marzipan-4499bc.netlify.app',
    // 'http://localhost:5500/',
    // 'http://localhost:5500/fail'
)}
// hundleLogin();
// getUser();
async function getUser() {
    try{
        const user=await account.get();
        renderProfileScreen(user);
    }
    catch(error){
renderLoginScreen();
    }
}

document.getElementById('button').addEventListener('click',function(){
    hundleLogin();
})



























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
function hundel(res){

}
// window.onload=function (){
    // google.accounts.id.initialize({
        // client_id:'464005441496-a3h35rbmsico35k5obv7a1euu4a1bi0o.apps.googleusercontent.com',
        // callback:hundel
    // })
    // google.accounts.id.renderButton(
        // document.querySelector('.g_id_signin'),{theme:"outline",size:'large'}
    // )
    // google.accounts.id.prompt();
// }