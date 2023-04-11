const LIST = [
    { link: "../adminpart/admin.html", tag: "Admin" },
    { link: "../index.html", tag: "User" },
    { link: "../cart/cart.html", tag: "Cart" },
  ];

  const PICS = [{src: "../pics/fokep.png", alt:"webshop"}];
  const STYLE = [{src:"../style.css"}];
  


  $(function () {
    const NAV = $("nav");
    const HEAD = $("header");
    const META = $("head");
    
    let metakiir = metatag();
    let navkiir = nav();
    let headerkiir = Headerpics();
    NAV.append(navkiir);
    HEAD.append(headerkiir);
    META.append(metakiir);
  
  });



  function nav() {
      let text = `<div class="container-fluid "><div class="d-flex p-2 bg-dimgray">`;
      for (let index = 0; index < LIST.length; index++) {
        text += `<div><a class="col p-3 text-light" href='${LIST[index].link}'>${LIST[index].tag}</a></div>`;
      }
      text += `</div></div>`
      console.log(text);
      return text;
  }



  function Headerpics() {
      let text = `<div>`;
      for (let index = 0; index < PICS.length; index++) {
        text += `<img class=" rounded "  src="${PICS[index].src}" alt="${PICS[index].alt}">`;
      }
      text += `</div>`
      console.log(text);
      return text;
  }



  function metatag() {
      let text = "";
      for (let index = 0; index < STYLE.length; index++) {
        text += `<link rel="stylesheet" href="${STYLE[index].src}">`;
      }
      console.log(text);
      return text;
  }