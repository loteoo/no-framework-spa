
import './style.css'

import {Header} from './components/Header'
import {Sidebar} from './components/Sidebar'
import {Footer} from './components/Footer'

import {Home} from './pages/Home'
import {TodoList} from './pages/TodoList'
import {Counter} from './pages/Counter'
import {Blog} from './pages/Blog'
import {Article} from './pages/Article'
import {EditArticle} from './pages/EditArticle'
import {NewArticle} from './pages/NewArticle'

const navigated = () => {
  let url = location.hash.slice(2).toLowerCase() || '/';
  // window.state.request = url.split("/")

}

window.addEventListener('hashchange', navigated);
window.addEventListener('load', navigated);

const routes = {
  '/'                 : Home,
  '/todo'             : TodoList,
  '/counter'          : Counter,
  '/blog'             : Blog,
  '/blog/:id'         : Article,
  '/blog/:id/edit'    : EditArticle,
  '/blog/new'         : NewArticle
}


const Router = () => routes['/counter']()


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