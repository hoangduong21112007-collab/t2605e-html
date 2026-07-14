// comment
var x= 10;// number
x = "hello world!";// string
x = true;// boolean
x = 3.14159;// number
x = "3.14159";// string
var y = 5;
var x = "7";
var t = y + x; // "57"
// "1" + 2 =>` "12"
// 1 + 2 => 3
// 1 + "2" => "12"
//console.log("Hello World!");
if (y > 0){

}else{

}
for(var i = 0; i < 10; i++){
    
}

var arr = [];
//arr[4] = 19;
arr.push(19);
arr.push("xin chao");
arr.push(true);

var nums = [5, 9,  1, 4, 2, 3,];
console.log(nums);
console.log(7);
console.log("9"+8);
var total = 0;
for(var i = 0; i < nums.length; i++){
    total += nums[i];
}
var total2 = 0;
nums.map(e=>{
    total2 += e;
});
// sắp xếp mảng nums theo thứ tự từ nhỏ đến lớn
nums.sort();

function tinh_tong(a, b){
    var c = a + b;
    console.log(c);
    return c;
}
tinh_tong(5, 9);
var tt = tinh_tong(10,3.14159);
var tx = tinh_tong("ABC", 100);

var nhan_hai_so = (a, b) => { // arrow function
    var c = a * b;
    console.log(c);
}

//alert("Yêu cầu trên 18 tuổi mới được truy cập vào website!");// no return 
//confirm("Xác nhận nộp bài thì?");// return true/false
//prompt("Nhập tên của bạn: ");// return string

// tham chiếu h1 có id là head1 sang đây để xử lý
var h1e = document.getElementById("head1");
h1e.style.color = "red";
h1e.style.backgroundColor = "#74deb3";
//var h2b = document.getElementsByTagName("head1");
h1e.textContent = "<i>Hello World! T2605E</i>";
h1e.innerHTML += "<i>Hello World!T2605E</i>";

h1e.classList.add("show-title");

var color = ["red", "blue", "green", "yellow", "orange", "pink", "purple"]
var r = 0;
setInterval(()=>{
    // sẽ làm các công việc sau mỗi 1000ms
    var cs = r%7;
    h1e.style.color = color[cs];
    r++;
},1000);

var h2e = document.getElementById("head2");
var timer = 1000;
setInterval(()=>{
    if(timer >= 0){
    //in gia tri cua timer vao h2e
    h2e.textContent = timer;
    // giam timer di 1
    timer--;
    }   
},1);