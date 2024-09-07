'use strict'
let allErrors=[];
let interval;
let onEffect=true;
// import {effectHoverOnSignIn } from "../js/common.js";
function id(idName) {
    let nameVariable = document.getElementById(idName);
    return nameVariable;
  }
console.log( id('phone'));
document.addEventListener('DOMContentLoaded',function(){
    id('phone').addEventListener('input',function(){
        // this.value=this.value.replace(/[^\d]/g,'');
    })
    showSignInOrSignUp('createNewAccount','formSignIn','formSignUp');
    showSignInOrSignUp('sign','formSignUp','formSignIn');
    id('formSignUp').addEventListener('submit',(e)=>{
        e.preventDefault();
        register();
        })
        id('formSignIn').addEventListener('submit',(e)=>{
            e.preventDefault();
            logIn();
            })

})

function register(){
    allErrors=[];
    const phoneNumber=phoneInput.getNumber();
    console.log(phoneNumber);
    if( id('password').value!== id('re-enterPass').value&&id('password').value.length>=6){
        id('password').style.borderColor='green';
        id('re-enterPass').style.borderColor='red';
        allErrors.push('passwords do not match, please try again');
    }
    if( id('password').value=== id('re-enterPass').value){
        id('re-enterPass').style.borderColor='green';
        postRequestForRegister();
    }
    if( id('password').value!== id('re-enterPass').value&&id('password').value.length<6){
        id('re-enterPass').style.borderColor='red';
        allErrors.push('passwords do not match, please try again');
    }
    if(allErrors.length>0){
        id('errorRegister').style.display='block';
        id('errorRegister').innerHTML=`${allErrors.join('')}`;
        }
        validNumber();

}





// const phoneInputField=document.getElementById('phone');




const phoneInput=window.intlTelInput(id('phone'),{
    initialCountry:'auto',
    geoIpLookup:function(callback){
        fetch('https://ipinfo.io/json?token=797e1bde1197f3').then(response=>response.json()).then(data=>callback(data.country)).catch(()=>callback('EG'));}
,utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.3.6/build/js/utils.js",
nationalMode:false,
separateDialCode:true,
})

function showSignInOrSignUp(button,signIn,signUp){
id(button).addEventListener('click',function(){
id(signIn).classList.remove('visible');
id(signUp).classList.remove('hidden');
id(signIn).classList.add('hidden');
id(signUp).classList.add('visible');
})
}



  async function postRequestForRegister(){
    var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
    let  formdata = new FormData();
formdata.append("username", id('userName').value);
formdata.append("password", id('password').value);
formdata.append("name", id('name').value);
formdata.append("email",id('email').value );
formdata.append("rePass",id('re-enterPass').value);
let response=await  fetch("https://tarmeezacademy.com/api/v1/register", { 
     method: "POST",
    body:formdata,
    redirect:'follow',
     headers: myHeaders
   })
   try{
   let data = await response.json();
   if(response.status===200){
  let userToken=data.token;
    window.location.href='http://127.0.0.1:5500/index.html';
  window.localStorage.setItem('userToken',JSON.stringify(userToken));
  window.localStorage.setItem('user',JSON.stringify(data.user));
   }
   else{
    id('errorRegister').style.display='block';
    hundleRegisterErrors(data.errors.username,'userName');
    hundleRegisterErrors(data.errors.email,'email');
    hundleRegisterErrors(data.errors.password,'password');

    hundleRegisterErrors(data.errors.username,'userName',true);
    hundleRegisterErrors(data.errors.password,'password',true);
    hundleRegisterErrors(data.errors.email,'email',true);
    if(id('email').classList.contains('redError')){
    effectHoverOnSignIn('sign');
    }
    if(id('email').classList.contains('redError')==false){
       clearInterval(interval);
       id('sign').classList.remove('hover');
    }

}

   }catch(error){
    allErrors.push('error in api');
   }
   if(allErrors.length>0){
    id('errorRegister').innerHTML=`${allErrors.join('')}`;
    }
   
}
   function hundleRegisterErrors(vari,element,test){
    if(test){
    if(vari==undefined){
        id(element).classList.remove('redError');
        id(element).classList.add('success');
    }}
    else{
        if(vari!=undefined){
           allErrors.push(vari);
           id(element).classList.add('redError');
        } 
    }
   }
