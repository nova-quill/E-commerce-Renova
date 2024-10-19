"use strict";
import { dummyProducts } from "../js/products.js";
import { dummy } from "../js/dummyproducts.js";
import { book } from "../js/books.js";

console.log(book);
let cardLessThan;
let containerImage;
let detailsProduct;
export let datas;
export let datass;
export let price = 10;
let container;
let thumbnail;
export let productId;
export let title;
let priceProduct;
export let discountPercentagee = 0;
 export let productStock;
let nowPrice;
let stock;
let rate;
let array = [];
 export let parentContainer;
let selectedCategory ='all';
export let filterProductsWithCategories;
let filterProducts;
let categoryMatch;
let selectedReveiw = "all";
let priceMatch;
let discountMatch;
let brandMatch;
let brand;
let arrayFromDisChacked;
let arrayFromBrandChacked ;
let isCategory=true;
let valuePrice = 0;
let freeSort = "all";
let bestSelling = "all";
let newArrivals = "all";
let selectedTags='all';
let selectedCategoryy;
let selectedCategoryyy;
let category;
let pricepro;
let searchProduct;
let productRating;
let productCategory;
let productSearch='all';
let searchMatch='all';
let quantProInCart=0;
let quantProInFav=0;
let totalDrod=0;
let totalProd=0;
let quantNotBoo=0;
let quantBoo=0;
let ppp=0;
export let testFetch;
let testing;
export let url;
export let urlBooks='alll';
export let urlLink;
let totalLength=0;
let productsFilterInLocNotBoo;
let productsFilterInLocBoo;
export let  filterProductsWithSearch;

let overlay = document.getElementById("overlay");
// get element by id
export function id(idName) {
  let nameVariable = document.getElementById(idName);
  return nameVariable;
}
// function get all elements
export function getAllElements(allElements, nameFunction) {
  allElements.forEach((element) => {
    nameFunction(element);
  });
}
// create div with different count
export function createDiv(
  count,
  span,
  classChild,
  source,
  altarnet,
  text,
  parentContainers,test
) {
  for (let i = 1; i <= count; i++) {
    let childDiv = document.createElement(span);
    childDiv.className = classChild;
    childDiv.src = source;
    childDiv.alt = altarnet;
    childDiv.innerHTML = text;
    parentContainers.appendChild(childDiv);
  }}
// create pearent div and add it to container
export function createParentDiv(classParent, container) {
    parentContainer = document.createElement("div");
    parentContainer.className = classParent;
    container.appendChild(parentContainer);
  }
// start add class active on link in navbar
export function addClassActive(lis, className,isCart) {
  let urlWin = window.location.href;
  lis.forEach((activeLink) => {
    if (activeLink.href === urlWin) {
      if(isCart){
        activeLink.classList.add(className);
      }
      else{
      activeLink.parentElement.classList.add(className);
      }
    }
  });
}
// end add class active on link'navbar

// start sidebar
let boxSideBar = document.querySelector(".sideBar.main .boxSideBar");
let backButton = document.querySelectorAll(".sideBar.main .hidd .backMenu");
let boxSides = document.querySelectorAll(".sideBar.main .hidd");
  function showSideBar(
  func,
  button,
  sideBar,
  className,
  buttonX,
  dose,
  activeButton,
  are,
  secondarySide
) {
  func(button).addEventListener("click", () => {
    func(sideBar).classList.toggle(className);
    overlay.classList.toggle("visible");
    document.body.style.overflow='hidden';
    if (dose) {
      func(activeButton).classList.remove("active");
      boxSideBar.classList.remove("hidden");
      document.body.style.overflow='auto';
      boxSides.forEach((boxSide) => {
        boxSide.classList.remove("visible");
      });
    }
    if (are) {
      func(secondarySide).classList.toggle("visible");
      overlay.classList.toggle("visible");
    }
    if (!are) {
      func(buttonX).classList.toggle("visible");
    }
    backButton.forEach((buttonn) => {
      buttonn.addEventListener("click", () => {
        func(secondarySide).classList.remove("visible");
        boxSideBar.classList.remove("hidden");
      });
    });
  });
}

showSideBar(
  id,
  "all",
  "mainSideBar",
  "showMenu",
  "xmark",
  false,
  "all",
  false,
  "mainSideBar"
);

showSideBar(
  id,
 'menuMobile',
  "mainSideBar",
  "showMenu",
  "xmark",
  false,
  "menuMobile",
  false,
  "mainSideBar"
);

showSideBar(
  id,
  "xmark",
  "mainSideBar",
  "showMenu",
  "xmark",
  true,
  "all",
  false,
  "mainSideBar"
);

showSideBar(
  id,
  "cancel",
  "mainSideBar",
  "showMenu",
  "xmark",
  true,
  "all",
  false,
  "mainSideBar"
);
showSideBar(
  id,
  "liFashion",
  "boxSideBar",
  "hidden",
  "xmark",
  false,
  "",
  true,
  "fashion"
);

showSideBar(
  id,
  "liAutomotive",
  "boxSideBar",
  "hidden",
  "xmark",
  false,
  "",
  true,
  "automotive"
);

showSideBar(
  id,
  "liElectronices",
  "boxSideBar",
  "hidden",
  "xmark",
  false,
  "",
  true,
  "electronices"
);

showSideBar(
  id,
  "liFurniture",
  "boxSideBar",
  "hidden",
  "xmark",
  false,
  "",
  true,
  "furniture"
);

showSideBar(
  id,
  "liPhones",
  "boxSideBar",
  "hidden",
  "xmark",
  false,
  "",
  true,
  "phones"
);
// go location products from sidebar
export function limitLocationProductsBySidebar(element){
element.addEventListener('click',(info=>{
    info.preventDefault();
    id('xmark').click();
    let nameSection=info.target.getAttribute('data-nameSection');
    if(window.location.pathname==('/index.html')||(window.location.pathname=='/')) {
    window.location.href=`index.html?isLimit=true&&nameSec=${nameSection}&&#${nameSection}`;
    }
    else{
      window.location.href=`../index.html?isLimit=true&&nameSec=${nameSection}&&#${nameSection}`
    }
addStyleOnSection();
  }))
}
export function addStyleOnSection(){
let url= new URLSearchParams(window.location.href);
if(window.location.href.includes('isLimit')==true){
let nameSec=url.get('nameSec');
id(nameSec).classList.add('limitSection');
setTimeout(function(){
id(nameSec).scrollIntoView({
  behavior:'smooth',
  block:'center'
})
},100)

setTimeout(()=>{
  id(nameSec).classList.remove('limitSection');
},10000)
}
  }

// end sidebar
//add class name about element
export function addClassName(element, className) {
  element.classList.add(className);
}
// start dashboard
export function toggleDashboard(button,element,isHidden){
  id(button).addEventListener('click',()=>{
 id(element).classList.toggle('active');
 if(isHidden){
  document.body.style.overflow='hidden';
 }
 else{
  document.body.style.overflow='auto';
 }
})
}
// end dashboard

// start create divs for show products
export  function groupesFunctionsForCreatesDivs(datas, i, containerProducts,test) {
  organizeAmount(datas, i,true);
  createCardImage(datas, containerProducts, i,test);
  container = document.createElement("div");
  container.className = "containerBestSeller flex-center";
  parentContainer.appendChild(container);
  bestSellerOrHighestRat(
    datas,
    i,
    datas[i].stock,
    price,
    "",
    "",
    "bestSeller",
    "besT seller"
  );

  bestSellerOrHighestRat(
    datas,
    i,
    "",
    "",
    datas[i].rating,
    4.5,
    "rating",
    "high rated"
  );

  createCardprice(datas, i,test);
  if (datas[i].stock < price || datas[i].rating > 4.5) {
    divFreeDelivery(detailsProduct, datas[i].stock);
  }
  // divCartRating(detailsProduct, datas[i].rating);
  divCartRating(detailsProduct, productRating,test);
console.log(productRating);
}
 function organizeAmount(datas, i,test) {
  nowPrice = Math.round(
    priceProduct - priceProduct * (discountPercentagee / 100)
  );
}

  function createCardImage(datas, containerProducts, i,test) {
  organizeObject(datas, i,true);
  cardLessThan = document.createElement("a");
  cardLessThan.className = "cardLessThan";
  const urlParams=new URLSearchParams(window.location.search);
    if(window.location.pathname==('/index.html')||(window.location.pathname=='/')) {

  cardLessThan.href=`html/detailsProduct.html?productId=${productId}&productCategory=${productCategory}&url=${urlLink}`;
  console.log(urlLink);
  }
  else{
    cardLessThan.href=`detailsProduct.html?productId=${productId}&productCategory=${productCategory}&url=${urlLink}`;
    console.log(urlLink);
  }
  createParentDiv("aCardLess", cardLessThan);
  containerImage = document.createElement("div");
  containerImage.className = "containerImage flex-center";
  createDiv(1, "img", "", thumbnail, title, "", containerImage,test);
  parentContainer.appendChild(containerImage);
  detailsProduct = document.createElement("div");
  detailsProduct.className = "detailsProduct";
  parentContainer.appendChild(detailsProduct);
  containerProducts.appendChild(cardLessThan);
}

  function createCardprice(test) {
  createDiv(1, "div", "title", "", "", title, detailsProduct,test);
  divPrice(
    (priceProduct - priceProduct * (discountPercentagee / 100)).toFixed(1),
    priceProduct.toFixed(1),
    `- ${Math.round(discountPercentagee)}`,
    detailsProduct
  );
  divCartFavorite(containerImage);
}

function divCartFavorite(container) {
  createParentDiv("cartFavorite flex-center", container);
  createDiv(
    1,
    "i",
    `fa-solid fa-cart-shopping cart cart{${productId}} flex-center`,
    "",
    "",
    "",
    parentContainer
  );
  createDiv(
    1,
    "i",
    `fa-solid fa-heart favorite favorite{${productId}} flex-center`,
    "",
    "",
    "",
    parentContainer
  );
}

function divPrice(price, deletP, discountPrice, container) {
  createParentDiv("detailsPrice flex-just-start", container);
  createDiv(1, "span", "markPound", "", "", "egp", parentContainer);
  createDiv(1, "span", "priceProduct", "", "", price, parentContainer);
  let containerDelete = document.createElement("div");
  containerDelete.className = "containerDelete flex-just-between";
  parentContainer.appendChild(containerDelete);
  createDiv(1, "span", "deletPrice", "", "", deletP, containerDelete);
  createDiv(
    1,
    "span",
    "discount flex-center",
    "",
    "",
    discountPrice + "%",
    containerDelete
  );
}

