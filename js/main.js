//  Even listener allow javascript to be performed ONLY after the event  function is envoke

// constant gallery image
const galleryImages = [
  {
    src: "./img/gallery/image1.jpg",
    alt: "Thumbnail Image 1",
  },

  {
    src: "./img/gallery/image2.jpg",
    alt: "Thumbnail Image 2",
  },

  {
    src: "./img/gallery/image3.jpg",
    alt: "Thumbnail Image 3",
  },
];

//  products images
const products = [
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 49.9,
    image: "./img/products/img6.png",
  },
  {
    title: "Space Odissey",
    author: "Marie Anne",
    price: 35,
    image: "./img/products/img1.png",
  },
  {
    title: "Doomed City",
    author: "Jason Cobert",
    price: 0,
    image: "./img/products/img2.png",
  },
  {
    title: "Black Dog",
    author: "John Doe",
    price: 85.35,
    image: "./img/products/img3.png",
  },
  {
    title: "My Little Robot",
    author: "Pedro Paulo",
    price: 0,
    image: "./img/products/img5.png",
  },
  {
    title: "Garden Girl",
    author: "Ankit Patel",
    price: 45,
    image: "./img/products/img4.png",
  },
];

//  event here is "click" --- this open the menu
// by clicking on the menu button

//  <==================    MENU SECTION =========================================================>
function menuHandler() {
  document
    .querySelector("#open-nav-menu")
    .addEventListener("click", function () {
      document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

  //  close nav menu
  document
    .querySelector("#close-nav-menu")
    .addEventListener("click", function () {
      document
        .querySelector("header nav .wrapper")
        .classList.remove("nav-open");
    });
}

// Greeting Section
function celsiusToFahr(temperature) {
  let fahr = (temperature * 9) / 5 + 32; // f = (c * 9/5) + 32
  return fahr;
}

/**
 * Functions
 * to get degree symbol, hold alt + 0176
 */

//  <==================    GREETING SECTION ========================================================
function greetingHandler() {
  // celsiusToFahr(34); // call the function
  let currentHour = new Date().getHours();
  let greetingText;
  if (currentHour < 12) {
    greetingText = "Good Morning!";
  } else if (currentHour < 19) {
    greetingText = "Good Afternoon";
  } else if (currentHour < 24) {
    greetingText = "Good Evening";
  } else {
    greetingText = "Welcome";
  }

  console.log(currentHour);

  const weatherCondition = "sunny";
  const userLocation = "Ankeny, Iowa";
  let temperature = 36;
  let celsiusText = `The weather is ${weatherCondition}  in ${userLocation} and it's ${temperature.toFixed(
    1
  )}°C outside here.`;

  let fahrText = `The weather is ${weatherCondition}  in ${userLocation} and it's ${celsiusToFahr(
    temperature
  ).toFixed(1)}°F outside here.`;

  document.querySelector("#greeting").innerHTML = greetingText;
  document.querySelector("p#weather").innerHTML = celsiusText;

  document
    .querySelector(".weather-group")
    .addEventListener("click", function (e) {
      // (e) = means event
      if (e.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
      } else if (e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = fahrText;
      }
    });
}

//  <==================    LOCAL TIME SECTION ====================================================>
// working on local time
//  .toString().padStart(2,"0") add '0' to the beginning of the time
// if the time has only one digit ( eg. 1 = 01)
function clockHandler() {
  setInterval(function () {
    let localTime = new Date(); // create a new local time
    document.querySelector("span[data-time=hours]").textContent = localTime
      .getHours()
      .toString()
      .padStart(2, "0"); // get only the hour
    document.querySelector("span[data-time=minutes]").textContent = localTime
      .getMinutes()
      .toString()
      .padStart(2, "0"); //get the minutes
    document.querySelector("span[data-time=seconds]").textContent = localTime
      .getSeconds()
      .toString()
      .padStart(2, "0"); // get the seconds
  }, 1000); // 1000 = miliseconds, which is == 1 second
}

//<==================   GALLERY SECTION ============================================================>
// Gallery Section

function galleryHandler() {
  // Get the images in index.html
  // main with id=;gallerY here
  let mainImage = document.querySelector("#gallery > img");
  mainImage.src = galleryImages[0].src; // galleryImages[0] - array 0 means first image in gallery
  mainImage.alt = galleryImages[0].alt;

  /**
   *  <div class="thumbnails">
   * images here from index.html
   * */
  let thumbnails = document.querySelector("#gallery .thumbnails");

  galleryImages.forEach(function (image, index) {
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false; // equal to if else statement commented on below
    // if (index === 0) {
    //   thumb.dataset.selected = true;
    // } else {
    //   thumb.dataset.selected = false;
    // }

    // on click events
    // select an individual image onclick
    thumb.addEventListener("click", function (e) {
      let selectedIndex = e.target.dataset.arrayIndex;
      let selectedImage = galleryImages[selectedIndex];
      mainImage.src = selectedImage.src;
      mainImage.alt = selectedImage.alt;

      //  unselect thumbnail image
      thumbnails.querySelectorAll("img").forEach(function (img) {
        img.dataset.selected = false;
      });
      // make image selected
      e.target.dataset.selected = true;
    });

    thumbnails.appendChild(thumb);
  });
}

//<==================   PRODUCT SECTION ============================================================>
// Product section
function productsHandler() {
  let productsSection = document.querySelector(".products-area");
  //loop through products and create html element
  products.forEach(function (product, index) {
    // for div class in html (product-item)
    let productsElement = document.createElement("div");
    productsElement.classList.add("product-item");

    // for img tag in class product area in html
    let productsImage = document.createElement("img");
    productsImage.src = product.image; // link const products array above 'image'
    productsImage.alt = "Image for " + products.title; // link const products array above 'title'

    // create product detail section
    let productDetails = document.createElement("div");
    productDetails.classList.add(".product-details");

    // create product title, author price and price-title  section
    let productTitle = document.createElement("h3");
    productTitle.classList.add(".product-title");
    productTitle.textContent = product.title;

    // create product author
    let productAuthor = document.createElement("p");
    productAuthor.classList.add(".product-author");
    productAuthor.textContent = product.author;

    // create product price
    let priceTitle = document.createElement("p");
    priceTitle.classList.add(".price-title");
    priceTitle.textContent = "Price";

    let productPrice = document.createElement("p");
    productPrice.classList.add(".product-price");
    productPrice.textContent =
      product.price > 0 ? "$" + product.price.toFixed(2) : "Free";

    // Append product detail
    productDetails.append(productTitle);
    productDetails.append(productAuthor);
    productDetails.append(priceTitle);
    productDetails.append(productPrice);

    // Add all child HTML elements of the products
    productsElement.append(productsImage);
    productsElement.append(productDetails);

    // Add complete individual product to production section
    productsSection.append(productsElement);
  });
}

// div class="product-item">
//         <img src="./img/products/img6.png" alt="AstroFiction" />
//         <div class="product-details">
//           <h3 class="product-title">Astro Fiction</h3>
//           <p class="product-author">John Doe</p>
//           <p class="price-title">Price</p>
//           <p class="product-price">$ 49.90</p>
//         </div>
//       </div>

// Page Load
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();
