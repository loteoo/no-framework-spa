
import './style.css'

import {Header} from './components/Header'
import {Home} from './components/Home'
import {TodoList} from './components/TodoList'
import {Counter} from './components/Counter'
import {Sidebar} from './components/Sidebar'
import {Footer} from './components/Footer'



// Root view
export const App = () => {
  return /*html*/`
    <div class="app">
      ${Header()}
      ${Sidebar()}
      ${Home()}
      ${TodoList()}
      ${Counter()}
      ${Footer()}
    </div>
  `
}