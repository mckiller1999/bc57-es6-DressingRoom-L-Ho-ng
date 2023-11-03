const arrList = document.querySelectorAll(".nav-item.nav-link");
//console.log(arrList);
//dùng for in để lọc ra các thẻ a có trong div nav-item
for (let i in arrList) {
  //console.log(arrList[i]); => ra các thẻ a có trong div nav-item
  arrList[i].onclick = function () {
    //dùng for of để lọc ra các phần tử button có trong arrList[i]
    for (let button of arrList) {
      //console.log(button); => ra các btn có trong mảng arrList[i]
      button.classList.remove("active");
    }
    this.classList.add("active");
    createItem(show[i], itemShow[i], res[i]);
  };
}