export function divCartRating(container, rate,test) {
  createParentDiv("cartRating flex-center", container);
  for (let ii = 1; ii <= 5; ii++) {
    if (ii <= Math.floor(rate)) {
      createDiv(
        1,
        "i",
        "fa-solid fa-star startrating flex-center",
        "",
        "",
        "",
        parentContainer
      );
    }
    if (ii === Math.floor(rate) + 1 && rate % 1 > 0) {
      let remaining = rate - Math.floor(rate);
      let percentageWidth = remaining * 100;
      let span = document.createElement("span");
      span.style.setProperty("--width-halfStar", `${percentageWidth}%`);
      createDiv(
        1,
        "i",
        "fa-regular fa-star startrating halfStar  flex-center",
        "",
        "",
        "",
        span
      );
      parentContainer.appendChild(span);
    }
    if(test){
    if (ii > Math.floor(rate) + 1) {
      createDiv(
        1,
        "i",
        "fa-regular fa-star startrating  flex-center",
        "",
        "",
        "",
        parentContainer
      );
    }}
    if(test!=true){
      if (ii > Math.floor(rate) + 1) {
        createDiv(
          1,
          "i",
          "fa-regular fa-star startrating  flex-center",
          "",
          "",
          "",
          parentContainer
        );
      }}
    }
  }

function divFreeDelivery(container, inStock) {
  createParentDiv("detailsDelivery", container);
  let freeDelivery = document.createElement("div");
  if (inStock < price) {
    createDiv(
      1,
      "div",
      "remainingStock",
      "",
      "",
      `only ${inStock} left in stock`,
      parentContainer
    );
  }
  createDiv(1, "i", "fa-solid fa-truck freeIconCar", "", "", "", freeDelivery);
  createDiv(1, "span", "", "", "", "free delivery", freeDelivery);
  parentContainer.appendChild(freeDelivery);
}


function bestSellerOrHighestRat(
  datas,
  i,
  stock,
  price,
  rate,
  rating,
  className,
  content
) {
  if (stock < price || rate > rating) {
    createDiv(
      1,
      "div",
      `${className} ${className}${i} flex-center`,
      "",
      "",
      content,
      container
    );
  }
}
// end create divs for show products
// start scrolling products
export function movesProducts(
  element,
  buttonClick,
  buttonNoClick,
  plusOr,
  barWidth,
  scrollbar,
  dose,
  test
) {
  buttonClick.addEventListener("click", function (info) {
    let scroll = element.clientWidth * plusOr;
    element.scrollBy({ left: scroll, behavior: "smooth" });
    buttonClick.classList.add("clicked");
    buttonNoClick.classList.remove("clicked");
    if (buttonClick.classList.contains("display")) {
      buttonClick.classList.remove("clicked");
    }
  });
  element.addEventListener("scroll", () => {
    if(test!=true){
    limitWidthScrollBarWhenScrolling(element, barWidth, scrollbar, dose);
    }
    disapile(buttonClick, buttonNoClick, element);
  });
}
// end scrolling products
//start toggle buttons
export function disapile(firstButton, lastButton, container) {
  if (container.scrollLeft > 0) {
    firstButton.classList.remove("display");
  }
  if (container.scrollLeft == 0) {
    firstButton.classList.add("display");
    firstButton.classList.remove("clicked");
  }
  if (
    Math.ceil(container.scrollLeft + container.clientWidth + 2) >=
    container.scrollWidth
  ) {
    lastButton.classList.add("display");
    lastButton.classList.remove("clicked");
  }
  if (
    container.scrollLeft + container.clientWidth + 2 <
    container.scrollWidth
  ) {
    lastButton.classList.remove("display");
  }
}
//end toggle buttons
//start  limit Width Scroll Bar When Scrolling
export function limitWidthScrollBarWhenScrolling(
  containerproducts,
  scroll,
  scrollbar,
  dose
) {
  if (dose == true) {
    let percentageShow =
      (containerproducts.scrollLeft + containerproducts.clientWidth) /
      containerproducts.scrollWidth;
    scroll.style.width = percentageShow * 100 + "%";
  } else {
    let limitDistanceLeft =
      (containerproducts.scrollLeft /
        (containerproducts.scrollWidth - containerproducts.clientWidth)) *
      (scrollbar.clientWidth - scroll.offsetWidth);
    scroll.style.left = limitDistanceLeft + "px";
  }
}
// localStorage.clear();
//end  limit Width Scroll Bar When Scrolling
// start fetchs products
export async function fetchProducts(chooseUrl,i) {
  if(chooseUrl||urlBooks!='alll'){

    url =
    "https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=40&key=AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM";
    // url="../js/books.json";
    urlLink='books';
  }
  else{
    url = "https://dummyjson.com/products?limit=0";
      urlLink='notBooks';
  }
  let response = await fetch(url, i);
  datass = await response.json();
  organizeObject(datas, i);
  if (Object.keys(datass).includes("products")) {
      urlLink='notBooks';
  datas.map(updatePrice);
}
if (Object.keys(datass).includes("items")||chooseUrl==true|| url=="../js/books.json"||    url == "https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=40&key=AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM"
) {
  urlLink='books';
}

}
export function organizeObject(data,i,test) {
  if (Object.keys(datass).includes("products")) {
    urlBooks='alll';
    urlLink='notBooks';
    datas = datass.products;
    if (test == true) {
        thumbnail = data[i].thumbnail;
        title = data[i].title;
        priceProduct = data[i].price;
        discountPercentagee = data[i].discountPercentage;
        productId= data[i].id;
        productCategory=data[i].category;
        productStock=data[i].stock;
        productRating=data[i].rating;

  }}
else{
  urlBooks='another';
  urlLink='books';

  // datas=datass;
  // datas=book.items;
  datas = datass.items;
datas=datas.filter(element=>element.saleInfo.saleability.toLowerCase()=='FOR_SALE'.toLowerCase());
  if (test == true) {
      thumbnail = data[i].volumeInfo.imageLinks.thumbnail;
      title = data[i].volumeInfo.title;
      priceProduct = data[i].saleInfo.listPrice.amount;
      let  hundleProduct= data[i].volumeInfo.categories||'';
      let productToLowerStri=hundleProduct.toString().toLowerCase();
      discountPercentagee=productToLowerStri != "Fiction".toLowerCase()?  discountPercentagee=50:discountPercentagee=20;
      productRating=data[i]['volumeInfo']['categories'].toString().toLowerCase() == "Fiction".toString().toLowerCase()?productRating=4.6:data[i]['volumeInfo']['categories'].toString().toLowerCase()== 'Language Arts & Disciplines'.toString().toLowerCase()?productRating=3.5:data[i]['volumeInfo']['categories'].toString().toLowerCase() == 'Literary Collections'.toString().toLowerCase()?productRating=3.1:productRating=2.5;
      productId= data[i].id;
      productCategory=data[i].volumeInfo.categories;
      productStock=1;
      console.log(productCategory);
    }
}
return discountPercentagee;
}
// end fetchs products
// update Price for products
function updatePrice(product) {
  if (product.brand != "Rolex") {
    product.price *= 10;
  }
  product.discountPercentage *= 3;
}

// start random show products
export async function shaffelArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// end random show products
// start show products in page
export async function filterProdutsForEveryPage(elements, func,choose,isSearch) {
  await fetchProducts(choose);
  if(!choose){
    shaffelArray(datas);

  }
  if(isSearch){
    // if(localStorage.getItem('searchProduct')){
          // filterProductsWithCategories=[];

          // searchProduct=JSON.parse(localStorage.getItem('searchProduct'));
    // filterProductsWithCategories=[];
    // filterProductsWithCategories=[...searchProduct];
    filterProductsWithCategories=filterProductsWithSearch;
    return filterProductsWithCategories;
  // }
}
  else{
    let arrayCategories = Array.from(elements).map((element) =>
      element.getAttribute("data-category").toString().toLowerCase().split(','));
      let spreadArrayCategories=[].concat(...arrayCategories);
  
  filterProductsWithCategories = datas.filter((product) => {
    if(choose){
   category=product['volumeInfo']['categories']; 
    }
    else{
     category=product['category'];

    }

let  hundleCategory = category||'';
 let    categoryToLower= hundleCategory.toString().toLowerCase();
    categoryMatch = spreadArrayCategories.some((element) =>categoryToLower==(element));
    return categoryMatch;
  });
}
}

