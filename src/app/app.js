
import './style.css'


import {Header} from './components/Header'
import {Home} from './components/Home'
import {TodoList} from './components/TodoList'
import {Sidebar} from './components/Sidebar'
import {Footer} from './components/Footer'



const init = () => ({
  location: {
    path: '/'
  }
})

// Root view
export const App = () => {
  const state = init()
  return /*html*/`
    <div class="app">
      ${Header()}
      ${Sidebar()}
      ${Home()}
      ${TodoList()}
      ${Footer()}
    </div>
  `
}