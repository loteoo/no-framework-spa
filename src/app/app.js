
import './style.css'

import {Header} from './components/Header'
import {Sidebar} from './components/Sidebar'
import {Footer} from './components/Footer'

import {Router} from './Router'

// Root view
export const App = () => /*html*/`
  <div class="app">
    ${Header()}
    ${Sidebar()}
    <main>
      ${Router()}
    </main>
    ${Footer()}
  </div>
`