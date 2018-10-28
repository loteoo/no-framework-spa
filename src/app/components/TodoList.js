
window.items = [
  {
    id: "5P1E4SrIpVnSFRsRM_0JB",
    title: "Item 1",
    done: false,
    editing: false
  },
  {
    id: "eG1V~mm0PiwNG_T~OIvE9",
    title: "Item 2",
    done: true,
    editing: false
  },
  {
    id: "pXhV1cWqfZSpaMFdiDlPg",
    title: "Item 3",
    done: false,
    editing: false
  }
]


export const TodoList = () => /*html*/`
  <div class="container">
    <h2>To do list</h2>
    <ul>
      ${items.map(item => Item(item)).join('')}
    </ul>
  </div>
`


const Item = item => `<li>${item.title}</li>`