export function filterAllProductsByDashboard(
  func,
  elementsCa,
  elementsCaTags,
  elementsDi,
  elementsAvila,
  elementsReview,
  elementFree,
  elementPrice,
  elementsBra,
  elementLowPrice,
  elementFreeSort,
  elementBestSelling,
  elementNewArrivalsSort,
  elementAllSort,
  elementHighPrice,
  container,
testing,
isSearch
) {
  if(document.getElementById('categoryName')){
  document.querySelector('#categoryName a').classList.add("active");
  }
  func("spanCategory").innerHTML = func(elementAllSort).innerHTML;
  filterProductsFromDashboardByCategory(
    func,
    elementsCa,
    "click",
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,
    true,'','',testing,isSearch
  );
  filterProductsFromDashboardByCategory (
    func,
    elementsCaTags,
    "click",
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,
    '',
    true,'',testing,isSearch
  );
  filterProductsFromDashboardByCategory(
    func,
    elementsReview,
    "click",
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,
    '',
    '',
    true,testing,isSearch
  );
  filterProductsFromDashboard(
    func,
    elementsBra,
    "change",
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,
    testing,isSearch
  );
  filterProductsFromDashboard(
    func,
    elementsDi,
    "change",
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,
    testing,isSearch
  );
  addEvent(
    func,
    elementFree,
    "change",
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,
    testing,isSearch
  );
  addEvent(
    func,
    elementsAvila,
    "change",
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,
    testing,isSearch

  );

  func(elementPrice).addEventListener("input", (info) => {
    valuePrice = func(elementPrice).value;
    if (func(elementPrice).value) {
      func(elementPrice).classList.add("active");
    } else {
      func(elementPrice).classList.remove("active");
    }
    filterProductsAndShowIt(
      func,
      container,
      elementsDi,
      elementsAvila,
      elementFree,
      elementsBra,
      testing,isSearch
    );
  });

  function filterProductsBySort(
    func,
    element,
    value1,
    value2,
    value3,
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,
    testing,isSearch
  ) {
    func(element).addEventListener("click", (info) => {
    info.preventDefault();
  functionInnerfilterProductsBySort(func,
        element,
        value1,
        value2,
        value3,
        container,
        elementsDi,
        elementsAvila,
        elementFree,
        elementsBra,'',testing,isSearch);
    });
  }
  function functionInnerfilterProductsBySort(
    func,
    element,
    value1,
    value2,
    value3,
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,test,testing,isSearch
  ) {
    

    // if(isSearch){
    //     if(localStorage.getItem('searchProduct')){
    //       let searchProduct=JSON.parse(localStorage.getItem('searchProduct'));
    //       console.log(searchProduct);
    //     console.log(filterProductsWithSearch);
    //     filterProductsWithCategories=[];
    //     filterProductsWithCategories=searchProduct;
    //     console.log(filterProductsWithCategories);
      
    //   }
    // }

    if(!test){
      shaffelArray(filterProductsWithCategories);
    }
    freeSort = value1;
    bestSelling = value2;
    newArrivals = value3;
    hundleSortBy(func, element, container);
    console.log(filterProductsWithCategories);

    filterProductsAndShowIt(func, container, elementsDi, elementsAvila, elementFree, elementsBra,testing,isSearch);
    console.log(filterProductsWithCategories);

  }
  filterProductsBySort(
    func,
    elementFreeSort,
    "anotrher",
    "all",
    "all",
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,
    testing,isSearch
  );
  // console.log(filterProductsWithCategories);

  filterProductsBySort(
    func,
    elementBestSelling,
    "all",
    "anotrher",
    "all",
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,
    testing,isSearch
  );
  filterProductsBySort(
    func,
    elementNewArrivalsSort,
    "all",
    "all",
    "anotrher",
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,
    testing,isSearch
  );
  func(elementAllSort).addEventListener("click", (info) => {
    info.preventDefault();
    functionInnerfilterProductsBySort(func,
   elementAllSort,
      "all",
      "all",
      "all",
      container,
      elementsDi,
      elementsAvila,
      elementFree,
      elementsBra,'',testing,isSearch);
  });
  func(elementLowPrice).addEventListener("click", (info) => {
 
    let discountPercentageee=0;
    info.preventDefault();

  //  ooo(testing,isSearch,elementLowPrice, container,elementsDi,elementsAvila,
      // elementFree,elementsBra);
    
    // if(testing){
    //   console.log(filterProductsWithCategories);

    //   filterProductsWithCategories.forEach((product) => {
    //     if(product['volumeInfo']['categories'].toString().toLocaleLowerCase() != "Fiction".toLowerCase()){
    //       discountPercentageee=50;
    
    //     }
    //     else{
    //       discountPercentageee=20;
    //     }
    //    })
    // }
    // else{
      // console.log(filterProductsWithCategories);
      // if(isSearch){
      //   if(localStorage.getItem('searchProduct')){
      //      searchProduct=JSON.parse(localStorage.getItem('searchProduct'));
      //     console.log(searchProduct);
      //   console.log(filterProductsWithSearch);
      //   filterProductsWithCategories=[];
      //   filterProductsWithCategories=searchProduct;
      //   console.log(filterProductsWithCategories);

      //   console.log(searchProduct);
      //   filterProducts.sort(
      //     (a, b) =>
      //       a.price -
      //       a.price * (a.discountPercentage / 100) -
      //       (b.price - b.price * (b.discountPercentage / 100))
    //      );
    //   }
    // }
    if(!isSearch){
    filterProductsWithCategories.sort(
      (a, b) =>
        a.price -
        a.price * (a.discountPercentage / 100) -
        (b.price - b.price * (b.discountPercentage / 100))
     );
     console.log(filterProductsWithCategories);
     console.log(searchProduct);

  // }
    functionInnerfilterProductsBySort(func,
      elementLowPrice,
         "all",
         "all",
         "all",
         container,
         elementsDi,
         elementsAvila,
         elementFree,
         elementsBra,true,testing,isSearch);
    }

  });
  if(!isSearch){
  func(elementHighPrice).addEventListener("click", (info) => {
    info.preventDefault();
    filterProductsWithCategories.sort((a, b) =>((b.price -(b.price * (b.discountPercentage / 100))) -((a.price - (a.price * (a.discountPercentage / 100))))));
    functionInnerfilterProductsBySort(func,
      elementHighPrice,
         "all",
         "all",
         "all",
         container,
         elementsDi,
         elementsAvila,
         elementFree,
         elementsBra,true,testing,isSearch);
  });
}
  filterProductsAndShowIt(func, container, elementsDi, elementsAvila, elementFree, elementsBra,testing,isSearch);
 
}

async function ooo(testing,isSearch,elementLowPrice, container,elementsDi,elementsAvila,
elementFree,elementsBra){
  await fetchProducts(testing);
  let discountPercentageee=0;
  // info.preventDefault();
  if(testing){
    console.log(filterProductsWithCategories);

    filterProductsWithCategories.forEach((product) => {
      if(product['volumeInfo']['categories'].toString().toLocaleLowerCase() != "Fiction".toLowerCase()){
        discountPercentageee=50;
  
      }
      else{
        discountPercentageee=20;
      }
     })
  }
  else{
    console.log(filterProductsWithCategories);
    if(isSearch){
      if(localStorage.getItem('searchProduct')){
        //  searchProduct=JSON.parse(localStorage.getItem('searchProduct'));
        console.log(searchProduct);
      console.log(filterProductsWithSearch);
      // filterProductsWithCategories=[];
      // filterProductsWithCategories=searchProduct;
      console.log(filterProductsWithCategories);

      console.log(searchProduct);
      filterProductsWithSearch.sort(
        (a, b) =>
          a.price -
          a.price * (a.discountPercentage / 100) -
          (b.price - b.price * (b.discountPercentage / 100))
       );
    }
  }
 else{ filterProductsWithCategories.sort(
    (a, b) =>
      a.price -
      a.price * (a.discountPercentage / 100) -
      (b.price - b.price * (b.discountPercentage / 100))
   );
  }
   console.log(filterProductsWithCategories);
   console.log(searchProduct);

}

// isSearch=true;
  // functionInnerfilterProductsBySort(func,
  //   elementLowPrice,
  //      "all",
  //      "all",
  //      "all",
  //      container,
  //      elementsDi,
  //      elementsAvila,
  //      elementFree,
  //      elementsBra,true,testing,isSearch);
}




export async function filterProductsAndShowIt(
  func,
  container,
  elementsDi,
  elementsAvila,
  elementFree,
  elementsbrand,
  test,isSearch
) {
  await fetchProducts(test);
  arrayFromDisChacked = Array.from(elementsDi)
    .filter((element) => element.checked)
    .map((element) =>
      parseInt(element.parentElement.getAttribute("data-category"))
    );
    console.log(arrayFromDisChacked);
   arrayFromBrandChacked =
    Array.from(elementsbrand)
      .filter((element) => element.checked)
      .map((element) => element.getAttribute("value")) || [];
      console.log(filterProductsWithCategories);
if(isSearch){

  // if(localStorage.getItem('searchProduct')){
  //   searchProduct=JSON.parse(localStorage.getItem('searchProduct'));
  //   console.log(searchProduct);
  // console.log(filterProductsWithSearch);
  // filterProductsWithCategories=[];
  // filterProductsWithCategories=[...searchProduct];
  filterProductsWithCategories=filterProductsWithSearch;
// 
}


 //let //
 filterProducts =filterProductsWithCategories.filter((product,index) => {
    if(test){
     category=product['volumeInfo']['categories']||'';
     pricepro=product['saleInfo']['listPrice']['amount']||'';

     if (category.toString().toLocaleLowerCase() != "Fiction".toLowerCase()) {
      discountPercentagee=50;
    }
    else{
      discountPercentagee=20;
    }
    productStock=1;
    productRating=product['volumeInfo']['categories'].toString().toLowerCase() == "Fiction".toString().toLowerCase()?productRating=4.6:product['volumeInfo']['categories'].toString().toLowerCase()== 'Language Arts & Disciplines'.toString().toLowerCase()?productRating=3.5:product['volumeInfo']['categories'].toString().toLowerCase() == 'Literary Collections'.toString().toLowerCase()?productRating=3.1:productRating=2.5;

    }
    else{
     category =product['category']||'';
     pricepro=product['price']||'';
     discountPercentagee = product.discountPercentage;
     productStock=product.stock;
     productRating=product.rating;
    }
 let   categoryToLower=category.toString().toLowerCase();

 showProductsWithOffersCategory(category);
      let categoryTagsMatch =selectedTags == 'all'||selectedCategoryyy.some(elee=>(product["tags"].includes(elee)));
    showProductsWithOffersDis(discountPercentagee,category);
        let freeMatch = !elementFree.checked || productRating > 4.5;
    let freeSortMatch = freeSort == "all" || product.rating > 4.5;
        let avilabiltyMatch = !elementsAvila.checked || productStock> 0;
    let reviewMatch =selectedReveiw == "all" || productRating>= selectedReveiw;
    let besetSellingMatch = bestSelling == "all" || product.stock < price;
    let newArrivalsMatch =newArrivals == "all" ||(product["rating"] >= 2.9 && product["rating"] <= 3.3);
     brand = product["brand"] || "";
    showProductsWithOffersBrand(brand,test);
    showProductsWithOffersPrice( pricepro,discountPercentagee);
if(isSearch){
  console.log(filterProducts);
  return (
    categoryMatch &&
    brandMatch &&

    discountMatch &&
    avilabiltyMatch &&
    reviewMatch &&
    freeMatch &&
    priceMatch &&
    freeSortMatch &&
    besetSellingMatch &&
    newArrivalsMatch&&
    categoryTagsMatch
  );

}
else{
  console.log(filterProducts);

    return (
      categoryMatch &&
      discountMatch &&
      avilabiltyMatch &&
      reviewMatch &&
      freeMatch &&
      priceMatch &&
      brandMatch &&
      freeSortMatch &&
      besetSellingMatch &&
      newArrivalsMatch&&
      categoryTagsMatch
    );
  }
  });
  console.log(filterProducts);

  if(isSearch){
    func('headingSearch').innerHTML=`${filterProducts.length} result search`;
    // displayProducts(filterProductsWithCategories, func, container,test);

  }
  displayProducts(filterProducts, func, container,test);
  let icons=document.querySelectorAll('.cartFavorite .cart');
  let links=document.querySelectorAll('.cardLessThan');
  existUserOrNotForIconCart('favoriteUser','proAndQuantityInFav','favoriteCart','proAndQuantityInFav','favoriteBooUser','proAndQuantityInFavBoo','favoriteBooCart','proAndQuantityInFavBoo','favorite','countFavorites');

  existUserOrNotForIconCart('cartUser','proAndQuantityIt','productCart','proAndQuantity','cartBooUser','proAndQuantityInCartUserBoo','cartBooCart','proAndQuantityInCartBoo','cart','countPurshes');
existUserOrNotForAddClassAtive('cartUser','productCart','cart');
existUserOrNotForAddClassAtive('cartBooUser','cartBooCart','cart');
existUserOrNotForAddClassAtive('favoriteUser','favoriteCart','favorite');
existUserOrNotForAddClassAtive('favoriteBooUser','favoriteBooCart','favorite');
}

