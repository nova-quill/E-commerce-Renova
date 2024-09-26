"use strict";
import { dummyProducts } from "../js/products.js";
import { dummy } from "../js/dummyproducts.js";
import { book } from "../js/books.js";
// import { effectHoverOnSignIn } from "../js/signIn.js";

console.log(book);
let cardLessThan;
let containerImage;
let detailsProduct;
export let datas;
export let datass;
export let price = 10;
let container;
let thumbnail;
let productId;
export let title;
let priceProduct;
export let discountPercentagee = 0;
// export let productId;
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
let productCategory;
export let url;
export let urlBooks='alll';
export let urlLink;
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
  parentContainers
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
export function addClassActive(lis, className) {
  let url = window.location.href;
  lis.forEach((activeLink) => {
    if (activeLink.href === url) {
      activeLink.parentElement.classList.add(className);
    
      if( window.location.href=='http://127.0.0.1:5500/html/books.html'){
        url=   "https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=40&key=AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM";
       urlBooks='another';
      }
      else{
        url= "https://dummyjson.com/products?limit=0";
      }}
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

// end sidebar
//add class name about element
export function addClassName(element, className) {
  element.classList.add(className);
}
// start dashboard
export function toggleDashboard(button,element){
  id(button).addEventListener('click',()=>{
 id(element).classList.toggle('active');
  })
}
// end dashboard

// start create divs for show products
export function groupesFunctionsForCreatesDivs(datas, i, containerProducts,te) {
  organizeAmount(datas, i);
  createCardImage(datas, containerProducts, i);
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

  createCardprice(datas, i);
  if (datas[i].stock < price || datas[i].rating > 4.5) {
    divFreeDelivery(detailsProduct, datas[i].stock);
  }
  divCartRating(detailsProduct, datas[i].rating);
}
function organizeAmount(datas, i) {
  nowPrice = Math.round(
    priceProduct - priceProduct * (discountPercentagee / 100)
  );
}

function createCardImage(datas, containerProducts, i) {
  organizeObject(datas, i,true);
  // lgl(i);
  cardLessThan = document.createElement("a");
  cardLessThan.className = "cardLessThan";
  const urlParams=new URLSearchParams(window.location.search);
console.log(window.location.href);
  // if(window.location.href.includes('/index.html')) {
    if(window.location.pathname==('/index.html')||(window.location.pathname=='/')) {

  cardLessThan.href=`html/detailsProduct.html?productId=${productId}&productCategory=${productCategory}&url=${urlLink}`;
  }
  else{
    cardLessThan.href=`detailsProduct.html?productId=${productId}&productCategory=${productCategory}&url=${urlLink}`;

  }
  createParentDiv("aCardLess", cardLessThan);
  containerImage = document.createElement("div");
  containerImage.className = "containerImage flex-center";
  createDiv(1, "img", "", thumbnail, title, "", containerImage);
  parentContainer.appendChild(containerImage);
  detailsProduct = document.createElement("div");
  detailsProduct.className = "detailsProduct";
  parentContainer.appendChild(detailsProduct);
  containerProducts.appendChild(cardLessThan);
}

function createCardprice(i) {
  createDiv(1, "div", "title", "", "", title, detailsProduct);
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
    "fa-solid fa-cart-shopping cart flex-center",
    "",
    "",
    "",
    parentContainer
  );
  createDiv(
    1,
    "i",
    "fa-solid fa-heart favorite flex-center",
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
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rate)) {
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
    if (i === Math.floor(rate) + 1 && rate % 1 > 0) {
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
    if (i >= Math.floor(rate) + 1) {
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
      if (i > Math.floor(rate) + 1) {
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
function disapile(firstButton, lastButton, container) {
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
//end  limit Width Scroll Bar When Scrolling
// start fetchs products
export async function fetchProducts(chooseUrl,i) {
  if(chooseUrl||urlBooks!='alll'){
    // url =
    // "https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=40&key=AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM";
    url="../js/books.json"
  }
  else{
    url = "https://dummyjson.com/products?limit=0";
  }
  let response = await fetch(url, i);
  datass = await response.json();
  console.log(datass);
  organizeObject(datas, i);
  if (Object.keys(datass).includes("products")) {
      urlLink='notBooks'
  datas.map(updatePrice);
}
if (Object.keys(datass).includes("items") ) {
  urlLink='books';
}
console.log(datass);

}
// async function lgl(i) {
  // thumbnail = datas[i].thumbnail;
  // title = datas[i].title;
  // priceProduct = datas[i].price;
  // discountPercentagee = datas[i].discountPercentage;
// }
export function organizeObject(data, i,test) {
  if (Object.keys(datass).includes("products")) {
    datas = datass.products;
    if (test == true) {
      thumbnail = data[i].thumbnail;
      title = data[i].title;
      priceProduct = data[i].price;
      discountPercentagee = data[i].discountPercentage;
      productId= data[i].id;
      productCategory=data[i].category;
  }}
else{
  // datas=datass.items;
  datas=datass;
  if (test == true) {
      thumbnail = data[i].volumeInfo.imageLinks.thumbnail;
      title = data[i].volumeInfo.title;
      priceProduct = data[i].saleInfo.listPrice.amount;
      console.log(priceProduct);
      discountPercentagee=i <10?discountPercentagee=i*3:discountPercentagee=i*5;
      productId= data[i].id;
      productCategory=data[i].volumeInfo.categories;
      }
}}
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
export async function filterProdutsForEveryPage(elements, func,choose) {
  await fetchProducts(choose);
  shaffelArray(datas);
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
  // const urlParams=new URLSearchParams(window.location.search);
  // const productPrice=urlParams.get('productPrice');
  // if(productPrice){
  //   console.log(productPrice);
  //   id('rangPrice').value=200;
  //   id('rangPrice').classList.add("active");

  // }
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
testing
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
    true,'','',testing
  );
  filterProductsFromDashboardByCategory(
    func,
    elementsCaTags,
    "click",
    container,
    elementsDi,
    elementsAvila,
    elementFree,
    elementsBra,
    '',
    true,'',testing
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
    true,testing
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
    testing
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
    testing
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
    testing
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
    testing

  );

  func(elementPrice).addEventListener("input", (info) => {
    valuePrice = func(elementPrice).value;
    if (func(elementPrice).value) {
      func(elementPrice).classList.add("active");
      // filterProductsAndShowIt(
      //   func,
      //   container,
      //   elementsDi,
      //   elementsAvila,
      //   elementFree,
      //   elementsBra,
      //   testing
      // );
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
      testing
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
    testing
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
        elementsBra,'',testing);
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
    elementsBra,test,testing
  ) {
    if(!test){
      shaffelArray(filterProductsWithCategories);
    }
    freeSort = value1;
    bestSelling = value2;
    newArrivals = value3;
    hundleSortBy(func, element, container);
    filterProductsAndShowIt(func, container, elementsDi, elementsAvila, elementFree, elementsBra,testing);
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
    elementsBra
  );
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
    elementsBra
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
    elementsBra
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
      elementsBra,'',testing);
  });
  func(elementLowPrice).addEventListener("click", (info) => {
    info.preventDefault();
    filterProductsWithCategories.sort(
      (a, b) =>
        a.price -
        a.price * (a.discountPercentage / 100) -
        (b.price - b.price * (b.discountPercentage / 100))
    );
    functionInnerfilterProductsBySort(func,
      elementLowPrice,
         "all",
         "all",
         "all",
         container,
         elementsDi,
         elementsAvila,
         elementFree,
         elementsBra,true,testing);
  });
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
         elementsBra,true,testing);
  });
  filterProductsAndShowIt(func, container, elementsDi, elementsAvila, elementFree, elementsBra,testing);
 
}
export async function filterProductsAndShowIt(
  func,
  container,
  elementsDi,
  elementsAvila,
  elementFree,
  elementsbrand,
  test
) {
  await fetchProducts(test);
  arrayFromDisChacked = Array.from(elementsDi)
    .filter((element) => element.checked)
    .map((element) =>
      parseInt(element.parentElement.getAttribute("data-category"))
    );
   arrayFromBrandChacked =
    Array.from(elementsbrand)
      .filter((element) => element.checked)
      .map((element) => element.getAttribute("value")) || [];
      // let jj=datas.filter(pri=>{
        // console.log(pri.volumeInfo.categories);
// })
console.log(filterProductsWithCategories);
  filterProducts =filterProductsWithCategories.filter((product) => {
    if(test){
     category=product['volumeInfo']['categories']||'';
    }
    else{
     category =product['category']||''
    }
 let   categoryToLower=category.toString().toLowerCase();
 console.log(categoryToLower);

 console.log(selectedCategoryy);

    //  categoryMatch =selectedCategory == 'all'||selectedCategoryy.some(elee=>(categoryToLower==elee ) );
 showProductsWithOffersCategory();

    // categoryMatch =selectedCategory == 'all'||selectedCategoryy.some(elee=>(categoryToLower==elee ) );
// showProductsWithOffersCategory(categoryToLower);
      console.log(category);
      let categoryTagsMatch =selectedTags == 'all'||selectedCategoryyy.some(elee=>(product["tags"].includes(elee)));

    //  discountMatch =arrayFromDisChacked.length == 0 ||product.discountPercentage <=arrayFromDisChacked[arrayFromDisChacked.length - 1];
        //  let    priceMatch =product.price - product.price * (product.discountPercentage / 100) <=valuePrice;
    showProductsWithOffersDis(product.discountPercentage,category);
    let freeMatch = !elementFree.checked || product.rating > 4.5;
    let freeSortMatch = freeSort == "all" || product.rating > 4.5;
    let avilabiltyMatch = !elementsAvila.checked || product.stock > 0;
    let reviewMatch =selectedReveiw == "all" || product.rating >= selectedReveiw;
    let besetSellingMatch = bestSelling == "all" || product.stock < price;
    let newArrivalsMatch =newArrivals == "all" ||(product["rating"] >= 2.9 && product["rating"] <= 3.3);
     brand = product["brand"] || "";
    // let brandTolower = brand.toLowerCase();
    // let brandMatch =arrayFromBrandChacked.length == 0 ||arrayFromBrandChacked.some((element) => brandTolower.includes(element));
    showProductsWithOffersBrand(brand);
    showProductsWithOffersPrice( product.price,product.discountPercentage);
    // let priceMatch;
    // const urlParams=new URLSearchParams(window.location.search);
    // const productPrice=urlParams.get('productPrice');
    //   valuePrice =200 ;
    // if(productPrice&& id('rangPrice').value==''){
    //     priceMatch =product.price - product.price * (product.discountPercentage / 100) <=valuePrice;
    // }
    // else{
    //   valuePrice= id('rangPrice').value;
    //    priceMatch =valuePrice == 0 ||product.price - product.price * (product.discountPercentage / 100) <=
    //   valuePrice;
    // }
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
  });
  console.log(filterProducts);
  displayProducts(filterProducts, func, container);
}
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
  }
}
function showProductsWithOffersDis(productDis,productCateg){
  // discountMatch;
   const urlParams=new URLSearchParams(window.location.search);
   const productDisUrl=urlParams.get('productDiscount');
   const productCateUrl=urlParams.get('productCategory');
   let allInputs=id('discount').querySelectorAll('input');
  //  let   categoryToLower=category.toString().toLowerCase();
   console.log(!productDisUrl);
      //  categoryMatch =selectedCategory == 'all'||selectedCategoryy.some(elee=>(categoryToLower==elee ) );
   if(productDisUrl&&!(Array.from(allInputs).some(input=>input.checked)) ){
   discountMatch =Math.round(productDis)==productDisUrl||Math.round(productDis)<productDisUrl;
   console.log(productDis.toFixed(0));
  //  if(productCateUrl&&selectedCategoryy.length==0){
  //   categoryMatch= productCateg==productCateUrl;
  //  }

   }
  //  if((Array.from(allInputs).some(input=>input.checked)) ){
  else{
    discountMatch =arrayFromDisChacked.length == 0 ||productDis.toFixed(0)<=arrayFromDisChacked[arrayFromDisChacked.length - 1];
 }
   if(productCateUrl){
    // selectedCategory='';
    // selectedCategoryy.push(productCateUrl);
    // selectedCategoryy=[productCateUrl.split(',')];
    // categoryMatch= productCateg==productCateUrl;
    // categoryMatch =selectedCategory == 'all'||selectedCategoryy.some(elee=>(categoryToLower==elee ) );

   }

  // if( selectedCategoryy.some(element=>element!=productCateUrl)){
  // if(selectedCategory=='all'){
  else{
    console.log('fghjkld;zl;');  
    // selectedCategoryy=[];
    // selectedCategory='all';
    // categoryMatch =selectedCategory == 'all'||selectedCategoryy.some(elee=>(categoryToLower==elee ) );

   }
  }
  function showProductsWithOffersCategory(){
// let kl=true;
     const urlParams=new URLSearchParams(window.location.search);
     const productCateUrl=urlParams.get('productCategory');
     const productRateUrl=urlParams.get('highRate');

     let   categoryToLower=category.toString().toLowerCase();
// if(productRateUrl){
//   id('freeShipping').querySelector('input').checked;
//   console.log(id('freeShipping').querySelector('input'));
// }
      //  valuePrice =productPriceUrl;
     if(productCateUrl&&isCategory){
      selectedCategory = '';
      // selectedCategoryy.push(productCateUrl);

     selectedCategoryy=productCateUrl.toLocaleLowerCase().split(',');
      console.log(selectedCategory);
      console.log(categoryToLower);

      selectedCategoryy.some(elee=>(console.log(elee)));
      // categoryMatch =productCategory==productCateUrl;    
          categoryMatch =selectedCategory == 'all'||selectedCategoryy.some(elee=>(categoryToLower==elee ) );
          if(productRateUrl){
            id('freeShipping').querySelector('input').checked=true;
            console.log(id('freeShipping').querySelector('input'));
          }

     }
    //  if(productRateUrl){
    //   id('freeShipping').querySelector('input').checked;
    //   console.log(id('freeShipping').querySelector('input'));
    // }
      else{
                categoryMatch =selectedCategory == 'all'||selectedCategoryy.some(elee=>(categoryToLower==elee ) );
                console.log('nooooooooo');
     }
    //  categoryMatch =selectedCategory == 'all'||selectedCategoryy.some(elee=>(categoryToLower==elee ) );

     return categoryMatch;
   }
   function showProductsWithOffersBrand(productBrand){
    let allInputs;
    if(id('brandsDash')){
     allInputs=id('brandsDash').querySelectorAll('input');
    }
console.log(allInputs);
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
export function displayProducts(product, func, container) {
  func(container).innerHTML = "";
  if (product.length == 0) {
    func(container).innerHTML = `<p>No Products</p>`;
    return;
  }
  for (let o = 0; o < product.length; o++) {
    groupesFunctionsForCreatesDivs(product, o, func(container));
  }
  // console.log(document.querySelectorAll('.cartFavorite .cart'));
  addProductToCartByIconCart();
}
// end show products in page
// start drag products
 export function dragByTouch(container) {
  let startPoint;
  let scrollLeft;
let isDrag=false;
  container.addEventListener("touchstart", (info) => {
    isDrag=true;
    startPoint = info.touches[0].pageX;
    scrollLeft=container.scrollLeft;
  });
  container.addEventListener("touchmove", (info) => {
    if(!isDrag)return;
    info.preventDefault();
    const x=info.touches[0].pageX;
    const moveDistance=(x-startPoint)*2;
          container.scrollLeft=scrollLeft-moveDistance;
  });
  container.addEventListener("touchend", (info) => {
isDrag=false;
  });
}
// end drag products
//start  add product to cart by icon cart
// are user or not
 export function existUserOrNots(isIcon,element,test){
  if(window.localStorage.getItem('user')){
    let user=JSON.parse(window.localStorage.getItem('user'));
    let userToken=JSON.parse(window.localStorage.getItem('userToken'));
    // addProductToCart(`cartUser${user.id}`,`proAndQuantityIt${user.id}`);
    addProductToCart(`cartUser${user.id}`,`proAndQuantityIt${user.id}`,isIcon,element,test);
    addProductToCartByIconCarts(`cartUser${user.id}`,`proAndQuantityIt${user.id}`);
  }
  else{
    // addProductToCart('productCart','proAndQuantityIt');
    addProductToCart('productCart','proAndQuantityIt',isIcon,element,test);
    addProductToCartByIconCarts('productCart','proAndQuantityIt');
  }
  }
  export function existUserOrNotss(){
    if(window.localStorage.getItem('user')){
      let user=JSON.parse(window.localStorage.getItem('user'));
      let userToken=JSON.parse(window.localStorage.getItem('userToken'));
      // addProductToCart(`cartUser${user.id}`,`proAndQuantityIt${user.id}`);
      // addProductToCart(`cartUser${user.id}`,`proAndQuantityIt${user.id}`,isIcon,element,test);
      addProductToCartByIconCarts(`carttUser${user.id}`,`proAndQuantityItt${user.id}`);
    }
    else{
      // addProductToCart('productCart','proAndQuantityIt');
      // addProductToCart('productCart','proAndQuantityIt',isIcon,element,test);
      addProductToCartByIconCarts('productCartt','proAndQuantityItt');
    }
    }
//add product to cart
async function addProductToCart(productsInLoc,prodAndQuantityIt,isIcon,element,test){
  await fetchProducts(test);
  let categoryMatch;
  let productId;
  if(isIcon){
    const linkElement=element.closest('a');
    let hrefLink=linkElement.getAttribute('href');
    console.log(hrefLink);
if(!hrefLink.startsWith('http')){
}
   const url=new URL( 'http://'+hrefLink);
 productId=url.searchParams.get('productId');
    console.log(productId);
  }
  else{
    const urlParams=new URLSearchParams(window.location.search);
  productId=urlParams.get('productId');
    console.log(productId);
  }

 
let  filterProducts =datas.filter((product) => {
      categoryMatch=product['id']==productId;
    return  categoryMatch;
})
// await getProductId(test);
console.log(filterProducts);

if(filterProducts[0].stock==0){
  effectHoverOnSignIn('inStock');
}
else{
  if(id('quantityDetails').value==0){
    id('quantityDetails').value=1;
  }
if(id('quantityDetails').value>0){
  let quantity=id('quantityDetails').value;
let proAndQuantityIt={
  productId:productId,
  quantityPro:quantity||1
};
let objectQuantity=JSON.parse(window.localStorage.getItem((prodAndQuantityIt)) )||[];
console.log(objectQuantity);
let  getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) )||[];
        getProductFromLocal.push((filterProducts[0]));
  let getUniqeProductFromLocal=Array.from(new Set(getProductFromLocal.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));
    window.localStorage.setItem(productsInLoc,JSON.stringify(getUniqeProductFromLocal));
    objectQuantity.push(proAndQuantityIt);
    let getUniqeObjectQuantity=Array.from(new Set(objectQuantity.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));
    window.localStorage.setItem(prodAndQuantityIt,JSON.stringify(getUniqeObjectQuantity));
      addNumberToIconCart(productsInLoc);
      preventAddToCart(productsInLoc);
} 
 }
}
// localStorage.clear();
function preventAddToCart(productsInLoc){
  const urlParams=new URLSearchParams(window.location.search);
  const productName=urlParams.get('productId');
  if(window.localStorage.getItem(productsInLoc)){
  let productsInlocal=JSON.parse(window.localStorage.getItem(productsInLoc));
  console.log(productsInlocal);
  productsInlocal.forEach(item=>{
       if(item.id==(+productName)) {
        id('textAddToCart').innerHTML='added it to cart';
        id('linkAddToCart').style.opacity='.4';
        id('linkAddToCart').style.pointerEvents='none';
       }
      })
    }
}
export function existUserOrNotToUpdateIconNum(){
  if(window.localStorage.getItem('user')){
    let user=JSON.parse(window.localStorage.getItem('user'));
    console.log(user.id);
    preventAddToCart(`cartUser${user.id}`);
  addNumberToIconCart(`cartUser${user.id}`);
  }
  else{
    preventAddToCart('productCart');
  addNumberToIconCart('productCart');
  }
  }

