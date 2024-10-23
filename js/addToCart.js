

'use strict'
import {
  id, addClassActive, fetchProducts, datas, displayProducts, createDiv, dragByTouch, createHrefForElementsFooter, existUserOrNotForIconCart, existUserOrNotForAddClassAtive,
  limitLocationProductsBySidebar, getAllElements, SearchByKeyOrButton, scrollToTopByButton,translatePageByGoogle,visibleAndHiddenElement,lodedMapss
} from "../js/common.js";
let quantityProducts = 0;
let totalProd = 0;
let totalQuan = 0;
let allPrices = 0;
let quanBook = 0;
let quanNotBook = 0;
let allDiscounts = 0;
let getProductFromLocal;
let objectQuan;

let mainHeaderfavAndCart = document.querySelectorAll("header .main-nav .iconPersonal.cartFav a");

let secondHeader = document.querySelector("header .second-nav ul");
let linkHeader = document.querySelectorAll("header .second-nav a:not(a#linkAll)");
let iconsPersonal = document.querySelectorAll(
  "header .main-nav .personal.mobile a.iconPersonal"
);
let allLinksFooter = document.querySelectorAll('footer .category li a');
let allLinksSideBar = document.querySelectorAll('.sideBar.hidd');
let allTrendingSide = document.querySelectorAll('#boxSideBar #trending dd a');


document.addEventListener('DOMContentLoaded', (info => {
  // start header
  addClassActive(iconsPersonal, "active");
  addClassActive(linkHeader, "active");
  addClassActive(mainHeaderfavAndCart, "active", true);

  // start sidebar
  getAllElements(allTrendingSide, limitLocationProductsBySidebar);
  createHrefForElementsFooter(allLinksSideBar);
// visible map
visibleAndHiddenElement(id,'loca-box',"container-location",'overlay','hidden');
//hidden map
visibleAndHiddenElement(id,'xmarkmap', "container-location",'overlay','auto');
// leaflet map
lodedMapss();

  dragByTouch(secondHeader);

  // start search
  SearchByKeyOrButton(id, 'iconSearch', 'inputSearch');
  // start shows product in cart
  existUserOrNotInfav('cart', 'countPurshes', true);
  existUserOrNotInfavvv('cart', 'countPurshes', true);

  existUserOrNotForAddClassAtive('favoriteUser', 'favoriteCart', 'favorite');
  existUserOrNotForAddClassAtive('favoriteBooUser', 'favoriteBooCart', 'favorite');
  // start footer
  createHrefForElementsFooter(allLinksFooter);
  // start translate
 translatePageByGoogle('switchLang');

  // start scroll button
  scrollToTopByButton();
}))

// are user or not
function existUserOrNotInfav(iconName, iconId, isCart) {
  if (window.localStorage.getItem('user')) {
    let user = JSON.parse(window.localStorage.getItem('user'));
    if (window.localStorage.getItem(`cartUser${user.id}`)) {
      filterProductsInCart(id, 'productsInCart', `cartUser${user.id}`, `proAndQuantityIt${user.id}`, iconName, iconId, isCart, 'cartUser');
    }
  }
  else {
    if (window.localStorage.getItem('productCart') == null) {
      let arrayProducts = [];
      window.localStorage.setItem('productCart', JSON.stringify(arrayProducts));
    }
    filterProductsInCart(id, 'productsInCart', 'productCart', 'proAndQuantity', iconName, iconId, isCart, 'productCart');
  }
}

