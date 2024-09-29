"use strict";
import {id,getAllElements,discountPercentagee,groupesFunctionsForCreatesDivs,datas,price,fetchProducts,shaffelArray,addClassActive,url,addClassName,movesProducts,limitWidthScrollBarWhenScrolling,dragByTouch,existUserOrNot,createHrefForElementsFooter,limitLocationProductsBySidebar,addStyleOnSection,getProductIdByIconCart,existUserOrNotForIconCart,existUserOrNotForAddClassAtive,addClassNoexistOnIcon} from './common.js';
import { dummy } from './dummyproducts.js';

// variables DOM
let containerProductsss;
let scrolllll;
let scrollBarrrr;
let buttonsBestSellerrrr;
let noClickButtonnnn;
let clickedButtonnnn;
let numProducts;
let mapP, directionsService, directionsRenderer;
let sourceAoutocom;
let map;
let currentSlide = 0;
let autoSliders;
let allBalls;

let secondHeader = document.querySelector("header .second-nav ul");
console.log(secondHeader);
let linkHeader = document.querySelectorAll("header .second-nav a:not(a#linkAll)");
console.log(linkHeader);
let iconsPersonal = document.querySelectorAll(
  "header .main-nav .personal.mobile a.iconPersonal"
);
let allImages = Array.from(
  document.querySelectorAll("section#home #container-gallery ul li")
);
let countSlide = allImages.length;
let preButton = document.querySelector("i.left-angle");
let nextButton = document.querySelector("i.right-angle");
let homeGallery= document.querySelector(".home-gallery");
// let allBalls = Array.from(document.querySelector(".balls").children);
let containerProductsDrag=document.querySelectorAll('.container-bestSeller .box-products');
let AllClickedButton=document.querySelectorAll('.container-bestSeller .buttons .first');
let allLinksFooter=document.querySelectorAll('footer .category li a');
let allTrendingSide=document.querySelectorAll('#boxSideBar #trending dd a');
let allLinksSideBar=document.querySelectorAll('.sideBar.hidd');

// let allIconsCart=document.querySelectorAll('.cardLessThan .cartFavorite .cart');
// let allLinksProducts=document.querySelectorAll('a.cardLessThan');

// console.log(allIconsCart);
console.log(allTrendingSide);
document.addEventListener('DOMContentLoaded',(info=>{
  // console.log(allIconsCart);

  // start header
  addClassActive(iconsPersonal, "active");
addClassActive(linkHeader, "active");
// add number of products in cart to icon cart
existUserOrNot('cartUser','productCart','cart','countPurshes');
  existUserOrNot('favoriteUser','favoriteCart','favorite','countFavorites');
// end header
// start sidebar
getAllElements(allTrendingSide,limitLocationProductsBySidebar);
createHrefForElementsFooter(allLinksSideBar);

addStyleOnSection();
// let oo=setInterval(addStyleOnSection,1000);
// setTimeout(()=>{
  // let limitSection=window.localStorage.getItem('isLimitSec');

  // id(limitSection).classList.remove('limitSection');
  // localStorage.removeItem('isLimitSec');
  // clearInterval(oo);
// },10000)
// addStyleOnSection();
// visible map
visibleAndHiddenElement(id,'loca-box',"container-location",'overlay','hidden');
//hidden map
visibleAndHiddenElement(id,'xmarkmap', "container-location",'overlay','auto');
// start gallery
//turn on autosliders
// allBalls = Array.from(document.querySelector(".balls").children);
// allBalls =(document.querySelectorAll(".ball"));

// console.log(allBalls);

autoSliders = setInterval(limitCurrentSlide, 3000, 1, "nextSlide");
// create bollets for images
createBollets(allImages);
// drag by touch
dragByTouchForGallery(homeGallery);
dragByTouch(secondHeader);

// limit active balls
chooseBall();
// turn off autoSliders
stopAutoSliders(preButton, -1, "nextSlide-top");
stopAutoSliders(nextButton, 1, "nextSlide");
//effects of clickedbuttons for container gallery
clickedButtonsForGallery();
// end gallery
// apply Function About Group AllClickedButton
applyFunctionAboutGroupElements(AllClickedButton, addClassName, "display");
//start parts womens and men in home
moveElementFromOutToIn(id,'lady', "apperance");
moveElementFromOutToIn(id,'men', "apperance");
//end parts womens and men in home
// start part scrolling products
  lastFunctionToShowProducts("container-lessthan", "container-products",'stock','',true);
lastFunctionToShowProducts("container-newArrival", "newArrivalProducts",'rating',2.9,'',true,false);
flashSale();
  showBooks(true);
lastFunctionToShowProducts("brandRolex", "rolexProducts",'brand','rolex','',true);
lastFunctionToShowProducts("offerShoes", "shoesProducts",'category','mens-shoes','');
suggestedForYou();
// end part scrolling products
// start drag product by toutch
getAllElements(containerProductsDrag,dragByTouch);
// addProductToCartByIconCart(document.querySelectorAll('.cartFavorite .cart'));
console.log(document.querySelectorAll('.cartFavorite .cart'));

// allIconsCart.forEach(element=>{
// element.addEventListener('click',(info=>{
//   getProductIdByIconCart(element);
// }))
// })
// start get product by icon cart
// getProductIdByIconCart();
// existUserOrNotToUpdateIconNum('cartUser','productCart','cart');

existUserOrNotForIconCart('cartUser','proAndQuantityIt','productCart','proAndQuantityIt','cart','countPurshes');
existUserOrNotForIconCart('favoriteUser','proAndQuantityInFav','favoriteCart','proAndQuantityInFav','favorite','countFavorites');

existUserOrNotForAddClassAtive('cartUser','productCart','cart');
existUserOrNotForAddClassAtive('favoriteUser','favoriteCart','favorite');
// addClassNoexistOnIcon();
// start footer
createHrefForElementsFooter(allLinksFooter);

}))

