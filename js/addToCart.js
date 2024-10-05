
  
'use strict'
import {productId,productStock,id,addClassActive,fetchProducts,datas,displayProducts,createDiv,addNumberToIconCart,dragByTouch, createHrefForElementsFooter,existUserOrNotForIconCart,existUserOrNotForAddClassAtive,
  limitLocationProductsBySidebar,getAllElements,addClassActiveOnIconCart,addClassNoexistOnIcon,urlBooks,discountPercentagee,addNumToIcon,existUserOrNots} from "../js/common.js";
let quantityProducts=0;
let totalProd=0;
let totalQuan=0;
let allPrices=0;
let quanBook=0;
let quanNotBook=0;
let allDiscounts=0;
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
    existUserOrNotForIconCart('favoriteUser','proAndQuantityInFav','favoriteCart','proAndQuantityInFav','favoriteBooUser','proAndQuantityInFavBoo','favoriteBooCart','proAndQuantityInFavBoo','favorite','countFavorites');
    existUserOrNotInfav('favorite','countFavorites',true);
    existUserOrNotInfavvv('favorite','countFavorites',true);
    // start footer
    createHrefForElementsFooter(allLinksFooter);
}))
 
 // are user or not
  function existUserOrNotInfav(iconName,iconId,isCart){
    if(window.localStorage.getItem('user')){
      let user=JSON.parse(window.localStorage.getItem('user'));
      console.log(user.id);
      if(window.localStorage.getItem(`cartUser${user.id}`)){
      filterProductsInCart(id,'productsInCart',`cartUser${user.id}`,`proAndQuantity${user.id}`,iconName,iconId,isCart,'cartUser');
      }
      let acardIcon=document.querySelectorAll(`#containerAddToCart section#addToCart .addToCart .container #productsInCart .aCardLess .cartFavorite .favorite`);
      acardIcon.forEach(element=>{
      element.querySelector('.cartFavorite .favorite').addEventListener('click',()=>{
  existUserOrNotForIconCart('favoriteUser','proAndQuantityInFav','favoriteCart','proAndQuantityInFav','favoriteBooUser','proAndQuantityInFavBoo','favoriteBooCart','proAndQuantityInFavBoo','favorite','countFavorites');
          // preventElementInFav( productsInLoc,test);
        })
      
        })
    }
    else{
      if(window.localStorage.getItem('favoriteCart')==null){
        let arrayProducts=[];
      window.localStorage.setItem('favoriteCart',JSON.stringify(arrayProducts));
      }
      filterProductsInCart(id,'productsInCart','favoriteCart','proAndQuantityInFav',iconName,iconId,isCart,'productCart');   
    }}

      function existUserOrNotInfavvv(iconName,iconId,isCart){
        if(window.localStorage.getItem('user')){
          let user=JSON.parse(window.localStorage.getItem('user'));
            filterProductsInCart(id,'productsInCartBoo',`favoriteBooUser${user.id}`,`proAndQuantityInFavBoo${user.id}`,iconName,iconId,isCart,'cartBooUser',true);
    }
    else{
      if(window.localStorage.getItem('favoriteBooCart')==null){

      let arrayProducts=[];
      window.localStorage.setItem('favoriteBooCart',JSON.stringify(arrayProducts));
      }
      filterProductsInCart(id,'productsInCartBoo','cartBooCart','proAndQuantityBoo',iconName,iconId,isCart,'productBooCart',true);   
    }
    }
  // }
// filter products in cart
let testt;
 export async function filterProductsInCart(func,container,productsInLoc,proAndQuantityIt,iconName,iconId,isCart,productsInLocCart,test){
  await fetchProducts(test);
  console.log(testt);
  let totalPrices=0;
  let totalDiscounts=0;
if(JSON.parse(window.localStorage.getItem((productsInLoc)) )){
  if(JSON.parse(window.localStorage.getItem((proAndQuantityIt)) )){
 objectQuan=JSON.parse(window.localStorage.getItem((proAndQuantityIt)) ).reverse()||[];
  }
 getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) ).reverse()||[];

 displayProducts(getProductFromLocal, func, container,test,true);
  let acard=document.querySelectorAll(`#containerAddToCart section#addToCart .addToCart .container #${container} .aCardLess`);
