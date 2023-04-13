import { dataList } from "./data";

$(function () {
    const ARTICLE = $("article");
    
    let artkiir = article();
    ARTICLE.append(artkiir);
  });

  function article() {
    let text = "";
    for (let index = 0; index < dataList.length; index++) {
        text += `<div></div>`;
    }
    return text;
}