async function getProductId(test) {
  await fetchProducts(test);
  let categoryMatch;
  const urlParams=new URLSearchParams(window.location.search);
  const productId=urlParams.get('productId');
  console.log(productId);
 
 filterProductss =datas.filter((product) => {
      categoryMatch=product['id']==productId;
    return  categoryMatch;
})
console.log(filterProducts);
  return filterProducts;
}










 export function existUserOrNotExist(){
  if(window.localStorage.getItem('user')){
    let user=JSON.parse(window.localStorage.getItem('user'));
    let userToken=JSON.parse(window.localStorage.getItem('userToken'));

    console.log(user.id);
    addProductToCartByIconCart(`cartUser${user.id}`,`proAndQuantityIt${user.id}`);
    // postCartFromLocalToUser(`cartUser${user.id}`,userToken,user.id,user.username,user.password,user.name,user.email); 
  }
  else{
    addProductToCartByIconCart('productCart','proAndQuantityIt');
  }
  }

  export async function addProductToCartByIconCarts(productsInLoc,prodAndQuantityIt,test){
    await fetchProducts(test);
    let icons=document.querySelectorAll('.cartFavorite .cart');
    let links=document.querySelectorAll('.cardLessThan');
    console.log(icons);
    icons.forEach(icon=>{
    icon.addEventListener('click',(info)=>{
      links.forEach(link=>{
        link.addEventListener('click',(info)=>{
      // info.stopPropagation();
      info.preventDefault();

        })})
  // info.preventDefault();
        const linkElement=icon.closest('a');
        linkElement.click();
          let hrefLink=linkElement.getAttribute('href');
          console.log(hrefLink);
        if(!hrefLink.startsWith('http')){
        }
         const url=new URL( 'http://'+hrefLink);
   let productId=url.searchParams.get('productId');
          console.log(productId);
  let  filterProducts =datas.filter((product) => {
    categoryMatch=product['id']==productId;
  return  categoryMatch;
  })
  let proAndQuantityIt={
    productId:productId,
    quantityPro:1
  };
  let objectQuantity=JSON.parse(window.localStorage.getItem((prodAndQuantityIt)) )||[];
  console.log(objectQuantity);
  let  getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) )||[];
  console.log(getProductFromLocal);
          getProductFromLocal.push((filterProducts[0]));
    let getUniqeProductFromLocal=Array.from(new Set(getProductFromLocal.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));
      window.localStorage.setItem(productsInLoc,JSON.stringify(getUniqeProductFromLocal));
      objectQuantity.push(proAndQuantityIt);
      let getUniqeObjectQuantity=Array.from(new Set(objectQuantity.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));
      window.localStorage.setItem(prodAndQuantityIt,JSON.stringify(getUniqeObjectQuantity));

  })})}








  // info.stopPropagation();
  // existUserOrNots(isIcon,icons,test);
