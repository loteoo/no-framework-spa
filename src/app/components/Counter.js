
window.count = 0

const up = () => {
  count++
  render()
}
const down = () => {
  count--
  render()
}

export const Counter = () => /*html*/`
  <div class="container">
    <h2>Counter</h2>
    <div>
      ${count}
    </div>
    <button onclick="(${down})()">-</button>
    <button onclick="(${up})()">+</button>
  </div>
`
