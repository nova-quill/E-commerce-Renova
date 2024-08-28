"use strict";
import { dummyProducts } from "../js/products.js";
import { dummy } from "../js/dummyproducts.js";
import { book } from "../js/books.js";
import {id,createDiv,discountPercentagee,groupesFunctionsForCreatesDivs,datas,fetchProducts,shaffelArray,addClassActive,organizeObject,urlBooks,createParentDiv,parentContainer,divCartRating,displayProducts,addClassName, movesProducts} 
from './common.js';
// import { addClassName } from "../js/home.js";

// let productId;
// let title;
// let discount;
// let price;
// let oldPrice;
// let rating;
// let saving;
// let mainImg;
// let sideImgs;
// let freeDeliv;
// let shippingIn;
// let warranty;
// let returnPro;
// let description;
// let depth;
// let height;
// let width;
// let weight;
// let brand;
// let kind;
// let barCode;
// let createdAt;
// let sku;
// let author;
// let printType;
// let language;
// let pageCount;
// let publisher;
// let publishDate;
// let contentVersion;
let tags;
let categoryMatch;
let linkHeader = document.querySelectorAll("header .second-nav a");
let iconsPersonal = document.querySelectorAll(
  "header .main-nav .personal.mobile a.iconPersonal"
);
let buttons=document.querySelector('.containerProductsRe .containerPro .buttons');
let firstButton=document.querySelector('.containerProductsRe .containerPro .buttons .first');
let lastButton=document.querySelector('.containerProductsRe .containerPro .buttons .last');
let containerProducts=document.querySelector('.containerProductsRe .containerPro .products');
console.log(firstButton,lastButton,containerProducts);
document.addEventListener('DOMContentLoaded',(info=>{
  // start header
    addClassActive(iconsPersonal, "active");
    addClassActive(linkHeader, "active");
  // start shows details product
  showsDetailsProduct();
  // sart related products
  addClassName(firstButton,'display');
// limitWidthScrollBarWhenLoaded(containerProducts,buttons);
  movesProducts(
    containerProducts,
    lastButton,
    firstButton,
    1,
  '',
    '',
    true,true
  );
  movesProducts(
    containerProducts,
    firstButton,
    lastButton,
    -1,
  '',
    '',
    true,true
  );
}))

//  shows details product
 export function showsDetailsProduct(){
  const urlParams=new URLSearchParams(window.location.search);
  const urlName=urlParams.get('url');
  if(urlName=='books'){
    getProductFromUrl(id,true);
filterProductsRelated(id,'products',true);
  }
  if(urlName=='notBooks'){
    getProductFromUrl(id);
filterProductsRelated(id,'products',false);
  }
}

