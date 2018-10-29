import {Home} from './pages/Home'
import {TodoList} from './pages/TodoList'
import {Counter} from './pages/Counter'
import {Blog} from './pages/Blog'
import {Article} from './pages/Article'
import {EditArticle} from './pages/EditArticle'
import {NewArticle} from './pages/NewArticle'
import {FourOFour} from './pages/FourOFour'

const routes = {
  '/'                 : Home,
  '/todo'             : TodoList,
  '/counter'          : Counter,
  '/blog'             : Blog,
  '/blog/:id'         : Article,
  '/blog/:id/edit'    : EditArticle,
  '/new-article'      : NewArticle
}


export const Router = () =>
  routes[window.request.route]
    ? routes[window.request.route]()
    : FourOFour()

