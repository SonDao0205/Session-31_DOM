// lấy theo id getElementById
let heading1 = document.getElementById("heading-1");
console.log("Heading1: ",heading1);

// lấy theo class 
const cource = document.getElementsByClassName("cource");
console.log("cource", cource);

// lấy thông qua querySelector
const listProductElement = document.querySelector("#list-product");
console.log(listProductElement);

// lấy thông qua querySelectorAll
const productItem = document.querySelectorAll(".product");
console.log("productItem",productItem);

// lấy ra tất cả các theo li có trong trang
const listLiTags = document.querySelectorAll("li");
console.log("listLiTags",listLiTags);

// lấy ra input có name = email;
const emailElement = document.querySelector("input[name= 'email']");
console.log(emailElement);

// 
const productss = document.querySelectorAll("#list-product li");
console.log("productss",productss);
//
const userName = document.querySelector("#userName");
console.log(userName.innerText);

console.log(userName.textContent);
console.log(userName.innerHTML);

// innerText
const demoElement = document.querySelector("#demo");
console.log(demoElement.innerText);
console.log(demoElement.textContent);
console.log(demoElement.innerHTML);

//
const age = document.querySelector("#age");
age.textContent = "31";

//
const formElement = document.querySelector("#form");
// thêm class vào 1 phần tử

formElement.classList.add("form-add");

// xóa class khỏi 1 phần tử
formElement.classList.remove("form");

// kiểm tra
formElement.classList.contains("hidden");
console.log(formElement.classList.add("hidden"));

// thêm xóa
formElement.classList.toggle("hidden");