// let ddatas=dummy.products;

async function initMa() {
  mapP = await new google.maps.Map(document.querySelector("#map"), {
    center: { lat: 37.7789, lng: -122 },
    zoom: 13,
  });
  await google.maps.event.addListener(map, "click", async function (event) {
    await this.setOptions({ scrollwheel: true });
  });
  directionsService = await new google.maps.directionsService();
  directionsRenderer.setMap(map);
  sourceAoutocom = await new google.maps.places.Autocomplete(
    document.getElementById("search-location")
  );
}

//load map
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
//visible map
function visibleAndHiddenElement(func,clickedElement, visibleElement,overlay,caseBody) {
  func(clickedElement).addEventListener("click", (e) => {
   func(visibleElement).classList.toggle('visibility');
   func(overlay).classList.toggle("visible");
    document.body.style.overflow=caseBody;
  });
}
// end map location
//start section home
// slider gallery

//turn on autosliders

function limitCurrentSlide(plusOrLess, className) {
  currentSlide = currentSlide + plusOrLess;
  if (currentSlide < 0) {
    currentSlide = countSlide - 1;
    prevOrNextSlide(currentSlide, "preSlide", className);
  }
  if (currentSlide > countSlide - 1) {
    currentSlide = 0;
    prevOrNextSlide(currentSlide, "preSlide", className);
  } else {
    prevOrNextSlide(currentSlide, "preSlide", className);
  }
  limitActiveBall(currentSlide);
}

function prevOrNextSlide(target, pre, next) {
  allImages.forEach((img, index, array) => {
    img.classList.forEach((className) => {
      if (className.startsWith("next")) {
        img.classList.remove(className);
      }
      img.classList.remove("slideactive", pre, next);
    });
    if (target > 0 && target < countSlide - 1) {
      array[target].classList.add("slideactive");
      array[target - 1].classList.add(pre);
      array[target + 1].classList.add(next);
    }
    if (target == countSlide - 1) {
      array[countSlide - 2].classList.add(pre);
      array[countSlide - 1].classList.add("slideactive");
      array[0].classList.add(next);
    }
    if (target == 0) {
      array[0].classList.add("slideactive");
      array[1].classList.add(next);
      array[countSlide - 1].classList.add(pre);
    }
  });
}

// drag by touch

