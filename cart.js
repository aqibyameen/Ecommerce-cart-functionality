function cartRender(){
    const nav=document.querySelector('nav');
    
    const carted= document.querySelector(".cartdisplay");
    var totall=document.querySelector(".total");
    console.log(totall)


let carti= localStorage.getItem("cartSect");

if (carti){
     carti=JSON.parse(carti);
     carted.innerHTML="";
     let total=0;
     if (carti.length<1) {
        nav.innerHTM=`
        
        

      <div class="d-flex p-2"><h3>Navabr</h3></div>
      <div class="links">
        <ul class="d-flex justify-content-start w-full mx-5  mt-1 align-items-center gap-2 list-style-none">
          <li onclick=""><a class="text-decoration-none text-white p-3 fs-5 m-3   " href="index.html"><i class="fa-solid px-1 fa-home"></i>Home</a></li>
          <li  onclick="cartFunction()" class="text-decoration-none text-white p-3 cursor cursor-pointer  pointer fs-5 m-3"><i class="fa-solid  fa-cart-shopping"><sup class="sup ">0</sup></i> Cart</li>
      </ul>
      </div>

        `
        carted.innerHTML=`
        <div class="w-full d-flex justify-content-center align-items-center text-center">
            <h4>No items Found</h4>
        </div>
        `
        totall.innerHTML=`
        <h4 class="w-full justify-content-center align-items-center text-center">Total: ${parseInt(total) }</h4>
        `
    
     }
     else{
        nav.innerHTML=`
        
        

      <div class="d-flex p-2"><h3>Navabr</h3></div>
      <div class="links">
        <ul class="d-flex justify-content-start w-full mx-5  mt-1 align-items-center gap-2 list-style-none">
          <li onclick=""><a class="text-decoration-none text-white p-3 fs-5 m-3   " href="index.html"><i class="fa-solid px-1 fa-home"></i>Home</a></li>
          <li  onclick="cartFunction()" class="text-decoration-none text-white p-3 cursor cursor-pointer  pointer fs-5 m-3"><i class="fa-solid  fa-cart-shopping"><sup class="sup ">${carti.length}</sup></i> Cart</li>
      </ul>
      </div>

        `
    for (let index = 0; index < carti.length; index++) {
        console.log(carti[index])
        total+=parseInt(carti[index].price)* parseInt(carti[index].quantity);
        console.log(total)
        carted.innerHTML+=`
        <div class="col-3 col-lg-3 col-sm-6 ">
                        <div class="card cardg mb-4 shadow-sm ">
                            <div class="card-body">
                            <img src="${carti[index].image_url}" class="img-fluid " style="width:100%;height: 200px;"alt=""  />
                            <div class="w-full d-flex justify-content-end mt-2">
                            <button class="w-20 btn btn-outline-dark " onclick="removeFuntion(${index})">remove</button>
                            </div>
                                <h5 class="card-title">${ carti[index].name }</h5>
                                <p class="card-text">${ carti[index].description }</p>
                                <p class="card-text">Price: ${ carti[index].price }</p>
                                <div class="w-full d-flex justify-content-between align-items-center">
                            <button class="w-20 btn btn-outline-dark px-2 " onclick="decrement(${index})">-</button>
                            <h6 class="card-text">Quantity: ${ carti[index].quantity }</h6>
                            <button class="w-20 btn btn-outline-dark px-2" onclick="increment(${index})">+</button>

                            </div>
                                
        
                            </div>
                        </div>
                      
                    </div>
                    
        `
       
        
        }
        totall.innerHTML=`
        <h1 class="w-full justify-content-center align-items-center text-center">Total: ${parseInt(total) }</h1>
        `
    }

       
}

}

function homeFunction(){
    window.location.href="index.html";
}
function removeFuntion(i){
    let arr= JSON.parse(localStorage.getItem("cartSect"));
        arr.splice(i,1);
        localStorage.setItem("cartSect",JSON.stringify(arr));
         window.location.href="cart.html";
}
function increment(index){
    let arr= JSON.parse(localStorage.getItem("cartSect"));
    arr[index].quantity+=1;
    localStorage.setItem("cartSect",JSON.stringify(arr));
cartRender();
}
function decrement(index){
    let arr= JSON.parse(localStorage.getItem("cartSect"));
   
    arr[index].quantity-=1;
    if (arr[index].quantity===0) {
        removeFuntion(index);
        cartRender();
        return;
    }
    localStorage.setItem("cartSect",JSON.stringify(arr));

   cartRender();
}
cartRender();
