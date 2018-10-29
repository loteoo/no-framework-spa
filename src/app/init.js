import {App} from './App'

const init = (view, container) => {
  window.render = () => {
    container.innerHTML = view()
  }
  render()
}

init(App, document.body)
