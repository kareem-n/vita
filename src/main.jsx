import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { Provider } from 'react-redux'
import { MainStore } from './redux/Main.js'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={MainStore} >
    <HashRouter >
      <App />
    </HashRouter>
  </Provider>
)
