


const products=[
    {
      name: "iPhone 13 Pro",
      price: "999",
      image_url:     "https://s.yimg.com/uu/api/res/1.2/6tptIDiKpIIxEsSAHTrwJw--~B/aD0xMTAyO3c9MTk2MDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/da422d6fcb5de1bb7721c4bd56e8367d",
      
      brand: "Apple",
      description: "The iPhone 13 Pro features a stunning Super Retina XDR display, advanced dual-camera system, and the powerful A15 Bionic chip."
    },
    {
      name: "Samsung Galaxy S21 Ultra",
      price: "1199",
      image_url:     "https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/gallery/Red/1.jpg",

      brand: "Samsung",
      description: "The Samsung Galaxy S21 Ultra boasts a 6.8-inch Dynamic AMOLED 2X display, a versatile quad-camera system, and S Pen support for enhanced productivity."
    },
    {
      name: "Google Pixel 6 Pro",
      price: "899",
      image_url:     "https://phone.mesramobile.com/wp-content/uploads/2019/10/google-pixel-4pricemalaysia-3.jpg",

      brand: "Google",
      description: "With its exceptional camera capabilities powered by Google's computational photography, the Pixel 6 Pro delivers stunning photos and videos."
    },
    {
      name: "OnePlus 9 Pro",
      price: "1069",
      image_url:    "https://m-cdn.phonearena.com/images/articles/396456-image/OnePlus-11-scaled.jpg",

      brand: "OnePlus",
      description: "The OnePlus 9 Pro features a Hasselblad camera system, Qualcomm Snapdragon 888 processor, and a fluid 120Hz display for smooth performance."
    },
    {
      name: "Xiaomi Mi 11 Ultra",
      price: "999",
      image_url:     "https://specifications-pro.com/wp-content/uploads/2023/02/Xiaomi-Redmi-Note-13-Pro-600x600.png",

      brand: "Xiaomi",
      description: "The Xiaomi Mi 11 Ultra boasts a triple-camera system with a massive 50MP primary sensor, Snapdragon 888 chipset, and a gorgeous AMOLED display."
    },
    {
      name: "Sony Xperia 1 III",
      price: "1299",
      image_url:     "https://4gnews.pt/wp-content/uploads/2018/07/Huawei-Honor-Note-10-4.jpg",

      brand: "Sony",
      description: "Featuring a 4K HDR OLED display, a pro-level camera system, and Qualcomm Snapdragon 888 processor, the Sony Xperia 1 III is designed for multimedia enthusiasts."
    },
    {
      name: "Huawei P50 Pro",
      price: "1199",
      image_url:     "https://www.bhphotovideo.com/images/images2500x2500/sony_xqct62_v_xperia_1_iv_512gb_1731356.jpg",

      brand: "Huawei",
      description: "The Huawei P50 Pro features a unique camera setup with large sensors, a stunning OLED display, and powerful performance thanks to its Kirin chipset."
    },
    {
      name: "Oppo Find X3 Pro",
      price: "1099",
      image_url:     "http://www.lgnewsroom.com/wp-content/uploads/2018/05/LG-G7-ThinQ-05.jpg",

      brand: "Oppo",
      description: "With its innovative microscope camera, vibrant AMOLED display, and fast Snapdragon 888 processor, the Oppo Find X3 Pro offers a premium smartphone experience."
    },
    {
      name: "Motorola Edge+ (2021)",
      price: "999",
      image_url:     "https://i.pinimg.com/originals/65/0b/e7/650be77d38088ca0a4bb4d0e7b51505e.jpg",

      brand: "Motorola",
      description: "The Motorola Edge+ (2021) features a 108MP camera, Qualcomm Snapdragon 870 processor, and a large OLED display with a 144Hz refresh rate for smooth gaming and multimedia."
    },
    {
      name: "Realme GT",
      price: "599",
      image_url:    "https://i2.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/04/nokia-phones.jpg?fit=1200%2C675&ssl=1",

      brand: "Realme",
      description: "The Realme GT offers flagship-level performance with its Snapdragon 888 processor, a high-refresh-rate AMOLED display, and a versatile triple-camera setup."
    }
  ]

  let items=localStorage.getItem("cartSect");
let cart;
if(items){
   
    cart=JSON.parse(items);
}
else{
    cart=[];
}

function renderFunction() {

  const render= document.querySelector(".products");
  const nav= document.querySelector("nav");
  nav.innerHTML=`
  <div class="d-flex p-2"><h3>Navabr</h3></div>
      <div class="links">
        <ul class="d-flex justify-content-start w-full mx-5  mt-1 align-items-center gap-2 list-style-none">
          <li onclick=""><a class="text-decoration-none text-white p-3 fs-5 m-3   " href="index.html"><i class="fa-solid px-1 fa-home"></i>Home</a></li>
          <li  onclick="cartFunction()" class="text-decoration-none text-white p-3 cursor cursor-pointer  pointer fs-5 m-3"><i class="fa-solid  fa-cart-shopping"><sup class="sup ">${cart.length

          }</sup></i> Cart</li>
      </ul>
      </div>
  `
  for (let index = 0; index < products.length; index++) {
     render.innerHTML+=`
     <div class="card d-flex justify-content-center   m-2 col-3 shadow col-lg-3" >
     <img src="${products[index].image_url}" class="card-img-center d-flex  " alt="..." style="height:250px">
     <div class="card-body">
       <h5 class="card-title">${products[index].name}</h5>
       <p class="card-text">${products[index].description}</p>
       <a href="#" class="btn btn-primary" onclick="myFunction(${index})">Add To Cart</a>
     </div>
   </div>

     
     </div>
     
     `
    
  }

}
renderFunction();

 
function myFunction(index) {

        
    
        console.log(cart)
  for (let k = 0; k < cart.length; k++) {
    console.log(cart[k].name)
      if (cart[k].name === products[index].name) {
          cart[k].quantity+=1;
          return;
      }  
}
  products[index].quantity=1;
  cart.push(products[index]);
  renderFunction();
  
}


function cartFunction(){
localStorage.setItem("cartSect", JSON.stringify(cart));
window.location='Cart.html';
}
 
