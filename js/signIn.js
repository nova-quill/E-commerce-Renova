'use strict'

let initContainer=document.querySelector('div.iti__country-container');
console.log(initContainer);
let allErrors=[];
let interval;
let phoneInput;
function id(idName) {
    let nameVariable = document.getElementById(idName);
    return nameVariable;
  }

  function fullWidthCountry() {
initContainer.addEventListener('click',()=>{
  console.log('hjkk');
})
  }
 
   phoneInput=window.intlTelInput(id('phone'),{
    initialCountry:'auto',
    geoIpLookup:function(callback){
        fetch('https://ipinfo.io/json?token=797e1bde1197f3').then(response=>response.json()).then(data=>callback(data.country)).catch(()=>callback(''));}
,utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.3.6/build/js/utils.js",
nationalMode:false,
separateDialCode:true,
})
let nameCountry=intlTelInput.getCountryData();
document.addEventListener('DOMContentLoaded',function(){
  // fullWidthCountry();

    id('phone').addEventListener('input',function(){
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
let response=await  fetch("https://tarmeezacademy.com/api/v1/register", { 
     method: "POST",
    body:formdata,
    redirect:'follow',
     headers: myHeaders
   })
   try{
   let data = await response.json();
   if(response.status===200){
    let hh=[];
    window.localStorage.setItem(`cartUser${data.user.id}`,JSON.stringify(hh))
    data.user.local=JSON.parse(window.localStorage.getItem(`cartUser${data.user.id}`))||[];
  let userToken=data.token;
    window.location.href='../index.html';
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
 let hh=[];
 if(res.status===200){
    if((window.localStorage.getItem(`cartUser${data.user.id}`))==null){
        window.localStorage.setItem(`cartUser${data.user.id}`,JSON.stringify(hh))
    }
    window.localStorage.setItem('userToken',JSON.stringify(userToken));
    window.localStorage.setItem('user',JSON.stringify(data.user));
    window.location.href='../index.html';

 }
 else{
id('errorLogin').style.display='block';
 }
}


    function validNumber(){
    const isValid = phoneInput.isValidNumber();
    const error = phoneInput.getValidationError();
    if (error === intlTelInput.utils.validationError.TOO_SHORT) {
    }
    const countryData = phoneInput.getSelectedCountryData();
    phoneInput.setPlaceholderNumberType("FIXED_LINE");
}

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















































