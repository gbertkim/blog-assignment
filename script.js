const section = document.querySelector(".section")
console.log(section)
const getData = async () => {
    try {
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const dataJson = await fetchData.json()
        for(let i = 0; i < 100; i++){
            let article = document.createElement('article')
            article.classList.add('article')
            article.innerHTML = `
                <div class="articleWrapper">
                    <h3 class="article-group-blue">World</h3>
                    <h2 class="article-title">${dataJson[i].title}</h2>
                    <p class="article-date">Nov 12</p>
                    <p class="article-summary">${dataJson[i].body}</p>
                </div>
                <a href='#'href='#' class="article-link">Continue Reading</a>
            `
            section.append(article)
        }
    } catch (e) {
        console.log(e)
    }
}
getData()