//   const linkElement=element.closest('a');
//   let hrefLink=linkElement.getAttribute('href');
//   console.log(hrefLink);
// if(!hrefLink.startsWith('http')){
// }
//  const url=new URL( 'http://'+hrefLink);
// productId=url.searchParams.get('productId');
//   console.log(productId);
    






 export  function addProductToCartByIconCart(productsInLoc,prodAndQuantityIt){
  let icons=document.querySelectorAll('.cartFavorite .cart');
  let links=document.querySelectorAll('.cardLessThan');
  links.forEach(link=>{
    link.addEventListener('click',(info)=>{
  info.stopPropagation();
    })})
  // console.log(icons);
  icons.forEach(icon=>{
  icon.addEventListener('click',(info)=>{
info.preventDefault();
info.stopPropagation();
    const linkElement=icon.closest('a');
    let hrefLink=linkElement.getAttribute('href');
    console.log(hrefLink);
if(!hrefLink.startsWith('http')){
  // hrefLink=window.Location.origin + hrefLink;
  // const url=new URL(hrefLink);
console.log(hrefLink);
}
   const url=new URL( 'http://'+hrefLink);

// let bb=new URLSearchParams( hrefLink);
const productId=url.searchParams.get('productId');
console.log(productId);
let  filterProducts =datas.filter((product) => {
  categoryMatch=product['id']==productId;
return  categoryMatch;
})
console.log(filterProducts);

let proAndQuantityIt={
  productId:productId,
  quantityPro:1
};
let objectQuantity=JSON.parse(window.localStorage.getItem((prodAndQuantityIt)) )||[];
console.log(objectQuantity);
let  getProductFromLocal=JSON.parse(window.localStorage.getItem((productsInLoc)) )||[];
        getProductFromLocal.push((filterProducts[0]));
  let getUniqeProductFromLocal=Array.from(new Set(getProductFromLocal.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));
    window.localStorage.setItem(productsInLoc,JSON.stringify(getUniqeProductFromLocal));
    objectQuantity.push(proAndQuantityIt);
 let getUniqeObjectQuantity=Array.from(new Set(objectQuantity.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));
    window.localStorage.setItem(prodAndQuantityIt,JSON.stringify(getUniqeObjectQuantity));

      addNumberToIconCart(productsInLoc);
      // existUserOrNotToUpdateIconNum()
      // preventAddToCart(productsInLoc);
    })})
    // console.log(icons);
    // let getUniqeObjectQuantity=Array.from(new Set(objectQuantity.map(obj=>JSON.stringify(obj)))).map(str=>JSON.parse(str));

    // window.localStorage.setItem(prodAndQuantityIt,JSON.stringify(getUniqeObjectQuantity));

  }

