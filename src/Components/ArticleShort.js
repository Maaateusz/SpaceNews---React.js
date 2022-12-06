import '../Styles/ArticleShort.css'

export default function ArticleShort(prop) {
    const data = prop.data
    const style = {
        backgroundColor: 'rgb(15, 22, 49)',
        color: 'white'
    }
    const date = new Date(data['publishedAt'])


    return (
        <div className={'ArticleShort'} style={prop.darkMode ? style : {}}>
            <a href={data['url']} className="ArticleShort-link" style={prop.darkMode ? style : {}}>
                <img src={data['imageUrl']} className='ArticleShort-img' alt='news' />
            </a>
            <p className='ArticleShort-author'>{data['newsSite']}</p>
            <a href={data['url']} className="ArticleShort-link" style={prop.darkMode ? style : {}}>
                <p className='ArticleShort-title'>{data['title']}</p>
            </a>
            <p className='ArticleShort-summary' onClick={() => prop.displayArticle(data['id'])}>{data['summary']}</p>
            <p className='ArticleShort-date' style={prop.darkMode ? style : {}}>{date.toLocaleString()}</p>


            {/* <p>{data['newsSite']}</p>
            <p>{data['title']}</p>
            <p>{data['url']}</p>
            <p>{data['summary']}</p>
            <p>{data['publishedAt']}</p>
            <p>{data['updatedAt']}</p> */}
        </div>
    )
}