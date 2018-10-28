import {App} from './App'

const init = (view, container) => {
  container.innerHTML = view()
}

init(App, document.body)

