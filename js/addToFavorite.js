
  
'use strict'
import {id,addClassActive,fetchProducts,datas,displayProducts,createDiv,dragByTouch, createHrefForElementsFooter,existUserOrNotForIconCart,
  limitLocationProductsBySidebar,getAllElements,existUserOrNots,existUserOrNotForAddClassAtive,SearchByKeyOrButton} from "../js/common.js";
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
let mainHeaderfavAndCart = document.querySelectorAll("header .main-nav .iconPersonal.cartFav a");

let allLinksFooter=document.querySelectorAll('footer .category li a');
let allLinksSideBar=document.querySelectorAll('.sideBar.hidd');
let allTrendingSide=document.querySelectorAll('#boxSideBar #trending dd a');


document.addEventListener('DOMContentLoaded',(info=>{
    // start header
      addClassActive(iconsPersonal, "active");
      addClassActive(linkHeader, "active");
      addClassActive(mainHeaderfavAndCart, "active",true);

      // start sidebar
      getAllElements(allTrendingSide,limitLocationProductsBySidebar);
createHrefForElementsFooter(allLinksSideBar);

    dragByTouch(secondHeader);
    // start shows product in cart
// start search
SearchByKeyOrButton(id,'iconSearch','inputSearch');

  
    existUserOrNotInfav('favorite','countFavorites',true);
    existUserOrNotInfavvv('favorite','countFavorites',true);

    existUserOrNotForAddClassAtive('cartUser','productCart','cart','',true);
    existUserOrNotForAddClassAtive('cartBooUser','cartBooCart','cart','',true);
    // start footer
    createHrefForElementsFooter(allLinksFooter);
}))
 
 // are user or not
  function existUserOrNotInfav(iconName,iconId,isCart){
    if(window.localStorage.getItem('user')){
      let user=JSON.parse(window.localStorage.getItem('user'));
      if(window.localStorage.getItem(`favoriteUser${user.id}`)){
      filterProductsInCart(id,'productsInCart',`favoriteUser${user.id}`,`proAndQuantityInFav${user.id}`,iconName,iconId,isCart,'cartUser');
      }
    }
    else{
      if(window.localStorage.getItem('favoriteCart')==null){
        let arrayProducts=[];
      window.localStorage.setItem('favoriteCart',JSON.stringify(arrayProducts));
      }
      filterProductsInCart(id,'productsInCart','favoriteCart','proAndQuantityInFav',iconName,iconId,isCart,'productCart');   
    }

  }

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
      filterProductsInCart(id,'productsInCartBoo','favoriteBooCart','proAndQuantityInFavBoo',iconName,iconId,isCart,'productBooCart',true);   
    }

    }
  // }
// filter products in cart
 export async function filterProductsInCart(func,container,productsInLoc,proAndQuantityIt,iconName,iconId,isCart,productsInLocCart,test){
  await fetchProducts(test);
  if(container=='productsInCartBoo'){
    test==true;
    await fetchProducts(test);

  }
  else{
    test==false;
    await fetchProducts(test);

  }
  let totalPrices=0;
  let totalDiscounts=0;
if(JSON.parse(window.localStorage.getItem((productsInLoc)) )){
  if(JSON.parse(window.localStorage.getItem((proAndQuantityIt)) )){
 objectQuan=JSON.parse(window.localStorage.getItem((proAndQuantityIt)) ).reverse()||[];
  }
 getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) ).reverse()||[];

 displayProducts(getProductFromLocal, func, container,test,true);

  let acard=document.querySelectorAll(`#containerAddToCart section#addToCart .addToCart .container  #${container} .aCardLess`);
  let detailsProduct=document.querySelectorAll(`#containerAddToCart section#addToCart .addToCart .container #${container} .aCardLess .detailsProduct`);

