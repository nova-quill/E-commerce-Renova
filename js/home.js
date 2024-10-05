"use strict";
import {id,getAllElements,groupesFunctionsForCreatesDivs,datas,price,fetchProducts,shaffelArray,addClassActive,url,addClassName,movesProducts,limitWidthScrollBarWhenScrolling,dragByTouch,createHrefForElementsFooter,limitLocationProductsBySidebar,addStyleOnSection,existUserOrNotForIconCart,existUserOrNotForAddClassAtive} from './common.js';
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
let containerProductsDrag=document.querySelectorAll('.container-bestSeller .box-products');
let AllClickedButton=document.querySelectorAll('.container-bestSeller .buttons .first');
let allLinksFooter=document.querySelectorAll('footer .category li a');
let allTrendingSide=document.querySelectorAll('#boxSideBar #trending dd a');
let allLinksSideBar=document.querySelectorAll('.sideBar.hidd');

document.addEventListener('DOMContentLoaded',(info=>{

  // start header
  addClassActive(iconsPersonal, "active");
addClassActive(linkHeader, "active");
// end header
// start sidebar
getAllElements(allTrendingSide,limitLocationProductsBySidebar);
createHrefForElementsFooter(allLinksSideBar);
addStyleOnSection();
// visible map
visibleAndHiddenElement(id,'loca-box',"container-location",'overlay','hidden');
//hidden map
visibleAndHiddenElement(id,'xmarkmap', "container-location",'overlay','auto');
// start gallery
//turn on autosliders
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
flashSale(false);
  showBooks(true);
lastFunctionToShowProducts("brandRolex", "rolexProducts",'brand','rolex','',true);
lastFunctionToShowProducts("offerShoes", "shoesProducts",'category','mens-shoes','');
suggestedForYou(false);
// end part scrolling products
// start drag product by toutch
getAllElements(containerProductsDrag,dragByTouch);
// start get product by icon cart
existUserOrNotForIconCart('cartUser','proAndQuantityIt','productCart','proAndQuantity','cartBooUser','proAndQuantityInCartUserBoo','cartBooCart','proAndQuantityInCartBoo','cart','countPurshes');

existUserOrNotForIconCart('favoriteUser','proAndQuantityInFav','favoriteCart','proAndQuantityInFav','favoriteBooUser','proAndQuantityInFavBoo','favoriteBooCart','proAndQuantityInFavBoo','favorite','countFavorites');
existUserOrNotForAddClassAtive('cartUser','productCart','cart');
existUserOrNotForAddClassAtive('cartBooUser','cartBooCart','cart');
existUserOrNotForAddClassAtive('favoriteUser','favoriteCart','favorite');
existUserOrNotForAddClassAtive('favoriteBooUser','favoriteBooCart','favorite');
// start footer
createHrefForElementsFooter(allLinksFooter);
}))


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
let startY=0;
let isHorizental=false;
  container.addEventListener("touchstart", (info) => {
    startPoint = info.touches[0].clientX;
    startY=info.touches[0].clientY;
    isHorizental=false;
  });
  container.addEventListener("touchmove", (info) => {
    moveDistance = info.touches[0].clientX - startPoint;
    let moveX=info.touches[0].clientX-startPoint;
    let moveY=info.touches[0].clientY-startY;
    if(Math.abs(moveX)>Math.abs(moveY)){
      isHorizental=true;
    }
    else{
      isHorizental=false;
    }
    if(!isHorizental){
      info.stopPropagation();
    }
  });
  container.addEventListener("touchend", (info) => {

    if (moveDistance > 0) {
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
function applyFunctionsDivsAndScroll(filterProducts,test,testing){
  filterProducts.forEach((product,index)=>{
    groupesFunctionsForCreatesDivs(filterProducts, index, containerProductsss,testing);
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
 
// start function filter products
let gg=Array.from({length:10},(_,index)=>index);
 export async function lastFunctionToShowProducts(containerName,containerProducts,varia,value,dose,test,testing){
  await fetchProducts(testing);
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
  applyFunctionsDivsAndScroll(filterProducts,test,testing);
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
// flashSale();
async function flashSale(test){
  await fetchProducts(false);
    hundelUniqeVariablesById("flashSale", "flashSaleProducts");
    flashSaleProducts(containerProductsss,test);
    downCounter(24 * 60 * 60, containerProductsss);
    groupesFunctionsForScrolllByLeft();
  }
// testing stored products or not and display
  function flashSaleProducts(containerproducts,test) {
    if (localStorage.getItem("productss")) {
let  storedProducts = JSON.parse(localStorage.getItem("productss"));
      showRandomProducts(true,storedProducts,containerproducts,test);
    } else {
let  randomProductss= randomProducts(14);
      localStorage.setItem("productss", JSON.stringify(randomProductss));
      showRandomProducts(true,randomProductss,containerproducts,test);
    }
  }
// increase discountPercentage and show products
 function showRandomProducts(choose,array,containerProducts,testing) {
  if (choose) { 
    numProducts=array.map(product=>({...product,discountPercentage:product.discountPercentage<10?product.discountPercentage
   +20:product.discountPercentage+15}));
   numProducts.forEach((_,ind)=>{
    groupesFunctionsForCreatesDivs(numProducts,ind, containerProducts,testing);
  })
         } 
         else{   
         array.forEach((_,ind)=>{
    groupesFunctionsForCreatesDivs(array,ind, containerProducts,testing);
  })}
  }
  // get on random products
  function randomProducts(num) {
    let randomArray=datas.slice().sort(()=>.5 - Math.random());
    numProducts=randomArray.slice(0,num);
          return numProducts;
   }
   
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
      flashSaleProducts( containerProduct,test);
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
//  let url=  ( "https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=40&key=AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM"
  // );
  console.log(url);
  hundelUniqeVariablesById("containerBooks", "booksProducts");
  for (let i = 0; i < datas.length; i++) {
  let  hundleProduct= datas[i].volumeInfo.categories||'';
    let productToLowerStri=hundleProduct.toString().toLowerCase();
    if (datas[i].saleInfo.saleability.toLowerCase()== "FOR_SALE".toLowerCase() &&
    productToLowerStri != "Fiction".toLowerCase()) {
      groupesFunctionsForCreatesDivs(datas, i, containerProductsss,choose);
    }
  }
  groupesFunctionsForScrolllByWidth();
}
//end part books
// start suggested for you
async function suggestedForYou(test) {
  await fetchProducts(false);
  hundelUniqeVariablesById("suggestedForYou", "suggestedProducts");
    sugesstedProducts(containerProductsss,test);
  groupesFunctionsForScrolllByLeft();
}
function sugesstedProducts(containerProduct,test) {
  let ran=randomProducts(14);
  showRandomProducts(false,ran,containerProduct,test);
}
// end suggested for you

//end show products

// satrt show offers
function fashionOffers(){
  id('fashionOffers').addEventListener('click',(info=>{
  }))
}
fashionOffers();
// end show offers
















// end page home

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

// AIzaSyC640A2CFM2aApA-ohC5UBXYFZ_32l4V24
// AIzaSyC640A2CFM2aApA-ohC5UBXYFZ_32l4V24
// AIzaSyC640A2CFM2aApA-ohC5UBXYFZ_32l4V24
// AIzaSyC640A2CFM2aApA-ohC5UBXYFZ_32l4V24
// AIzaSyC640A2CFM2aApA-ohC5UBXYFZ_32l4V24
  //AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM
  //AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM
  