// function preventAddToCart(productsInLoc){
//   const urlParams=new URLSearchParams(window.location.search);
//   const productName=urlParams.get('productId');
//   if(window.localStorage.getItem(productsInLoc)){
//   let productsInlocal=JSON.parse(window.localStorage.getItem(productsInLoc));
//   console.log(productsInlocal);
//   productsInlocal.forEach(item=>{
//        if(item.id==(+productName)) {
//         id('textAddToCart').innerHTML='added it to cart';
//         id('linkAddToCart').style.opacity='.4';
//         id('linkAddToCart').style.pointerEvents='none';
//        }
//       })
//     }
// }
function existUserOrNotToUpdateIconNums(){
  if(window.localStorage.getItem('user')){
    let user=JSON.parse(window.localStorage.getItem('user'));
    console.log(user.id);
    // addNumberToIconCart(`cartUser${user.id}`);
    // preventAddToCart(`cartUser${user.id}`);
  addNumberToIconCart(`cartUser${user.id}`);
  }
  else{
    // preventAddToCart('productCart');
  addNumberToIconCart('productCart');
  }
  }
    console.log(productId);
//  localStorage.clear();
// addProductToCartByIconCart(document.querySelector('cardLessThan'));
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
  testing
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
      testing
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
  testing
) {
  element.addEventListener(event, (info) => {
    element.parentElement.classList.toggle("active");
    filterProductsAndShowIt(func, container, elementsDi, elementsAvila, elementFree, elementsBra,testing);
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
  testing
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
console.log(selectedCategoryy);
      }
      if (test3) {
        selectedReveiw = parseInt(element.getAttribute("data-category"));
      }
      info.target.classList.add("active");
      filterProductsAndShowIt(func, container, elementsDi, elementsAvila, elementFree, elementsBra,testing);
    });
  });
}
//end filter products by dashboard
//start reset products by menu sort by
function hundleSortBy(func, element, container) {
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
  testing
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
    filterProductsAndShowIt(func, container, elementsDi, elementsAvila, elementFree, elementsBra,testing);
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
  testing
) {
  func(element).addEventListener("click", (info) => {
    valuePrice = 0;
    func(elementPrice).value = "";
    func(elementPrice).classList.remove("active");
    filterProductsAndShowIt(func, container, elementsDi, elementsAvila, elementFree, elementsBra,testing);
  });}