function dragByTouchForGallery(container) {
  let startPoint = 0;
  let moveDistance = 0;

  container.addEventListener("touchstart", (info) => {
    startPoint = info.touches[0].clientX;
  });
  container.addEventListener("touchmove", (info) => {
    moveDistance = info.touches[0].clientX - startPoint;
  });
  container.addEventListener("touchend", (info) => {

    if (moveDistance > 0) {
      // container.scrollLeft=`${moveDistance}px`;
      // container.style.left=`${moveDistance}px`;
      clearInterval(autoSliders);
      limitCurrentSlide(-1, "nextSlide-top");
    }
    if (moveDistance < 0) {
      clearInterval(autoSliders);
      limitCurrentSlide(1, "nextSlide");
    }
  });
}

// create bollets for images


function createBollets(array) {
  for (let i = 0; i < array.length; i++) {
    let span = document.createElement("span");
    span.textContent = i + 1;
    span.className = "ball flex-center";
    document.querySelector(".balls").appendChild(span);
  }
  document.querySelector(".ball").classList.add("activeball");
  allBalls=document.querySelectorAll('.ball'); 
  // console.log(allBalls);
}

//limit activeball


function limitActiveBall(index) {
  allBalls.forEach((ball, indexball, array) => {
    ball.classList.remove("activeball");
    array[index].classList.add("activeball");
  });
}


function chooseBall() {
  allBalls.forEach((balll, indexball) => {
    balll.addEventListener("click", function (info) {
      clearInterval(autoSliders);
      limitActiveBall(indexball);
      prevOrNextSlide(indexball, "preSlide", "nextSlide");
    });
  });
}

// turn off autoSliders

function stopAutoSliders(button, plus, className) {
  button.onclick = () => {
    clearInterval(autoSliders);
    limitCurrentSlide(plus, className);
  };
}
//start effects of clickedbuttons for container gallery
function clickedButtons(preButton, nextButton) {
  preButton.addEventListener("click", () => {
    preButton.classList.add("clicked");
    nextButton.classList.remove("clicked");
  });
}
function  clickedButtonsForGallery() {
  hundelUniqeVariablesById("gallery", "container-gallery");
  clickedButtons(clickedButtonnnn, noClickButtonnnn);
  clickedButtons(noClickButtonnnn, clickedButtonnnn);
}


//end effects of clickedbuttons for container gallery
//end gallery

//start show products
// create divs with scrolling
function applyFunctionsDivsAndScroll(filterProducts,test){
  filterProducts.forEach((product,index)=>{
    groupesFunctionsForCreatesDivs(filterProducts, index, containerProductsss);
    if(test){
      groupesFunctionsForScrolllByWidth();
    }
    else{
      groupesFunctionsForScrolllByLeft();
    }
  })
}
// get on container products by id
function hundelUniqeVariablesById(parentContainer, containerProductss) {
  containerProductsss = document.getElementById(containerProductss);
  scrolllll = document.querySelector(
    `#container section#home  #${parentContainer} .scroll-bar .scroll`
  );
  scrollBarrrr = document.querySelector(
    `#container section#home #${parentContainer} .scroll-bar`
  );
  buttonsBestSellerrrr = document.querySelector(
    `#container section#home  #${parentContainer} .buttons`
  );
  clickedButtonnnn = document.querySelector(
    `#container section#home  #${parentContainer} .buttons .first`
  );
  noClickButtonnnn = document.querySelector(
    `#container section#home  #${parentContainer} .buttons .last`
  );
}
// scroll products by width
function groupesFunctionsForScrolllByWidth() {
  scrollBarrrr.classList.add("activeScroll");
  limitWidthScrollBarWhenLoaded(scrollBarrrr);

  limitWidthScrollBarByClickIt(
    scrollBarrrr,
    containerProductsss,
    noClickButtonnnn,
    clickedButtonnnn
  );
  movesProducts(
    containerProductsss,
    noClickButtonnnn,
    clickedButtonnnn,
    1,
    scrolllll,
    scrollBarrrr,
    true
  );
  movesProducts(
    containerProductsss,
    clickedButtonnnn,
    noClickButtonnnn,
    -1,
    scrolllll,
    scrollBarrrr,
    true
  );
}
// scroll products by left
function groupesFunctionsForScrolllByLeft() {
  movesProducts(
    containerProductsss,
    noClickButtonnnn,
    clickedButtonnnn,
    1,
    scrolllll,
    scrollBarrrr,
    false
  );
  movesProducts(
    containerProductsss,
    clickedButtonnnn,
    noClickButtonnnn,
    -1,
    scrolllll,
    scrollBarrrr,
    false
  );
  hundelScrollByLeft(containerProductsss, scrolllll, scrollBarrrr);
}
// limit Width Scroll Bar When Scrolling
// function limitWidthScrollBarWhenScrolling(
  // containerproducts,
  // scroll,
  // scrollbar,
  // dose