console.log(acard);
  let detailsProduct=document.querySelectorAll(`#containerAddToCart section#addToCart .addToCart .container #${container} .aCardLess .detailsProduct`);

console.log(acard);
acard.forEach((element,index)=>{
  let parentElement=element.parentElement.href;
  console.log(element.querySelectorAll('.cart'),parentElement);

  let url=new URL(parentElement);
  console.log(parentElement,url);
let searchUrl=new URLSearchParams(url.search);
let productId=searchUrl.get('productId');
  console.log(parentElement,productId);
  let containerRemAndBuy=document.createElement('div');
  containerRemAndBuy.className='containerRemAndBuy  flex-just-between';
  createDiv(1,'span',`buy #${container} add{${productId}} add${productId} remBuy`,'','','add to cart',containerRemAndBuy);
  createDiv(1,'span',`clear remBuy clear{${productId}}`,'','','remove',containerRemAndBuy);
  element.appendChild(containerRemAndBuy);
  let elementAdd= document.querySelector(`#containerAddToCart section#addToCart .addToCart .container #${container} .aCardLess  .buy.add${productId}`);
if(isCart){
  // preventElementInFav(productsInLocCart,test);
}
  elementAdd.addEventListener('click',(info)=>{
    // existUserOrNotForIconCart('cartUser','proAndQuantityIt','productCart','proAndQuantity','cartBooUser','proAndQuantityInCartUserBoo','cartBooCart','proAndQuantityInCartBoo','cart','countPurshes');

    existUserOrNots(container,'cartUser','proAndQuantityIt','productCart','proAndQuantityIt','cart','countPurshes',true,productId,test);
    // preventElementInFav( productsInLocCart,test);
  })

element.querySelector('.cartFavorite .cart').addEventListener('click',()=>{
    // preventElementInFav( productsInLocCart,test);
    preventElementInFav( productsInLoc,test);
    existUserOrNotForIconCart('cartUser','proAndQuantityIt','productCart','proAndQuantity','cartBooUser','proAndQuantityInCartUserBoo','cartBooCart','proAndQuantityInCartBoo','cart','countPurshes');
  })
  element.addEventListener('click',(event)=>{
    event.preventDefault();
  })
})
detailsProduct.forEach((element,index)=>{
  let urlCos=element.closest('a');
  console.log(urlCos);
  let searchUrl=new URLSearchParams(urlCos.search);
let productId=searchUrl.get('productId');
  console.log(productId);
  let containerQuantity=document.createElement('div');
  containerQuantity.className='containerQuantity flex-center';
  createDiv(1,'span','textAmount','','','quantity :',containerQuantity);
  let amount=document.createElement('input');
  amount.type='number';
  amount.name='amount';
  amount.className=`amount amount{${productId}}`;
  console.log(amount.className);
  objectQuan.forEach((obj,ind,arr)=>{
    let classN=Array.from(amount.classList);
    let arry=classN.filter(className=>{
      let match=/{([^]*)}/g.test(className);
      return match;
    })
    let productIdd=arry[0].match(/{([^]*)}/g);
  let   productIdBu=productIdd[0].slice(1,-1);
  if(obj.productId==productIdBu){
    amount.value=obj.quantityPro;
  }
  })
  containerQuantity.appendChild(amount);
  element.appendChild(containerQuantity);
})
removeProductFromCart(container,productsInLoc,proAndQuantityIt,iconName,iconId,isCart);
getProductFromLocal.forEach(item=>{
  let matchPrice;
  let discountPercentage;
  if(container=='productsInCartBoo'){
    matchPrice=item.saleInfo.listPrice.amount;
    let  hundleProduct= item.volumeInfo.categories||'';
    let productToLowerStri=hundleProduct.toString().toLowerCase();
    if (productToLowerStri != "Fiction".toLowerCase()) {
      discountPercentage=50;
    }
    else{
      discountPercentage=20;
    }
  }
  else{
    matchPrice=item.price;
    discountPercentage=item.discountPercentage;
  }
  totalPrices+=matchPrice-(matchPrice*discountPercentage/100);
  totalDiscounts+=matchPrice*Math.round(discountPercentage)/100;
});
allPrices+=totalPrices;
allDiscounts+=totalDiscounts;
console.log(totalPrices,totalDiscounts);
id('totalPrices').innerHTML=`${allPrices.toFixed(1)}`;
id('totalDiscounts').innerHTML=`${allDiscounts.toFixed(1)}`;
}
updateQuantityWhenInput(document.querySelectorAll(`#${container} input.amount`),proAndQuantityIt,container);
if((window.localStorage.getItem(proAndQuantityIt))){
let quantityLocal=JSON.parse(window.localStorage.getItem(proAndQuantityIt));
if(container=='productsInCart'){
  quanBook=0;
  quantityLocal.forEach((obj,ind,arr)=>{

    quanBook+= +obj.quantityPro;
  })
}
else{
  quanNotBook=0;
  quantityLocal.forEach((obj,ind,arr)=>{

    quanNotBook+= +obj.quantityPro;
  })
}
}
if(getProductFromLocal.length>=0){
  totalProd+= JSON.parse(window.localStorage.getItem(productsInLoc)).length;
  totalQuan=quanBook + quanNotBook;
  id('headingCart').innerHTML=`your favorite includes ${totalProd} products, ${totalQuan} quantity` ;
id(iconId).innerHTML=totalProd;
id(iconId).style.color='rgb(255, 214, 139)';
}
if(totalProd==0){
  id('headingCart').innerHTML=`your favorite is empty, let's fill it`;
  id('containerPriceCart').style.display='none';
}
if(totalProd>0){
  id('containerPriceCart').style.display='block';

}
}
function removeProductFromCart(container,productsInLoc,proAndQuantityIt,iconName,iconId,isCart){
  let allButtonsRemove=document.querySelectorAll(`#containerAddToCart section#addToCart .addToCart .container #${container} .cardLessThan div.containerRemAndBuy .clear`);
  let productIdBu;
  let getProductFromLocal=JSON.parse(window.localStorage.getItem(productsInLoc));
  console.log(getProductFromLocal); 
  let objectQuan=JSON.parse(window.localStorage.getItem(proAndQuantityIt));
  console.log(objectQuan);
  allButtonsRemove.forEach(elementBu=>{
    elementBu.addEventListener('click',(event)=>{
      totalProd=0;
      totalQuan=0;
      allPrices=0;
      allDiscounts=0;
 let  getProductFromLocall=getProductFromLocal.filter((product,ind)=>{
  let classN=Array.from(elementBu.classList);
    let arry=classN.filter(className=>{
      let match=/{([^]*)}/g.test(className);
      return match;
    })
    let productIdd=arry[0].match(/{([^]*)}/g);
     productIdBu=productIdd[0].slice(1,-1);
let match=product.id!=productIdBu;
return match;
})
window.localStorage.setItem(productsInLoc,JSON.stringify(getProductFromLocall) );
let objectQuann=objectQuan.filter(element=>{
  let matchPro;
     matchPro=element.productId!=productIdBu;
    console.log(+element.productId,productIdBu);
return matchPro;
})
window.localStorage.setItem(proAndQuantityIt,JSON.stringify(objectQuann.reverse()));
id('productsInCart').innerHTML='';
existUserOrNotInfav(iconName,iconId,isCart);
existUserOrNotInfavvv(iconName,iconId,isCart);
    })
  })
}
function updateQuantityWhenInput(inputs,proAndQuantityIt,container){
  if(window.localStorage.getItem((proAndQuantityIt))){
 let objectQuann=(JSON.parse(window.localStorage.getItem((proAndQuantityIt))).reverse())||[];
inputs.forEach((input,index)=>{
  quantityProducts=0;
  input.addEventListener('input',(info)=>{
    if(info.target.value>0){
    let classN=Array.from(info.target.classList);
    let arry=classN.filter(className=>{
      let match=/{([^]*)}/g.test(className);
      return match;
    })
    let productIdd=arry[0].match(/{([^]*)}/g);
  let   productIdBu=productIdd[0].slice(1,-1);
objectQuann.forEach((obj,ind,arr)=>{
  if(obj.productId== productIdBu){
    obj.quantityPro=info.target.value;
  }
  if(container=='productsInCart'){
  }
  })
 
  window.localStorage.setItem(proAndQuantityIt,JSON.stringify(objectQuann.reverse()));
  let quantityLocal=JSON.parse(window.localStorage.getItem(proAndQuantityIt));
if(container=='productsInCart'){
  quanBook=0;
  quantityLocal.forEach((obj,ind,arr)=>{

    quanBook+= +obj.quantityPro;
  })
}
else{
  quanNotBook=0;
  quantityLocal.forEach((obj,ind,arr)=>{

    quanNotBook+= +obj.quantityPro;
  })
}
totalQuan=quanBook + quanNotBook;
      id('headingCart').innerHTML=`your cart includes ${totalProd} products,${totalQuan} quantity` ;
    }
  })
})
}}
function updateQuantityWhenReload(inputs,proAndQuantityIt){
  let objectQuann=(JSON.parse(window.localStorage.getItem((proAndQuantityIt))))||[];
 objectQuann.forEach((element,index,array)=>{
  inputs.forEach((input,ind,arr)=>{
    if(input.value){
    let classN=Array.from(input.classList);
      let arry=classN.filter(className=>{
        let match=/{([^]*)}/g.test(className);
        return match;
      })
      let productIdd=arry[0].match(/{([^]*)}/g);
      let productIdBu=productIdd[0].slice(1,-1);
  if(element.productId==productIdBu){
    arr[index].value=element.quantityPro;
  }
}
  })
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
    let arry=classN.filter(className=>{
      let match=/{([^]*)}/g.test(className);
      return match;
    })
    let productIdd=arry[0].match(/{([^]*)}/g);
    let productIdBu=productIdd[0].slice(1,-1);
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

















































































































































































// 'use strict'
// import {id,addClassActive,fetchProducts,datas,displayProducts,createDiv,addNumberToIconCart,dragByTouch,existUserOrNot, createHrefForElementsFooter,existUserOrNotForIconCart,existUserOrNotForAddClassAtive,
//   limitLocationProductsBySidebar,getAllElements} from "../js/common.js";
// let quantityProducts=0;
// let getProductFromLocal;
// let objectQuan;
// let secondHeader = document.querySelector("header .second-nav ul");
// let linkHeader = document.querySelectorAll("header .second-nav a");
// let iconsPersonal = document.querySelectorAll(
//   "header .main-nav .personal.mobile a.iconPersonal"
// );
// let allLinksFooter=document.querySelectorAll('footer .category li a');
// let allLinksSideBar=document.querySelectorAll('.sideBar.hidd');
// let allTrendingSide=document.querySelectorAll('#boxSideBar #trending dd a');


// document.addEventListener('DOMContentLoaded',(info=>{
//     // start header
//       addClassActive(iconsPersonal, "active");
//       addClassActive(linkHeader, "active");
//       // start sidebar
//       getAllElements(allTrendingSide,limitLocationProductsBySidebar);
//       createHrefForElementsFooter(allLinksSideBar);

//     dragByTouch(secondHeader);
//     // start shows product in cart
//     existUserOrNot('favoriteUser','favoriteCart','favorite','countFavorites','productsInCart');
//     existUserOrNot('favoriteUserBoo','favoriteCartBoo','favorite','countFavorites','productsInCartBoo');


//     existUserOrNotInCart('cart','countPurshes');
//     existUserOrNotForAddClassAtive('favoriteUser','favoriteCart','favorite');
//     // existUserOrNotForAddClassAtive('favoriteUser','favoriteCart','favorite');

//     // existUserOrNotForIconCart('cartUser','proAndQuantityIt','productCart','proAndQuantityIt','cart','countPurshes');
//     existUserOrNotForIconCart('favoriteUser','proAndQuantityInFav','favoriteCart','proAndQuantityInFav','favorite','countFavorites');
    
//     existUserOrNotForAddClassAtive('cartUser','productCart','cart');
//     // existUserOrNotForAddClassAtive('favoriteUser','favoriteCart','favorite');


//     // start footer
//     createHrefForElementsFooter(allLinksFooter);

// }))
// // are user or not
//  function existUserOrNotInCart(iconName,iconId,test){
// if(window.localStorage.getItem('user')){
//   let user=JSON.parse(window.localStorage.getItem('user'));
//   console.log(user.id);
//   filterProductsInCart(id,'productsInCart',`cartUser${user.id}`,`proAndQuantityIt${user.id}`,iconName,iconId,test);
//   // filterProductsInCart(id,container,`${productsInLoc}${user.id}`,`${proAndQuantityIt}${user.id}`);

// }
// else{
//   if(window.localStorage.getItem('productCart'==null)){
//     let arrayProducts=[];
//   window.localStorage.setItem('productCart',JSON.stringify(arrayProducts));
//   }
//   filterProductsInCart(id,'productsInCart','productCart','proAndQuantityIt',iconName,iconId,test);
//   // filterProductsInCart(id,container,productsInLoc,proAndQuantityIt);

// }
// }
// // filter products in cart
//  export async function filterProductsInCart(func,container,productsInLoc,proAndQuantityIt,iconName,iconId,test){
//   await fetchProducts(test);
//   let totalPrices=0;
//   let totalDiscounts=0;
// if(JSON.parse(window.localStorage.getItem((productsInLoc)) )){
//   if(JSON.parse(window.localStorage.getItem((proAndQuantityIt)) )){
//  objectQuan=JSON.parse(window.localStorage.getItem((proAndQuantityIt)) ).reverse()||[];
//   }
//  getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) ).reverse()||[];

//   displayProducts(getProductFromLocal, func, container,test);
//   existUserOrNotForAddClassAtive('favoriteUser','favoriteCart','favorite');
// // 
//   // let acard=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .aCardLess');
//   let acard=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .aCardLess');

//   let detailsProduct=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .aCardLess .detailsProduct');

// console.log(acard);
// acard.forEach((element,index)=>{
//   let containerRemAndBuy=document.createElement('div');
//   containerRemAndBuy.className='containerRemAndBuy flex-just-between';
//   createDiv(1,'span','buy remBuy','','','continue purchasing',containerRemAndBuy);
//   createDiv(1,'span',`clear remBuy clear${index}`,'','','remove',containerRemAndBuy);
//   element.appendChild(containerRemAndBuy);
//   element.addEventListener('click',(event)=>{
//     event.preventDefault();
//   })
// })
// detailsProduct.forEach((element,index)=>{
//   let containerQuantity=document.createElement('div');
//   containerQuantity.className='containerQuantity flex-center';
//   createDiv(1,'span','textAmount','','','quantity :',containerQuantity);
//   let amount=document.createElement('input');
//   amount.type='number';
//   amount.name='amount';
//   amount.className='amount';
//   objectQuan.forEach((obj,ind,arr)=>{
//     amount.value=arr[index].quantityPro;
//     amount.id=`amount${arr[index].productId}`; 
//   })
//   containerQuantity.appendChild(amount);
//   element.appendChild(containerQuantity);
// })
// // addNumberToIconCart(productsInLoc,iconName,iconId,container);
// removeProductFromCart(productsInLoc,proAndQuantityIt,iconName,iconId,container);
// console.log(getProductFromLocal);
// if(getProductFromLocal.length>0){
//   quantityProducts=0;
//   updateQuantityWhenReload(document.querySelectorAll('input.amount'),proAndQuantityIt);
//   id('headingCart').innerHTML=`your cart includes ${getProductFromLocal.length} products, ${quantityProducts} quantity` ;
// }
// if(getProductFromLocal.length==0){
//   id('headingCart').innerHTML=`your cart is empty, let's fill it`;
//   id('containerPriceCart').style.display='none';
// }
// getProductFromLocal.forEach(item=>{
//   totalPrices+=item.price-(item.price*item.discountPercentage/100);
//   totalDiscounts+=item.price*Math.round(item.discountPercentage)/100;
// });
// id('totalPrices').innerHTML=`${totalPrices.toFixed(1)}`;
// id('totalDiscounts').innerHTML=`${totalDiscounts.toFixed(1)}`;

// console.log(totalPrices,totalDiscounts);
// }
// else{
//   id('headingCart').innerHTML=`your cart is empty, let's fill it`;
//   id('containerPriceCart').style.display='none';
// }
// updateQuantityWhenInput(document.querySelectorAll('input.amount'),proAndQuantityIt);
// updateQuantityWhenReload(document.querySelectorAll('input.amount'),proAndQuantityIt);
// existUserOrNotForAddClassAtive(productsInLoc,proAndQuantityIt,iconName);
// }
// // localStorage.clear();
// // remove product from cart
// function removeProductFromCart(productsInLoc,proAndQuantityIt,iconName,iconId,container){
//   let allButtonsRemove=document.querySelectorAll('#containerAddToCart section#addToCart .addToCart .container .productsInCart .cardLessThan div.containerRemAndBuy .clear');
//   console.log(getProductFromLocal); 
//   allButtonsRemove.forEach(element=>{
//     element.addEventListener('click',(event)=>{
//       console.log('lesa');
//       console.log(getProductFromLocal);
//   getProductFromLocal=getProductFromLocal.filter((product,ind)=>{
// let match=event.target.classList.contains(`clear${ind}`)==false;
// return match;
// })
// window.localStorage.setItem(productsInLoc,JSON.stringify(getProductFromLocal.reverse()));
// console.log(getProductFromLocal);
// objectQuan=objectQuan.filter(element=>{
// let matchPro=getProductFromLocal.some(product=>+element.productId==product.id);
// return matchPro;
// })
// console.log(objectQuan);
// window.localStorage.setItem(proAndQuantityIt,JSON.stringify(objectQuan.reverse()));
// id('productsInCart').innerHTML='';
// existUserOrNotInCart(iconName,iconId);
// // addNumberToIconCart(productsInLoc,iconName,iconId,container);
// existUserOrNotForAddClassAtive(productsInLoc,proAndQuantityIt,iconName);

//     })
//   })
// }
// function updateQuantityWhenInput(inputs,proAndQuantityIt){
//   if(window.localStorage.getItem((proAndQuantityIt))){
 
//  let objectQuann=(JSON.parse(window.localStorage.getItem((proAndQuantityIt))).reverse())||[];
// inputs.forEach(input=>{
//   input.addEventListener('input',(info)=>{
//     if(info.target.value&&info.target.value>0){
// objectQuann.forEach(element=>{
// if(info.target.id==`amount${element.productId}`){
//   element.quantityPro=info.target.value;
// }
// })
// window.localStorage.setItem(proAndQuantityIt,JSON.stringify(objectQuann.reverse()));
//     }
//     if(getProductFromLocal.length>0){
//       quantityProducts=0;
//       updateQuantityWhenReload(document.querySelectorAll('input.amount'),proAndQuantityIt);
//       id('headingCart').innerHTML=`your cart includes ${getProductFromLocal.length} products,${quantityProducts} quantity` ;
//     }
//   })
// })
// }}
// function updateQuantityWhenReload(inputs,proAndQuantityIt){
//   let objectQuann=(JSON.parse(window.localStorage.getItem((proAndQuantityIt))))||[];
//  inputs.forEach(input=>{
//      if(input.value){
//  objectQuann.forEach(element=>{
//  if(input.id==`amount${element.productId}`){
//   input.value= element.quantityPro;
//   quantityProducts+= (+element.quantityPro);
//   console.log(input.value, element.quantityPro,input.id,`amount${element.productId}`);
//  }
//  })
//      }
//  })
 
//  }



// // localStorage.clear();
// // document.querySelector('#containerAddToCart section#addToCart .addToCart .container .productsInCart .cardLessThan').addEventListener('click',(event)=>{
// //   event.stopPropagation();
// // })







// // const auth=getAuth();
// // signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
//   // const userId=userCredential.user.uid;
//   // console.timeLog(userId);
// // }).catch((rrror)=>{
//   // console.error('sign in:error');
// // })

// // async function login() {
// // fetch('https://dummyjson.com/auth/login',{
//   // method:'POST',
//   // headers:{'Content-Type':'application/json'},
//   // body:JSON.stringify({
//     // username:'kminchelle',
//     // password:'OlelplR',
//   // })
// // }).then(res=>res.json()).then(data=>console.log(data));
  
// // }
// // login();