// localStorage.clear();
// export async function filterProductsAndShowIt(
//   func,
//   container,
//   elementsDi,
//   elementsAvila,
//   elementFree,
//   elementsbrand,
//   test
// ) {
//   await fetchProducts(test);
//   arrayFromDisChacked = Array.from(elementsDi)
//     .filter((element) => element.checked)
//     .map((element) =>
//       parseInt(element.parentElement.getAttribute("data-category"))
//     );
//    arrayFromBrandChacked =
//     Array.from(elementsbrand)
//       .filter((element) => element.checked)
//       .map((element) => element.getAttribute("value")) || [];
// console.log(filterProductsWithCategories);
//   filterProducts =filterProductsWithCategories.filter((product) => {
//     if(test){
//      category=product['volumeInfo']['categories']||'';
//     }
//     else{
//      category =product['category']||''
//     }
//  let   categoryToLower=category.toString().toLowerCase();
//  console.log(categoryToLower);

//  console.log(selectedCategoryy);
//  showProductsWithOffersCategory();
//       console.log(category);
//       let categoryTagsMatch =selectedTags == 'all'||selectedCategoryyy.some(elee=>(product["tags"].includes(elee)));
//     showProductsWithOffersDis(product.discountPercentage,category);
//     let freeMatch = !elementFree.checked || product.rating > 4.5;
//     let freeSortMatch = freeSort == "all" || product.rating > 4.5;
//     let avilabiltyMatch = !elementsAvila.checked || product.stock > 0;
//     let reviewMatch =selectedReveiw == "all" || product.rating >= selectedReveiw;
//     let besetSellingMatch = bestSelling == "all" || product.stock < price;
//     let newArrivalsMatch =newArrivals == "all" ||(product["rating"] >= 2.9 && product["rating"] <= 3.3);
//      brand = product["brand"] || "";
//     showProductsWithOffersBrand(brand);
//     showProductsWithOffersPrice( product.price,product.discountPercentage);
//     return (
//       categoryMatch &&
//       discountMatch &&
//       avilabiltyMatch &&
//       reviewMatch &&
//       freeMatch &&
//       priceMatch &&
//       brandMatch &&
//       freeSortMatch &&
//       besetSellingMatch &&
//       newArrivalsMatch&&
//       categoryTagsMatch
//     );
//   });
//   console.log(filterProducts);
//   displayProducts(filterProducts, func, container);
//   let icons=document.querySelectorAll('.cartFavorite .cart');
//   let links=document.querySelectorAll('.cardLessThan');
//   console.log(icons,links);
// existUserOrNotForIconCart('cartUser','proAndQuantityIt','productCart','proAndQuantityIt','cart','countPurshes');
// existUserOrNotForIconCart('favoriteUser','proAndQuantityInFav','favoriteCart','proAndQuantityInFav','favorite','countFavorites');
// existUserOrNotForAddClassAtive('cartUser','productCart','cart');
// existUserOrNotForAddClassAtive('favoriteUser','favoriteCart','favorite');
// addClassNoexistOnIcon('cart');
// addClassNoexistOnIcon('favorite');

// }
function showProductsWithOffersPrice(productPrice,productDis){
 priceMatch;
  const urlParams=new URLSearchParams(window.location.search);
  const productPriceUrl=urlParams.get('productPrice');
    valuePrice =productPriceUrl;
  if(productPriceUrl&& id('rangPrice').value==''){
      priceMatch =productPrice - productPrice* (productDis / 100) <=valuePrice;
  }
  else{
    valuePrice= id('rangPrice').value;
    priceMatch =valuePrice == 0 ||productPrice - productPrice* (productDis / 100) <=valuePrice;
   console.log(productRating);

  }
}
function showProductsWithOffersDis(productDis,productCateg){
   const urlParams=new URLSearchParams(window.location.search);
   const productDisUrl=urlParams.get('productDiscount');
   const productCateUrl=urlParams.get('productCategory');
   let allInputs=id('discount').querySelectorAll('input');
   if(productDisUrl&&!(Array.from(allInputs).some(input=>input.checked)) ){
   discountMatch =Math.round(productDis)==productDisUrl||Math.round(productDis)<productDisUrl;
   }
  else{
    discountMatch =arrayFromDisChacked.length == 0 ||productDis.toFixed(0)<=arrayFromDisChacked[arrayFromDisChacked.length - 1];
 }
   if(productCateUrl){
   }
  else{
   }

  }
  function showProductsWithOffersCategory(category,test){
     const urlParams=new URLSearchParams(window.location.search);
     const productCateUrl=urlParams.get('productCategory');
     const productRateUrl=urlParams.get('highRate');
     let   categoryToLower=category.toString().toLowerCase();
     if(productCateUrl&&isCategory){
      selectedCategory = '';
     selectedCategoryy=productCateUrl.toLocaleLowerCase().split(',');
   
        categoryMatch =selectedCategory == 'all'||selectedCategoryy.some(elee=>(categoryToLower==elee ) );
          if(productRateUrl){
            id('freeShipping').querySelector('input').checked=true;
          }
     }
      else{
                categoryMatch =selectedCategory == 'all'||selectedCategoryy.some(elee=>(categoryToLower==elee ) );
     }
     return categoryMatch;
   }


   function showProductsWithOffersBrand(productBrand){
    let allInputs;
    if(id('brandsDash')){
     allInputs=id('brandsDash').querySelectorAll('input');
    }
let brandTolower = brand.toLowerCase();
     const urlParams=new URLSearchParams(window.location.search);
     const productBrandUrl=urlParams.get('productBrand');
     if(productBrandUrl&&!(Array.from(allInputs).some(input=>input.checked)) ){
        brandMatch =productBrand.toLocaleLowerCase()==productBrandUrl.toLocaleLowerCase();
     }
     else{
          brandMatch =arrayFromBrandChacked.length == 0 ||arrayFromBrandChacked.some((element) => brandTolower.includes(element));
     }
   }

 export async  function SearchByKeyOrButton(func,element,inputSearch,isHome,isNotSearch,test){
  await fetchProducts(test);
  searchMatch;
func(element).addEventListener('click',(info=>{
   getWordSearch(func,inputSearch,isHome,isNotSearch,test);
}))
func(inputSearch).addEventListener('keydown',(info=>{
  if(info.key=='Enter'){
    getWordSearch(func,inputSearch,isHome,isNotSearch,test);

  }
}))

}

export async  function getWordSearchs(func,inputSearch,isHome,test){

await fetchProducts(test);
if(func(inputSearch).value){
  if('books'==(func(inputSearch).value.toLowerCase())||'book'==(func(inputSearch).value.toLowerCase())){
    if(isHome==true){
      window.location='html/books.html';
    }
    else{
      window.location='books.html';

    }
  return;
  }
  productSearch=func(inputSearch).value;
localStorage.setItem('wordSearch',productSearch.trim());

}}

export async  function getWordSearch(func,inputSearch,isHome,isNotSearch,test){
  await fetchProducts(test);
  if(func(inputSearch).value){
    if('books'==(func(inputSearch).value.toLowerCase())||'book'==(func(inputSearch).value.toLowerCase())){
      if(isHome==true){
        window.location='html/books.html';
      }
      else{
        window.location='books.html';

      }
    return;
    }
    productSearch=func(inputSearch).value;
  localStorage.setItem('wordSearch',productSearch.trim());
  if(isHome==true){
    window.location='html/search.html';
  }
  else{
    if(isNotSearch==true){
      showProductsWithSearch(func,test);
    }
    else{
      window.location='search.html';
    }
  }
  }
}

let categoriesWithFil;
export async  function showProductsWithSearch(func,test){
  await fetchProducts(test);
  let htmlFiles=['fashion.html','beauty.html','books.html','phones.html','grocery.html','kitchen.html','offers.html','electronics.html','detailsProduct.html','addToCart.html','automotive.html','addToFavorite.html','furniture.html'];

  if(localStorage.getItem('wordSearch')){
    let wordSearchInLoc=localStorage.getItem('wordSearch');
  let wordSearchInLocToLow=wordSearchInLoc.toString().toLocaleLowerCase().replace(/-/g,' ');
  console.log(wordSearchInLoc);
  func('inputSearchPageSea').value=wordSearchInLoc;
  console.log(wordSearchInLoc);
if(test==true){
  filterProductsWithSearch=datas.filter(element=>{

   let matchProductCat=element.volumeInfo.categories.toString().toLocaleLowerCase().replace(/&/g,' ').includes(wordSearchInLocToLow);

return matchProductCat;
 })
}
else{
  // filterProductsWithSearch=datas.filter(element=>{
    filterProductsWithSearch=datas.filter(element=>{


    let matchProductCat=element.category.toString().toLocaleLowerCase().replace(/-/g,' ').includes(wordSearchInLocToLow);
    let elementsTags=element.tags;
    let matchProductTags=elementsTags.some(ele=>(ele.toString().toLowerCase().replace(/-/g,' '))==(wordSearchInLocToLow));
    return  matchProductTags|| matchProductCat ;
  })}
localStorage.setItem('searchProduct',JSON.stringify(filterProductsWithSearch));
displayProducts(filterProductsWithSearch, func, 'containerProduts',test);

 if(filterProductsWithSearch.length>0){
// id('lowPrice').addEventListener('click',()=>{
//   filterProductsWithSearch.sort(
//     (a, b) =>
//       a.price -
//       a.price * (a.discountPercentage / 100) -
//       (b.price - b.price * (b.discountPercentage / 100))
//    );
//    displayProducts(filterProductsWithSearch, func, 'containerProduts',test);

// })

  if(test==true){
    categoriesWithFil=Array.from(new Set(filterProductsWithSearch.map(obj=>obj.volumeInfo.categories.toLowerCase().replace(/-/g,' '))));

  }
  else{

categoriesWithFil=Array.from(new Set(filterProductsWithSearch.map(obj=>obj.category.toLowerCase().replace(/-/g,' '))));
  }
  func('dashboard').style.display='block';
  func('headingSearch').innerHTML=`${filterProductsWithSearch.length} result search`;

  // htmlFiles.forEach(page=>{
  //   fetch(page).then(response=>response.text()).then(html=>{
  //     const parser=new DOMParser();
  //     const doc=parser.parseFromString(html,'text/html');
  //     const specificSection=doc.querySelector('#containerFashion section#fashion .containerFashion dl#category');
  //     if(specificSection){
  //       const elements=specificSection.querySelectorAll(`[data-category]`);
  //   if(elements.length>0){
  //     elements.forEach(attri=>{
  //       const attribName=attri.getAttribute('data-category').toLowerCase().replace(/-/g,' ').split(',');
  //       categoriesWithFil.forEach(cate=>{
  //       if(attribName.some(ele=>cate==ele )){
  //   localStorage.setItem('pageName',page);
  //         const newDashboard=doc.querySelector('#dashboard');
  //         if(newDashboard){
  //          const searchDash= document.querySelector('#dashboard');
  //          searchDash.innerHTML=newDashboard.innerHTML;
  //       }
  //     }
  //   })

  //     });
  //   }}})
  
  // })


  }
  else{
    func('dashboard').style.display='none';
    func('headingSearch').innerHTML=`${filterProductsWithSearch.length} result search`;
    func('containerProduts').innerHTML=`No results`;
  }
  }
}





