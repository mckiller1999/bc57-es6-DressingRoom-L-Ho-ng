const arrList = document.querySelectorAll(".nav-item.nav-link");
console.log(arrList);

for (let i in arrList) {
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
