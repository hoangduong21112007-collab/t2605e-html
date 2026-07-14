var p = {
    name: "Laptop Dell 15 DC15250 CPH992",
    price: 15000000,
    thumbnail: "https://cdn.tgdd.vn/Products/Images/44/268882/laptop-dell-vostro-15-3520-i5-11320h-8gb-512gb-4gb-win11-1.jpg",
    brand: {
        name: "Dell",
        country: "USA",
    },
    option: [
        {
            option: "64GB",
            color: "Black",
        },
        {
            option: "128GB",
            color: "White",
        }
    ]

}
// alert(p.brand.name);
// p.option.map((o) => {
//    alert(o.option);
// })

//CALL API
// const url = "https://dummyjson.com/products/search?q=phone";
// fetch(url).then(rs=>rs.json()).then(data=>{
//     var prs = data.products;
//     prs.map((p) => {
//     var item = `<div class="item col-12 col-sm-6 col-md-4 col-lg-3">
//         <img class="img-thumbnail" src="${p.thumbnail}"/>
//         <h3>${p.title}</h3>
//         <p>${p.description}</p>
//         <p>${p.price} VND</p>
//     </div>`;
//         document.getElementById("List_product").innerHTML += item;
//     })
    
// })

function favorite(id){
    var old_data = localStorage.getItem("heart");
    var arr = [];
    if(old_data){
        arr = JSON.parse(old_data);
    }
    if(arr.includes(id)){
        // removeid from arr
    }else{

    }
}
// const url = "https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
// fetch(url).then(rs=>rs.json()).then(data=>{
//     var prs = data;
//     var item = `<div class="item col-12 col-sm-6 col-md-4 col-lg-3">
//         <h3>${prs.name}</h3>
//         <p>${prs.main.temp} °C</p>
//         <p>${prs.weather[0].description}</p>
//     </div>`;
//     document.getElementById("List_product").innerHTML += item;
// })
// var data = {
//    msg: "success",
//     products: [
//          {
//       name  : "Iphone 15 Pro Max",
//         price: 15000000,
//         thumbnail: "img/Tributo-Platinum-v2.jpg",
//         description: "better performance"
//     },
//     {
//         name: "Laptop Dell 15 DC15250 CPH992",
//         price: 15000000,
//         thumbnail: "img/Tributo-Platinum-v2.jpg",
//         description: "better performance"
//     },
//     {
//         name: "Laptop Dell 15 DC15250 CPH992",
//         price: 15000000,
//         thumbnail: "img/Tributo-Platinum-v2.jpg",
//       description: "better performance"
//     },
//     {
//         name: "Laptop Dell 15 DC15250 CPH992",
//        price: 15000000,
//         thumbnail: "img/Tributo-Platinum-v2.jpg",
//         description: "better performance"
//    },
// ]
// };
// var prs = data.products;

// prs.map((p) => {
//     var item = `<div class="item col-12 col-sm-6 col-md-4 col-lg-3">
//         <img class="img-thumbnail" src="${p.thumbnail}"/>
//         <h3>${p.title}</h3>
//         <p>${p.description}</p>
//         <p>${p.price} VND</p>
//     </div>`;
//     document.getElementById("List_product").innerHTML += item;
// })
    