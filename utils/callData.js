import { handleClick, createItem } from "../models/ChoseItem.js";
import { itemShow, show, res, promise } from "../models/ListChosen.js";

const arrList = document.querySelectorAll(".nav-item.nav-link");

//dùng for in để lọc ra các thẻ a có trong div nav-item
for (let i = 0; i < arrList.length; i++) {
  arrList[i].onclick = function () {
    //dùng forEach để lọc ra các phần tử trong button
    arrList.forEach((button) => {
      //console.log(button); => ra các btn có trong mảng arrA
      button.classList.remove("active");
    });
    this.classList.add("active");

    createItem(show[i], itemShow[i], res[i]);
  };
}
