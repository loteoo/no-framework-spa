
import './style.css'

// Root view
export const view = state => (`
  <div class="app">
    <header>
      <div class="container">
        <h1>${state.inputValue}</h1>
        <p>Vanilla Javascript single page app with routing, components and basic state management.</p>
      </div>
    </header>
    <main>
      <div class="container">
        <input type="text" value={state.inputValue} oninput={setInputValue} />
        <h4>State: </h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </main>
  </div>
`)
