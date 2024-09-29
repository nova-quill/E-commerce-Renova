
  
'use strict'
import {id,addClassActive,fetchProducts,datas,displayProducts,createDiv,addNumberToIconCart,dragByTouch,existUserOrNot, createHrefForElementsFooter,
  limitLocationProductsBySidebar,getAllElements} from "../js/common.js";
let quantityProducts=0;
let getProductFromLocal;
let objectQuan;
let secondHeader = document.querySelector("header .second-nav ul");
let linkHeader = document.querySelectorAll("header .second-nav a");
let iconsPersonal = document.querySelectorAll(
  "header .main-nav .personal.mobile a.iconPersonal"
);
let allLinksFooter=document.querySelectorAll('footer .category li a');
let allLinksSideBar=document.querySelectorAll('.sideBar.hidd');
let allTrendingSide=document.querySelectorAll('#boxSideBar #trending dd a');


document.addEventListener('DOMContentLoaded',(info=>{
    // start header
      addClassActive(iconsPersonal, "active");
      addClassActive(linkHeader, "active");
      // start sidebar
      getAllElements(allTrendingSide,limitLocationProductsBySidebar);
createHrefForElementsFooter(allLinksSideBar);

    dragByTouch(secondHeader);
    // start shows product in cart
    existUserOrNot('cartUser','productCart','cart','countPurshes');
    // existUserOrNot('favoriteUser','favoriteCart','favorite','countFavorites');

    // existUserOrNotInfav('cart','countPurshes');
    existUserOrNotInfav('favorite','countFavorites');
    // start footer
    createHrefForElementsFooter(allLinksFooter);


}))


 // are user or not
  function existUserOrNotInfav(iconName,iconId){
    if(window.localStorage.getItem('user')){
      let user=JSON.parse(window.localStorage.getItem('user'));
      console.log(user.id);
      filterProductsInCart(id,'productsInCart',`favoriteUser${user.id}`,`proAndQuantityInFav${user.id}`,iconName,iconId);
    }
    else{
      if(window.localStorage.getItem('favoriteCart'==null)){
        let arrayProducts=[];
      window.localStorage.setItem('favoriteCart',JSON.stringify(arrayProducts));
      }
      filterProductsInCart(id,'productsInCart','favoriteCart','proAndQuantityInFav',iconName,iconId);
    
    }
    }
// filter products in cart
 export async function filterProductsInCart(func,container,productsInLoc,proAndQuantityIt,iconName,iconId,test){
  await fetchProducts(test);
  let totalPrices=0;
  let totalDiscounts=0;
if(JSON.parse(window.localStorage.getItem((productsInLoc)) )){
  if(JSON.parse(window.localStorage.getItem((proAndQuantityIt)) )){
 objectQuan=JSON.parse(window.localStorage.getItem((proAndQuantityIt)) ).reverse()||[];
  }
 getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) ).reverse()||[];

  displayProducts(getProductFromLocal, func, container);
  // let acard=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .aCardLess');
  let acard=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .aCardLess');

  let detailsProduct=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .aCardLess .detailsProduct');

console.log(acard);
acard.forEach((element,index)=>{
  let containerRemAndBuy=document.createElement('div');
  containerRemAndBuy.className='containerRemAndBuy flex-just-between';
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
  containerQuantity.appendChild(amount);
  element.appendChild(containerQuantity);
})
addNumberToIconCart(productsInLoc,iconName,iconId);
removeProductFromCart(productsInLoc,proAndQuantityIt,iconName,iconId);
console.log(getProductFromLocal);
if(getProductFromLocal.length>0){
  quantityProducts=0;
  updateQuantityWhenReload(document.querySelectorAll('input.amount'),proAndQuantityIt);
  id('headingCart').innerHTML=`your favorite includes ${getProductFromLocal.length} products, ${quantityProducts} quantity` ;
}
if(getProductFromLocal.length==0){
  id('headingCart').innerHTML=`your favorite is empty, let's fill it`;
  id('containerPriceCart').style.display='none';
}
getProductFromLocal.forEach(item=>{
  totalPrices+=item.price-(item.price*item.discountPercentage/100);
  totalDiscounts+=item.price*Math.round(item.discountPercentage)/100;
});
id('totalPrices').innerHTML=`${totalPrices.toFixed(1)}`;
id('totalDiscounts').innerHTML=`${totalDiscounts.toFixed(1)}`;

console.log(totalPrices,totalDiscounts);
}
else{
  id('headingCart').innerHTML=`your favorite is empty, let's fill it`;
  id('containerPriceCart').style.display='none';
}
updateQuantityWhenInput(document.querySelectorAll('input.amount'),proAndQuantityIt);
updateQuantityWhenReload(document.querySelectorAll('input.amount'),proAndQuantityIt);

}
// localStorage.clear();
// remove product from cart
function removeProductFromCart(productsInLoc,proAndQuantityIt,iconName,iconId){
  let allButtonsRemove=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .cardLessThan div.containerRemAndBuy .clear');
  console.log(getProductFromLocal); 
  allButtonsRemove.forEach(element=>{
    element.addEventListener('click',(event)=>{
      console.log('lesa');
      console.log(getProductFromLocal);
  getProductFromLocal=getProductFromLocal.filter((product,ind)=>{
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
existUserOrNotInfav(iconName,iconId);
addNumberToIconCart(productsInLoc,iconName,iconId);
    })
  })
}
function updateQuantityWhenInput(inputs,proAndQuantityIt){
  if(window.localStorage.getItem((proAndQuantityIt))){
 
 let objectQuann=(JSON.parse(window.localStorage.getItem((proAndQuantityIt))).reverse())||[];
inputs.forEach(input=>{
  input.addEventListener('input',(info)=>{
    if(info.target.value&&info.target.value>0){
objectQuann.forEach(element=>{
if(info.target.id==`amount${element.productId}`){
  element.quantityPro=info.target.value;
}
})
window.localStorage.setItem(proAndQuantityIt,JSON.stringify(objectQuann.reverse()));
    }
    if(getProductFromLocal.length>0){
      quantityProducts=0;
      updateQuantityWhenReload(document.querySelectorAll('input.amount'),proAndQuantityIt);
      id('headingCart').innerHTML=`your cart includes ${getProductFromLocal.length} products,${quantityProducts} quantity` ;
    }
  })
})
}}
function updateQuantityWhenReload(inputs,proAndQuantityIt){
  let objectQuann=(JSON.parse(window.localStorage.getItem((proAndQuantityIt))))||[];
 inputs.forEach(input=>{
     if(input.value){
 objectQuann.forEach(element=>{
 if(input.id==`amount${element.productId}`){
  input.value= element.quantityPro;
  quantityProducts+= (+element.quantityPro);
  console.log(input.value, element.quantityPro,input.id,`amount${element.productId}`);
 }
 })
     }
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

























  // are user or not
//   function existUserOrNot(){
//     if(window.localStorage.getItem('user')){
//       let user=JSON.parse(window.localStorage.getItem('user'));
//       console.log(user.id);
//       filterProductsInCart(id,'productsInCart',`favoriteUser${user.id}`,`proAndQuantityInFav${user.id}`);
//     }
//     else{
//       if(window.localStorage.getItem('favoriteCart'==null)){
//         let arrayProducts=[];
//       window.localStorage.setItem('favoriteCart',JSON.stringify(arrayProducts));
//       }
//       filterProductsInCart(id,'productsInCart','favoriteCart','proAndQuantityInFav');
    
//     }
//     }