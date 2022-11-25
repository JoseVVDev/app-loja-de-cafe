import { ShoppingCardContextProvider } from './contexts/ShoppingCartContext'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCardContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </ShoppingCardContextProvider>

    </ThemeProvider>
  )
}