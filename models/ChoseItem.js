// tạo table card chứa các item tương ứng

function createItem(arrShow, arrItem, result) {
    let output = "";
    let res = [];

    for (let i = 0; i < arrShow.length; i++) {
        output += `
  <div class="card align-items-center col-4" id='item-${i}'>
            <img
              src=${arrShow[i]}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <button class="btn btn-primary" id='demo-${i}'>Demo</button>
            </div>
          </div>
  `;

        document.querySelector(".well").innerHTML = output;
        res.push(document.querySelectorAll(".btn.btn-primary"));
    }
    console.log(res);
    document.querySelector(".well").onclick = function() {
        handleClick(event, arrItem, result);
    };
    return res;
}

//hàm xuất ra hình tương ứng vs table trên
function handleClick(event, i, classRes) {
    const button = event.target;
    const id = button.id.split("-")[1];
    const resChange = document.querySelector(classRes);

    const previousResult = resChange.innerHTML;

    const j = +id;
    const file = i;

    let change = `<img src=${file[j]} alt="clother">`;
    resChange.innerHTML = change;

    previousResult = resChange.innerHTML;
}