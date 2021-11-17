function getArticleGenerator(articles) {
    return publish;

    function publish(){
        const present = articles.shift();
        if(!present){
            return;
        }
        const article = document.createElement('article');
        article.textContent = present;
        const div = document.getElementById('content');
        div.appendChild(article);
    }
}
