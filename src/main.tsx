import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { QuestionStepProvider } from './contexts/QuestionStep'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './contexts/theme-provider'
import { ListOfPapersProvider } from './contexts/list-of-papers'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ListOfPapersProvider>

          <QuestionStepProvider>
            <App />
          </QuestionStepProvider>
        </ListOfPapersProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
