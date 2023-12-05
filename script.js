let newsType = document.getElementById("newstype");
let boton = document.getElementById("buton");
let searchNews = document.getElementById("newsQuery");
function allData(){
      const Api = `https://newsapi.org/v2/top-headlines?country=us&category=business&apikey=5fd73c133fcb4bad993cef14f9943c3b`;
      fetch(Api)
        .then((result) => result.json())
        .then((data) => {
          console.log(data.articles);
          let allNews;
          data.articles.map((value, index, array) => {
            newsType.innerHTML += `
        <div class="col-lg-4">
        <img src="${
          value.urlToImage
        }" alt="" style="width:100%;height:200px" class=good">
        <h3>Title:${value.title.slice(0, 100)}</h3>
      <small>Details:${value.description}</small> 
      <small>Details:${value.content}</small>
      </div>
       `;
          });
        });

}
allData()