export async  function isFIlterProductsWithSearch(func,test){
  await fetchProducts(test);
 let  filterProducts;
  // let htmlFiles=['fashion.html','beauty.html','books.html','phones.html','grocery.html','kitchen.html','offers.html','electronics.html','detailsProduct.html','addToCart.html','automotive.html','addToFavorite.html','furniture.html'];

  if(localStorage.getItem('wordSearch')){
    let wordSearchInLoc=localStorage.getItem('wordSearch');
  let wordSearchInLocToLow=wordSearchInLoc.toString().toLocaleLowerCase().replace(/-/g,' ');
  console.log(wordSearchInLoc);
  func('inputSearchPageSea').value=wordSearchInLoc;
  console.log(wordSearchInLoc);
if(test==true){
  filterProducts=datas.filter(element=>{

   let matchProductCat=element.volumeInfo.categories.toString().toLocaleLowerCase().replace(/&/g,' ').includes(wordSearchInLocToLow);

return matchProductCat;
 })
}
else{
 filterProducts=datas.filter(element=>{

    let matchProductCat=element.category.toString().toLocaleLowerCase().replace(/-/g,' ').includes(wordSearchInLocToLow);
// console.log(element.category.toString().toLocaleLowerCase().replace(/-/g,' '));
// console.log(wordSearchInLocToLow);
    let elementsTags=element.tags;
    let matchProductTags=elementsTags.some(ele=>(ele.toString().toLowerCase().replace(/-/g,' ')).includes(wordSearchInLocToLow));

    // let matchProductTitle=element.title.toString().toLowerCase().includes(wordSearchInLocToLow);

    let elementBrand=element.brand||'';
    // let matchProductBrand=elementBrand.toString().toLowerCase().includes(wordSearchInLocToLow);

    return  matchProductTags ||matchProductCat;
  })}

 
console.log(filterProductss);
  }

  return filterProducts;

}















export async function ggg(func,element,inputSearch,isHome,isNotSearch){
let ll=await  showProductsWithSearch(id);
console.log(ll);
if(ll.length==0){
 SearchByKeyOrButton(func,element,inputSearch,isHome,isNotSearch,true);

}
} 

// ggg();

export function displayProducts(product, func, container,test,isFav) {
  func(container).innerHTML = "";
  if (product.length == 0) {
    if(!isFav){
    func(container).innerHTML = `<p>No Products</p>`;
    }
    return;
  }
  for (let o = 0; o < product.length; o++) {
    groupesFunctionsForCreatesDivs(product, o, func(container),test);
  }
}
// localStorage.clear();
// create url for footer of elements
export function createHrefForElementsFooter(elements){
  elements.forEach(element=>{
  element.addEventListener('click',(info=>{
  if(info.target.getAttribute('data-page'||info.target.getAttribute('data-category'))){
    let categoryElement=info.target.getAttribute('data-category').toLowerCase();
    let dataPage= info.target.getAttribute('data-page')||'';
    let dataPageToLow=dataPage.toLocaleLowerCase();
     info.target.href=`${dataPageToLow}.html?productCategory=${categoryElement}`;
  }
  }))})
  }
// end show products in page
// start drag products
//  export function dragByTouch(container) {
//   let startPoint;
//   let scrollLeft;
// let isDrag=false;
//   container.addEventListener("touchstart", (info) => {
//     isDrag=true;
//     startPoint = info.touches[0].pageX;
//     scrollLeft=container.scrollLeft;
//   });
//   container.addEventListener("touchmove", (info) => {
//     if(!isDrag)return;
//     info.preventDefault();
//     const x=info.touches[0].pageX;
//     const moveDistance=(x-startPoint)*3;
//           container.scrollLeft=scrollLeft-moveDistance;
//   });
//   container.addEventListener("touchend", (info) => {
// isDrag=false;
//   });
// }





export function dragByTouch(container) {
  let startPointx=0;
  let starty=0;
  let scrollLeft;
  // const moveDistance=0;
let isDrag=false;
  container.addEventListener("touchstart", (info) => {
   
    startPointx = info.touches[0].clientX;
    starty = info.touches[0].clientY;
    isDrag=false;
    // scrollLeft=container.scrollLeft;
  });
  container.addEventListener("touchmove", (info) => {
    const movex=info.touches[0].clientX - startPointx;
    const movey=info.touches[0].clientY - starty;
    if(Math.abs(movex)>Math.abs(movey)){
      container.style.overflowX='auto';
      isDrag=true;
  // const   moveDistance=(movex-startPointx)*3;
                // container.scrollLeft=movex;
    }
    if(Math.abs(movex)<Math.abs(movey)){
      container.style.overflowX='hidden';

      isDrag=false;
    }
if(!isDrag){
  info.stopPropagation();
}
    // if(!isDrag)return;
    // info.preventDefault();
    // const x=info.touches[0].pageX;
    // const moveDistance=(x-startPoint)*3;
    //       container.scrollLeft=scrollLeft-moveDistance;
  });
  container.addEventListener("touchend", (info) => {
isDrag=false;
  });
}
// end drag products
//start  add product to cart by icon cart
// are user or not
// localStorage.clear();

export function existUserOrNots(cartUser,proAndQuantityIt,globalCart,proAndQuantityItt,cartBooUser,proAndQuantityItBoo,globalBooCart,proAndQuantityIttBoo,iconName,iconId,isDetails,test,isCart){
  if(window.localStorage.getItem('user')){
  
    let user=JSON.parse(window.localStorage.getItem('user'));
    let userToken=JSON.parse(window.localStorage.getItem('userToken'));
    addProductToCart(`${cartUser}${user.id}`,`${proAndQuantityIt}${user.id}`,`${cartBooUser}${user.id}`,`${proAndQuantityItBoo}${user.id}`,iconName,iconId,isDetails,test,isCart);
  }
  else{
    addProductToCart(globalCart,proAndQuantityItt,globalBooCart,proAndQuantityIttBoo,iconName,iconId,isDetails,test,isCart);
  }
  }





// localStorage.clear();

//  export function existUserOrNots(cartUser,proAndQuantityIt,globalCart,proAndQuantityItt,iconName,iconId,isFavorit,proId){
//   if(window.localStorage.getItem('user')){
//     let user=JSON.parse(window.localStorage.getItem('user'));
//     let userToken=JSON.parse(window.localStorage.getItem('userToken'));
//     addProductToCart(`${cartUser}${user.id}`,`${proAndQuantityIt}${user.id}`,iconName,iconId,isFavorit,proId);
//   }
//   else{
//     addProductToCart(globalCart,proAndQuantityItt,iconName,iconId,isFavorit,proId);
//   }
//   }
  export function existUserOrNotForIconCart(cartUser,proAndQuantityIt,globalCart,proAndQuantityItt,cartBooUser,proAndQuantityItBoo,globalBooCart,proAndQuantityIttBoo,iconName,iconId,isDetails,test,isCart,isFavorite){
    if(window.localStorage.getItem('user')){
    
      let user=JSON.parse(window.localStorage.getItem('user'));
      let userToken=JSON.parse(window.localStorage.getItem('userToken'));
      getProductIdByIconCart(`${cartUser}${user.id}`,`${proAndQuantityIt}${user.id}`,`${cartBooUser}${user.id}`,`${proAndQuantityItBoo}${user.id}`,iconName,iconId,isDetails,test,isCart,isFavorite);
    }
    else{
      getProductIdByIconCart(globalCart,proAndQuantityItt,globalBooCart,proAndQuantityIttBoo,iconName,iconId,isDetails,test,isCart,isFavorite);
    }
    }