// end reset dashboard
// start function related by log in and log out
function testUser(){
  if(window.localStorage.getItem('userToken')){
    console.log('yes');
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
    console.log('no');
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
 export function addNumberToIconCart(productsInLoc){
  if(window.localStorage.getItem(productsInLoc)){
  let productsInlocal=JSON.parse(window.localStorage.getItem(productsInLoc));
id('countPurshes').innerHTML=productsInlocal.length;
id('countPurshes').style.color='rgb(255, 214, 139)';
  }
} 
// are user or not
 export function existUserOrNot(){
  if(window.localStorage.getItem('user')){
    let user=JSON.parse(window.localStorage.getItem('user'));
    console.log(user.id);
    addNumberToIconCart(`cartUser${user.id}`);
  }
  else{
    addNumberToIconCart('productCart');
  }
  }
// end add product to cart 
// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch("https://tarmeezacademy.com/api/v1/users?limit=0", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
  // .catch(error => console.log('error', error));

      // // "https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=40&key=AIzaSyBfp7YWCm70jC6JjxD8lX8t5ydLwSx0RPM";

// add class active on category dashboard
// export function addClassActiveOnCategory(elements) {
  // elements.forEach((element) => {
    // element.addEventListener("click", (info) => {
      // elements.forEach((element) => {
        // element.classList.remove("active");
      // });
      // info.target.classList.add("active");
    // });
  // });
// }


// export function limitCategory(
  // func,
  // category1,
  // category2,
  // category3,
  // container
// ) {
  // let categories = [category1, category2, category3];
  // console.log(categories);
  // for (let i = 0; i < datas.length; i++) {
    // categories.some((category) => {
      // if (datas[i].category.toLowerCase().includes(category)) {
        // groupesFunctionsForCreatesDivs(datas, i, func(container));
      // }
    // });
  // }
// }