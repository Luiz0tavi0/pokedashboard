import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ColorsTheme, GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={ColorsTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
