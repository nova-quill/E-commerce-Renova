
  
'use strict'
import {productId,productStock,id,addClassActive,fetchProducts,datas,displayProducts,createDiv,addNumberToIconCart,dragByTouch,existUserOrNot, createHrefForElementsFooter,existUserOrNotForIconCart,existUserOrNotForAddClassAtive,existUserOrNots,
  limitLocationProductsBySidebar,getAllElements,addClassActiveOnIconCart,addClassNoexistOnIcon} from "../js/common.js";
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
    existUserOrNotInfav('favorite','countFavorites',true);

    existUserOrNotForIconCart('cartUser','proAndQuantityIt','productCart',    'proAndQuantityIt','cart','countPurshes');

    existUserOrNotForAddClassAtive('cartUser','productCart','cart');
    // start footer
    createHrefForElementsFooter(allLinksFooter);


}))


 // are user or not
  function existUserOrNotInfav(iconName,iconId,isCart){
    if(window.localStorage.getItem('user')){
      let user=JSON.parse(window.localStorage.getItem('user'));
      console.log(user.id);
      filterProductsInCart(id,'productsInCart',`favoriteUser${user.id}`,`proAndQuantityInFav${user.id}`,iconName,iconId,isCart,'cartUser');
    }
    else{
      if(window.localStorage.getItem('favoriteCart'==null)){
        let arrayProducts=[];
      window.localStorage.setItem('favoriteCart',JSON.stringify(arrayProducts));
      }
      filterProductsInCart(id,'productsInCart','favoriteCart','proAndQuantityInFav',iconName,iconId,isCart,'productCart');
    
    }
    }
// filter products in cart
 export async function filterProductsInCart(func,container,productsInLoc,proAndQuantityIt,iconName,iconId,isCart,productsInLocCart,test){
  await fetchProducts(test);
  let totalPrices=0;
  let totalDiscounts=0;
if(JSON.parse(window.localStorage.getItem((productsInLoc)) )){
  if(JSON.parse(window.localStorage.getItem((proAndQuantityIt)) )){
 objectQuan=JSON.parse(window.localStorage.getItem((proAndQuantityIt)) ).reverse()||[];
  }
 getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) ).reverse()||[];

  displayProducts(getProductFromLocal, func, container);
  preventElementInFav(productsInLocCart,test);
existUserOrNotForAddClassAtive('cartUser','productCart','cart');
  let acard=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .aCardLess');

  let detailsProduct=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .aCardLess .detailsProduct');

console.log(acard);
acard.forEach((element,index)=>{
  let parentElement=element.parentElement.href;
  console.log(element.querySelector('.cart'));

  let url=new URL(parentElement);
  console.log(parentElement,url);
let searchUrl=new URLSearchParams(url.search);
let productId=searchUrl.get('productId');
  console.log(parentElement,productId);
  let containerRemAndBuy=document.createElement('div');
  containerRemAndBuy.className='containerRemAndBuy  flex-just-between';
  createDiv(1,'span',`buy add${productId} remBuy`,'','','add to cart',containerRemAndBuy);
  createDiv(1,'span',`clear remBuy clear${index}`,'','','remove',containerRemAndBuy);
  element.appendChild(containerRemAndBuy);
  let elementAdd= document.querySelector(`#containerAddToCart section#addToCart .addToCart .container .productsInCart .aCardLess  .buy.add${productId}`);
if(isCart){
  preventElementInFav(productsInLocCart,test);
}
  elementAdd.addEventListener('click',(info)=>{
    console.log(productId);
    existUserOrNots('cartUser','proAndQuantityIt','productCart','proAndQuantityIt','cart','countPurshes',true,productId);
    preventElementInFav( productsInLocCart,test);
  })
element.querySelector('.cartFavorite .cart').addEventListener('click',()=>{
    preventElementInFav( productsInLocCart,test);

  })
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

 async function preventElementInFav(productsInLocCart,test) {
  await fetchProducts(test);
  let allButtonsAdd=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .cardLessThan .buy');
  if(window.localStorage.getItem(productsInLocCart)){
    let productsInLocal=JSON.parse(window.localStorage.getItem(productsInLocCart));
    productsInLocal.forEach((element,index)=>{
  allButtonsAdd.forEach((ele,index,arr)=>{
    let classN=Array.from(ele.classList);
    console.log(classN);
    let arry=classN.filter(className=>{
      let match=/\d/g.test(className);
      return match;
    })
    console.log(arry);
    let productIdBu=arry[0].match(/\d+/g);
    console.log(productIdBu,element.id);

    if(+element.id== +productIdBu){
      ele.innerHTML='added it to cart';
          ele.style.opacity='.4';
          ele.style.pointerEvents='none';
          ele.style.color='gray';
    }

  })
})
  
}
 }
// localStorage.clear();







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