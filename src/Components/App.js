import '../Styles/App.css';
import Header from './Header'
import Footer from './Footer'
import Articles from './Articles'
import React from 'react'

function App() {

  const [darkMode, setDarkMode] = React.useState(()=>{
    const item = localStorage.getItem('darkMode')
    return JSON.parse(item) || false
  })

  function changeDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  React.useEffect(() =>
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    , [darkMode])

  return (
    <div id='App' className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} changeDarkMode={changeDarkMode} />
      <Articles darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
