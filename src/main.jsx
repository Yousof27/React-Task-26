import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import countStore from './redux/store/countStore.js'

createRoot(document.getElementById('root')).render(
  <Provider store={countStore}>
    <App />
  </Provider>,
)