acard.forEach((element,index)=>{
  let parentElement=element.parentElement.href;

  let url=new URL(parentElement);
let searchUrl=new URLSearchParams(url.search);
let productId=searchUrl.get('productId');
  let containerRemAndBuy=document.createElement('div');
  containerRemAndBuy.className='containerRemAndBuy  flex-just-between';
  createDiv(1,'span',`buy #${container} add{${productId}} add${productId} remBuy`,'','','add to cart',containerRemAndBuy);
  createDiv(1,'span',`clear remBuy clear{${productId}} .clear${productId}`,'','','remove',containerRemAndBuy);
  element.appendChild(containerRemAndBuy);
  let elementAdd= element.querySelector(`.buy`);
let clear=element.querySelector(`.clear`);
element.addEventListener('click',(event)=>{
  event.preventDefault();
})

    elementAdd.addEventListener('click',(info)=>{
element.querySelector('.cart').click();
  })

 
})

detailsProduct.forEach((element,index)=>{
  let urlCos=element.closest('a');
  let searchUrl=new URLSearchParams(urlCos.search);
let productId=searchUrl.get('productId');
  let containerQuantity=document.createElement('div');
  containerQuantity.className='containerQuantity flex-center';
  createDiv(1,'span','textAmount','','','quantity :',containerQuantity);
  let amount=document.createElement('input');
  amount.type='number';
  amount.name='amount';
  amount.className=`amount amount{${productId}}`;
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
let elementsRemove=document.querySelectorAll(`#${container} .cardLessThan .clear`);
removeProductFromCart(container,elementsRemove,productsInLoc,proAndQuantityIt,iconName,iconId,isCart);

existUserOrNotForIconCart('cartUser','proAndQuantityIt','productCart','proAndQuantity','cartBooUser','proAndQuantityInCartUserBoo','cartBooCart','proAndQuantityInCartBoo','cart','countPurshes','','','',true);

existUserOrNotForAddClassAtive('cartUser','productCart','cart','',true);
existUserOrNotForAddClassAtive('cartBooUser','cartBooCart','cart','',true);

}
  function removeProductFromCart(container,elementsRemove,productsInLoc,proAndQuantityIt,iconName,iconId,isCart){
  let productIdBu;
  let getProductFromLocal=JSON.parse(window.localStorage.getItem(productsInLoc));
  let objectQuan=JSON.parse(window.localStorage.getItem(proAndQuantityIt));
  elementsRemove.forEach(elementBu=>{
    elementBu.addEventListener('click',(info)=>{
      totalProd=0;
      totalQuan=0;
      allPrices=0;
      allDiscounts=0;
getProductFromLocal=getProductFromLocal.filter((product,ind)=>{
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

window.localStorage.setItem(productsInLoc,JSON.stringify(getProductFromLocal) );

let objectQuann=objectQuan.filter(element=>{
  let matchPro;
     matchPro=element.productId!=productIdBu;
return matchPro;
})
window.localStorage.setItem(proAndQuantityIt,JSON.stringify(objectQuann.reverse()));
  existUserOrNotInfavvv(iconName,iconId,isCart);
  existUserOrNotInfav(iconName,iconId,isCart);
})
})
}

function updateQuantityWhenInput(inputs,proAndQuantityIt,container){
  if(window.localStorage.getItem((proAndQuantityIt))){
 let objectQuann=(JSON.parse(window.localStorage.getItem((proAndQuantityIt))).reverse())||[];
inputs.forEach((input,index)=>{
  quantityProducts=0;
  input.addEventListener('input',(info)=>{
  info.target.value=info.target.value.replace(/^0/,1);
    let classN=Array.from(info.target.classList);
    let arry=classN.filter(className=>{
      let match=/{([^]*)}/g.test(className);
      return match;
    })
    let productIdd=arry[0].match(/{([^]*)}/g);
  let   productIdBu=productIdd[0].slice(1,-1);
objectQuann.forEach((obj,ind,arr)=>{
  if(obj.productId== productIdBu&&info.target.value>0){
    obj.quantityPro=info.target.value;
  }
  if(obj.productId== productIdBu&&info.target.value==''){
    obj.quantityPro=1;
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
      id('headingCart').innerHTML=`your favorite includes ${totalProd} products,${totalQuan} quantity` ;
 
  })
  input.addEventListener('blur',(info)=>{
    if(info.target.value==''){
      info.target.value=info.target.value.replace(/^$/,1);
    }
 
  })
})
}}
 

 



























