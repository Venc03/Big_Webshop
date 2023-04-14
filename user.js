import { DATALIST } from "./data.js";
import { PICLIST } from "./data.js";

$(function () {
  const ARTICLE = $("article");
  let artkiir = article();
  ARTICLE.append(artkiir);
});

function article() {
  let text = ``;
  for (let index = 0; index < DATALIST.length; index++) {
    text += `<div class = "item">`;
    text += `<p class = "artp"><img  class = "artpic" src="${PICLIST[index]}" alt=""></p>
    <p class = "name">${DATALIST[index].Name}</p>
    <p class = "desc">${DATALIST[index].Description}</p>
    <p class = "cost">${DATALIST[index].Cost}</p>`;
    text += `</div>`
  }
  return text;
}