//add product to cart
// localStorage.clear();
// async function addProductToCart(productsInLoc,prodAndQuantityIt,iconName,iconId,isFavorit,proId,testfetch){
  export async function addProductToCart(productsInLoc,prodAndQuantityIt,productsInLocc,prodAndQuantityItt,iconName,iconId,isDetails,testFetch,isCart){

  await fetchProducts(testFetch);
  let categoryMatch;
  let productId;
  let productUrl;
  let quantity;
  let proAndQuantityIt;
  // quantNotBoo=0;
  // totalDrod=0;
// totalProd=0;
//   if(isFavorit){
// productId=proId;
//   }
  // else{
    const urlParams=new URLSearchParams(window.location.search);
    productId=urlParams.get('productId');
    productUrl=urlParams.get('url');
  // }
 
let  filterProducts =datas.filter((product) => {
      categoryMatch=product['id']==productId;
    return  categoryMatch;
})
if(filterProducts.length==0||filterProducts[0]==undefined){
  console.log('filter unde');
    
    if(productUrl=='books'){
      console.log('unde books');
      urlBooks='another';
  
      await fetchProducts(true);
      console.log(datas);
      console.log(filterProducts);
      filterProducts =datas.filter((product) => {
        categoryMatch=product['id']==productId;
      return  categoryMatch;
  })
  console.log(filterProducts,filterProducts[0]);
      testing=true;
      testFetch=true;
      // element.classList.add('addedIt');
  
      getInfoFromLocal(productsInLocc,prodAndQuantityItt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLocc);
      addNumToIcon(productsInLocc,productsInLoc,iconId,testFetch);

  return;
    }
    if(productUrl=='notBooks'){
      console.log(productUrl);
      urlBooks='alll';
  
      await fetchProducts();
      console.log(datas);
      testing=false;
      testFetch=false;
      filterProducts =datas.filter((product) => {
        categoryMatch=product['id']==productId;
      return  categoryMatch;
  })
  console.log(filterProducts,filterProducts[0]);

   if(filterProducts[0].stock>0){
    // element.classList.add('addedIt');
  
    console.log(filterProducts[0].stock);
      getInfoFromLocal(productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLocc);
      addNumToIcon(productsInLocc,productsInLoc,iconId,testFetch);

  return;
  }
  if(filterProducts[0].stock==0){
  effectHoverOnSignIn('inStock');

    }}}
    if(filterProducts.length>0){
      console.log('filter > 0');
  
      if(productUrl=='books'){
        urlBooks='another';
  
        // await fetchProducts(true);
      testing=true;
      testFetch=true;
      // element.classList.add('addedIt');
  
      getInfoFromLocal(productsInLocc,prodAndQuantityItt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLocc);
      addNumToIcon(productsInLocc,productsInLoc,iconId,testFetch);

  
      }
      if(productUrl=='notBooks'){
        urlBooks='alll';
  
        // await fetchProducts(false);
        testing=false;
        testFetch=false;
        if(filterProducts[0].stock>0){
          // element.classList.add('addedIt');
  
          console.log(filterProducts[0].stock);
        getInfoFromLocal(productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLocc);
        addNumToIcon(productsInLocc,productsInLoc,iconId,testFetch);

        }
        if(filterProducts[0].stock==0){
          effectHoverOnSignIn('inStock');
        
            }
  
      }
    }
    console.log(datas,testing);
    if(isCart){
    //   let elementAdd= document.querySelector(`#containerAddToCart section#addToCart .addToCart .container #${container} .aCardLess  .buy.add${productId}`);
    //   elementAdd.innerHTML='added it to cart';
    //   elementAdd.style.opacity='.4';
    //   elementAdd.style.pointerEvents='none';
    //   elementAdd.style.color='gray';
    }
    // addNumToIcon(productsInLocc,iconId);
    // addNumToIcon(productsInLoc,iconId);
    // return testing;
      // }
    
// let prodStock;
// if((/[A-Za-z]/g).test(productId)){
//   prodStock=1;
// }
// if(!(/[A-Za-z]/g).test(productId)){
//   prodStock=filterProducts[0].stock;
//  console.log(productId);
// }
//   if(prodStock==0){

// if(!isFavorit){
//   effectHoverOnSignIn('inStock');
// }}
// else{
//   if(!isFavorit){
//   if(id('quantityDetails').value==0){
//     id('quantityDetails').value=1;
//   }
//   if(id('quantityDetails').value>0){
//     quantity=id('quantityDetails').value;
//      proAndQuantityIt={
//      productId:productId,
//      quantityPro:quantity||1
//    };
//    console.log(quantity);
//  }
//   }
// if(isFavorit){
//   proAndQuantityIt={
//     productId:productId,
//     quantityPro:1
// }}
// let objectQuantity=JSON.parse(window.localStorage.getItem((prodAndQuantityIt)) )||[];
// let  getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) )||[];
  //       getProductFromLocal.push((filterProducts[0]));
  // let getUniqeProductFromLocal=Array.from(new Set(getProductFromLocal.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));
  //   window.localStorage.setItem(productsInLoc,JSON.stringify(getUniqeProductFromLocal));
  //   objectQuantity.push(proAndQuantityIt);
  //   let getUniqeObjectQuantity=Array.from(new Set(objectQuantity.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));
  //   window.localStorage.setItem(prodAndQuantityIt,JSON.stringify(getUniqeObjectQuantity));
  //       if(!isFavorit){
      // preventAddToCart(productsInLoc);
      // }
      // addClassActiveOnIconCart(productsInLoc,iconName);
      // totalDrod=0;
      // addNumToIcon(productsInLoc,iconId);
            preventAddToCart(productsInLoc);
                  preventAddToCart(productsInLocc);
      // addNumToIcon(productsInLoc,productsInLocc,iconId,testFetch);


} 
//  }





// localStorage.clear();


// async function addProductToCart(container,productsInLoc,prodAndQuantityIt,iconName,iconId,isFavorit,proId,test){
//   await fetchProducts(test);
//   let categoryMatch;
//   let productId;
//   let quantity;
//   let proAndQuantityIt;
//   if(isFavorit){
// productId=proId;
//   }
//   else{
//     const urlParams=new URLSearchParams(window.location.search);
//     productId=urlParams.get('productId');
//   }
 
// let  filterProducts =datas.filter((product) => {
//       categoryMatch=product['id']==productId;
//     return  categoryMatch;
// })
// let prodStock;
// if((/[A-Za-z]/g).test(productId)){
//   prodStock=1;
// }
// if(!(/[A-Za-z]/g).test(productId)){
//   prodStock=filterProducts[0].stock;
//  console.log(productId);
// }
//   if(prodStock==0){

// if(!isFavorit){
//   effectHoverOnSignIn('inStock');
// }}
// else{
//   if(!isFavorit){
//   if(id('quantityDetails').value==0){
//     id('quantityDetails').value=1;
//   }
//   if(id('quantityDetails').value>0){
//     quantity=id('quantityDetails').value;
//      proAndQuantityIt={
//      productId:productId,
//      quantityPro:quantity||1
//    };
//  }
//   }
// if(isFavorit){
//   proAndQuantityIt={
//     productId:productId,
//     quantityPro:1
// }}
// let objectQuantity=JSON.parse(window.localStorage.getItem((prodAndQuantityIt)) )||[];
// let  getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) )||[];
//         getProductFromLocal.push((filterProducts[0]));
//   let getUniqeProductFromLocal=Array.from(new Set(getProductFromLocal.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));
//     window.localStorage.setItem(productsInLoc,JSON.stringify(getUniqeProductFromLocal));
//     objectQuantity.push(proAndQuantityIt);
//     let getUniqeObjectQuantity=Array.from(new Set(objectQuantity.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));
//     window.localStorage.setItem(prodAndQuantityIt,JSON.stringify(getUniqeObjectQuantity));
//         if(!isFavorit){
//       preventAddToCart(productsInLoc);
//       }
//       addClassActiveOnIconCart(productsInLoc,iconName);
//       totalDrod=0;
//       addNumToIcon(productsInLoc,iconId);
// } 
//  }

// localStorage.clear();
function preventAddToCart(productsInLoc){
  const urlParams=new URLSearchParams(window.location.search);
  const productId=urlParams.get('productId');
  if(window.localStorage.getItem(productsInLoc)){
  let productsInlocal=JSON.parse(window.localStorage.getItem(productsInLoc));
  productsInlocal.forEach(item=>{
    console.log(item.id,productId);
       if(item.id==(productId)) {
        console.log(item.id,productId,'kkkkkkkkkkk');

        id('textAddToCart').innerHTML='added it to cart';
        id('linkAddToCart').style.opacity='.4';
        id('linkAddToCart').style.pointerEvents='none';
       }
      })
    }
}
export function existUserOrNotToUpdateIconNum(cartUser,globalCart,iconName,iconId,container){
  if(window.localStorage.getItem('user')){
    let user=JSON.parse(window.localStorage.getItem('user'));
    preventAddToCart(`${cartUser}${user.id}`);
  }
  else{
    preventAddToCart(globalCart);
  }
  }

// get product id by icon cart

export async function getProductIdByIconCart(productsInLoc,prodAndQuantityIt,productsInLocc,prodAndQuantityItt,iconName,iconId,isDetails,testFetch,isCart,isFavorite){
  await fetchProducts(testFetch);
  //  quantNotBoo=0;
  //  totalDrod=0;
  //  totalrod=0;
   let  filterProducts ;
   let icons;
  //  let productId;
  if(isCart){
icons=document.querySelectorAll(`#containerAddToCart section#addToCart .addToCart .container .aCardLess  .buy`);
  }
  else{
    icons=document.querySelectorAll(`.cartFavorite .${iconName}`);

  }
  // let icons=document.querySelectorAll(`.cartFavorite .${iconName}`);
  console.log((icons),datas);
// icons=(Array.from(icons));
// let  iconss=icons.filter(item=>{item.id=='iconCart'});
  // console.log(iconss);
let productSt;
  if(testFetch){
    // productSt=filterProducts[0].stock;
    productSt=1;

  }
  else{
  productSt=1;
  }
  let categoryMatch;
  icons.forEach(element=>{
    element.addEventListener('click',(info)=>{
      console.log((icons));

        info.preventDefault();
        quantNotBoo=0;
           totalDrod=0;
  totalProd=0;

          // iconIsBookOrNot(element);
if(element.id!='iconCart'&&element.id!='iconFavorite'){
      let classN=Array.from(element.classList);
      let arry=classN.filter(className=>{
        let match=/{([^]*)}/g.test(className);
        return match;
      })
      let productIdd=arry[0].match(/{([^]*)}/g);
let productId=productIdd[0].slice(1,-1);
     filterProducts =datas.filter((product) => {
              categoryMatch=product['id']==productId;
            return  categoryMatch;
        })
        console.log(filterProducts,filterProducts[0]);
        // iconIsBookOrNot(element,filterProducts);
        // iconIsBookOrNot(element,productsInLocc,prodAndQuantityItt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLoc,prodAndQuantityIt);

        // if(isCart){
        //   let elementAdd= document.querySelector(`#containerAddToCart section#addToCart .addToCart .container #${container} .aCardLess  .buy.add${productId}`);
        //   elementAdd.innerHTML='added it to cart';
        //   elementAdd.style.opacity='.4';
        //   elementAdd.style.pointerEvents='none';
        //   elementAdd.style.color='gray';
        // }
// if(productSt>0){
// element.classList.add('addedIt');
//  iconIsBookOrNot(element,productsInLocc,prodAndQuantityItt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLoc,prodAndQuantityIt);
  // if((/[A-Za-z]/g).test(productId)){
  // if(testing==true){
  //  getInfoFromLocal(productsInLocc,prodAndQuantityItt,iconName,testFetch,isDetails,productId,filterProducts,iconId);
  // }
    // else{
//   if(filterProducts[0].stock==0){
//     info.preventDefault();
//     element.classList.add('noExist');
//     element.style.color='green';
//   }
//  else{
// if(testing==false){
      // getInfoFromLocal(productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails,productId,filterProducts,iconId);
    // }
    // }
    console.log(totalDrod,quantNotBoo);

     iconIsBookOrNot(element,productsInLocc,prodAndQuantityItt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLoc,prodAndQuantityIt,isCart);
     console.log((icons));

     console.log(totalDrod,quantNotBoo);
        if(isFavorite){
          let elementAdd= document.querySelector(`#containerAddToCart section#addToCart .addToCart .container .aCardLess  .buy.add${productId}`);
          elementAdd.innerHTML='added it to cart';
          elementAdd.style.opacity='.4';
          elementAdd.style.pointerEvents='none';
          elementAdd.style.color='gray';
        }

        // addNumToIcon(productsInLoc,productsInLocc,iconId,testFetch);



  // }
  //    addNumToIcon(productsInLocc,iconId);
  //  addNumToIcon(productsInLoc,iconId);
    }  })
      })
if(isDetails==true){
  preventAddToCart(productsInLoc);
  preventAddToCart(productsInLocc);
}
        addNumToIcon(productsInLoc,productsInLocc,iconId);
      // addNumToIcon(productsInLoc,iconId);
      console.log(totalDrod,quantNotBoo);

  }