// ) {
  // if (dose == true) {
    // let percentageShow =
      // (containerproducts.scrollLeft + containerproducts.clientWidth) /
      // containerproducts.scrollWidth;
    // scroll.style.width = percentageShow * 100 + "%";
  // } else {
    // let limitDistanceLeft =
      // (containerproducts.scrollLeft /
        // (containerproducts.scrollWidth - containerproducts.clientWidth)) *
      // (scrollbar.clientWidth - scroll.offsetWidth);
    // scroll.style.left = limitDistanceLeft + "px";
  // }
// }
// limit Width Scroll Bar When Loaded
function limitWidthScrollBarWhenLoaded(scrollbar) {
  if (
    Math.ceil(
      containerProductsss.scrollLeft + containerProductsss.clientWidth + 2
    ) > containerProductsss.scrollWidth ||
    Math.ceil(
      containerProductsss.scrollLeft +
        containerProductsss.getBoundingClientRect().width
    ) == containerProductsss.scrollWidth
  ) {
    buttonsBestSellerrrr.style.display = "none";
    scrolllll.style.width = "100%";
  }
  if (containerProductsss.scrollWidth > containerProductsss.clientWidth) {
    limitWidthScrollBarWhenScrolling(
      containerProductsss,
      scrolllll,
      scrollbar,
      true
    );
  }
}
// limit Width ScrollBar when ClickIt
function limitWidthScrollBarByClickIt(
  clickedSpace,
  parentWidth,
   noClickButton,
  clickedButton
) {
  clickedSpace.addEventListener("mousemove", (info) => {
    let widthElement = info.clientX - clickedSpace.getBoundingClientRect().left;
    let percentageWidth = widthElement / clickedSpace.clientWidth;
    let widthScroll =
      (percentageWidth -
        (parentWidth.clientWidth + parentWidth.scrollLeft) /
          parentWidth.scrollWidth) *
      parentWidth.scrollWidth;
    parentWidth.scrollBy({ left: widthScroll, behavior: "smooth" });
    disapile(clickedButton, noClickButton, parentWidth);
    if (parentWidth.scrollLeft <= 0) {
      info.preventDefault();
    }
  });
}
// organize scroll
function hundelScrollByLeft(containerProduct, scroll, scrollbar) {
  scroll.style.width = 30 + "%";
  scroll.classList.add("hover");
  scroll.addEventListener("mousedown", (info) => {
    let startx = info.clientX;
    let leftstart = scroll.offsetLeft;
    let positionScroll = (info) => {
      let distance = info.clientX - startx;
      let newPosition = distance + leftstart;
      scroll.style.left =
        newPosition < 0
          ? 0 + "px"
          : newPosition + scroll.clientWidth > scrollbar.clientWidth
          ? scrollbar.clientWidth - scroll.clientWidth + "px"
          : newPosition + "px";
      containerProduct.scrollLeft =
        (scroll.offsetLeft / (scrollbar.clientWidth - scroll.clientWidth)) *
        (containerProduct.scrollWidth - containerProduct.clientWidth);
    };
    let removeEventMousemove = () => {
       document.removeEventListener("mousemove", positionScroll);
    };
    document.addEventListener("mousemove", positionScroll);
    document.addEventListener("mouseup", removeEventMousemove);
  });
}

