
window.counter = {
  count: 0,
  up: () => {
    counter.count++
    render()
  },
  down: () => {
    counter.count--
    render()
  }
}

export const Counter = () => /*html*/`
  <div class="container">
    <h2>Counter</h2>
    <div>
      ${counter.count}
    </div>
    <button onclick="(${counter.down})()">-</button>
    <button onclick="(${counter.up})()">+</button>
  </div>
`
