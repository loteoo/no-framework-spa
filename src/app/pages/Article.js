
import {FourOFour} from './FourOFour'

export const Article = () => {
  const article = blog.articles[request.id]
  
  return (
    article
      ? /*html*/`
        <div class="container">
          <h2>${article.title}</h2>
          <p>${article.body}</p>
        </div>
      `
      : FourOFour()
  )
}