// apply Function About Group Elements
function applyFunctionAboutGroupElements(element, functionName, className) {
  for (let i = 0; i < element.length; i++) {
    functionName(element[i], className);
  }
}

// scrolling products
// export function movesProducts(
  // element,
  // buttonClick,
  // buttonNoClick,
  // plusOr,
  // barWidth,
  // scrollbar,
  // dose
// ) {
  // buttonClick.addEventListener("click", function (info) {
    // let scroll = element.clientWidth * plusOr;
    // element.scrollBy({ left: scroll, behavior: "smooth" });
    // buttonClick.classList.add("clicked");
    // buttonNoClick.classList.remove("clicked");
    // if (buttonClick.classList.contains("display")) {
      // buttonClick.classList.remove("clicked");
    // }
  // });
  // element.addEventListener("scroll", () => {
    // limitWidthScrollBarWhenScrolling(element, barWidth, scrollbar, dose);
    // disapile(buttonClick, buttonNoClick, element);
  // });
// }
// toggle buttons
// function disapile(firstButton, lastButton, container) {
  // if (container.scrollLeft > 0) {
    // firstButton.classList.remove("display");
  // }
  // if (container.scrollLeft == 0) {
    // firstButton.classList.add("display");
    // firstButton.classList.remove("clicked");
  // }
  // if (
    // Math.ceil(container.scrollLeft + container.clientWidth + 2) >=
    // container.scrollWidth
  // ) {
    // lastButton.classList.add("display");
    // lastButton.classList.remove("clicked");
  // }
  // if (
    // container.scrollLeft + container.clientWidth + 2 <
    // container.scrollWidth
  // ) {
    // lastButton.classList.remove("display");
  // }
// }
// start function filter products
let gg=Array.from({length:10},(_,index)=>index);
 export async function lastFunctionToShowProducts(containerName,containerProducts,varia,value,dose,test){
  await fetchProducts();
  shaffelArray(datas);
  hundelUniqeVariablesById(containerName,containerProducts);
  let filterProducts=datas.filter(product=>{
    let hundleProduct=product[varia]||'';
let productToLowerStri=hundleProduct.toString().toLowerCase();
let productMatch;
if(dose){
 productMatch=gg.some(element=>element.toString().toLowerCase().includes( productToLowerStri));
}
else{
 productMatch= productToLowerStri.includes(value.toString().toLowerCase());
}

return productMatch;
  })
  // shaffelArray(filterProducts);
  applyFunctionsDivsAndScroll(filterProducts,test);
}
// start function filter products
//start parts womens and men in home
function moveElementFromOutToIn(func,element, className) {
  document.addEventListener("scroll", () => {
    if (
     func(element).getBoundingClientRect().top > - func(element).offsetHeight &&
     func(element).getBoundingClientRect().top < window.innerHeight
    ) {
      func(element).classList.add(className);
    } else {
      func(element).classList.remove(className);
    }
  });
}

//end parts womens and men in home
/* start part flash sale */
// localStorage.clear();
// flashSale();
async function flashSale(){
  await fetchProducts(false);
    hundelUniqeVariablesById("flashSale", "flashSaleProducts");
    flashSaleProducts(containerProductsss);
    downCounter(24 * 60 * 60, containerProductsss);
    groupesFunctionsForScrolllByLeft();
  }
// testing stored products or not and display
  function flashSaleProducts(containerproducts) {
    if (localStorage.getItem("productss")) {
let  storedProducts = JSON.parse(localStorage.getItem("productss"));
      showRandomProducts(true,storedProducts,containerproducts);
    } else {
let  randomProductss= randomProducts(14);
      localStorage.setItem("productss", JSON.stringify(randomProductss));
      showRandomProducts(true,randomProductss,containerproducts);
    }
  }
// increase discountPercentage and show products
 function showRandomProducts(choose,array,containerProducts) {
  if (choose) { 
    numProducts=array.map(product=>({...product,discountPercentage:product.discountPercentage<10?product.discountPercentage
   +20:product.discountPercentage+15}));
   numProducts.forEach((_,ind)=>{
    groupesFunctionsForCreatesDivs(numProducts,ind, containerProducts);
  })
         } 
         else{   
         array.forEach((_,ind)=>{
    groupesFunctionsForCreatesDivs(array,ind, containerProducts);
  })}
  }
  // get on random products
  function randomProducts(num) {
    let randomArray=datas.slice().sort(()=>.5 - Math.random());
    numProducts=randomArray.slice(0,num);
          return numProducts;
   }
   
  // window.localStorage.clear();
  // testing update products or not
