
export default function Footer(prop) {

    return (
        <footer className={prop.darkMode ? 'dark': ''}>
            <a href='https://www.spaceflightnewsapi.net/' target='_blank' rel="noreferrer" className={prop.darkMode ? 'dark': ''}>
                <p>Made with <b>api.spaceflightnewsapi.net</b></p>
            </a>
        </footer>
    )
}