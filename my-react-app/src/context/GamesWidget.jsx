import { useEffect, useRef } from 'react'

function GamesWidget({ league, showToolbar = true, refresh = 30, targetGame = "#game-details" }) {
  const widgetRef = useRef(null)
  
  useEffect(() => {
    // Try to manually trigger widget initialization
    const widget = widgetRef.current
    
    if (widget) {
      console.log('Attempting to initialize widget...')
      
      // Method 1: Try calling connectedCallback if it exists
      if (typeof widget.connectedCallback === 'function') {
        console.log('Calling connectedCallback')
        widget.connectedCallback()
      }
      
      // Method 2: Try removing and re-adding to DOM
      const parent = widget.parentNode
      const nextSibling = widget.nextSibling
      
      setTimeout(() => {
        parent.removeChild(widget)
        setTimeout(() => {
          if (nextSibling) {
            parent.insertBefore(widget, nextSibling)
          } else {
            parent.appendChild(widget)
          }
          console.log('Widget re-inserted into DOM')
          console.log('ShadowRoot after re-insert:', widget.shadowRoot)
        }, 100)
      }, 500)
    }
  }, [])
  
  return (
    <div>
      <div id="game-details" className="mb-4"></div>
      
      <api-sports-widget 
        ref={widgetRef}
        data-type="games"
        data-league={league}
        data-show-toolbar={showToolbar ? "true" : "false"}
        data-target-game={targetGame}
        data-refresh={refresh.toString()}
      ></api-sports-widget>
    </div>
  )
}

export default GamesWidget