function downCounter(duration, containerProduct) {
  let endTime =
    localStorage.getItem("downEndTime") || Date.now() + duration * 1000;
  setInterval(() => {
    let remainingTime = Math.floor((endTime - Date.now()) / 1000);
    if (remainingTime <= 0) {
      endTime = Date.now() + duration * 1000;
      containerProduct.textContent = "";
      localStorage.removeItem("productss");
      flashSaleProducts( containerProduct);
    }
    localStorage.setItem("downEndTime", endTime);

    let hours = String(Math.floor(remainingTime / 3600)).padStart(2, "0");
    let minuts = String(Math.floor((remainingTime % 3600) / 60)).padStart(
      2,
      "0"
    );
    let seconds = String(Math.floor(remainingTime % 60)).padStart(2, "0");

    document.querySelector(
      ".countTimer"
    ).textContent = `${hours} : ${minuts} : ${seconds}`;
  }, 1000);
}
/* end  part flash sale */

//start part books
// showBooks();

async function showBooks(choose) {
  await fetchProducts(choose);
    // "https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=40&key=AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM"
  // );
  console.log(url);
  hundelUniqeVariablesById("containerBooks", "booksProducts");
  for (let i = 0; i < datas.length; i++) {
  let  hundleProduct= datas[i].volumeInfo.categories||'';
    let productToLowerStri=hundleProduct.toString().toLowerCase();
    if (datas[i].saleInfo.saleability.toLowerCase()== "FOR_SALE".toLowerCase() &&
    productToLowerStri != "Fiction".toLowerCase()) {
      groupesFunctionsForCreatesDivs(datas, i, containerProductsss);
    }
  }
  groupesFunctionsForScrolllByWidth();
}
//end part books
// start suggested for you
async function suggestedForYou() {
  await fetchProducts(false);
  hundelUniqeVariablesById("suggestedForYou", "suggestedProducts");
    sugesstedProducts(containerProductsss);
  groupesFunctionsForScrolllByLeft();
}
function sugesstedProducts(containerProduct) {
  let ran=randomProducts(14);
  showRandomProducts(false,ran,containerProduct);
}
// end suggested for you

//end show products

// satrt show offers
function fashionOffers(){
  id('fashionOffers').addEventListener('click',(info=>{
      // window.location.href='../html/fashion.html';

      // id('linkFashionOffers').href=`html/fashion.html?productPrice=200`;
      // &productCategory=${productCategory}&url=${urlLink}`;

  }))
}
fashionOffers();
// end show offers
















// end page home


// fetch('/.netlify/functions/sendSMS?phone=01090090762').then(res=>res.json().then(data=>console.log(data)).catch
// (error=>console.log('error',error)));    
let  { SnipcartProvider }= 'use-snipcart';

async function kk(){
try {
   Snipcart.api.cart.items.add({
      id: 1,
      name:'mas',
      price: 1.11,
      url: '/',
      quantity: 1,
  },{
      id: 'PRODUCT2_ID',
      name: 'Product 2',
      price: 1.11,
      url: '/',
      quantity: 1,
  });
} catch (error) {
  console.log(error)
}
}
// ppkk();
// async function ppkk(){
document.addEventListener('snipcart.ready',()=>{
  try {
    // Snipcart.api.theme.cart.open();
 Snipcart.api.cart.items.add({
       id: '1',
       name:'mas',
       price: 1.11,
       url: '/',
       quantity: 1,
   },{
       id: 'PRODUCT2_ID',
       name: 'Product 2',
       price: 1.11,
       url: '/',
       quantity: 1,
   })
  //  let ll= Snipcart.store.getState().cart.items;
  //  console.log(ll);
  //  console.log(Snipcart.result);
 } catch (error) {
   console.log(error)
 }
})
document.addEventListener('snipcart.ready',()=>{

  try {
    // const response = Snipcart.api.customer.fetchOrders('{orderToken}');
   const response=Snipcart.api.sessions;
    console.log(response);
} catch (error) {
    console.log(error)
}})

