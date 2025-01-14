import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './sass/main.scss'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './ui/ErrorFallback.jsx'
import GlobalStyles from './styles/GlobalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    < >
        <GlobalStyles/>
        <ErrorBoundary  FallbackComponent={ErrorFallback} onReset={() => window.location.replace("/")}>
            <App />
        </ErrorBoundary>
    </>
)
