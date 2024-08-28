'use strict'
import {id,addClassActive,fetchProducts,datas,displayProducts } from "../js/common.js";
// import{getAuth,signInWithEmailAndPassword} from'firebase/auth'
// import {showsDetailsProduct} from "../js/detailsProduct.js";

let linkHeader = document.querySelectorAll("header .second-nav a");
let iconsPersonal = document.querySelectorAll(
  "header .main-nav .personal.mobile a.iconPersonal"
);
document.addEventListener('DOMContentLoaded',(info=>{
    // start header
      addClassActive(iconsPersonal, "active");
      addClassActive(linkHeader, "active");
    // start shows product in cart
    filterProductsInCart(id,'productsInCart');
}))
// filter products in cart
// let  filterProducts ;
let hh;
let array=[];
let  filterProducts ;

async function filterProductsInCart(func,container,test){
  await fetchProducts(test);
  // let  filterProducts ;
  let categoryMatch;
  let category;
  // let array=[];
  const urlParams=new URLSearchParams(window.location.search);
  const productId=urlParams.get('productId');
  // const urlName=urlParams.get('url');
 filterProducts =datas.filter((product) => {
  if(test){
    category=product['id'];
  }
  else{
    category =product['id'];
  }
      categoryMatch=category==productId;
    return categoryMatch ;
})
// console.log(hh);
// array.push(...hh);
// console.log(array);
  displayProducts(filterProducts, func, container);
}
hh=filterProducts;

array.push(hh);

console.log(array);

let jj=    filterProductsInCart(id,'productsInCart');
console.log(jj);


// const auth=getAuth();
// signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
  // const userId=userCredential.user.uid;
  // console.timeLog(userId);
// }).catch((rrror)=>{
  // console.error('sign in:error');
// })

// async function login() {
fetch('https://dummyjson.com/auth/login',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    username:'kminchelle',
    password:'OlelplR',
  })
}).then(res=>res.json()).then(data=>console.log(data));
  
// }
// login();