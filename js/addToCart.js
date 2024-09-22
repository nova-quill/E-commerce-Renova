'use strict'
import {id,addClassActive,fetchProducts,datas,displayProducts,createDiv,addNumberToIconCart,dragByTouch} from "../js/common.js";
// import{getAuth,signInWithEmailAndPassword} from'firebase/auth'
// import {showsDetailsProduct} from "../js/detailsProduct.js";
let getProductFromLocal;
let objectQuan;
let secondHeader = document.querySelector("header .second-nav ul");
let linkHeader = document.querySelectorAll("header .second-nav a");
let iconsPersonal = document.querySelectorAll(
  "header .main-nav .personal.mobile a.iconPersonal"
);
document.addEventListener('DOMContentLoaded',(info=>{
    // start header
      addClassActive(iconsPersonal, "active");
      addClassActive(linkHeader, "active");
    dragByTouch(secondHeader);
    // start shows product in cart

    // filterProductsInCart(id,'productsInCart','productCart');
    existUserOrNot();
}))
// are user or not
 function existUserOrNot(){
if(window.localStorage.getItem('user')){
  let user=JSON.parse(window.localStorage.getItem('user'));
  console.log(user.id);
  filterProductsInCart(id,'productsInCart',`cartUser${user.id}`,`proAndQuantityIt${user.id}`);
  // removeProductFromCart(`cartUser${user.id}`);
  // removeProductFromCart(`cartUser${user.id}`)
}
else{
  filterProductsInCart(id,'productsInCart','productCart','proAndQuantityIt');
  // removeProductFromCart('productCart');
}
}
// filter products in cart
async function filterProductsInCart(func,container,productsInLoc,proAndQuantityIt,test){
  await fetchProducts(test);
  let totalPrices=0;
  let totalDiscounts=0;
if(JSON.parse(window.localStorage.getItem((productsInLoc)) )){
 getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) ).reverse()||[];
 objectQuan=JSON.parse(window.localStorage.getItem((proAndQuantityIt)) ).reverse()||[];

  displayProducts(getProductFromLocal, func, container);
  let acard=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .aCardLess');
  let detailsProduct=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .aCardLess .detailsProduct');

console.log(acard);
acard.forEach((element,index)=>{
  let containerRemAndBuy=document.createElement('div');
  containerRemAndBuy.className='containerRemAndBuy';
  createDiv(1,'span','buy remBuy','','','buy now',containerRemAndBuy);
  createDiv(1,'span',`clear remBuy clear${index}`,'','','remove',containerRemAndBuy);
  element.appendChild(containerRemAndBuy);
  element.addEventListener('click',(event)=>{
    event.preventDefault();
  })
})
detailsProduct.forEach((element,index)=>{
  let containerQuantity=document.createElement('div');
  containerQuantity.className='containerQuantity flex-center';
  createDiv(1,'span','textAmount','','','quantity :',containerQuantity);
  let amount=document.createElement('input');
  amount.type='number';
  amount.name='amount';
  amount.className='amount';
  objectQuan.forEach((obj,ind,arr)=>{
    amount.value=arr[index].quantityPro;
    amount.id=`amount${arr[index].productId}`; 
  })
  // amount.value=1;
  // amount.id=
  containerQuantity.appendChild(amount);
  element.appendChild(containerQuantity);
})
addNumberToIconCart(productsInLoc);
removeProductFromCart(productsInLoc,proAndQuantityIt);
console.log(getProductFromLocal);
if(getProductFromLocal.length>0){
  id('headingCart').innerHTML=`your cart includes ${getProductFromLocal.length} products,quantity` ;
}
if(getProductFromLocal.length==0){
  id('headingCart').innerHTML=`your cart is empty, let's fill it`;
  id('containerPriceCart').style.display='none';
}
// else{
//   id('headingCart').innerHTML=`your cart is empty, let's fill it`;
//   id('containerPriceCart').style.display='none';
// }
getProductFromLocal.forEach(item=>{
  totalPrices+=item.price-(item.price*item.discountPercentage/100);
  totalDiscounts+=item.price*Math.round(item.discountPercentage)/100;
});
id('totalPrices').innerHTML=`${totalPrices.toFixed(1)}`;
id('totalDiscounts').innerHTML=`${totalDiscounts.toFixed(1)}`;

console.log(totalPrices,totalDiscounts);
}
else{
  id('headingCart').innerHTML=`your cart is empty, let's fill it`;
  id('containerPriceCart').style.display='none';
}
}
// localStorage.clear();
// remove product from cart
// let allButtonsRemove=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .cardLessThan div.containerRemAndBuy .clear');
// removeProductFromCart();
function removeProductFromCart(productsInLoc,proAndQuantityIt){
  let allButtonsRemove=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .cardLessThan div.containerRemAndBuy .clear');
  console.log(getProductFromLocal); 
  allButtonsRemove.forEach(element=>{
    element.addEventListener('click',(event)=>{
      console.log('lesa');
      // if(JSON.parse(window.localStorage.getItem((productsInLoc)) )){
      // let  getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) ).reverse()||[];
      console.log(getProductFromLocal);

  getProductFromLocal=getProductFromLocal.filter( (product,ind)=>{
let match=event.target.classList.contains(`clear${ind}`)==false;
return match;
})
window.localStorage.setItem(productsInLoc,JSON.stringify(getProductFromLocal.reverse()));
console.log(getProductFromLocal);
objectQuan=objectQuan.filter(element=>{
let matchPro=getProductFromLocal.some(product=>+element.productId==product.id);
return matchPro;
})
console.log(objectQuan);
window.localStorage.setItem(proAndQuantityIt,JSON.stringify(objectQuan.reverse()));



id('productsInCart').innerHTML='';
// filterProductsInCart(id,'productsInCart');
existUserOrNot();
addNumberToIconCart(productsInLoc);
      // }
    })
  })
}





// localStorage.clear();
// document.querySelector('#containerAddToCart section#addToCart .addToCart .container .productsInCart .cardLessThan').addEventListener('click',(event)=>{
//   event.stopPropagation();
// })







// const auth=getAuth();
// signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
  // const userId=userCredential.user.uid;
  // console.timeLog(userId);
// }).catch((rrror)=>{
  // console.error('sign in:error');
// })

// async function login() {
// fetch('https://dummyjson.com/auth/login',{
  // method:'POST',
  // headers:{'Content-Type':'application/json'},
  // body:JSON.stringify({
    // username:'kminchelle',
    // password:'OlelplR',
  // })
// }).then(res=>res.json()).then(data=>console.log(data));
  
// }
// login();