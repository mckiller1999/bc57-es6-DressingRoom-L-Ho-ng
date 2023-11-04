const arrShirtShow = [];
const arrPantsShow = [];
const hairStyleShow = [];
const handbagShow = [];
const necklaceShow = [];
const shoeShow = [];
const bggShow = [];
//--------------------------------------//
const arrShirt = [];
const arrPants = [];
const hairStyle = [];
const handbag = [];
const necklace = [];
const shoe = [];
const bgg = [];
//--------------------------------//
const show = [
  arrShirtShow,
  arrPantsShow,
  hairStyleShow,
  handbagShow,
  necklaceShow,
  shoeShow,
  bggShow,
];
const itemShow = [arrShirt, arrPants, hairStyle, handbag, necklace, shoe, bgg];
const res = [
  ".necklace-img",
  ".necklaceBt-img",
  ".hairstyle-img",
  ".handbag-img",
  ".necklaceTop-img",
  ".feet-img",
  ".background",
];

export { itemShow, show, res, promise };

//

function getImgItem(item, types, arr) {
  let kq = item;
  let getShirtShow = kq.filter((type) => type.type === types);
  let res = getShirtShow.map((item, index) => {
    let find = item.imgSrc_jpg;
    arr.push(find);
    return arr;
  });
  return res;
}

function getImgItemRes(item, types, arr) {
  let kq = item;
  let getShirtShow = kq.filter((type) => type.type === types);
  let res = getShirtShow.map((item, index) => {
    let find = item.imgSrc_png;
    arr.push(find);
    return arr;
  });
  return res;
}

const promise = axios({
  url: "/data/Data.json",
  method: "get",
  responseType: "json",
});

promise.then(function (res) {
  getImgItem(res.data.tabPanes, "topclothes", arrShirtShow);
  getImgItem(res.data.tabPanes, "botclothes", arrPantsShow);
  getImgItem(res.data.tabPanes, "hairstyle", hairStyleShow);
  getImgItem(res.data.tabPanes, "handbags", handbagShow);
  getImgItem(res.data.tabPanes, "necklaces", necklaceShow);
  getImgItem(res.data.tabPanes, "shoes", shoeShow);
  getImgItem(res.data.tabPanes, "background", bggShow);
  //
  getImgItemRes(res.data.tabPanes, "topclothes", arrShirt);
  getImgItemRes(res.data.tabPanes, "botclothes", arrPants);
  getImgItemRes(res.data.tabPanes, "hairstyle", hairStyle);
  getImgItemRes(res.data.tabPanes, "handbags", handbag);
  getImgItemRes(res.data.tabPanes, "necklaces", necklace);
  getImgItemRes(res.data.tabPanes, "shoes", shoe);
  getImgItemRes(res.data.tabPanes, "background", bgg);
});

promise.catch(function (err) {
  console.log(err);
});