// get name of product from url to show it 
async function getProductFromUrl(func,choose){
 await  fetchProducts(choose);
  let filterProduct, productId,title,discount,price,oldPrice,rating,saving,mainImg,sideImgs,shippingIn,
  warranty,returnPro,description,depth,height,width,weight,brand,kind,barCode,createdAt,sku,author,
  printType,language,pageCount,publisher,publishDate,contentVersion,stock;
  const urlParams=new URLSearchParams(window.location.search);
  const productName=urlParams.get('productId');
  filterProduct=datas.filter((element,index)=>{
  productId=element['id'];
  if(productId==productName){
    if(choose){
      func('sideImgs').style.display='none';
      func('forBooks').style.display='block';

      title=element['volumeInfo']['title']||'Unknown';
      kind=element['volumeInfo']['categories']||'Unknown';
      discount=index <10?discount=index*3:discount=index*5;
       oldPrice=element['saleInfo']['listPrice']['amount']||'Unknown';
    let stockk=element['saleInfo']['saleability']||'Unknown';
    stock=stockk.toLowerCase();
if(stock=='for_sale'.toLowerCase()){
  func('inStock').textContent="in stock";
}
if(stock!='for_sale'.toLowerCase()){
  func('inStock').textContent="out stock";
}
      price=   (oldPrice - oldPrice * (discount / 100));
      saving=oldPrice - price;
      rating=index==0?rating=3:index>0&&index<6?rating=index:index>=6&&index<20?rating=3.5:rating=4.5;
      mainImg=element['volumeInfo']['imageLinks']['thumbnail']||'Unknown';
      sideImgs=element['volumeInfo']['imageLinks']['smallThumbnail']||'Unknown';
      description=element['volumeInfo']['description']||'Unknown';
      author=element['volumeInfo']['authors']||'Unknown';
      printType=element['volumeInfo']['printType']||'Unknown';
      language=element['volumeInfo']['language']||'Unknown';
      pageCount=element['volumeInfo']['pageCount']||'Unknown';
      publisher=element['volumeInfo']['publisher']||'Unknown';
      publishDate=element['volumeInfo']['publishedDate']||'Unknown';
      contentVersion=element['volumeInfo']['contentVersion']||'Unknown';
      limitVaribles(func,'author',author);
      limitVaribles(func,'printType',printType);
      limitVaribles(func,'language',language);
      limitVaribles(func,'pageCount',pageCount);
      limitVaribles(func,'publisher',publisher);
      limitVaribles(func,'publishDate',publishDate);
      limitVaribles(func,'contentVersion',contentVersion);

      }
      else{
      func('infoShipping').style.display='flex';
      func('forNotBooks').style.display='block';
      func('containerCustomer').style.display='block';
        title=element['title'];
        discount=element['discountPercentage'];
        oldPrice=element['price'];
        price=   (oldPrice - (oldPrice * (discount / 100)));
        saving=oldPrice - price;
        rating=element['rating'];
        mainImg=element['images'][0];
        sideImgs=element['images'];
        if(sideImgs.length>0&&sideImgs!=undefined){
          sideImgs.forEach((element,index)=>{
            createDiv(1, "div", `containerSideImgs${index} containerSideImgs flex-center`,'', title, "", func('sideImgs'));
        let containerSideImgs=    document.querySelector(`#containerDetailsPro #sectionDetails .detailsProduct #containerImages #sideImgs .containerSideImgs${index}`);
        containerSideImgs.id=`containerSideImgs${index}`;
        console.log(containerSideImgs);
            createDiv(1, "img", "sideImgs flex-center", element, title, "", func(`containerSideImgs${index}`));
          })
        }
        if(rating>4.5){
          func('freeDeliv').style.display='block';
          func('freeD').style.display='block';
          func('heistedRa').style.display='inline-block';
        }
        shippingIn=element['shippingInformation'];
        returnPro=element['returnPolicy'];
        warranty=element['warrantyInformation'];
        description=element['description'];
        depth=element['dimensions']['depth'];
        height=element['dimensions']['height'];
        width=element['dimensions']['width'];
        weight=element['weight'];
        brand=element['brand'];
        kind=element['category'];
        barCode=element['meta']['barcode'];
        createdAt=element['meta']['createdAt'];
        sku=element['sku'];
        stock=element['stock'];
        let customerReviews=element['reviews'];
        console.log(customerReviews);
        limitVaribles(func,'shipsIn',shippingIn);
        limitVaribles(func,'returnPolicy',returnPro);
        limitVaribles(func,'warranty',warranty);
        limitVaribles(func,'depth',depth);
        limitVaribles(func,'height',height);
        limitVaribles(func,'width',width);
        limitVaribles(func,'weight',weight);
        if(brand!=undefined){
          func('detailsBra').style.display='block';
          limitVaribles(func,'brand',brand);
        }
        limitVaribles(func,'brand',brand);
        limitVaribles(func,'sku',sku);
        limitVaribles(func,'createdAt',createdAt);
        limitVaribles(func,'barCode',barCode);
        if(stock<10&&stock>0){
          func('bestS').style.display='inline-block';
        }
        if(stock>10){
          func('inStock').textContent=`in stock`;
          }
        if(stock>0&&stock<10){
        func('inStock').textContent=`low stock, only ${stock} in left stock`;
        func('inStock').style.color='#c61414';
        func('inStock').style.fontWeight='600';
        }
        if(stock<1){
          func('inStock').textContent="out stock";
          func('inStock').style.color='red';
          }
         createDivsForCustomerReviews(func,customerReviews);

      }
    createDiv(1, "img", "mainImg", mainImg, title, "", func('containerImage'));
    limitVaribles(func,'hiddingProduct',title);
    limitVaribles(func,'discount',discount.toFixed(0)+'%');
    limitVaribles(func,'price',price.toFixed(1)+' egp');
    limitVaribles(func,'oldPrice',oldPrice.toFixed(1)+' egp');
    limitVaribles(func,'saving',saving.toFixed(1)+' egp');
    limitVaribles(func,'rating',rating.toFixed(1));
    limitVaribles(func,'description',description);
    limitVaribles(func,'kind',kind);
    // part cart
    limitVaribles(func,'title',title);
    limitVaribles(func,'priceCart',price.toFixed(1));
  }
  })
changeImageProduct(id);
func('linkAddToCart').href=`http://127.0.0.1:5500/html/addToCart.html?productId=${productName}`
}
function limitVaribles(func,element,vari){
  if(vari!=undefined){
  func(element).textContent=vari;
}}
// start customer reviews
function createDivsForCustomerReviews(func,array){
  array.forEach((element,index)=>{
  let color=randomColor();
    createParentDiv(`card card${index}`,func('partCustomer'));
let card=document.querySelector(`.containerCustomer .partCustomer .card${index}`);
    createParentDiv(`details`,parentContainer);
     createDiv(1,'span','firstLetter flex-center','','',element['reviewerName'].charAt(0),parentContainer);
     let firstLettercol=document.querySelector(`.containerCustomer .partCustomer .card${index} .firstLetter`);
     firstLettercol.style.color=color;
    createDiv(1,'span','customerName','','',element['reviewerName'],parentContainer);
    divCartRating(card,element['rating'],true);
    createDiv(1,'span','comment','','',element['comment'],card);
 let date=element['date'];
    let dateToLocal=new Date(date);
    createDiv(1,'span','date','','',`review in  ${dateToLocal.toLocaleDateString()} ${dateToLocal.toLocaleTimeString()}`,card);
    createDiv(1,'a','translate','','','translate to english',card);
    let transHref=document.querySelector(`.containerCustomer .partCustomer .card${index} .translate`);
transHref.href='jmlmkckdll;';
  })

}
// get random color
function randomColor(){
  const letters='0123456789ABCDEF';
  let color='#';
  for(let i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*letters.length)];
  }
  return color;
}
// filter products related 
async function filterProductsRelated(func,container,test){
  await fetchProducts(test);
  let  filterProducts ;
  let categoryMatch;
  let category;
  const urlParams=new URLSearchParams(window.location.search);
  const productName=urlParams.get('productCategory');
  const urlName=urlParams.get('url');
 filterProducts =datas.filter((product) => {
  if(test){
    category=product['volumeInfo']['categories'];
  }
  else{
    category =product['category'];
  }
      categoryMatch=category==productName;
    return categoryMatch ;
})
  displayProducts(filterProducts, func, container);
  limitWidthScrollBarWhenLoaded(containerProducts,buttons);
  largesImagesOfProduct(id);
if(categoryMatch==false){
  // func('containerProductsRe').style.display='none';
}
}

