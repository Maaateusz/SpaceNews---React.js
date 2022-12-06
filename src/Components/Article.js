
export default function Article(prop) {
    const data = prop.data

    return (
        <div id='article' className={prop.darkMode ? 'dark' : ''}>
            <h2>{data['title']}</h2>
            <iframe src={data['url']} title={data['title']} loading='lazy' className="article-iframe"></iframe>
        </div>
    )
}