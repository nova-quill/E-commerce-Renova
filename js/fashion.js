"use strict";
import {
  id,
  addClassActive,
  toggleDashboard,
  filterAllProductsByDashboard,
  filterProdutsForEveryPage,
  resetDashboard,
  resetPriceDashboard,
  displayMenuSort,
  existUserOrNot,
  dragByTouch,
  existUserOrNotExist,
  addProductToCartByIconCarts,
  existUserOrNots,
  existUserOrNotss
} from "./common.js";
// start section fashion
let secondHeader = document.querySelector("header .second-nav ul");
let linkHeader = document.querySelectorAll("header .second-nav a");
let iconsPersonal = document.querySelectorAll(
  "header .main-nav .personal.mobile a.iconPersonal"
);
let allCategoryForEveryPage = document.querySelectorAll(
  ".containerFashion .category dl#category dd:not(dd.categoryName)"
);
let allCategory = document.querySelectorAll(
  ".containerFashion .category dl#category dd:not(dd.tags)"
);
let allCategoryTags = document.querySelectorAll(
  ".containerFashion .category dl#category dd.tags"
);
let allBrands = document.querySelectorAll(
  ".containerFashion .category dl.check#brandsDash dd input"
);
let allDiscount = document.querySelectorAll(
  ".containerFashion .category dl#discount dd input"
);
let allReviews = document.querySelectorAll(
  ".containerFashion .category dl.customer dd"
);
let freeShipping = document.querySelector(
  ".containerFashion .category dl.check#freeShipping dd input"
);
let allAvalibal = document.querySelector(
  ".containerFashion .category dl.check#availability dd input"
);

document.addEventListener('DOMContentLoaded',(info=>{
  // start header
  addClassActive(iconsPersonal, "active");
  addClassActive(linkHeader, "active");
  dragByTouch(secondHeader);
  // start dashboard
  toggleDashboard('classification','dashboard');
      toggleDashboard('cancelDash','dashboard');

  // add number of products in cart to icon cart
  existUserOrNot();
  // end header

existUserOrNots();


// existUserOrNotExist();
// addProductToCartByIconCarts(true);
let icons=document.querySelectorAll('.cartFavorite .cart');
let links=document.querySelectorAll('.cardLessThan');
console.log(icons);
// icons.forEach(icon=>{
// icon.addEventListener('click',(info)=>{
//   links.forEach(link=>{
//     link.addEventListener('click',(info)=>{
//       info.preventDefault();
  // info.stopPropagation();
    // })})
// info.preventDefault();
existUserOrNotss();
// })})



  // start show products for every page in header and filter products from dashboard
  if(document.getElementById('linkBooks')){
    filterProdutsForEveryPage(allCategoryForEveryPage,id,true);
    filterAllProductsByDashboard(id,allCategory,allCategoryTags,allDiscount,
      allAvalibal,allReviews,freeShipping,
       'rangPrice',allBrands,'lowPrice','freeShippingSort','bestSellingSort',
      'newArrivals','allProducts','highPrice', 
       'containerProduts',true);
        //  start reset dashboard
  resetDashboard(id,'resetBrands',allBrands,allDiscount,'availabi',
    freeShipping,allBrands, 'containerProduts','',true );
      resetPriceDashboard(id,'resetPrice','rangPrice',allDiscount,'availabi',
    freeShipping,allBrands, 
        'containerProduts',true );
      resetDashboard(id,'resetDiscount',allDiscount,allDiscount,'availabi',
    freeShipping,allBrands, 'containerProduts','',true  );
      resetDashboard(id,'resetReview',allReviews,allDiscount,'availabi',
    freeShipping,allBrands, 'containerProduts',true,true );
        //end reset dashboard
    }
  else{
    filterProdutsForEveryPage(allCategoryForEveryPage,id);
    filterAllProductsByDashboard(id,allCategory,allCategoryTags,allDiscount,
      allAvalibal,allReviews,freeShipping,
       'rangPrice',allBrands,'lowPrice','freeShippingSort','bestSellingSort',
      'newArrivals','allProducts','highPrice', 
       'containerProduts');
         //start reset dashboard
  resetDashboard(id,'resetBrands',allBrands,allDiscount,'availabi',
    freeShipping,allBrands, 'containerProduts');
      resetPriceDashboard(id,'resetPrice','rangPrice',allDiscount,'availabi',
    freeShipping,allBrands, 
        'containerProduts' );
      resetDashboard(id,'resetDiscount',allDiscount,allDiscount,'availabi',
    freeShipping,allBrands, 'containerProduts');
      resetDashboard(id,'resetReview',allReviews,allDiscount,'availabi',
    freeShipping,allBrands, 'containerProduts',
      true);
        //end reset dashboard
  }
  // end show products for every page in header
  // start dashboard
  // filter products from sort by
displayMenuSort(id,'dashboardAngle', "list", "active");
// displayMenuSort(id,'classification','dashboard', "active",'cancelDash',true);

// end dashboard
})) 
//end show products
//  localStorage.clear();
// 