// export async function getProductIdByIconCart(productsInLoc,prodAndQuantityIt,productsInLocc,prodAndQuantityItt,iconName,iconId,isDetails,testFetch,isCart){
//   await fetchProducts(testFetch);
//    quantNotBoo=0;
//    totalDrod=0;
//   //  let  filterProducts ;
//   //  let productId;
//   let icons=document.querySelectorAll(`.cartFavorite .${iconName}`);
// let productSt;
//   if(testFetch){
//     productSt=filterProducts[0].stock;
//     // productSt=1;

//   }
//   else{
//   productSt=1;
//   }
//   let categoryMatch;
//   icons.forEach(element=>{
//     element.addEventListener('click',(info)=>{
//         info.preventDefault();
//         quantNotBoo=0;
//            totalDrod=0;
//           // iconIsBookOrNot(element);

//       let classN=Array.from(element.classList);
//       let arry=classN.filter(className=>{
//         let match=/{([^]*)}/g.test(className);
//         return match;
//       })
//       let productIdd=arry[0].match(/{([^]*)}/g);
// let productId=productIdd[0].slice(1,-1);
//   let     filterProducts =datas.filter((product) => {
//               categoryMatch=product['id']==productId;
//             return  categoryMatch;
//         })
//         console.log(productSt);
//         if(isCart){
//           let elementAdd= document.querySelector(`#containerAddToCart section#addToCart .addToCart .container #${container} .aCardLess  .buy.add${productId}`);
//           elementAdd.innerHTML='added it to cart';
//           elementAdd.style.opacity='.4';
//           elementAdd.style.pointerEvents='none';
//           elementAdd.style.color='gray';
//         }
// if(productSt>0){
// element.classList.add('addedIt');
// //  iconIsBookOrNot(element,productsInLocc,prodAndQuantityItt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLoc,prodAndQuantityIt);
//   if((/[A-Za-z]/g).test(productId)){
//    getInfoFromLocal(productsInLocc,prodAndQuantityItt,iconName,testFetch,isDetails,productId,filterProducts,iconId);
//   }
//     else{
//   if(filterProducts[0].stock==0){
//     info.preventDefault();
//     element.classList.add('noExist');
//     element.style.color='green';
//   }
//  else{
//       getInfoFromLocal(productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails,productId,filterProducts,iconId);
//     }
//     }
//   }
//      addNumToIcon(productsInLocc,iconId);
//    addNumToIcon(productsInLoc,iconId);
//         })
//       })
// if(isDetails==true){
//   preventAddToCart(productsInLoc);
//   preventAddToCart(productsInLocc);
// }
//         addNumToIcon(productsInLocc,iconId);
//       addNumToIcon(productsInLoc,iconId);

//   }
  // localStorage.clear();
async  function getInfoFromLocal(productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLocc){
  await fetchProducts(testFetch);
  let quantity;
  let proAndQuantityIt;
  if(isDetails==true){
  if(id('quantityDetails').value>0){
    quantity=id('quantityDetails').value;
     proAndQuantityIt={
     productId:productId,
     quantityPro:quantity||1
   };
   console.log(quantity);
 }
 else{
  id('quantityDetails').value=1;
  quantity=id('quantityDetails').value;

     proAndQuantityIt={
      productId:productId,
      quantityPro:quantity||1
    };}
  }
  else{
    proAndQuantityIt={
      productId:productId,
      quantityPro:1
    };
  }
          let objectQuantity=JSON.parse(window.localStorage.getItem((prodAndQuantityIt)) )||[];
      let  getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) )||[];
      console.log(getProductFromLocal);
              getProductFromLocal.push((filterProducts[0]));
              console.log(getProductFromLocal);

        // let getUniqeProductFromLocal=Array.from(new Set(getProductFromLocal.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));

        let getUniqeProductFromLocal=Array.from(new Set(getProductFromLocal.map(obj=>obj.id))).map(id=>{
          return getProductFromLocal.find(obj=>obj.id==id);
        });



          window.localStorage.setItem(productsInLoc,JSON.stringify(getUniqeProductFromLocal));
          // console.log(getProductFromLocal);
          console.log(getUniqeProductFromLocal);
          console.log(productsInLoc);

          objectQuantity.push(proAndQuantityIt);
          let getUniqeObjectQuantity=Array.from(new Set(objectQuantity.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));
          window.localStorage.setItem(prodAndQuantityIt,JSON.stringify(getUniqeObjectQuantity));
          window.localStorage.setItem(prodAndQuantityIt,JSON.stringify(getUniqeObjectQuantity));
        // addNumToIcon(productsInLoc,productsInLocc,iconId,testFetch);

            addClassActiveOnIconCart(productsInLoc,iconName,testFetch);

            if(isDetails==true){
              preventAddToCart(productsInLoc);
              preventAddToCart(productsInLocc);

            }
            if(getProductFromLocal.length>=0){
              // totalProd+= JSON.parse(window.localStorage.getItem(productsInLoc)).length;
              // totalQuan=quanBook + quanNotBook;
              // id('headingCart').innerHTML=`your favorite includes ${totalProd} products, ${totalQuan} quantity` ;
            // id(iconId).innerHTML=totalProd;
            // id(iconId).style.color='rgb(255, 214, 139)';
            }
            // addNumToIcon(productsInLoc,productsInLocc,iconId);
            // addNumToIcon(productsInLoc,iconId);
    }
// localStorage.clear();
 async function iconIsBookOrNot(element,productsInLocc,prodAndQuantityItt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLoc,prodAndQuantityIt,isCart){
  // async function iconIsBookOrNot(element,filterProducts,testFetch){
// let productsInLocal1=JSON.parse(window.localStorage.getItem(productsInLocc))||[];
// let productsInLocal2=JSON.parse(window.localStorage.getItem(productsInLoc))||[];

  let urlCos=element.closest('a');
  console.log(urlCos);
  let searchUrl=new URLSearchParams(urlCos.search);
  let productUrl=searchUrl.get('url');
  console.log(productUrl);
  if(filterProducts.length==0||filterProducts[0]==undefined){
console.log('filter unde');
  
  if(productUrl=='books'){
    console.log('unde books');
    urlBooks='another';

    await fetchProducts(true);
    console.log(datas);
    console.log(filterProducts);
    filterProducts =datas.filter((product) => {
      categoryMatch=product['id']==productId;
    return  categoryMatch;
})
console.log(filterProducts,filterProducts[0]);
    testing=true;
    testFetch=true;
    // productIsInLocal (productsInLoc,prodAndQuantityItt,iconName,testFetch,isDetails, productId,filterProducts,iconId,productsInLocc);


    getInfoFromLocal(productsInLocc,prodAndQuantityItt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLocc);
            addNumToIcon(productsInLocc,productsInLoc,iconId,testFetch);

    element.classList.add('addedIt');
    
return;
  }
  if(productUrl=='notBooks'){
    console.log(productUrl);
    urlBooks='alll';

    await fetchProducts();
    console.log(datas);
    testing=false;
    testFetch=false;
    filterProducts =datas.filter((product) => {
      categoryMatch=product['id']==productId;
    return  categoryMatch;
})
console.log(filterProducts,filterProducts[0]);
 if(filterProducts[0].stock>0){
  element.classList.add('addedIt');

  console.log(filterProducts[0].stock);
  // productIsInLocal (productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails, productId,filterProducts,iconId,productsInLocc);


    getInfoFromLocal(productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLocc);
    addNumToIcon(productsInLocc,productsInLoc,iconId,testFetch);

return;
}
  }}
  if(filterProducts.length>0){
    console.log('filter > 0');

    if(productUrl=='books'){
      urlBooks='another';

      // await fetchProducts(true);
    testing=true;
    testFetch=true;
    // productIsInLocal (productsInLoc,prodAndQuantityItt,iconName,testFetch,isDetails, productId,filterProducts,iconId,productsInLocc);


    getInfoFromLocal(productsInLocc,prodAndQuantityItt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLocc);
    addNumToIcon(productsInLocc,productsInLoc,iconId,testFetch);

    element.classList.add('addedIt');

    }
    if(productUrl=='notBooks'){
      urlBooks='alll';

      // await fetchProducts(false);
      testing=false;
      testFetch=false;
      if(filterProducts[0].stock>0){
        element.classList.add('addedIt');

        console.log(filterProducts[0].stock);
      //  productIsInLocal (productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails, productId,filterProducts,iconId,productsInLocc);


      getInfoFromLocal(productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLocc);
      addNumToIcon(productsInLocc,productsInLoc,iconId,testFetch);

      }

    }
  }
  // getInfoFromLocal(productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLocc);

  console.log(datas,testing);
  if(isCart){
  //   let elementAdd= document.querySelector(`#containerAddToCart section#addToCart .addToCart .container #${container} .aCardLess  .buy.add${productId}`);
  //   elementAdd.innerHTML='added it to cart';
  //   elementAdd.style.opacity='.4';
  //   elementAdd.style.pointerEvents='none';
  //   elementAdd.style.color='gray';
  }
  // addNumToIcon(productsInLocc,iconId);
  // addNumToIcon(productsInLoc,iconId);
  // return testing;
  // addNumToIcon(productsInLoc,productsInLocc,iconId,testFetch);

    }
    // function productIsInLocal(productId,productsInLocc,productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails,filterProducts,iconId){
      function  productIsInLocal (productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails, productId,filterProducts,iconId,productsInLocc){
      let productsInLocal1;
      let productsInLocal2;
      if(window.localStorage.getItem(productsInLoc)){

      productsInLocal1=JSON.parse(window.localStorage.getItem(productsInLoc))||[];
  productsFilterInLocBoo=productsInLocal1.filter(element=>{
let matchProduct=element.id==productId;
return matchProduct
      })}
      if(window.localStorage.getItem(productsInLocc)){
       productsInLocal2=JSON.parse(window.localStorage.getItem(productsInLocc))||[];

     productsFilterInLocNotBoo=productsInLocal2.filter(element=>{
        let matchProduct=element.id==productId;
        return matchProduct
              })}
              if(productsFilterInLocBoo.length==0&&productsFilterInLocNotBoo.length==0){
                  // getInfoFromLocal(productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLocc);
   getInfoFromLocal(productsInLoc,prodAndQuantityIt,iconName,testFetch,isDetails,productId,filterProducts,iconId,productsInLocc);


              }
    }
  // localStorage.clear();