function existUserOrNotInfavvv(iconName, iconId, isCart) {
  if (window.localStorage.getItem('user')) {
    let user = JSON.parse(window.localStorage.getItem('user'));
    filterProductsInCart(id, 'productsInCartBoo', `cartBooUser${user.id}`, `proAndQuantityInCartUserBoo${user.id}`, iconName, iconId, isCart, 'cartBooUser', true);
  }
  else {
    if (window.localStorage.getItem('cartBooCart') == null) {

      let arrayProducts = [];
      window.localStorage.setItem('cartBooCart', JSON.stringify(arrayProducts));
    }
    filterProductsInCart(id, 'productsInCartBoo', 'cartBooCart', 'proAndQuantityInCartBoo', iconName, iconId, isCart, 'productBooCart', true);
  }
}
// filter products in cart
export async function filterProductsInCart(func, container, productsInLoc, proAndQuantityIt, iconName, iconId, isCart, productsInLocCart, test) {
  await fetchProducts(test);
  let totalPrices = 0;
  let totalDiscounts = 0;
  if (JSON.parse(window.localStorage.getItem((productsInLoc)))) {
    if (JSON.parse(window.localStorage.getItem((proAndQuantityIt)))) {
      objectQuan = JSON.parse(window.localStorage.getItem((proAndQuantityIt))).reverse() || [];
    }
    getProductFromLocal = JSON.parse(window.localStorage.getItem((productsInLoc))).reverse() || [];

    displayProducts(getProductFromLocal, func, container, test, true);
    let acard = document.querySelectorAll(`#containerAddToCart section#addToCart .addToCart .container #${container} .aCardLess`);
    let detailsProduct = document.querySelectorAll(`#containerAddToCart section#addToCart .addToCart .container #${container} .aCardLess .detailsProduct`);

    acard.forEach((element, index) => {
      let parentElement = element.parentElement.href;

      let url = new URL(parentElement);
      let searchUrl = new URLSearchParams(url.search);
      let productId = searchUrl.get('productId');
      let containerRemAndBuy = document.createElement('div');
      containerRemAndBuy.className = 'containerRemAndBuy  flex-just-between';
      createDiv(1, 'span', `buy #${container} add{${productId}} add${productId} remBuy`, '', '', 'continue purchasing', containerRemAndBuy);
      createDiv(1, 'span', `clear remBuy clear{${productId}}`, '', '', 'remove', containerRemAndBuy);
      element.appendChild(containerRemAndBuy);
      let clear = element.querySelector(`.clear`);
      element.addEventListener('click', (event) => {
        event.preventDefault();
      })
    })
    detailsProduct.forEach((element, index) => {
      let urlCos = element.closest('a');
      let searchUrl = new URLSearchParams(urlCos.search);
      let productId = searchUrl.get('productId');
      let containerQuantity = document.createElement('div');
      containerQuantity.className = 'containerQuantity flex-center';
      createDiv(1, 'span', 'textAmount', '', '', 'quantity :', containerQuantity);
      let amount = document.createElement('input');
      amount.type = 'number';
      amount.name = 'amount';
      amount.className = `amount amount{${productId}}`;
      objectQuan.forEach((obj, ind, arr) => {
        let classN = Array.from(amount.classList);
        let arry = classN.filter(className => {
          let match = /{([^]*)}/g.test(className);
          return match;
        })
        let productIdd = arry[0].match(/{([^]*)}/g);
        let productIdBu = productIdd[0].slice(1, -1);
        if (obj.productId == productIdBu) {
          amount.value = obj.quantityPro;
        }
      })
      containerQuantity.appendChild(amount);
      element.appendChild(containerQuantity);
    })
    getProductFromLocal.forEach(item => {
      let matchPrice;
      let discountPercentage;
      if (container == 'productsInCartBoo') {
        matchPrice = item.saleInfo.listPrice.amount;
        let hundleProduct = item.volumeInfo.categories || '';
        let productToLowerStri = hundleProduct.toString().toLowerCase();
        if (productToLowerStri != "Fiction".toLowerCase()) {
          discountPercentage = 50;
        }
        else {
          discountPercentage = 20;
        }
      }
      else {
        matchPrice = item.price;
        discountPercentage = item.discountPercentage;
      }
      totalPrices += matchPrice - (matchPrice * discountPercentage / 100);
      totalDiscounts += matchPrice * Math.round(discountPercentage) / 100;
    });
    allPrices += totalPrices;
    allDiscounts += totalDiscounts;
    id('totalPrices').innerHTML = `${allPrices.toFixed(1)}`;
    id('totalDiscounts').innerHTML = `${allDiscounts.toFixed(1)}`;
  }
  updateQuantityWhenInput(document.querySelectorAll(`#${container} input.amount`), proAndQuantityIt, container);
  if ((window.localStorage.getItem(proAndQuantityIt))) {
    let quantityLocal = JSON.parse(window.localStorage.getItem(proAndQuantityIt));
    if (container == 'productsInCart') {
      quanBook = 0;
      quantityLocal.forEach((obj, ind, arr) => {

        quanBook += +obj.quantityPro;
      })
    }
    else {
      quanNotBook = 0;
      quantityLocal.forEach((obj, ind, arr) => {

        quanNotBook += +obj.quantityPro;
      })
    }
  }
  if (getProductFromLocal.length >= 0) {
    totalProd += JSON.parse(window.localStorage.getItem(productsInLoc)).length;
    totalQuan = quanBook + quanNotBook;
    id('headingCart').innerHTML = `your cart includes ${totalProd} products, ${totalQuan} quantity`;
    id(iconId).innerHTML = totalProd;
    id(iconId).style.color = 'rgb(255, 214, 139)';
  }
  if (totalProd == 0) {
    id('headingCart').innerHTML = `your cart is empty, let's fill it`;
    id('containerPriceCart').style.display = 'none';
  }
  if (totalProd > 0) {
    id('containerPriceCart').style.display = 'block';

  }
  let elementsRemove = document.querySelectorAll(`#${container} .cardLessThan .clear`);
  removeProductFromCart(container, elementsRemove, productsInLoc, proAndQuantityIt, iconName, iconId, isCart);

  existUserOrNotForIconCart('favoriteUser', 'proAndQuantityInFav', 'favoriteCart', 'proAndQuantityInFav', 'favoriteBooUser', 'proAndQuantityInFavBoo', 'favoriteBooCart', 'proAndQuantityInFavBoo', 'favorite', 'countFavorites');

  existUserOrNotForAddClassAtive('favoriteUser', 'favoriteCart', 'favorite');
  existUserOrNotForAddClassAtive('favoriteBooUser', 'favoriteBooCart', 'favorite');

}
function removeProductFromCart(container, allButtonsRemove, productsInLoc, proAndQuantityIt, iconName, iconId, isCart) {
  let productIdBu;
  let getProductFromLocal = JSON.parse(window.localStorage.getItem(productsInLoc));
  let objectQuan = JSON.parse(window.localStorage.getItem(proAndQuantityIt));
  allButtonsRemove.forEach(elementBu => {
    elementBu.addEventListener('click', (event) => {
      totalProd = 0;
      totalQuan = 0;
      allPrices = 0;
      allDiscounts = 0;
      getProductFromLocal = getProductFromLocal.filter((product, ind) => {
        let classN = Array.from(elementBu.classList);
        let arry = classN.filter(className => {
          let match = /{([^]*)}/g.test(className);
          return match;
        })
        let productIdd = arry[0].match(/{([^]*)}/g);
        productIdBu = productIdd[0].slice(1, -1);
        let match = product.id != productIdBu;
        return match;
      })
      window.localStorage.setItem(productsInLoc, JSON.stringify(getProductFromLocal));
      let objectQuann = objectQuan.filter(element => {
        let matchPro;
        matchPro = element.productId != productIdBu;
        return matchPro;
      })
      window.localStorage.setItem(proAndQuantityIt, JSON.stringify(objectQuann.reverse()));
      existUserOrNotInfav(iconName, iconId, isCart);
      existUserOrNotInfavvv(iconName, iconId, isCart);
    })
  })
}
function updateQuantityWhenInput(inputs, proAndQuantityIt, container) {
  if (window.localStorage.getItem((proAndQuantityIt))) {
    let objectQuann = (JSON.parse(window.localStorage.getItem((proAndQuantityIt))).reverse()) || [];
    inputs.forEach((input, index) => {
      quantityProducts = 0;
      input.addEventListener('input', (info) => {
        info.target.value = info.target.value.replace(/^0/, 1);
        let classN = Array.from(info.target.classList);
        let arry = classN.filter(className => {
          let match = /{([^]*)}/g.test(className);
          return match;
        })
        let productIdd = arry[0].match(/{([^]*)}/g);
        let productIdBu = productIdd[0].slice(1, -1);
        objectQuann.forEach((obj, ind, arr) => {
          if (obj.productId == productIdBu && info.target.value > 0) {
            obj.quantityPro = info.target.value;
          }
          if (obj.productId == productIdBu && info.target.value == '') {
            obj.quantityPro = 1;
          }
          if (container == 'productsInCart') {
          }
        })

        window.localStorage.setItem(proAndQuantityIt, JSON.stringify(objectQuann.reverse()));
        let quantityLocal = JSON.parse(window.localStorage.getItem(proAndQuantityIt));
        if (container == 'productsInCart') {
          quanBook = 0;
          quantityLocal.forEach((obj, ind, arr) => {

            quanBook += +obj.quantityPro;
          })
        }
        else {
          quanNotBook = 0;
          quantityLocal.forEach((obj, ind, arr) => {

            quanNotBook += +obj.quantityPro;
          })
        }
        totalQuan = quanBook + quanNotBook;
        id('headingCart').innerHTML = `your cart includes ${totalProd} products,${totalQuan} quantity`;
        // }
      })
      input.addEventListener('blur', (info) => {
        if (info.target.value == '') {
          info.target.value = info.target.value.replace(/^$/, 1);
          info.target.value == 1;

        }

      })
    })
  }
}
function updateQuantityWhenReload(inputs, proAndQuantityIt) {
  let objectQuann = (JSON.parse(window.localStorage.getItem((proAndQuantityIt)))) || [];
  objectQuann.forEach((element, index, array) => {
    inputs.forEach((input, ind, arr) => {
      if (input.value) {
        let classN = Array.from(input.classList);
        let arry = classN.filter(className => {
          let match = /{([^]*)}/g.test(className);
          return match;
        })
        let productIdd = arry[0].match(/{([^]*)}/g);
        let productIdBu = productIdd[0].slice(1, -1);
        if (element.productId == productIdBu) {
          arr[index].value = element.quantityPro;
        }
      }
    })
  })
}


















































































































































