// disapperance buttons
function limitWidthScrollBarWhenLoaded(containerProducts,buttons) {
  const containerClient=containerProducts.clientWidth;
  let productsChildren=document.querySelectorAll('.containerProductsRe .box-products a.cardLessThan');
  const itemWidth=Array.from(productsChildren).reduce((acc,item)=>acc + item.clientWidth,0);
  console.log(productsChildren,itemWidth,containerClient);
  if (
    itemWidth<=containerClient){
    buttons.style.display = "none";
  }
}

// change image of product
function changeImageProduct(func){
  let imgs=document.querySelectorAll('#containerDetailsPro #sectionDetails #containerImages #sideImgs .containerSideImgs .sideImgs');
  let mainImgs=document.querySelector('#containerDetailsPro #sectionDetails #containerImages .mainImg');
  imgs.forEach(element=>{
    element.addEventListener('mousemove',(info)=>{
      mainImgs.src=info.target.src;
    })
  })
}
//large image of product
function largesImagesOfProduct(func){
  let mainImg=document.querySelector('#containerDetailsPro #sectionDetails #containerImages .mainImg');
  mainImg.addEventListener('mousemove',(info)=>{
   func('details').style.display='none';
   func('containerZoomImg').style.display='block';
  const rect=mainImg.getBoundingClientRect();
    const x=info.clientX - rect.left;
    const y=info.clientY - rect.top;
    let background=info.target.src;
    console.log(background);
  func('containerZoomImg').style.backgroundImage=`url(${background})`;
const backgroundX=(x / mainImg.offsetWidth)*100;
const backgroundY=(y / mainImg.offsetHeight)*100;
func('containerZoomImg').style.backgroundPosition=`${backgroundX}% ${backgroundY}%`;
  })
  mainImg.addEventListener('mouseleave',(info)=>{
    func('containerZoomImg').style.display='none';
    func('details').style.display='block';

  })
}
//add product to cart
function addProductToCart(){

} 



















// GOOGLE IDENTITY API (SIGN IN)
///////AIzaSyDuhCYZXUhlryVvjiO5VmNFmTQgyTnDuNs//////////