export const Utils = {

  // Instantiates the app
  init: (view, container) => {
    window.render = () => {
      container.innerHTML = view()
    }
    const navigated = () => {
      Utils.parseUrl()
      render()
      console.log(window.request);
    }
    navigated()
    window.addEventListener('hashchange', navigated);
  },



  parseUrl: () => {
    let url = location.hash.slice(2).toLowerCase() || '/';
    let parts = url.split("/")
  
    window.request = {}
    window.request.resource = parts[0] ? parts[0] : ''
    window.request.id = parts[1] ? parts[1] : ''
    window.request.action = parts[2] ? parts[2] : ''
    window.request.route = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.action ? '/' + request.action : '')
    window.request.path = url
    window.request.parts = parts
  }
}
