'use strict'
import {
    id,
    getAllElements,
    addClassActive,
    toggleDashboard,
    displayProducts,
    filterAllProductsByDashboard,
    filterProdutsForEveryPage,
    resetDashboard,
    resetPriceDashboard,
    displayMenuSort,
    dragByTouch,
    createHrefForElementsFooter,
    limitLocationProductsBySidebar,
    existUserOrNotForIconCart,
    existUserOrNotForAddClassAtive,
    showProductsWithSearch,
    SearchByKeyOrButton,
    filterProductsWithSearch,
    fetchProducts,
    hundleSortBy
  
  } from "./common.js";
  let secondHeader = document.querySelector("header .second-nav ul");
let linkHeader = document.querySelectorAll("header .second-nav a");
let iconsPersonal = document.querySelectorAll(
  "header .main-nav .personal.mobile a.iconPersonal");
  let allLinksFooter=document.querySelectorAll('footer .category li a');
let allLinksSideBar=document.querySelectorAll('.sideBar.hidd');
let allTrendingSide=document.querySelectorAll('#boxSideBar #trending dd a');
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
    // start sidebar
  getAllElements(allTrendingSide,limitLocationProductsBySidebar);
    // start dashboard
    toggleDashboard('classification','dashboard',true);
        toggleDashboard('cancelDash','dashboard');
  
// start get product by icon cart
existUserOrNotForIconCart('cartUser','proAndQuantityIt','productCart','proAndQuantity','cartBooUser','proAndQuantityInCartUserBoo','cartBooCart','proAndQuantityInCartBoo','cart','countPurshes');

existUserOrNotForIconCart('favoriteUser','proAndQuantityInFav','favoriteCart','proAndQuantityInFav','favoriteBooUser','proAndQuantityInFavBoo','favoriteBooCart','proAndQuantityInFavBoo','favorite','countFavorites');
existUserOrNotForAddClassAtive('cartUser','productCart','cart');
existUserOrNotForAddClassAtive('cartBooUser','cartBooCart','cart');
existUserOrNotForAddClassAtive('favoriteUser','favoriteCart','favorite');
existUserOrNotForAddClassAtive('favoriteBooUser','favoriteBooCart','favorite');

// start search
showProductsWithSearch(id);
SearchByKeyOrButton(id,'iconSearch','inputSearchPageSea',false,true);


filterProdutsForEveryPage(allCategoryForEveryPage,id,'',true);
filterAllProductsByDashboard(id,allCategory,allCategoryTags,allDiscount,
  allAvalibal,allReviews,freeShipping,
   'rangPrice',allBrands,'lowPrice','freeShippingSort','bestSellingSort',
  'newArrivals','allProducts','highPrice', 
   'containerProduts','',true);
     //start reset dashboard
resetDashboard(id,'resetBrands',allBrands,allDiscount,'availabi',
freeShipping,allBrands, 'containerProduts','',true);
  resetPriceDashboard(id,'resetPrice','rangPrice',allDiscount,'availabi',
freeShipping,allBrands, 
    'containerProduts','',true );
  resetDashboard(id,'resetDiscount',allDiscount,allDiscount,'availabi',
freeShipping,allBrands, 'containerProduts','','',true);
  resetDashboard(id,'resetReview',allReviews,allDiscount,'availabi',
freeShipping,allBrands, 'containerProduts',
  true,'',true);

filterProductByPrice('lowPrice');
filterProductByPrice('highPrice');

    //end reset dashboard
// end show products for every page in header
// filter products from sort by
displayMenuSort(id,'dashboardAngle', "list", "active");
// end dashboard
 // footer functions create url
 createHrefForElementsFooter(allLinksFooter);
 createHrefForElementsFooter(allLinksSideBar);
})) 
//end show products


async function filterProductByPrice(element) {
  await fetchProducts();
    id(element).addEventListener('click',(info)=>{
      info.preventDefault();
if(element=='lowPrice'){
      filterProductsWithSearch.sort(
        (a, b) =>
          a.price -
          a.price * (a.discountPercentage / 100) -
          (b.price - b.price * (b.discountPercentage / 100))
       );
      }

      if(element=='highPrice'){
        filterProductsWithSearch.sort(
          (a, b) =>
            b.price -
            b.price * (b.discountPercentage / 100) -
            (a.price - a.price * (a.discountPercentage / 100))
         );
        }
       hundleSortBy(id, element, 'containerProduts') ;
       displayProducts(filterProductsWithSearch, id, 'containerProduts');
    })
}