// let  { useSnipcart } =use-snipcart;

// const { cart = {} } = useSnipcart();
// async function hghg() {
//  await fetch('https://app.snipcart.com/api/cart',{
  // mode:'no-cors',
	// bbb:'Access-Control-Allow-Origin',
// Access-Control-Allow-Origin:' https://example.com',
// Access-Control-Allow-Credentials: true
// }).then((res)=>res.json());
  
// }
// hghg();
//   try {
// Snipcart.api.cart.setShippingInformation({
//         method: '{shippingMethod}',
//         cost: 0,
    // });
// } catch (error) {
    // console.log(error)
// }
//  try {
//   let gg= Snipcart.api.cart.fetchShippingRates();

// } catch (error) {
  // console.log(error);
// }







  // let kkp=Snipcart;
  // let ll= Snipcart.api.cart.items;
  // console.log(ll);
// ll.forEach(i=> console.log(i));
// Snipcart.api.cart.items.then((cart)=>{
  // console.log(Snipcart);
// })
// document.addEventListener('snipcart.ready',()=>{
  // try {
    // let ll= Snipcart.cart.items;
    // console.log(ll);
    // console.log(Snipcart.result);

//  Snipcart.store.getState().cart.items()
    //  .then(res=>console.log(res))
    // console.log(ll);
  // }
  // catch (error) {
    // console.log(error)
  // }})





//books
let ll = ["book", "novel", "story", "literature"];
const apikey = "AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM";
async function api() {
  // let kk=await fetch('https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=40&key=AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM');
  let kk = await fetch("https://dummyjson.com/products?limit=0");
  let jj = await kk.json();
  let vv = JSON.stringify(jj, null, 2);
  let blo = new Blob([vv], { type: "application/json" });
  let url = URL.createObjectURL(blo);
  let a = document.createElement("a");
  a.href = url;
  a.download = "dummyproductss.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
// api();


// async function bb(){
// let headersList = {
// "server": "openresty/1.13.6.1",
// "date": "Thu, 29 Feb 2024 15:05:58 GMT",
// "content-type": "text/html",
// "transfer-encoding": "chunked",
// "content-encoding": "gzip",
// "connection": "close"
// }
// let response = await fetch("https://atfawry.fawrystaging.com/ECommerceWeb/api/lookups/govs", {
// method: "GET",
// headers: headersList
// });
// let data = await response.json();
// console.log(data);}
// bb();
// async function bbbb(){
// let response = await fetch("https://atfawry.fawrystaging.com/ECommerceWeb/api/lookups/govs");
//
// let data = await response.json();
// console.log(data);
// }
// bbbb();

// AIzaSyC640A2CFM2aApA-ohC5UBXYFZ_32l4V24
// AIzaSyC640A2CFM2aApA-ohC5UBXYFZ_32l4V24
// AIzaSyC640A2CFM2aApA-ohC5UBXYFZ_32l4V24
// AIzaSyC640A2CFM2aApA-ohC5UBXYFZ_32l4V24
// AIzaSyC640A2CFM2aApA-ohC5UBXYFZ_32l4V24
// document.addEventListener("l",function(){
// document.addEventListener("load", initMap());
/* updating title of product with id 1 */
// async function mmk() {
  // await fetch("https://dummyjson.com/products/194", {
    // method: "PUT" /* or PATCH */,
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({
      // title: "iPhone Galaxy +1",
    // }),
  // })
    // .then((res) => res.json())
    // .then(console.log);
// }
// datas = dummy.products;
  // fetchProductss('http://world.openfoodfacts.org/api/v0/search.json?search_terms=coffee&fields=product_name,brands,ingredients_text,nutriments,image_url');
  // "http://world.openfoodfacts.org/api/v0/search.json?search_terms=coffee&fields=product_name%2Cbrands%2Cingredients_text%2Cnutriments%2Cimage_url",
  
  //AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM
  //AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM
  