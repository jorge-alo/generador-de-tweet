import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TweetGenerator } from './TweetGenerator'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TweetGenerator />
  </StrictMode>,
)
