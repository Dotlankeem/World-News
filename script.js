 let newsType = document.getElementById("newstype");
let boton = document.getElementById("buton");
let searchNews = document.getElementById("newsQuery");
const apiUrl = "https://api.worldnewsapi.com/search-news";
const apikey = "17e5dc73a9ec46858b5db2e51f2aaf2d";
// function allData(){
//       const Api = `https://newsapi.org/v2/top-headlines?country=us&category=business&apikey=5fd73c133fcb4bad993cef14f9943c3b`;
//       fetch(Api)
//         .then((result) => result.json())
//         .then((data) => {
//           console.log(data);
//           let allNews;
//           data.articles.map((value, index, array) => {
//             newsType.innerHTML += `
//         <div class="col-lg-4">
//         <img src="${
//           value.urlToImage
//         }" alt="" style="width:100%;height:200px" class=good">
//         <h3>Title:${value.title.slice(0, 100)}</h3>
//       <small>Details:${value.description}</small> 
//       <small>Details:${value.content}</small>
//       </div>
//        `;
//           });
//         });

// }
// allData()
// function allData() {
//   const Api = `${apiUrl}?api-key=${apikey}`;
//   fetch(Api)
//     .then((result) => result.json())
//     .then((data) => {
//       console.log(data);
//       let allNews;
//       data.articles.map((value, index, array) => {
//         newsType.innerHTML += `
//         <div class="col-lg-4">
//         <img src="${
//           value.urlToImage
//         }" alt="" style="width:100%;height:200px" class=good">
//         <h3>Title:${value.title.slice(0, 100)}</h3>
//       <small>Details:${value.description}</small> 
//       <small>Details:${value.content}</small>
//       </div>
//        `;
//       });
//     });
// }

function homeData() {
  const Api = `${apiUrl}?api-key=${apikey}`;
  fetch(Api)
    .then((result) => result.json())
    .then((data) => {
      console.log(data.news);
      let allNews = data.news
      allNews.map((value, index, array) => {
        newsType.innerHTML += `
        <div class="col-lg-4">
        <img src="https://plus.unsplash.com/premium_photo-1679496830187-5b7a3def833e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" alt="" style="width:100%;height:200px" class=good">
        <h3>Title:${value.title}</h3>
      <small>Details:${value.text.slice(0, 100)}</small> 
      <div><a href="${value.url}"><button>Read More</button></a></div>

      </div>
       `;
      });
    });
}

// // allData()
homeData()