// console.log(window.localStorage.getItem('userToken'));
// console.log(window.localStorage.getItem('user'));











// hhh();
const username='hjjkjookljsnjfdkkkWDWFf';

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var formdata = new FormData();
formdata.append("username", id('userName').value);
formdata.append("password", "123456");
formdata.append("name", "Yarob");
formdata.append("email", "yaruserojkdpml9897459.hm@gmail.com");
formdata.append("phone", "010899466");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow',
//   cache:'no-cache'
};

// fetch("https://tarmeezacademy.com/api/v1/register", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// 
async function logIn(){
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
 let  formdata=new FormData();
  formdata.append("username", id('logUserName').value);
formdata.append("password",id('logPassword').value);
  
 let res=await fetch("https://tarmeezacademy.com/api/v1/login",{
    method: "POST",
    body:formdata,
    redirect:'follow',
     headers: myHeaders

 })
 let data=await res.json();
 let userToken=data.token;
 if(res.status===200){
    window.localStorage.setItem('userToken',JSON.stringify(userToken));
    window.localStorage.setItem('user',JSON.stringify(data.user));
    window.location.href='http://127.0.0.1:5500/index.html';
 }
 else{
id('errorLogin').style.display='block';
 }
}







// 
// const number = iti.getNumber();
// or
// const number = phoneInput.getNumber(intlTelInput.utils.numberFormat.E164);
// console.log(number);
const isValid = phoneInput.isValidNumber();
console.log(isValid);

const extension = phoneInput.getExtension();
console.log(extension);


// document.getElementById('formSignUp').addEventListener('submit',()=>{
    function validNumber(){
    const isValid = phoneInput.isValidNumber();
    console.log(isValid);
    const error = phoneInput.getValidationError();
    console.log(error);
    if (error === intlTelInput.utils.validationError.TOO_SHORT) {
        // the number is too short
        console.log('error'); 
    }
    // const countryData = intlTelInput.getCountryData();
    const countryData = phoneInput.getSelectedCountryData();
    console.log(countryData);
    phoneInput.setPlaceholderNumberType("FIXED_LINE");
}
    // phoneInput.setNumber("+447733123456"); 
// })

const countryData = intlTelInput.getCountryData();
console.log(countryData);


export function effectHoverOnSignIn(elementId){
    let isHovered=false;
     interval=setInterval(()=>{
      if(isHovered){
        id(elementId).classList.remove('hover');
      }
      else{
        id(elementId).classList.add('hover');
      }
      isHovered=!isHovered;
    },500)
    setTimeout(()=>{
      clearInterval(interval);
      id(elementId).classList.remove('hover');
    },20000)
}

// async function phoneuser() {
fetch('/.netlify/functions/sendSMS?phone=01090090762').then(res=>res.json().then(data=>console.log(data)).catch(error=>console.log('error',error)));    
// }
// phoneuser();




// const input = document.querySelector("#phone");
    // window.intlTelInput(input, {
        // initialCountry:'auto',
        // geoIpLookup:function(callback){
            // fetch('https://ipinfo.io/json?token=797e1bde1197f3').then(response=>response.json()).then
        //   (data=>callback(data.country)).catch(()=>callback('US'));},
        // utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.3.6/build/js/utils.js",
        // js/intlTelInputWithUtils.js
    //   });

    //   scrollingElement.addEventListener("scroll", function() {
        // const e = document.createEvent('Event');
        // e.initEvent("scroll", true, true);
        // window.dispatchEvent(e);
    //   });



// twilio
// C9DKF1LMTDD5UR6JUXJ4CVGB
// C9DKF1LMTDD5UR6JUXJ4CVGB

// sid
// ACbac2f6f2a1afab09cfa2a22d8cb44f9b













// import{account}from "../js/appWrite.js";


async function hundleLogin() {
    // account.createSession('mm6136793@gmail.com','mmmmmnnnnn');
account.createOAuth2Session(
    'google',
    // 'https://chic-marzipan-4499bc.netlify.app',
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

// document.getElementById('button').addEventListener('click',function(){
    // hundleLogin();
// })



























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