export async function addNumToIcon(productsInLoc,productsInLocc,iconId,test){
  await fetchProducts(test);
  totalDrod=0;
   if(window.localStorage.getItem(productsInLoc)){
    quantNotBoo=JSON.parse(window.localStorage.getItem(productsInLoc)).length;
    console.log(quantNotBoo);
   }
   if(window.localStorage.getItem(productsInLocc)){
    quantBoo=JSON.parse(window.localStorage.getItem(productsInLocc)).length;
    console.log(quantBoo);

   }
  // totalDrod+=quantNotBoo;
  totalDrod=quantNotBoo + quantBoo;
id(iconId).innerHTML=totalDrod;
id(iconId).style.color='rgb(255, 214, 139)';
console.log(totalDrod,quantNotBoo);
}

//end add product to cart by icon cart

// start filter products by dashboard
function filterProductsFromDashboard(
  func,
  elements,
  event,
  container,
  elementsDi,
  elementsAvila,
  elementFree,
  elementsBra,
  testing,isSearch
) {
  
  elements.forEach((element) => {
    addEvent(
      func,
      element,
      event,
      container,
      elementsDi,
      elementsAvila,
      elementFree,
      elementsBra,
      testing,isSearch
    );
  });
}
function addEvent(
  func,
  element,
  event,
  container,
  elementsDi,
  elementsAvila,
  elementFree,
  elementsBra,
  testing,
  isSearch
) {
  element.addEventListener(event, (info) => {
    element.parentElement.classList.toggle("active");
    filterProductsAndShowIt(func, container, elementsDi, elementsAvila, elementFree, elementsBra,testing,isSearch);
  });
}

function filterProductsFromDashboardByCategory(
  func,
  elements,
  event,
  container,
  elementsDi,
  elementsAvila,
  elementFree,
  elementsBra,
  test1,test2,test3,
  testing,isSearch
) {
  
  elements.forEach((element) => {
    element.addEventListener(event, (info) => {
      // selectedCategory='another';
      isCategory=false;
      info.preventDefault();
      elements.forEach((ele) => {
        ele.querySelector("a").classList.remove("active");
      });
      if (test2){
        if( element.getAttribute("data-category").toLowerCase()!='all'){
        selectedTags='another';
      }
      else{
        selectedTags='all';
    }
        selectedCategoryyy = element.getAttribute("data-category").toLowerCase().split(',');
      }
      if (test1) {
    if( element.getAttribute("data-category").toLowerCase()!='all'){
        selectedCategory='another';
    }
    else{
        selectedCategory='all';
    }
    selectedCategoryy = element.getAttribute("data-category").toLowerCase().split(',');
      }
      if (test3) {
        selectedReveiw = parseInt(element.getAttribute("data-category"));
      }
      info.target.classList.add("active");
      filterProductsAndShowIt(func, container, elementsDi, elementsAvila, elementFree, elementsBra,testing,isSearch);
    });
  });
}
//end filter products by dashboard
//start reset products by menu sort by
export function hundleSortBy(func, element, container) {
  func(container).innerHTML = "";
  func("spanCategory").innerHTML = func(element).innerHTML;
  func("list").classList.remove("active", "apperance");
}

export function displayMenuSort(func, element, appearanceElement, className) {
  func(element).addEventListener("click", (info) => {
    info.preventDefault();
    func(appearanceElement).classList.toggle("apperance");
    setTimeout(() => {
      func(appearanceElement).classList.toggle(className);
      func(element).classList.toggle(className);
    }, 100);
  });
}
//end reset products by menu sort by
// start reset dashboard
export function resetDashboard(
  func,
  element,
  elements,
  elementsDi,
  elementsAvila,
  elementFree,
  elementsBra,
  container,
  test,
  testing,isSearch
) {
  if(elements.length>0){
  func(element).addEventListener("click", (info) => {
    elements.forEach((ele) => {
      if (test) {
        selectedReveiw = 0;
        ele.querySelector('a').classList.remove("active");
      } else {
        ele.checked = false;
        ele.parentElement.classList.remove("active");
      }
    });
    filterProductsAndShowIt(func, container, elementsDi, elementsAvila, elementFree, elementsBra,testing,isSearch);
  });}
}
export function resetPriceDashboard(
  func,
  element,
  elementPrice,
  elementsDi,
  elementsAvila,
  elementFree,
  elementsBra,
  container,
  testing,isSearch
) {
  func(element).addEventListener("click", (info) => {
    valuePrice = 0;
    func(elementPrice).value = "";
    func(elementPrice).classList.remove("active");
    filterProductsAndShowIt(func, container, elementsDi, elementsAvila, elementFree, elementsBra,testing,isSearch);
  });}

// end reset dashboard
// start function related by log in and log out
function testUser(){
  if(window.localStorage.getItem('userToken')){
    document.querySelector('header .main-nav .personal .sign').addEventListener('click',(event)=>{
      event.preventDefault();
    })
    let user=JSON.parse(window.localStorage.getItem('user'));
  id('hello').textContent=`hi, ${user.name}`||'';
  showAndHideLoginAndLogout('none','block','inline-block');
  }
  else{
      effectHoverOnSignIn('signHeader');
    showAndHideLoginAndLogout('inline-block','none','none');
  }

}
testUser();
function showAndHideLoginAndLogout(none,block,inlineblock){
  const signInButton= document.querySelector('footer .containerSign .sign .buttonSign');
  id('text-sign').style.display=none;
  id('hello').style.display=inlineblock;
  signInButton.style.display=none;
  id('logoutFooter').style.display=block;
  id('loginFooter').style.display=none;
  id('loginSideBar').style.display=none;
  id('logoutSideBar').style.display=block;
  id('logoutSideBar').style.marginBottom='1rem';
}
function clickedLogout(button){
button.addEventListener('click',()=>{
  window.localStorage.removeItem('userToken');
  window.localStorage.removeItem('user');
  testUser();
  window.location.href='../index.html';
})
}
clickedLogout(id('logoutFooter'));
clickedLogout(id('logoutSideBar'));

export function effectHoverOnSignIn(elementId){
  let isHovered=false;
  const interval=setInterval(()=>{
    if(isHovered){
      id(elementId).classList.remove('hover');
    }
    else{
      id(elementId).classList.add('hover');
    }
    isHovered=!isHovered;
  },500)
  setTimeout(()=>{
    clearInterval(interval);
    id(elementId).classList.remove('hover');
  },20000)
}
// end function related by log in and log out
// add number of products in cart to icon cart
 export function addNumberToIconCart(productsInLoc,iconName,iconId,container){
  let lengthBook=0;
  let lengthNotBook=0;

  if(window.localStorage.getItem(productsInLoc)){
  let productsInlocal=JSON.parse(window.localStorage.getItem(productsInLoc));
  let allIcons=document.querySelectorAll(`.cartFavorite .${iconName}`);
if(container=='productsInCart'){
lengthNotBook=productsInlocal.length;
}
else{
  lengthBook=productsInlocal.length;
}
 totalLength=lengthBook + lengthNotBook;
id(iconId).innerHTML=totalLength;
id(iconId).style.color='rgb(255, 214, 139)';
  }
} 
// add class active on icon cart or favorite cart
 export async function addClassActiveOnIconCart(productsInLoc,iconName,test,isCart){
  await fetchProducts(test);
  let allIcons=document.querySelectorAll(`.cartFavorite .${iconName}`);

  if(window.localStorage.getItem(productsInLoc)){
    let productsInlocal=JSON.parse(window.localStorage.getItem(productsInLoc));
    productsInlocal.forEach(product=>{
      allIcons.forEach(icon=>{
    let classLists=Array.from(icon.classList);
let nameWithNum=classLists.filter(className=>{
  let match=/{([^]*)}/g.test(className);

  return match;
})

      if(nameWithNum==(`${iconName}{${product.id}}`)){
    icon.classList.add('addedIt');
    if(isCart){
      let elementAdd= document.querySelector(`#containerAddToCart section#addToCart .addToCart .container .aCardLess  .buy.add${product.id}`);
      elementAdd.innerHTML='added it to cart';
      elementAdd.style.opacity='.4';
      elementAdd.style.pointerEvents='none';
      elementAdd.style.color='gray';
    }
  }  
  })
})
}
addClassNoexistOnIcon(iconName,test);
}
// localStorage.clear();
// add class no exist on icon cart or favorite
export  async function addClassNoexistOnIcon(iconName,test){
  await fetchProducts(test);
  let allIcons=document.querySelectorAll(`.cartFavorite .${iconName}`);
  let filterPro=datas.filter(prod=>{
    let match=prod.stock==0; 
    return match;
     })
     allIcons.forEach(icon=>{
      let classLists=Array.from(icon.classList);
  let nameWithNum=classLists.filter(className=>{
    let match=/{([^]*)}/g.test(className);
    return match;
  })
  let matchId=nameWithNum[0].match(/{([^]*)}/g);
  let produId=matchId[0].slice(1,-1);
  filterPro.forEach((product,index,array)=>{
   if(product.id==+produId){
      icon.classList.add('noExist');
   }
  })
  })
}

export function existUserOrNotForAddClassAtive(cartUser,cartGlobal,iconName,test,isCart){
  if(window.localStorage.getItem('user')){
    let user=JSON.parse(window.localStorage.getItem('user'));
    addClassActiveOnIconCart(`${cartUser}${user.id}`,iconName,test,isCart);
  }
  else{
    addClassActiveOnIconCart(cartGlobal,iconName,test,isCart);
  }
  }


let currentLang='en';

  //start translate
export async function translatePageByCustomer(func,button) {
  func(button).addEventListener('click',(info)=>{
    if(currentLang==='en'){
      translatePageByGoogle('ar');
      func(button).textContent='en';
      currentLang='ar';
    }
    else{
      translatePageByGoogle('en');
      func(button).textContent='ar';
      currentLang='en';
    }
  })
 

  
}
function translatePageByGoogle(lang){
const googleTranslateDropdown=document.querySelector('.goog-te-combo');
if(googleTranslateDropdown){
  googleTranslateDropdown.value=lang;
  googleTranslateDropdown.dispatchEvent(new Event('change'));
}
}
// translatePageByCustomer(id,'switchLang');