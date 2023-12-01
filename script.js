let newsType = document.getElementById('newstype')
let boton = document.getElementById('buton')
let searchNews = document.getElementById('newsQuery')
boton.addEventListener('click',function(e){
const Api = `https://api.worldnewsapi.com/search-news?api-key=17e5dc73a9ec46858b5db2e51f2aaf2d&text=${searchNews.value}`
fetch(Api).then(result=>result.json()).then((data)=>{
    console.log(data)
    let allNews;
    data.news.map((value,index,array)=>{
        newsType.innerHTML +=`
        <div class="col-lg-4">
        <img src="${value.image}" alt="" style="width:100%;height:200px" class=good">
        <h3>Title:${value.title.slice(0,100)}</h3>
      <small>Details:${value.title.slice(0,500)}</small> 
      </div>
       `
    })
})
})