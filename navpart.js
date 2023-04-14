const LIST = [
    { link: "../admin.html", tag: "Admin" },
    { link: "../index.html", tag: "User" },
    { link: "../cart.html", tag: "Cart" },
  ];

  const PICS = [{src: "./pics/fokep.png", alt:"webshop"}];
  const STYLE = [{src:"./style.css"}];
  


  $(function () {
    const NAV = $("nav");
    const HEAD = $("header");
    const META = $("head");
    const FOOTER = $("footer");
    let metakiir = metatag();
    let navkiir = nav();
    let headerkiir = Headerpics();
    let footerkiir = footer();
    NAV.append(navkiir);
    HEAD.append(headerkiir);
    META.append(metakiir);
    FOOTER.append(footerkiir);
  });



  function nav() {
      let text = `<div class="container-fluid "><div class="d-flex p-2 bg-dimgray" style="backdrop-filter: blur(20px)">>`;
      for (let index = 0; index < LIST.length; index++) {
        text += `<div><a class="col p-3 text-light" href='${LIST[index].link}'>${LIST[index].tag}</a></div>`;
      }
      text += `</div></div>`
      return text;
  }



  function Headerpics() {
      let text = `<div>`;
      for (let index = 0; index < PICS.length; index++) {
        text += `<img class="rounded"  src="${PICS[index].src}" alt="${PICS[index].alt}">`;
      }
      text += `</div>`
      return text;
  }



  function metatag() {
      let text = "";
      for (let index = 0; index < STYLE.length; index++) {
        text += `<link rel="stylesheet" href="${STYLE[index].src}">`;
      }
      return text;
  }



  function footer() {
    let text = "Végi Dániel Márk";
    return text;
}