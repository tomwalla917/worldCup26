import { useEffect } from 'react'
import GamesWidget from '../context/GamesWidget.jsx'

function Games() {
  useEffect(() => {
    console.log('Window object keys:', Object.keys(window))
    console.log('apiSportsWidgets available?', window.apiSportsWidgets)
    console.log('Custom elements:', customElements)
    console.log('Widget element defined?', customElements.get('api-sports-widget'))
  }, [])

  return (
    <div>
      <h1>World Cup 2026 Games</h1>
      <GamesWidget 
        league="39" 
        showToolbar={true}
        refresh={30}
      />
    </div>
  )
}

export default Games