"use strict";
import {
  id,
  getAllElements,
  addClassActive,
  toggleDashboard,
  filterAllProductsByDashboard,
  filterProdutsForEveryPage,
  resetDashboard,
  resetPriceDashboard,
  displayMenuSort,
  dragByTouch,
  createHrefForElementsFooter,
  limitLocationProductsBySidebar,
  showProductsWithSearch,
  SearchByKeyOrButton,
  existUserOrNotForIconCart,
  existUserOrNotForAddClassAtive

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
let allLinksFooter=document.querySelectorAll('footer .category li a');
let allLinksSideBar=document.querySelectorAll('.sideBar.hidd');
let allTrendingSide=document.querySelectorAll('#boxSideBar #trending dd a');


console.log(allLinksFooter);
document.addEventListener('DOMContentLoaded',(info=>{
  // start header
  addClassActive(iconsPersonal, "active");
  addClassActive(linkHeader, "active");
  dragByTouch(secondHeader);
  // start sidebar
getAllElements(allTrendingSide,limitLocationProductsBySidebar);
  // start dashboard
  toggleDashboard('classification','dashboard',true);
      toggleDashboard('cancelDash','dashboard');

//start search
SearchByKeyOrButton(id,'iconSearch','inputSearch');

// footer functions create url
createHrefForElementsFooter(allLinksFooter);
createHrefForElementsFooter(allLinksSideBar);
// console.log('booksssssssssssssssssssssss');
console.log(window.location.pathname);
  // start show products for every page in header and filter products from dashboard
    if(window.location.pathname=='/html/books'||window.location.pathname=='/'||window.location.pathname=='/html/books.html'){
      console.log('booksssssssssssssssssssssss');
    console.log(document.getElementById('linkBooks'));
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
    console.log('notbooksssssssssssssssssssssss');

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

// end dashboard
})) 
//end show products

