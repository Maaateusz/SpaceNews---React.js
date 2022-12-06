import React from 'react'
import ArticleShort from './ArticleShort'
import Article from './Article'

export default function Articles(prop) {
    const darkMode = prop.darkMode

    const path = 'https://api.spaceflightnewsapi.net/v3/articles'
    const pathAttr = '?_start=1&_limit=10'

    const [articles, setArticles] = React.useState([])
    const [article, setArticle] = React.useState([])

    React.useEffect(() => {
        fetch(path + pathAttr)
            .then(res => res.json())
            .then(data => setArticles(data))
        console.log('----------')
    }, [])


    const toList = data => data.map(
        item => <ArticleShort key={item['id']} data={item} displayArticle={displayArticle} darkMode={darkMode} />)


    function displayArticle(id) {
        setArticle(articles.filter((item) => item.id === id)[0])
    }




    return (
        <main>
            <div id='articles' className={darkMode ? 'dark' : ''}>
                {toList(articles)}
            </div>
            <Article data={article} darkMode={darkMode} />
        </main>

    )
}