import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes/app.routes.tsx'

import { GlobalStyle } from './styles/Global.ts'
import Theme from './styles/Theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  </StrictMode>,
)
