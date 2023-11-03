const arrList = document.querySelectorAll(".nav-item.nav-link");
//console.log(arrList);

for (let i in arrList) {
  arrList[i].onclick = function () {
    //dùng for of để lọc ra các phần tử trong button
    for (let button of arrList) {
      //console.log(button); => ra các btn có trong mảng arrList
      button.classList.remove("active");
    }

    this.classList.add("active");

    createItem(show[i], itemShow[i], res[i]);
  };
}
